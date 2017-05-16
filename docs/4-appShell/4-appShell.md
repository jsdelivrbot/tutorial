 ## Lab 4: AppShell, Turbo and AppCache

 1. Inspect /helloworld-webroot/page/one/index.pug and its equivalent at /page/two/index.pug. These Pug files show how parts of the html pages that both pages have in common are used in both. Both pages use or 'extend' the TEMPLATE /_part/_baseShell.pug. The template has 'blocks' named 'head', 'main', and 'footer'. The pages that use this template define how to replace these blocks. For example, /page/one/index.pug defines that the head block consists of a page-specific title tag and an included fragment /_part/_header.pug. The same fragment is also used by /page/two/index.pug.

 2. Inspect /helloworld-webroot/_part/_top.pug. This fragment represents the top menu and side drawer used on all pages. You can find it referenced in /_part/_baseShell.pug as 'include _top'. Now inspect /page/one/index.html. This is the complete HTML which Prepros has collatesd together from template and fragments. Since the server has been configured to return the 'default' page index.html when the browser requests /page/one/, this is what the end user sees. 

 3. To give the application a 'Single-Page Application' feel, we use an optional Javascript library called topseed-turbo. 
