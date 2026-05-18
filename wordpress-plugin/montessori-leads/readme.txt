=== Montessori School Leads ===
Requires at least: 5.8
Requires PHP: 7.4
Stable tag: 2.0.0

3 REST endpoints save form submissions into 3 SQL tables and email a configurable recipient list via wp_mail().

== What this plugin does ==

* `POST /wp-json/msp/v1/application` -> `wp_msp_application`
* `POST /wp-json/msp/v1/contact`     -> `wp_msp_contact`
* `POST /wp-json/msp/v1/enquiry`     -> `wp_msp_enquiry`

Every table stores its form-specific fields plus: utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid, fbclid, page_url, referrer, ip, user_agent, created_at.

After each insert, `wp_mail()` is sent to every recipient configured under MSP Leads -> Settings.

== Admin pages ==

* MSP Leads -> Settings        — recipient list, CORS origins, send-test button
* MSP Leads -> Applications    — latest 200 application rows
* MSP Leads -> Contact Messages — latest 200 contact rows
* MSP Leads -> Quick Enquiries — latest 200 enquiry rows

== Install ==

1. Upload the plugin zip via Plugins -> Add New -> Upload Plugin, activate.
2. Open MSP Leads -> Settings.
3. Add recipient email(s) and the website origin (e.g. https://montessorijnprime.com) for CORS.
4. Point the React forms at the matching endpoint.
