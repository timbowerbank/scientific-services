## Variables

## Defaults in config.yml

## Collections - adding new ones

## Case Studies

## Services and Layouts
Both asbestos and legionella are true primary services, they use the primary template. But as of Dec 2018 there isn't sufficient content to allow anthrax, expert witness, lead-testing, and laboratory auditing to use the primary layout. Therefore they use the secondary layout but remain in the primary folder (thus allowing the default variables to filter them appropriately for the home page). If any of the above services gain sufficient content and become true primary pages then complete the following points:
* **Layout Change** - In the primary folder change layout to primary for the affected service
* **Defaults** - Overwrite the current defaults.md file in the affected service by copying the version in either asbestos or legionella primary folders

## Case Study Archives
Case study archives have been setup only for asbestos and legionella. To setup another archive simply create a new file called archive-anthrax.md in the listings folder for anthrax. Cut and paste the front matter from the parent case studies file. Make the following changes.

* **Layout** - Change layout to layout-listing.
* **Permalink** - Modify permalink to match archive link in parent knowledge base.
* **Summaries** - Modify the headings as necessary
* **Archive Button** - Delete the archive button front matter variables
* **Canonical Link** - Add a canonical link pointing to the parent to avoid any duplication issues.

## Knowledgebase Listing Pages
There are currently only listing pages for asbestos knowledgebase articles. This is to reduce pages being created unnecessarily - if there are more than 5 articles per knowledge base then a listing page would be needed. To create a listing page, follow these steps.

* **Create the Page** - Create the page in the listings folder for the service, e.g. knowledgebase-surveys.md
* **Front Matter** - Copy the front matter from an existing listing page in the services folder
* **Modify Front Matter** -
  * **Layout** - Change layout to layout-listing.
  * **Permalink** - Modify permalink to match view all link in parent page.
  * **Summaries** - Modify the headings as necessary
  * **Archive Button** - Ensure there is an archive button pointing to an archive page if content grows past 9 articles
  * **Canonical Link** - Add a canonical link pointing to the parent to avoid any duplication issues.

## Knowledgebase Listing Pages Archives
To reduce duplication of pages there is currently no archive setup for knowledgebases. To create a knowledge base archive simply create a new page in the services listing folder called archive-knowledgebase-surveys.md and paste the front matter from its parent. Make the following changes.

* **Layout** - Change layout to layout-listing.
* **Permalink** - Modify permalink to match archive link in parent knowledge base.
* **Summaries** - Modify the headings as necessary
* **Archive Button** - Delete the archive button front matter variables
* **Canonical Link** - Add a canonical link pointing to the parent to avoid any duplication issues.
