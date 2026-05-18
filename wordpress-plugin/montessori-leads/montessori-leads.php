<?php
/**
 * Plugin Name: Montessori School Leads
 * Description: 3 REST endpoints save Application / Contact / Quick Enquiry submissions with UTM tracking into 3 SQL tables. Sends wp_mail() to a configurable list of recipients on every submission.
 * Version:     2.0.0
 * Author:      Lux Hospitals / Montessori Prime School
 * Requires PHP: 7.4
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/* ---------------------------------------------------------------------
 * Activation — create the 3 tables
 * ------------------------------------------------------------------- */
register_activation_hook( __FILE__, 'msp_install' );
function msp_install() {
    global $wpdb;
    $charset = $wpdb->get_charset_collate();
    require_once ABSPATH . 'wp-admin/includes/upgrade.php';

    // Shared UTM + request meta columns, appended to every table.
    $utm = "
        utm_source   VARCHAR(190) NULL,
        utm_medium   VARCHAR(190) NULL,
        utm_campaign VARCHAR(190) NULL,
        utm_term     VARCHAR(190) NULL,
        utm_content  VARCHAR(190) NULL,
        gclid        VARCHAR(190) NULL,
        fbclid       VARCHAR(190) NULL,
        page_url     TEXT NULL,
        referrer     TEXT NULL,
        ip           VARCHAR(64) NULL,
        user_agent   VARCHAR(255) NULL,
        created_at   DATETIME NOT NULL,";

    dbDelta( "CREATE TABLE {$wpdb->prefix}msp_application (
        id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
        student_name         VARCHAR(190) NULL,
        dob                  VARCHAR(20)  NULL,
        admitting_class      VARCHAR(100) NULL,
        present_school       VARCHAR(190) NULL,
        nationality          VARCHAR(100) NULL,
        place                VARCHAR(190) NULL,
        father_name          VARCHAR(190) NULL,
        father_qualification VARCHAR(190) NULL,
        father_occupation    VARCHAR(190) NULL,
        mother_name          VARCHAR(190) NULL,
        mother_qualification VARCHAR(190) NULL,
        mother_occupation    VARCHAR(190) NULL,
        mobile               VARCHAR(40)  NULL,
        alt_mobile           VARCHAR(40)  NULL,
        email                VARCHAR(190) NULL,
        address              TEXT NULL,
        pincode              VARCHAR(20)  NULL,
        admission_sought     VARCHAR(40)  NULL,
        transportation       VARCHAR(10)  NULL,
        $utm
        PRIMARY KEY  (id),
        KEY created_at (created_at),
        KEY utm_source (utm_source)
    ) $charset;" );

    dbDelta( "CREATE TABLE {$wpdb->prefix}msp_contact (
        id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
        name    VARCHAR(190) NULL,
        email   VARCHAR(190) NULL,
        mobile  VARCHAR(40)  NULL,
        message TEXT NULL,
        $utm
        PRIMARY KEY  (id),
        KEY created_at (created_at),
        KEY utm_source (utm_source)
    ) $charset;" );

    dbDelta( "CREATE TABLE {$wpdb->prefix}msp_enquiry (
        id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
        name   VARCHAR(190) NULL,
        mobile VARCHAR(40)  NULL,
        $utm
        PRIMARY KEY  (id),
        KEY created_at (created_at),
        KEY utm_source (utm_source)
    ) $charset;" );

    if ( false === get_option( 'msp_notify_emails' ) ) {
        add_option( 'msp_notify_emails', '' );
    }
}

/* ---------------------------------------------------------------------
 * Helpers
 * ------------------------------------------------------------------- */
function msp_pick( $p, $keys ) {
    foreach ( (array) $keys as $k ) {
        if ( isset( $p[ $k ] ) && $p[ $k ] !== '' && ! is_array( $p[ $k ] ) ) {
            return sanitize_text_field( (string) $p[ $k ] );
        }
    }
    return '';
}

function msp_client_ip() {
    foreach ( array( 'HTTP_CF_CONNECTING_IP', 'HTTP_X_FORWARDED_FOR', 'REMOTE_ADDR' ) as $k ) {
        if ( ! empty( $_SERVER[ $k ] ) ) {
            $ip = trim( explode( ',', (string) $_SERVER[ $k ] )[0] );
            if ( filter_var( $ip, FILTER_VALIDATE_IP ) ) return $ip;
        }
    }
    return '';
}

