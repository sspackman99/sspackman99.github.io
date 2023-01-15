---
# layout: post
title:  Dirtylicious Data Exploration
date:   2022-11-21
categories: [API, Data Visualization]
tags: [python, r, pandas, seaborn, iowa, corn, soil]
description: I got my hands a little dirty getting some soil data and perform an exploratory data analysis
---
# Welcome to Some Dirty Data
What could possibly set Iowa apart from other states that helps it grow so much corn? A mystery to some, a trade secret to others; regardless of what you want to call it I believe it all has to do with the soil.

To explore this concept a little further, in a recent blog post I used a python script and downright nasty SQL query to retrieve soil data from the Web Soil Survey. In this post I’ll explore the data a little further with some simple graphs and we can see together what the soil has to tell us about Iowa’s most iconic crop.

## First, About the Data
Most of the data that I have is categorical, with a sprinkling of a few quantitative variables. I will spend most of this time looking at different variables and how they seem to affect the “Iowa Corn Suitability Rating”, a soil metric only used in Iowa to judge (you guessed it) how suitable certain soils are for raising corn. With over 200,000 rows of soil data from all over the state, I’m confident that together we can find something interesting.

## What County is the Best for Raising Corn?
Out of 99 counties, it seems that Cherokee County is, on average, the best for raising corn. I averaged across every county and it looks like with a corn suitability rating of just over 70, Chester County came out on top.

<img src="https://github.com/sspackman99/sspackman99.github.io/raw/main/assets/images/county.png" alt="" style="width:1000px;"/>

## What Kind of Soil is Best for Raising Corn?
### Soil Background
For those of us who have not quite yet earned the title of “Soil Nerd”, soils worldwide are broken into 12 different taxonomical orders based on their defining characteristics, just like how plants and animals are broken into different kingdoms, families, species, etc., soils are broken into (starting with the largest umbrella) Orders, Suborders, Great Groups, Subgroups, Families, and Series. [This is a nice litte graphic](https://www.soils.org/files/s4t/soil-taxonomy-web-poster.pdf) if you want to learn a little more about soil taxonomy.

### Soil Orders
After graphing soil order against corn suitability, we find that, of the 6 soil orders present in Iowa, histosols are the best for growing corn. This is rather unsurprising because a defining characteristic of histosols is the amount of organic matter that makes up the soil, and organic matter is very important when trying to grow crops.

<img src="https://github.com/sspackman99/sspackman99.github.io/raw/main/assets/images/order.png" alt="" style="width:1000px;"/>

### What About the Best Sub-Group?
Knowing the best soil order for growing corn almost requires us now to look at the best sub-group for growing corn. This was interesting to discover, because it seems that mollisols in this group seem to perform better. My assumption is that, on average, histosols will perform better, but there are a select few types of mollisols that are better overall than some histosols.

<img src="https://github.com/sspackman99/sspackman99.github.io/raw/main/assets/images/sub.png" alt="" style="width:1000px;"/>

## What Soil Composition is Best for Growing Corn?
Now that we know a little about the classification for best corn soil, what is that soil like that makes it so great for growing corn? Is it possibly the proportion of sand, silt, or clay that makes the soil so nice for growing corn?

The following three graphs are scatterplots, where I plotted the proportion of sand, silt, then clay against the Iowa Corn Suitability Rating.

### Sand
<img src="https://github.com/sspackman99/sspackman99.github.io/raw/main/assets/images/sand.png" alt="" style="width:1000px;"/>

### Silt
<img src="https://github.com/sspackman99/sspackman99.github.io/raw/main/assets/images/silt.png" alt="" style="width:1000px;"/>

### Clay
<img src="https://github.com/sspackman99/sspackman99.github.io/raw/main/assets/images/clay.png" alt="" style="width:1000px;"/>

These graphs are interesting to note because it seems that there really isn’t much of a relationship between the soil texture and Iowa Corn Suitability Rating.

## Does the Slope of the Land Affect the Soil’s Ability to Grow Corn?
Below is a scatterplot comparing the grade of the slope and the corn suitability. There appears to be a strong negative relationship between the two, which makes sense because I have rarely seen corn grow well horizontally off a wall.

<img src="https://github.com/sspackman99/sspackman99.github.io/raw/main/assets/images/slope.png" alt="" style="width:1000px;"/>

## So, What Relationship do these Variables Have, Really?
Lastly, I made a heatmap of the quantitative variables against corn suitability. The most interesting things to note are (1) The strong negative relationship between slope and corn suitability (2) The mildly positive relationship between silt and corn suitability and (3) The mildly negative relationship between sand and corn suitability

<img src="https://github.com/sspackman99/sspackman99.github.io/raw/main/assets/images/corr.png" alt="" style="width:1000px;"/>

## In Conclusion
Soil does have a big impact on how crops grow, and as consumers we would do well to learn about this relationship. If you want to see the code I used for the analysis, it's available [here](https://github.com/sspackman99/wss_data_access). I wasn't able to upload the actual data file because it was too large. Let me know in the comments below what you found interesting, or what you would like to know more about in the upcoming data analysis!

