## Lab 1: Hello World - Using Markdown with Preprocessor

1. Downloand and unzip topseed-helloworld.zip from https://github.com/topseed/topseed-helloworld to your location of choice on your developer machine.

2. Open your Google Chrome web browser and install the "Web Server for Chrome" app from https://chrome.google.com/webstore/search/Web%20Server?_category=apps Launch the app, click the Choose Folder button and select the /topseed-webroot folder under /topseed-helloworld/topseed-srv. Also ensure Options has "Automatically show index.html" checked. Ensure the Web Server is STARTED, then navigate to the proposed URL (eg. http://127.0.0.1:8887). You should see a demo website. Explore the site. It uses "responsive design". Resize the browser to see the layout adapt. 

3. Download, install and run "Visual Studio Code" (VS Code) from https://code.visualstudio.com/download. From "File" menu, choose "Open Folder..." and select folder /topseed-helloworld. When the project is loaded, inspect the default entry page at /topsseed-srv/topseed-webroot/index.html We like VS Code, but you can use any other editor of your choice.

4. Download, install and run Prepros (Unlimited Trial) from https://prepros.io/downloads. Use the + button on the bottom left to add the folder /topseed-webroot (under /topseed-sr/topseed) as a new project. In Project/Settings/Compiler Settings/Markdown, uncheck "Wrap with Html". 

5. In the browser, return to the home page (e.g. http://127.0.0.1:8887). In VS Code, open /topseed-webroot/page/one/index.md and prefix the text with "Hello World!" Save the file. In the same folder, inspect mission.html. Prepros will have "preprocessed" your edited "Markdown" file to HTML. Refresh the browser and see the edits. Google "Markdown syntax". 

6. Optional: Use Prepros to auto-refresh on edits. In Prepros, click on the arrows on the right side of the prepros project name 'topseed-webroot', check Sync Browsers and click Preview. (Or rightclick on 'topseed-webroot' and select 'Open Live Preview.') A browser should open and display the Home page. In VS Code, edit and save index.md again. The opened browser should refresh and include your changes.

[Next Tutorial](/2-theBasics/) 
[Return to Agenda](/0-agenda/)
