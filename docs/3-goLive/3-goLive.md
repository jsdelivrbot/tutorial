## Lab 3: Go-Live - Deploy to Cloud and use a CDN

1. Go to <a href='https://zeit.co'target='_blank'>https://zeit.co</a> and create a free account. We use their NOW product to deploy our apps for testing in the cloud. Install the NOW client.
Instead, you could zip up the /helloworld-webroot folder and deploy to any
static web hosting service via FTP. However, we will need some 'dynamic', server-side features later, so we wrap our static webroot content with some code that works on a Node.js server, such as used by NOW.
Rename /helloworld-webroot/cache.mfx to cache.mf.

2. To deploy, drag the /topseed-srv folder into the ZEIT.co NOW client. For advanced users: this folder includes index.js and package.json needed by Node.js.
Once the deployment is completed, your clipboard will have a URL unique to the version you deployed. Test the URL in the browser. Bookmark the URL. You are in the Cloud and live on the Web!

3. The remainder of this lab is optional for development (but mandatory for QA/Staging/Production): To give your site a 'proper' domain, you will need a domain name and DNS. If you do not have a domain yet, we recommend to register a cheap domain at <a href='https://www.namecheap.com/' target='_blank'>https://www.namecheap.com</a> now and have it use the namecheap DNS.
If you already own a domain and host a site, e.g. at www.mydomain.com, you may want to configure a CNAME to map a 'staging' subdomain, such as staging.mydomain.com, so you can keep using www for your public site. See below for more detailed instructions. 

4. For scalability and caching, you will also want to use a Content Delivery Network (CDN). With a CDN, you also get SSL/HTTPS for free. No need to buy an expensive SSL certificate. SSL is important when using advanced Javascript functions in the browser, such as cross-domain data requests. We recommend <a href='https://www.cdn77.com' target='_blank'>https://www.cdn77.com</a>. For this tutorial, register for the CDN77 14-day free trial now.

5. In the CDN77 web app, go to menu item CDN and click 'ADD NEW CDN RESOURCE'. Give it a label, such as 'staging.mydomain.com' and select 'My Origin'. As domain, specify HTTPS and the ZEIT.co DOMAIN from the URL you bookmarked under 2. (e.g. demos-oosnsyzlphl.now.sh). Click 'CREATE CDN RESOURCE'.

6. Choose 4-step setup with CNAME. Click 'Add new CNAME', and '+ ADD CNAMES'. Enter 'staging.mydomain.com' and Click 'ADD CNAME'. Click 'Go back to Integration'. In Step 2, copy the DOMAIN NAME (AKA HOST), e.g 1234567890.rsc.cdn77.org, then follow instructions for your hosting provider. If your domain is with namecheap.com, do the following:
On the namecheap dashbord, click 'Manage' for your domain, and 'Advanced DNS'. Click 'ADD NEW RECORD', select 'CNAME' and enter the following: Host: staging Value: [DOMAIN NAME from clipboard, e.g. 1234567890.rsc.cdn77.org], TTL: Automatic. Click checkmark to save.
No need to do CDN77 Step 3. One final step is to go to the 'Other Settings' tab, check 'HTTPS redirect' and click 'SAVE CHANGES'.

7. After an hour after the initial setup, you should be able to reach the deployed site in your browser under e.g. <a href='https://staging.mydomain.com' target='_blank'>https://staging.mydomain.com</a>. Note the use of 'https'. If you visit too quickly, the browser will complain that the site certificate is invalid. If this happens, try again after a while. The CDN caches static files for greater performance in multiple distributed datacenters. For advanced users: Cache-Control response headers are set in /topseed-srv/util/Decider.js.

8. Edit /helloworld-webroot/page/one/_hello.md again (see Lab 1: 5.). To deploy the change, follow step 2 above. In CDN77 Overview, change 'What is your domain?' to the new URL, and click 'SAVE CHANGES'. To make the changes appear on the CDN edge servers immediately, use CDN77 'CDN/Purge' on /page/one/.

9. Optional: Once you are ready to move from staging to production, you would either edit the CNAME for www to point to the same CDN domain (e.g. 1234567890.rsc.cdn77.org) or add a new CDN resource such as 'www.mydomain.com' that may also use a new ZEIT.co domain created when redeploying the app to ZEIT.co NOW (see 2.)

