---
layout: post
title:  "First Time Getting a Domain?"
date:   2022-09-26
author: Sam Spackman
description: Get your own custom domain in 5 easy steps
image: /assets/images/tierra-mallorca-rgJ1J8SDEAY-unsplash.png
---

So, you just got the keys to your own brand new website, but the automated domain names that your website hosting service is giving you just aren't quite cutting it.
I understand, and I am here to help you get set up with your own custom domain in five easy steps.

## First, A Heads Up

<img src="https://github.com/sspackman99/stat386-projects/raw/main/assets/images/jana-knorr-d-JNCzsRDFE-unsplash.png" alt="" style="width:400px;"/>


I use Github Pages to host my website. There are certain nuances between web hosting organizations, so to keep everyone interested and happy I will give examples in general terms.
If you can't seem to find the settings that I mention here then you may need to look on forums or other sites for more help with the intricacies of the service you are using.
As always, you're welcome to shoot me an email as well and I can help.

## Step 1: Choose A Domain Registrar

A domain registrar is a company that will sell you a domain and register it online for you so that no one else takes it. Many companies offer this kind of service and each comes with its own catch, so make sure you really trust the site that you use before you give them your money.
The easiest pit to fall into is signing up for a free domain with a company. These domains may be free for a time, but most companies will come back to you later and charge if you don't cancel your account in time.

For more information regarding different domain registrars you can take a look at [this site](https://www.forbes.com/advisor/business/software/best-domain-registrar/).

## Step 2: Purchase Your Domain

"Purchase" in this context really means "rent" or "lease" your domain. Often, domain registrars will charge you a set amount of money each month or year to keep your domain in exchange for special services such as help designing your website or protecting it. Personally, I chose Google Domains so I will use them as an example, but the process will be similar for each domain registrar.

One of the first things the domain registrar will have you do is search whether your desired domain is available.


<img src="https://github.com/sspackman99/stat386-projects/raw/main/assets/images/google_domains.png" alt="" style="width:800px;"/>


They may offer you special options, such as a specialty extension (e.g. datamagic.science or datascience.magic) or bundles where you may purchase several variations at once for a discount (e.g. datasciencemagic.com AND datasciencemagic.net AND datasciencemagic.us). Some options may be cheaper than others, this is because a domain may already be taken or the registrar believes that it may be more valuable than other domains. Who knew land prospecting would exist on the internet, too? :P

[This site](https://www.pcmag.com/news/how-to-register-a-domain-name-for-your-website) can be very helpful if you want more information on how to register/purchase a new custom domain

### Step 3: Configure Your DNS Settings With Your DNS Provider

If the registrar you bought your domain from helps you build your own website and that is what you would like to use, your job here is already done and you don't need to complete this step. If, however, you are hosting your website through a different system than your domain registrar, you need to configure your DNS settings.

DNS stands for "Domain Name System". DNS acts like a phonebook for the internet, where rather than having to remember the IP address a site uses every time you are trying to visit it you can instead type in its domain name. For your website to work, you need to configure your DNS settings so that when a reader types in your domain name DNS will point them to the IP address where your website is located.

You can do this by navigating to your DNS provider (in most cases this will be your domain registrar) and creating a new record. DNS records come in many different shapes and sizes. In this example I first created four A-type records so readers heading to "datasciencemagic.org" will arrive at the correct site, then I created a CNAME record so that "www.datasciencemagic.org" will also work.

<img src="https://github.com/sspackman99/stat386-projects/raw/main/assets/images/DNS_Google.png" alt="" style="width:800px;"/>

To check that you configured the DNS settings correctly, use the command below in your terminal.

`dig WWW.EXAMPLE.COM +nostats +nocomments +nocmd`

It should reurn a result similar to this.

<img src="https://github.com/sspackman99/stat386-projects/raw/main/assets/images/DNS_terminal.png" alt="" style="width:600px;"/>

### Step 4: Configure Your DNS Settings With Your Website Host

Now that readers can type in your domain name and they will be pointed to your site, you need to make sure that your website host is expecting them. Simply navigate to the settings of your website host and find where you can enter in your new custom domain. Here is an example of what a setting like that could look like in Github Pages.

<img src="https://github.com/sspackman99/stat386-projects/raw/main/assets/images/Github_DNS.png" alt="" style="width:1000px;"/>

**If you are also using Github Pages for your website, [this site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) may be very helpful for you to configure your DNS settings. If you're not using Github Pages, they may also still help you understand the concepts of configuring DNS settings*

### Step 5: Bask In The Glory Of Your Technological Genius

Congratulations, you have officially created your own website *and* it bears the name you fought hard to give to it.

Let me know in the comments below if this was helpful, and make sure to check back regularly for more data science posts! And, please send me the link to your site, I'd love to see it.
