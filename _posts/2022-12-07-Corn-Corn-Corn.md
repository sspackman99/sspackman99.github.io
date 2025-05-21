---
# layout: post
title:  Corn Corn Corn
date:   2022-12-07
categories: [API, Data Visualization]
tags: [python, r, pandas, seaborn, iowa, corn, soil]
description: I made a map of the best counties in Iowa for growing corn
---
# Corn Corn Corn

For this post, I’d like to wrap up a big project I’ve been working on for the past several weeks working with soil data from my home state of Iowa. As I’ve gone along the process, I’ve mainly focused on how different variables affect the growth of corn, as measured by the handy-dandy “Iowa Corn Suitability Rating” used by the USDA.


## The Story
I first began by finagling my way into retrieving data from the [Web Soil Survey](https://websoilsurvey.sc.egov.usda.gov/App/HomePage.htm). I explored the data that I had in [this last post](https://www.datasciencemagic.org/posts/Dirtylicious-Data-Exploration/) by creating some fun graphics and charts. After I finished my last post though, I realized that it was missing something very, very important. I needed a map!

Creating a map with polygonal data was something I had never even imagined attempting in my wildest dreams; and let me tell you those dreams quickly became nightmares. It wasn't until I decided to look outside of the Web Soil Survey for easy-to-use geojson data that I was finally able to crack the code. I used [geojson data provided by the State of Iowa itself](https://www.arcgis.com/home/item.html?id=8a1c2d500d8847d79aa47d45d44eb133#overview) merged with my own data to finally provide this last map.

## The Map

<iframe src="/assets/plots/iowa_corn_suitability_map.html" width="100%" height="800px"></iframe>

## In Summary
The map helped me realize that a lot of the northeastern Iowa counties are the best for growing corn. The bar graph below shows the top counties, and if you compare that to the map you'll see that most of them are located in the northeastern corner. I'll have to dig a little deeper in future posts as to why that may really be, but for now, plan on purchasing farmland in Cherokee county. ;)

<img src="https://github.com/sspackman99/sspackman99.github.io/raw/main/assets/images/county.png" alt="" style="width:1000px;"/>

If you want to see all the code, check out my Github repository [here](https://github.com/sspackman99/wss_data_access).

Let me know in the comments below what you'd like me to look into next! I'm thinking I'd like to do more with geodata and plotting different soils rather than counties, what do you think I should do though?
