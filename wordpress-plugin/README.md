# WordPress Plugin — Montessori School Leads

This folder is **not** part of the Next.js app. It is parked in this repo only so the team has a single source of truth.

```
wordpress-plugin/
└── montessori-leads/        <-- this folder is the plugin
    ├── montessori-leads.php
    ├── readme.txt
    ├── assets/admin.css
    └── includes/
        ├── class-msp-utils.php
        ├── class-msp-form.php       (abstract base)
        ├── class-msp-rest.php
        ├── class-msp-list-table.php
        ├── class-msp-admin.php
        └── forms/
            ├── class-msp-form-application.php
            ├── class-msp-form-contact.php
            └── class-msp-form-enquiry.php
```

## Per-form layout

Each form has its **own** SQL table, REST endpoint, and admin dashboard.

| Form (source)                                       | SQL table             | REST endpoint                          | Admin page                 |
|-----------------------------------------------------|-----------------------|----------------------------------------|----------------------------|
| [src/app/application/page.tsx](../src/app/application/page.tsx) | `wp_msp_application`  | `POST /wp-json/msp/v1/application`     | MSP Leads → Applications   |
| [src/app/contact/page.tsx](../src/app/contact/page.tsx)         | `wp_msp_contact`      | `POST /wp-json/msp/v1/contact`         | MSP Leads → Contact Messages |
| [components/home-quick-enquiry.tsx](../components/home-quick-enquiry.tsx) | `wp_msp_enquiry`      | `POST /wp-json/msp/v1/enquiry`         | MSP Leads → Quick Enquiries |

Every table carries the same shared columns: all UTM params, `gclid`, `fbclid`, `page_url`, `referrer`, `ip`, `user_agent`, `status`, `notes`, raw JSON `payload`, `created_at`, `updated_at`.

## Install on the WordPress site

1. Copy `montessori-leads/` into `wp-content/plugins/` (or zip just that folder and upload via Plugins → Add New → Upload).
2. Activate **Montessori School Leads** — all three tables are created automatically.
3. Open **MSP Leads → Settings** and add the website origin(s) to the CORS allowlist:
   ```
   https://montessorijnprime.com
   https://staging.montessorijnprime.com
   ```

## REST contract — Application (first priority)

`POST /wp-json/msp/v1/application` accepts both the camelCase keys from [src/app/application/page.tsx](../src/app/application/page.tsx) and the legacy lowercase keys the form is currently sending (`name`, `admittingclass`, `presentschool`, `fathername`, `alternatemobile`, …). Both styles land in the same snake_case columns.

UTM and meta keys to include in the POST body:
```
utm_source utm_medium utm_campaign utm_term utm_content gclid fbclid page_url referrer
```

`ip` and `user_agent` are detected server-side from the request — no need to send them.

Tables are created/updated automatically by `dbDelta()` on plugin activation. Schemas live in the `specific_columns()` method of each form class in [includes/forms/](montessori-leads/includes/forms/).

## Adding a new form later

Drop a new file in `includes/forms/`:

```php
class MSP_Form_Careers extends MSP_Form {
    public function slug()             { return 'careers'; }
    public function label_plural()     { return 'Career Applications'; }
    public function label_singular()   { return 'Career Application'; }
    public function specific_columns() { return [ 'name' => 'VARCHAR(190) NULL', 'position' => 'VARCHAR(190) NULL', ... ]; }
    public function specific_fields()  { return [ ... aliases + sanitizers ... ]; }
    public function list_columns()     { return [ 'name','position','mobile','utm_source','created_at','status','actions' ]; }
    public function detail_sections()  { return [ [ 'title' => 'Candidate', 'fields' => [ 'name','position','mobile','email' ] ] ]; }
}
```

Then register it in [montessori-leads/montessori-leads.php](montessori-leads/montessori-leads.php) inside `msp_leads_forms()`. New table, endpoint, and admin page appear automatically on next activation.
