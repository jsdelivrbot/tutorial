## Lab 2: The Basics - Material Design, SASS and Pug

1. Ensure you have the sample project topseed-helloworld open in VS Code and Prepros running on the /topseed-webroot folder. Per Lab 1, make sure the home page is running in a browser.

2. Visit and browse these sites: <a href='http://materialpalette.com' target='_blank'>http://materialpalette.com</a>, <a href='https://design.google' target='_blank'>https://design.google</a>, <a href='https://material.io' target='_blank'>https://material.io</a> and
<a href='https://material.io/guidelines/#' target='_blank'>https://material.io/guidelines/#</a>. We follow Material design guidelines, put forward by Google, to make our sites and mobile apps look better. 

3. Find /_sass/main.css in the home page source, and inspect it. Other than fonts, all CSS used on the site is in this one CSS.

4. Visit <a href='https://www.muicss.com' target='_blank'>https://www.muicss.com</a>. Read 'Getting Started/Introduction', then browse the section 'CSS/JS'. We use the MUI CSS libraries in our project. Inspect /_sass/_base.scss in /helloworld-webroot. SCSS is CSS with some added features, such as $variables and @import. You can turn any CSS file into SCSS by just changing the ending to .scss.

5. Inspect /_sass/_colors.scss in /helloworld-webroot.See a color scheme we generated with materialpalette.com. Use /\* \*/ to comment it out. Go back to <a href='http://materialpalette.com' target='_blank'>http://materialpalette.com</a>, pick two colors, download your own palette in CSS format and paste it after the section you commented out. Save and refresh the browser, and you should see your new color scheme applied to the site. Revert to the palette you had commented out.

6. Inspect /_sass/main.sass. SASS uses a special syntax without the curly braces or ';' at the end of a line that are used in CSS (and SCSS). SASS can also use SCSS imports such as @import '_base'. Prepros compiles the .sass and its dependent .scss imports into the single 'main.css' used in the browser. In Prepros Files select _main.sass, check 'Minify Css', and click Process File. Open /_sass/main.css and see that it is now minified.

7. Inspect /page/two/_buttons.html Copy the entire HTML. Go to <a href='http://html2jade.org' target='_blank'>http://html2jade.org</a> (Pug used to be called Jade) and paste this html. In the right pane you see Pug markup, a way to write html without having to
worry about closing tags. We write Pug. 

8. Inspect the code snippet at /page/two/_buttons.pug. It should match the output of html2jade. Every .pug file in the project has a corresponding .html used by the browser, with the exception of include's within another pug file. Inspect /page/two/index.pug to find the 'include _buttons'. Inspect /page/two/index.html to find the generated buttons HTML.

9. Watch the video 'Do you Even JADE bro' at <a href-"https://www.youtube.com/watch?v=wzAWI9h3q18" target="_blank">https://www.youtube.com/watch?v=wzAWI9h3q18</a>. Once you know how to write Pug, you can generate beautiful HTML quickly.
