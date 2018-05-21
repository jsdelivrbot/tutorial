## Lab 9: Develop in the cloud for speed

1. You can develop faster if you let a server in the cloud do the heavy lifting of compiling, building and deploying your code. This is why we created a build server infrastructure, named _META_. This tutorial will show how to set up and use it. Once you go META, you'll never go back (to development on your desktop).

2. Go to  <a href='https://codeanywhere.com' target='_blank'>Code Anywhere</a> and sign up for free. Validate your account from the email you will receive (important). In the Editor, select "File-New Connection-DigitalOcean" and copy the $10 coupon code. Then go to <a href='https://www.digitalocean.com' target='_blank'>Digital Ocean</a>, create an account, and apply the coupon on the "Billing" page. Do not create a droplet at Digital Ocean.

3. In Codeanywhere, go to File-New Connection-Digital Ocean. Select a 1GB machine at the location nearest to you. From the list of images, choose `Docker... on 16.04`. As hostname, enter `dockermeta1` or another hostname of your choice. Ensure that "Codeanywhere SSH Key" is checked, then click 'Create'. You will be prompted for your Digital Ocean credentials. 

4. When the connection is available in the left pane, rightclick to open an SSH Terminal. On the command line, enter `docker pull nbake/meta:latest`. This will download the META docker image. Then enter `docker run -d --privileged -p 20-21:20-21 -p 8080-8082:8080-8082 nbake/meta /sbin/my_init` to start the app on ports 8080 and 8081. Type `docker ps` to get the CONTAINER ID (e.g. b6fbd9d948eb). Finally, enter `docker exec -ti xCONTAINER-IDx /bin/bash` to get to the docker container console. You can list the files in the docker container with `ls -la`.

5. The admin app we are about to install in step 7 below will use FTP to access the site you wish to administer. In previous tutorials, you will have installed the Blog project to CDN77, but you can connect to any hosting environment that supports FTP. In CDN77, get the FTP connection info (host, user and pass) under CDN - CDN-Storages by clicking on the CDN STORAGE LABEL. In the Codeanywhere docker console, enter `sshfs -o allow_other xUSERx@xHOSTx:/www/ /home/admin/mnt` to mount it. Omit `www/` if your site is at the root of the FTP. Enter the pass when prompted. [Use `umount -f /home/admin/mnt` if you need to unmount this.] You can verify your successful mounts with ` ps aux | grep -i sftp | grep -v grep`.

6. The Docker image has a user named 'admin'. In the Codeanywhere docker console, type `passwd admin` to change its password. Start an FTP server in docker with `nohup vsftpd&`. This FTP server will have the folder `/home/admin` as its root. Optional: In Codeanywhere File-New Connection-FTP, establish a plain FTP connection to the Droplet IP address on port 21 with username `admin` and the password you specified. This is where you would be able to modify content of the docker image while it is running.

7. In the docker console, type `cd /home/admin` to go to the 'physical' admin folder. Install the sample admin app with `nbake -a`. [To re] Install node modules including Express with `npm i`. Inspect `admin.yaml` with `nano admin.yaml`. Ensure `mount` is set to `/home/admin/mnt/` and `srv_www` to `/home/admin/www_admin/`. Start the admin app with `node index.js .` (the `.` is important. )

8. In your browser, the admin app should now be available at http://[Droplet IP]:8081. You can find the Droplet IP Address in your list of Droplets in your Digital Ocean account.
You can trigger a bake of the mounted app with http://[Droplet IP]:8081/api/bake?secret=123&folder=/.

---

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