function msp_utm_meta( $p ) {
    return array(
        'utm_source'   => msp_pick( $p, 'utm_source' ),
        'utm_medium'   => msp_pick( $p, 'utm_medium' ),
        'utm_campaign' => msp_pick( $p, 'utm_campaign' ),
        'utm_term'     => msp_pick( $p, 'utm_term' ),
        'utm_content'  => msp_pick( $p, 'utm_content' ),
        'gclid'        => msp_pick( $p, 'gclid' ),
        'fbclid'       => msp_pick( $p, 'fbclid' ),
        'page_url'     => esc_url_raw( $p['page_url'] ?? '' ),
        'referrer'     => esc_url_raw( $p['referrer'] ?? '' ),
        'ip'           => msp_client_ip(),
        'user_agent'   => substr( $_SERVER['HTTP_USER_AGENT'] ?? '', 0, 255 ),
        'created_at'   => current_time( 'mysql' ),
    );
}

/* ---------------------------------------------------------------------
 * REST endpoints (3 forms = 3 APIs)
 * ------------------------------------------------------------------- */
add_action( 'rest_api_init', function () {
    foreach ( array( 'application', 'contact', 'enquiry' ) as $slug ) {
        register_rest_route( 'msp/v1', '/' . $slug, array(
            'methods'             => 'POST',
            'callback'            => 'msp_save_' . $slug,
            'permission_callback' => '__return_true',
        ) );
    }
} );

function msp_save_application( WP_REST_Request $req ) {
    global $wpdb;
    $p = $req->get_json_params() ?: $req->get_params();
    $row = array_merge( array(
        'student_name'         => msp_pick( $p, array( 'studentName', 'student_name', 'name' ) ),
        'dob'                  => msp_pick( $p, 'dob' ),
        'admitting_class'      => msp_pick( $p, array( 'admittingClass', 'admittingclass', 'admitting_class' ) ),
        'present_school'       => msp_pick( $p, array( 'presentSchool', 'presentschool', 'present_school' ) ),
        'nationality'          => msp_pick( $p, 'nationality' ),
        'place'                => msp_pick( $p, 'place' ),
        'father_name'          => msp_pick( $p, array( 'fatherName', 'fathername', 'father_name' ) ),
        'father_qualification' => msp_pick( $p, array( 'fatherQualification', 'fatherqualification', 'father_qualification' ) ),
        'father_occupation'    => msp_pick( $p, array( 'fatherOccupation', 'fatheroccupation', 'father_occupation' ) ),
        'mother_name'          => msp_pick( $p, array( 'motherName', 'mothername', 'mother_name' ) ),
        'mother_qualification' => msp_pick( $p, array( 'motherQualification', 'motherqualification', 'mother_qualification' ) ),
        'mother_occupation'    => msp_pick( $p, array( 'motherOccupation', 'motheroccupation', 'mother_occupation' ) ),
        'mobile'               => msp_pick( $p, 'mobile' ),
        'alt_mobile'           => msp_pick( $p, array( 'altMobile', 'alternatemobile', 'alt_mobile' ) ),
        'email'                => sanitize_email( $p['email'] ?? '' ),
        'address'              => sanitize_textarea_field( $p['address'] ?? '' ),
        'pincode'              => msp_pick( $p, 'pincode' ),
        'admission_sought'     => msp_pick( $p, array( 'admissionSought', 'admissionsought', 'admission_sought' ) ),
        'transportation'       => msp_pick( $p, 'transportation' ),
    ), msp_utm_meta( $p ) );

    $ok = $wpdb->insert( "{$wpdb->prefix}msp_application", $row );
    if ( false === $ok ) {
        return new WP_REST_Response( array(
            'resp' => array( 'success' => '0', 'message' => 'Database error: ' . $wpdb->last_error ),
        ), 500 );
    }
    $id = (int) $wpdb->insert_id;
    msp_send_mail( 'Application', $row, $id );
    return array( 'resp' => array( 'success' => '1', 'id' => $id, 'message' => 'Thank you. We will get in touch shortly.' ) );
}

function msp_save_contact( WP_REST_Request $req ) {
    global $wpdb;
    $p = $req->get_json_params() ?: $req->get_params();
    $row = array_merge( array(
        'name'    => msp_pick( $p, 'name' ),
        'email'   => sanitize_email( $p['email'] ?? '' ),
        'mobile'  => msp_pick( $p, 'mobile' ),
        'message' => sanitize_textarea_field( $p['message'] ?? '' ),
    ), msp_utm_meta( $p ) );

    $ok = $wpdb->insert( "{$wpdb->prefix}msp_contact", $row );
    if ( false === $ok ) {
        return new WP_REST_Response( array(
            'resp' => array( 'success' => '0', 'message' => 'Database error: ' . $wpdb->last_error ),
        ), 500 );
    }
    $id = (int) $wpdb->insert_id;
    msp_send_mail( 'Contact Message', $row, $id );
    return array( 'resp' => array( 'success' => '1', 'id' => $id, 'message' => 'Thank you. We will get in touch shortly.' ) );
}

