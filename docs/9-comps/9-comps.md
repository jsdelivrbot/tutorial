## Lab 9: Develop in the cloud for speed

1. You can develop faster if you let a server in the cloud do the heavy lifting of compiling, building and deploying your code. This is why we created a build server infrastructure, named _META_. This tutorial will show how to set up and use it. Once you go META, you'll never go back (to development on your desktop).

2. Go to  <a href='https://codeanywhere.com' target='_blank'>Code Anywhere</a> and sign up for free. Validate your account from the email you will receive (important). In the Editor, select "File-New Connection-DigitalOcean" and copy the $10 coupon code. Then go to <a href='https://www.digitalocean.com' target='_blank'>Digital Ocean</a>, create an account, and apply the coupon on the "Billing" page. Do not create a droplet at Digital Ocean.

3. In Codeanywhere, go to File-New Connection-Digital Ocean. Select a 1GB machine at the location nearest to you. From the list of images, choose `Docker... on 16.04`. As hostname, enter `dockermeta1` or another hostname of your choice. Ensure that "Codeanywhere SSH Key" is checked, then click 'Create'. You will be prompted for your Digital Ocean credentials. Allow the installation complete.

4. At Digital Ocean on the Droplet detail page, click 'Volumes' and 'Add Volume'. This will be our primary store for persistent data, such as projects in development. Choose the minimum size (1GB) as you can increase it later, or larger; it will still be very cheap. Set volumne name to 'storage1'. Choose 'Automatically Format &Mount', 'Ext4' filesystem ('XFS' if you plan to have large video files), and click 'Create Volume' to attach it. In Codeanywhere, rightclick on the created connection ('dockermeta1') to open an SSH Terminal. On the command line, enter `cd /mnt/dev1` and `ls -la` to verify. Return to the root directory with `cd /`.

5. Still in Codeanywhere SSH Terminal, enter `docker pull nbake/meta:latest`. This will download the META docker image. Then enter `docker run -d --privileged -p 20-21:20-21 -p 8080-8082:8080-8082 --mount type=bind,source=/mnt/dev1,target=/home/admin/dev1 nbake/meta /sbin/my_init` to start the app on ports 8080 and 8081. Type `docker ps` to get the CONTAINER ID (e.g. b6fbd9d948eb). Finally, enter `docker exec -ti xCONTAINER-IDx /bin/bash` to get to the docker container console. You can list the files in the docker container with `ls -la`.

6. The Docker image has a user named 'admin'. In the Codeanywhere docker console, type `passwd admin` to change its password. Start an FTP server in docker with `nohup vsftpd&`. This FTP server will have the folder `/home/admin` as its root. Optional: In Codeanywhere File-New Connection-FTP, establish a plain FTP connection to the Droplet IP address on port 21 with username `admin` and the password you specified. This is where you would be able to add or remove files via FTP while vvsftpd is running.

7. The admin app we are about to install will use FTP to access the production site you wish to administer. In previous tutorials, you will have installed the Blog project to CDN77, but you can connect to any hosting environment that supports FTP. In CDN77, get the FTP connection info (host, user and pass) under CDN - CDN-Storages by clicking on the CDN STORAGE LABEL. In the Codeanywhere docker console, enter `mkdir /home/admin/prod1`, then `sshfs -o allow_other xUSERx@xHOSTx:/www/ /home/admin/prod1` to mount it. Omit `www/` if your site is at the root of the FTP. Enter the pass when prompted. [Use `umount -f /home/admin/prod1` if you need to unmount this.] You can verify your successful mounts with ` ps aux | grep -i sftp | grep -v grep`.

8. Still in the docker console, type `cd /home/admin/dev1` to go to the 'physical' admin folder. Install the sample admin app with `nbake -a`. [To re] Install node modules including Express with `npm i`. Inspect `admin.yaml` with `nano admin.yaml`. Ensure `mount` is set to `/home/admin/prod1/` and `srv_www` to `/home/admin/dev1/www_admin/`. Start the admin app with `pm2 start index.js -- .` (the `.` is important. )

9. In your browser, the admin app should now be available at http://DROPLET_IP:8081. You can find the Droplet IP Address in your list of Droplets in your Digital Ocean account.
You can trigger a bake of the mounted app with http://DROPLET_IP:8081/api/bake?secret=123&folder=/.

