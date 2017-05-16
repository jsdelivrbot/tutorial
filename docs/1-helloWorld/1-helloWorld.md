## Lab 1: Hello World - Using Markdown with Preprocessor

1. Downloand and unzip topseed-helloworld.zip from <a href='https://github.com/topseed/topseed-helloworld' target='_blank'>here</a> to your location of choice on your developer machine.

2. Open your Google Chrome web browser and install the 'Web Server for Chrome' app from <a href='https://chrome.google.com/webstore/search/Web%20Server?_category=apps' target-'_blank'>here</a>. Launch the app, click the 'Choose Folder' button and select the /helloworld-webroot folder under /topseed-helloworld/topseed-srv. Also ensure Options has 'Automatically show index.html' checked. Ensure the Web Server is STARTED, then navigate to the proposed URL (eg. <a href='http://127.0.0.1:8887' target='_blank'>http://127.0.0.1:8887</a>. You should see a demo website. Explore the site. It uses 'responsive design'. Resize the browser from fullscreen to narrow to see the layout adapt. 

3. Download, install and run 'Visual Studio Code' (VS Code) from <a href='https://code.visualstudio.com/download' target='_blank'>here</a>. From 'File' menu, choose 'Open Folder...' and select folder /topseed-helloworld. When the project is loaded, inspect the default entry page at /topsseed-srv/helloworld-webroot/index.html We like VS Code, but you can use any other editor of your choice.

4. Download, install and run Prepros (Unlimited Trial) from <a href='https://prepros.io/downloads' target='_blank'>here</a>. Use the + button on the bottom left to add the folder /helloworld-webroot (under /topseed-srv) as a new project. In Project/Settings/Compiler Settings/Markdown, uncheck 'Wrap with Html'. 

5. In the browser, return to the home page (e.g. <a href='http://127.0.0.1:8887' target='_blank'>http://127.0.0.1:8887</a>). In VS Code, open /helloworld-webroot/page/one/_hello.md and prefix the text with 'Hello World!' Save the file. In the same folder, inspect _hello.html. Prepros will have 'preprocessed' your edited 'Markdown' file to HTML. Refresh the browser and see the edits. Search Google for 'Markdown syntax'. 

6. Optional: Use Prepros to auto-refresh on edits. In Prepros, click on the arrows on the right side of the prepros project name 'helloworld-webroot', check Sync Browsers and click Preview. (Or rightclick on 'helloworld-webroot' and select 'Open Live Preview.') A browser should open and display the Home page. In VS Code, edit and save index.md again. The opened browser should refresh and include your changes.
