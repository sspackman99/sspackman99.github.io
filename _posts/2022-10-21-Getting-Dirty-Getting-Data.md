---
layout: post
title:  "Getting Dirty Getting Data"
date:   2022-10-21
author: Sam Spackman
description: I got my hands a little dirty getting some soil data in preparation for my next project, read on to learn how!
image: /assets/images/soil_hand.png
---

August 16, 2008 is a very significant day in my life. To be perfectly candid with you, I can't actually remember everything I did that day. But the fact of the matter is I probably spent that whole day playing in the mud. Maybe I was catching frogs next to a stream, or playing with my Tonka trucks in the big piles of dirt left from neighborhood construction. I’m sure most any kid growing up in the rural midwest has days like that they can look back on fondly; they may not be able to remember all the nitty gritty details of the day’s events, but they can remember the fun they had in the dirt.

It’s memories like this that inspired the creation of the newest chapter in the life of Data Science Magic. This post is all about gathering data from the USDA’s Web Soil Survey.

## Soil Data Runs Freely With the Web Soil Survey

The [Web Soil Survey](https://websoilsurvey.sc.egov.usda.gov/App/HomePage.htm) (WSS) is a massive collection of soil data from across the US. Now why would this be important, you may ask? Soil controls huge parts of our lives, from the way we build the structures we live in to the types of food we eat. It even dictates what kind of plants we can decorate our yards with. The USDA understands this, so they collected massive amounts of data and made it freely available online.

Typically you access the WSS by navigating to the website displayed below and pressing the big green button.

<img src="https://github.com/sspackman99/stat386-projects/raw/main/assets/images/wss_green_button.png" alt="" style="width:1000px;"/>


Afterwards it brings you to a screen that looks like this where you can search any address in the US and find out everything you could possibly wish to know about the soil there.


<img src="https://github.com/sspackman99/stat386-projects/raw/main/assets/images/wss%20map%20.png" alt="" style="width:1000px;"/>


## Avoiding Dirty Old Websites With Messy APIs

Fortunately for us, as data scientists we don’t have to worry about using clumsy decade-old websites like this. The USDA has also made the data available by using a REST API. But that's not all. They went even further (I say “they”, but after poring over scores of documents and forums online I’m fairly certain that “they” in this case is just a single blessed soul named [Dylan](https://github.com/dylanbeaudette) who has been working with USDA-NRCS for years) and created a handy R package called soilDB. soilDB is neat because all you need to do is pass a SQL query for the data you want through a special function and it pulls the data you want from the WSS right into your R session as a data frame.

The only hitch is that for this specific project I didn’t want to use R, I wanted to use python. This required some finagling on my part. I ended up going into the actual code behind the soilDB function and translating it into python (If you wanted to go a different route the WSS provides other documentation explaining their API and how to access it [here](https://sdmdataaccess.nrcs.usda.gov/)). 

That meant turning this:

<img src="https://github.com/sspackman99/stat386-projects/raw/main/assets/images/soilDB_rcode.png" alt="" style="width:1000px;"/>

Into this:


<img src="https://github.com/sspackman99/stat386-projects/raw/main/assets/images/soilquery_py.png" alt="" style="width:1000px;"/>


After the conversion (and a disgusting SQL query, looking through the [documentation on the table relations](https://sdmdataaccess.nrcs.usda.gov/documents/SoilDataAccessQueryGuide.pdf) was an absolute nightmare and took the longest time out of all of this) I finally had the pandas dataframe I needed to jump in and start performing an EDA.

You can look forward to the EDA in my next blog post though. I just wanted to post real quick to let you all know I haven't passed away. Consider this a teaser trailer or appetizer to get you excited for what is to come…

Make sure to follow up next time to get the dirt on what’s new with my soil data! You can also check out my Github for access to [the script I used](https://github.com/sspackman99/wss_data_access) and a sample query if you want to get some data of your own.