9. Get a project from github:
 ```cd /home/admin/dev1'
export GIT_DISCOVERY_ACROSS_FILESYSTEM=1 //one-time only
git clone https://github.com/topseed/nbake-intro-blog
cd nbake-intro-blog
```

10. TBD: To run the project in a static http server ('dev server):
```
		cd /home/admin/dev1/myproject
		create /home/admin/dev1/myproject/Wedgefile
	      :8080
	      gzip
	      root www
	      tls off
	    
	From inside the running Docker continer, run WedgeServer
	
	     /root/wedge

	Test from host (outside of the docker):

	     curl localhost:8080
	    
	 If you get a port in use error:
	 
		 lsof -i tcp:8080

	Then run http://DROPLET_IP:8080
```

11. Using git (in Codeanywhere SSH Console). 
 ```cd /home/admin/dev1/projectname'
git add -A // To track all files
git commit -am "message" // To commit changes
git push origin master // Push your local changes to repository

12. If you want to use your local editor (e.g. VS Code) to edit the project, 
install WebDrive from webdrive.com and restart your maching. (We use WebDrive because ignores .git folder)/
Then map [droplet IP] as FTP with admin:yourpw to a drive letten. In your editor, open the project folder from that drive. Use git from commandline as above to add, commit or push.
To autobake (in VS Code), Install the runonsave plugin, edit VS User or Workspace Settings

```
    "emeraldwalk.runonsave": {
        "commands": [
            {
                "match": "\\.pug$",
                "cmd": "curl \"http://DROPLET_IP:8081/api/bake?secret=123&folder=/\""
            },
            {
                "match": "\\.md$",
                "cmd": "curl \"http://DROPLET_IP:8081/api/bake?secret=123&folder=/\""
            }
        ]
    }
```

13. Alternatively you can trigger api bake from Codeanywhere 'Run Project' button. Setup as follows: File - New Connection - Container, name 'nbake1'. Create a 'Blank Development Stack Ubuntu 14.04'.Once it is started, rightclick on it, select 'Config' and add `"curl \"http://DROPLET_IP:8081/api/bake?secret=123&folder=/\""` to 'commands'. In the left pane top, rightclick on 'Default' and select 'Project Config'. In the file that opens, set devbox nbake1 default to true, change others to false and save the file. Press the 'Run Project' button to trigger the api call.

How to install Codiad:
```get a DO Ubuntu 16.04 image (Codeanywhere(CA) let's you buy the 512mb machine, which is 'temporarily sold out' on DO site, and make sure you take the $10 credit via CA)
as root:
adduser app_user (or whatever)
usermod -aG sudo app_user
su app_user
cd /home/app_user
sudo apt-get install apache2 php7.0 libapache2-mod-php7.0 
sudo service apache2 restart
sudo rm -rfv /var/www/html/*
sudo git clone https://github.com/Codiad/Codiad /var/www/html/ (work with latest master)
sudo touch /var/www/html/config.php
sudo chown www-data:www-data -R /var/www/html/
go to http://your_ip
projectdir is relative to /var/www/html/workspace
You can set absolute paths but need to whitelist in config.php
(https://github.com/Codiad/Codiad/wiki/Pathing-&-The-Workspace)

Settings (right pane bottom left) add Exension "pug" "jade" to support pug.
Settings - Editor set Wrap Lines to "Wrap Lines"

Marketplace (right tab), install plugins:
codegit, codetransfer, dragdrop, duplicate, gitadmin, terminal
reload browser tab
See all at: http://market.codiad.com/
```

Comments on Codiad vs. CA (Codeanywhere):
- Gitadmin plugin create project from git repo: "Note: This Will Only Work If Your Git Repo - Does Not Require Interactive Authentication And Your Server Has Git Installed."
- Codegit plugin pull has warning "Please install shell program"
- Codetransfer plugin (FTP) does SCP with password (not SSH key).
- Terminal plugin not great, not sure what it does, it prompts for password, font unreadable, not an SSH Terminal, display in small popup window, not a full tab.
- CA creates 'container' for each project, with SSH console, can add linux stuff to it. You can clone the container and reuse for other projects.
- You can't delete the active (selected) project (Administration-Projects), which likely means the last/only project can't be deleted.
- CA allows to create instances on DO with automatic install of CA SSH key.
- CA theme fonts are crisper (on Retina like I have).
- Codiad doesn't have a top menu or icon bar.
- Codiad doesn't support drag and drop file from outside browser into project tree




cd /var
ls -al
cd www/html
ls -al
cd workspace
ls -al