function msp_save_enquiry( WP_REST_Request $req ) {
    global $wpdb;
    $p      = $req->get_json_params() ?: $req->get_params();
    $name   = msp_pick( $p, 'name' );
    $mobile = msp_pick( $p, 'mobile' );

    if ( $name === '' || $mobile === '' ) {
        return new WP_REST_Response( array(
            'resp' => array( 'success' => '0', 'message' => 'Name and mobile are required.' ),
        ), 400 );
    }

    $row = array_merge( array(
        'name'   => $name,
        'mobile' => $mobile,
    ), msp_utm_meta( $p ) );

    $ok = $wpdb->insert( "{$wpdb->prefix}msp_enquiry", $row );
    if ( false === $ok ) {
        return new WP_REST_Response( array(
            'resp' => array( 'success' => '0', 'message' => 'Database error: ' . $wpdb->last_error ),
        ), 500 );
    }

    $id = (int) $wpdb->insert_id;
    msp_send_mail( 'Quick Enquiry', $row, $id );
    return array( 'resp' => array( 'success' => '1', 'id' => $id, 'message' => 'Thank you. We will get in touch shortly.' ) );
}

/* ---------------------------------------------------------------------
 * wp_mail notification
 * ------------------------------------------------------------------- */
function msp_send_mail( $label, $row, $id ) {
    $raw = (string) get_option( 'msp_notify_emails', '' );
    if ( $raw === '' ) return;

    $to = array_values( array_filter(
        array_map( 'trim', preg_split( '/[\s,;]+/', $raw ) ),
        'is_email'
    ) );
    if ( empty( $to ) ) return;

    $primary = '';
    foreach ( array( 'student_name', 'name', 'mobile', 'email' ) as $k ) {
        if ( ! empty( $row[ $k ] ) ) {
            $primary = $row[ $k ];
            break;
        }
    }
    $subject = sprintf( '[MSP] New %s%s', $label, $primary ? ' — ' . $primary : '' );

    $body  = '<h2 style="margin:0 0 8px;">New ' . esc_html( $label ) . ' submission</h2>';
    $body .= '<p style="margin:0 0 16px;color:#555;">Submitted ' . esc_html( $row['created_at'] ) . ' (#' . (int) $id . ')</p>';
    $body .= '<table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-size:14px;">';
    foreach ( $row as $k => $v ) {
        if ( $v === '' || $v === null ) continue;
        $body .= '<tr>';
        $body .= '<td style="background:#f6f7f7;border:1px solid #ddd;width:35%;vertical-align:top;"><strong>' . esc_html( $k ) . '</strong></td>';
        $body .= '<td style="border:1px solid #ddd;vertical-align:top;word-break:break-word;">' . nl2br( esc_html( $v ) ) . '</td>';
        $body .= '</tr>';
    }
    $body .= '</table>';

    wp_mail( $to, $subject, $body, array( 'Content-Type: text/html; charset=UTF-8' ) );
}

/* ---------------------------------------------------------------------
 * Admin pages: notification recipients + 3 lead viewers
 * ------------------------------------------------------------------- */
add_action( 'admin_menu', function () {
    add_menu_page( 'MSP Leads', 'MSP Leads', 'manage_options', 'msp-leads', 'msp_render_settings', 'dashicons-groups', 26 );
    add_submenu_page( 'msp-leads', 'Settings', 'Settings', 'manage_options', 'msp-leads', 'msp_render_settings' );
    add_submenu_page( 'msp-leads', 'Applications', 'Applications', 'manage_options', 'msp-leads-application', function () {
        msp_render_list( 'application', 'Applications', array( 'student_name', 'admitting_class', 'mobile', 'email', 'utm_source', 'utm_campaign', 'created_at' ) );
    } );
    add_submenu_page( 'msp-leads', 'Contact Messages', 'Contact Messages', 'manage_options', 'msp-leads-contact', function () {
        msp_render_list( 'contact', 'Contact Messages', array( 'name', 'mobile', 'email', 'message', 'utm_source', 'created_at' ) );
    } );
    add_submenu_page( 'msp-leads', 'Quick Enquiries', 'Quick Enquiries', 'manage_options', 'msp-leads-enquiry', function () {
        msp_render_list( 'enquiry', 'Quick Enquiries', array( 'name', 'mobile', 'utm_source', 'utm_campaign', 'page_url', 'created_at' ) );
    } );
} );

