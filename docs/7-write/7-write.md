## Lab 7: UI Writing to an API (Example: Firebase)

1. In a browser, return to the <a href='http://localhost:8091/admin/linkblog/' target='_blank'>Linkblog list</a>, and click the 'Add Item' button to see <a href='http://localhost:8091/admin/linkblog/detail.html' target='_blank'>/admin/linkblog/detail.html</a>. Note that the Date field is prepopulated with today's date. In VS Code, inspect /topseed-webroot/admin/linkblog/detail.pug. This file defines the composition of the Linkblog Add Item screen. In the 'HTML' part of this file, the data entry form represented by the pug statement 'form#form1' (&lt;form id="form1"&gt;). Note that it has 'onsubmit='return false', because we do not want the browser default behavior of posting to a form action URL.

2. Similar to the  list page, in 'script.' we load /admin/linkblog/LinkblogBusiness.js, and then call the UIinit function in the page. UIinit triggers the 'detail()' function of LinkblogBusiness, which loads today's date into the form. UIinit also specifies to call the LinkblogBusiness save() function when the form is submitted (when the 'Save' button is clicked) instead of the default behavior, and pass any authentication cookie along. Since we are working with similar data as in the list page, and the two pages belong together, we have chosen to augment LinkblogBusiness.js with the detail() and save() functions rather than creating separate LinkblogListBusiness and LinkblogAddBusiness. For a different module we would create a separate XxxBusinness.

3. Reopen /topseed-webroot/admin/linkblog/LinkblogBusiness.js and locate the 'detail: function('. We use <a href='https://momentjs.com/' target='_blank'>moment.js</a> for date handling and <a href='https://github.com/corinis/jsForm' target='_blank'>jquery.jsForm</a> to populate the form with the date. The necessary libraries are loaded in /_js/admin.js. You see the result of the call to detail() when rendering of the page has completed.

4. Fill some data in the form and click 'Save'. You should see an alert that saving is not enabled: we are not yet configured to use a database that allows saving.
In LinkblogBusiness.js, locate the 'save: function('. Once we enable 'update' in the urlSpec, processing will continue. We obtain the 'formData' with jquery.jsForm('get'), and pass it to the linkblogDao.update function. Once this has returned successfully ('promise.then('), we redirects to the list page. BLX/sb has base functionality using turbo for the new page load.

5. Reopen BDS and look for the 'update: function('. It calls a shared static __post function which uses fetch_ to call the urlSpec update URL. 

6. It is high time to connect LinkblogDao/BDS to a live database. Go to the top of LinkblogBusiness.js, comment out the first urlSpec and comment in the urlSpec that goes to localhost:8081, does not use dummy.json and also has an update route, unlike the first urlSpec. We included a small API server implementation in the topseed project at topseed/bsrv that we will run at localhost:8081. The API server in turn will call a Google Firebase service that you will configure in the next step. Why do we not call the Firebase API directly from the browser? We do not want the browser to hold the authentication credentials for the database connection (more about user authentication later).

7. [Firebase setup: TBD]

8. [Run connected:TBD]

9. [Optional: Look at API server TBD] 


