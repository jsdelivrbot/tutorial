## Lab 2: The Basics - Material Design, SASS and Pug

1. Ensure you have the sample project topseed-helloworld open in VS Code and Prepros running on the /topseed-webroot folder. Per Lab 1, make sure the home page is running in a browser.

2. Visit and browse these sites: <a href='http://materialpalette.com' target='_blank'>materialpalette.com</a>, <a href='https://design.google.com' target='_blank'>design.google.com</a>, <a href='https://material.io' target='_blank'>material.io</a> and
<a href='https://material.io/guidelines/#' target='_blank'>material.io/guidelines/#</a>. We follow Material design guidelines, put forward by Google, to make our sites and mobile apps look better. 

3. Find /_sass/main.css in the home page source, and inspect it. Other than fonts, all CSS used on the site is in this one CSS.

4. Visit <a href='https://www.muicss.com' target='_blank'>muicss.com</a>. Read 'Getting Started/Introduction', then browse the section 'CSS/JS'. We use the MUI CSS libraries in our project. Inspect /_sass/_base.scss in /topseed-webroot. SCSS is CSS with some added features, such as $variables and @import. You can turn any CSS file into SCSS by just changing the ending to .scss.

5. Inspect /_sass/main.sass in /appthings-webroot. At the top of _main.sass, see a color scheme we generated with materialpalette.com. Use /\* \*/ to comment it out. Go back to <a href='http://materialpalette.com' target='_blank'>materialpalette.com</a>, pick two colors, download your own palette in SASS format (same as CSS but without ';') and paste it after the section you commented out. Save and refresh the browser, and you should see your new color scheme applied to the site. Revert to the palette you had commented out.

6. SASS has a special syntax without the curly braces that CSS has, but it can use SCSS imports such as @import '_base'. Prepros compiles the .sass and its dependent .scss imports into the single 'main.css' used in the browser. In Prepros Files select _main.sass, check 'Minify Css', and click Process File. Open /_sass/main.css and see that it is now minified.

7. TBD: In the browser, view the homepage source, and look for the div element with id='buttons' Copy the entire div, including the two embedded divs.
Go to html2jade.org (Pug used to be called Jade) and paste this html. In the right pane you see Pug markup, a way to write html without having to
worry about closing tags. We write Pug. On save, Prepros converts it to HTML.

8. TBD: Inspect the code snippet at /en/home/_buttons.pug. It should match the output of html2jade. Every .pug file in the project has a corresponding .html used by the browser, with the exception of include's within another pug file. Inspect /en/home/index.pug to find the 'include _buttons'. Inspect /en/home/index.html to find the generated buttons div.

9. Watch the video 'Do you Even JADE bro' at https://www.youtube.com/watch?v=wzAWI9h3q18. Once you know how to write Pug, you can generate beautiful html quickly.

[Next Tutorial](../3-goLive/)
[Return to Agenda](../0-agenda/) 