add_action( 'admin_init', function () {
    if ( ! current_user_can( 'manage_options' ) ) return;

    if ( isset( $_POST['msp_save_settings'] ) && check_admin_referer( 'msp_save_settings' ) ) {
        update_option( 'msp_notify_emails', sanitize_textarea_field( $_POST['emails'] ?? '' ) );
        wp_safe_redirect( add_query_arg( array( 'page' => 'msp-leads', 'saved' => 1 ), admin_url( 'admin.php' ) ) );
        exit;
    }

    if ( isset( $_POST['msp_send_test'] ) && check_admin_referer( 'msp_save_settings' ) ) {
        $email = sanitize_email( $_POST['test_email'] ?? '' );
        if ( is_email( $email ) ) {
            $ok = wp_mail( $email, '[MSP] Test email', '<p>If you can read this, wp_mail() works on ' . esc_html( home_url() ) . '.</p>', array( 'Content-Type: text/html; charset=UTF-8' ) );
            $arg = $ok ? 'test_ok' : 'test_err';
        } else {
            $arg = 'err';
        }
        wp_safe_redirect( add_query_arg( array( 'page' => 'msp-leads', $arg => 1 ), admin_url( 'admin.php' ) ) );
        exit;
    }
} );

function msp_render_settings() {
    if ( ! current_user_can( 'manage_options' ) ) wp_die();
    $emails = (string) get_option( 'msp_notify_emails', '' );
    ?>
    <div class="wrap">
        <h1>MSP Leads — Settings</h1>

        <?php if ( isset( $_GET['saved'] ) ) : ?><div class="notice notice-success is-dismissible"><p>Saved.</p></div><?php endif; ?>
        <?php if ( isset( $_GET['test_ok'] ) ) : ?><div class="notice notice-success is-dismissible"><p>Test email sent.</p></div><?php endif; ?>
        <?php if ( isset( $_GET['test_err'] ) ) : ?><div class="notice notice-error is-dismissible"><p>wp_mail() returned false. SMTP not configured on this WordPress site.</p></div><?php endif; ?>
        <?php if ( isset( $_GET['err'] ) ) : ?><div class="notice notice-error is-dismissible"><p>Please enter a valid email address.</p></div><?php endif; ?>

        <form method="post">
            <?php wp_nonce_field( 'msp_save_settings' ); ?>

            <h2>Notification recipients</h2>
            <p>Comma-, semicolon- or newline-separated. Each address receives an email on every form submission.</p>
            <textarea name="emails" rows="5" class="large-text" placeholder="admissions@school.com, principal@school.com"><?php echo esc_textarea( $emails ); ?></textarea>

            <p style="margin-top:16px;">
                <button class="button button-primary" name="msp_save_settings" value="1" type="submit">Save</button>
            </p>

            <h2 style="margin-top:24px;">Send test email</h2>
            <p>
                <input type="email" name="test_email" placeholder="you@example.com" class="regular-text" />
                <button class="button" name="msp_send_test" value="1" type="submit">Send test</button>
            </p>
        </form>

        <h2 style="margin-top:32px;">REST endpoints</h2>
        <ul>
            <li><code>POST <?php echo esc_html( rest_url( 'msp/v1/application' ) ); ?></code></li>
            <li><code>POST <?php echo esc_html( rest_url( 'msp/v1/contact' ) ); ?></code></li>
            <li><code>POST <?php echo esc_html( rest_url( 'msp/v1/enquiry' ) ); ?></code></li>
        </ul>
    </div>
    <?php
}

function msp_render_list( $slug, $title, $cols ) {
    if ( ! current_user_can( 'manage_options' ) ) wp_die();
    global $wpdb;
    $table = $wpdb->prefix . 'msp_' . $slug;
    $rows  = $wpdb->get_results( "SELECT * FROM {$table} ORDER BY id DESC LIMIT 200", ARRAY_A );
    $count = (int) $wpdb->get_var( "SELECT COUNT(*) FROM {$table}" );
    ?>
    <div class="wrap">
        <h1><?php echo esc_html( $title ); ?> <span class="title-count" style="font-size:13px;color:#666;">(<?php echo $count; ?> total, showing latest 200)</span></h1>
        <table class="widefat striped">
            <thead>
                <tr>
                    <th style="width:60px;">ID</th>
                    <?php foreach ( $cols as $c ) : ?>
                        <th><?php echo esc_html( ucwords( str_replace( '_', ' ', $c ) ) ); ?></th>
                    <?php endforeach; ?>
                </tr>
            </thead>
            <tbody>
                <?php if ( empty( $rows ) ) : ?>
                    <tr><td colspan="<?php echo count( $cols ) + 1; ?>">No submissions yet.</td></tr>
                <?php else : foreach ( $rows as $r ) : ?>
                    <tr>
                        <td><?php echo (int) $r['id']; ?></td>
                        <?php foreach ( $cols as $c ) : $v = (string) ( $r[ $c ] ?? '' ); ?>
                            <td title="<?php echo esc_attr( $v ); ?>"><?php echo esc_html( mb_strimwidth( $v, 0, 80, '…' ) ); ?></td>
                        <?php endforeach; ?>
                    </tr>
                <?php endforeach; endif; ?>
            </tbody>
        </table>
    </div>
    <?php
}
