# FunimationFixer
 Implements fixes for random issues on Funimation.com

&nbsp;

# Fixes Applied
## All Shows Browsing Page
The "Filter By Rating" option is broken; outgoing api requests are intercepted and query parameter rating name is corrected if it is incorrect.

&nbsp;

---

&nbsp;

# Unresolved Known Issues
*Note*- The site is currently being migrated to use Vue framework. A number of pages which are broken (e.g.- Browse by Category) have yet to be migrated. The following assumptions, therefore, are likely to be true: the issues in them may be caused by the migration; they therefore may not be fixable client side; and they may not ever be fixed by Funimation as the pages are likely to be completely replaced with new versions using dynamically loaded content via API requests instead of serving via url routing.
## Browse by Category
Using Browse-by-Category and filtering by rating seems to be broken in the same way as browsing by All Shows. Browse by Category does not use Funimation API, however, but rather requests a new, prepopulated HTML page whenever filtered. It is not currently clear how to correct the query parameters; making the same changes as with All Shows returns a 404 message.
## New Releases
New Releases suffers from the same issues as described in Browse by Category.