---
#layout: post
title:  Mapping the World Around us with Polygonal Data
date:   2023-09-04
categories: [data visualization]
tags: [graphing, choropleth, maps]
description: An in-depth guide to polygonal data and how to use it
---

If you're fascinated by geography or cartography, you're about to embark on a thrilling voyage of discovery. Ever wonder how all of those heatmaps displaying COVID infections by country were created? What about just simply new maps in general? People don't draw them anymore, so how are they made that precise? That's where polygonal data comes in! So without further ado, let's dive into polygonal data and how we can leverage it to accomplish what we want as data scientists.

## Intro to Polygonal Data

At its core, polygonal data is a multi-dimensional geometric object that is framed by a minimum of three straight line segments. For data scientists, polygonal data is commonly found in spatial databases, geographic information systems (GIS), and geographic data sets, especially in mapping out intricate geographical shapes. So what does this really mean though, exactly?

Take the example of a city. Would you map its contours using dots (points)? No! Cities are best represented as polygons as they capture the unique outline of the city, which as we all know can be pretty crazy.

[//] # (Try and add a polygonal shape around new york city as a picture)

However, don't be fooled by the 'geo' in polygonal data and think it can only be used in geographical instances. It can also be applied in visualizing complex patterns or relationships between multiple variables in a space. Think buildings, sculptures, or more.

## What Polygonal Data Looks Like in the Wild

Polygonal data can come in a lot of different shapes and sizes. You'll most commonly find it in one of the following file formats:

* GeoJSON: A JSON-based format for representing geospatial data.
* Shapefile: A popular format for storing vector data.
* KML: A format for representing geographic data in Keyhole Markup Language.
* GML: A XML-based format for representing geographic data.

I have personally most often seen it just as GeoJSON or in Shapefile format, so just to give you a headstart I'll walk you through the anatomy of both because they can get kind of confusing.

### GeoJSON Anatomy

As we learned earlier, GeoJSON is a format for encoding geographic data structures. Let's dissect the below GeoJSON at a granular level:

```JSON
{
  "type": "Feature",
  "properties": {
    "name": "California",
    "state_code": "CA"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [-124.730551, 32.715734],
        [-122.479338, 32.715734],
        [-122.479338, 42.020178],
        [-124.730551, 42.020178],
        [-124.730551, 32.715734]
      ]
    ]
  }
}
```

* The `type` property specifies the type of feature, and can contain the following values:
  * `Feature`: A feature is a single object, such as a point, line string, or polygon.
  * `FeatureCollection`: A collection of features.
In this case with only one polygon, it is just `Feature`
* The `properties` is optional, and contains additional information about the feature, and in a geographical situation could store information about the polygon such as its name, population, area, elevation, etc. In this case it simply has the polygon's name and state code.
* The `geometry` property specifies the geometry of the feature, which in this case is `Polygon`. The `geometry` property is always required for a GeoJSON object, and can contain the following values:
  * `Point`: A single point in space.
  * `LineString`: A sequence of connected line segments.
  * `Polygon`: A closed figure made up of line segments.
  * `MultiPoint`: A collection of points.
  * `MultiLineString`: A collection of line strings.
  * `MultiPolygon`: A collection of polygons.

The `geometry` property of a polygon GeoJSON object is an array of arrays. Each array in the array represents a single line segment of the polygon. The line segments are connected in order to form a closed figure. Picture a really large, fun, complex game of connect the dots and you'll have a nice polygonal dataset!

If you really want to dive deeper into GeoJSON, you can [review the documentation found here](https://datatracker.ietf.org/doc/html/rfc7946).

[//] # (Now display the geojson on the map)

### Shapefile Anatomy

A typical shapefile is composed of three mandatory files:

1. **.shp** - This file stores the geometry data as a vector format of geographical features.
2. **.shx** - This file is an index which enables software to find the features in the .shp file.
3. **.dbf** - This file is a dBASE table holding attribute data for the shapes.

For these to all work together as one shapefile, they need to all share the same prefix and be stored in the same directory. They may also be included with other files, like a **.prj** file (projection file defining the coordinate system and projection parameters).

* **.shp**: The **.shp** (shapefile) header section carries the index of the dataset's features, while the records are the actual points, lines, or polygons that make up the features of the map data. A point is just a pair of coordinates, while lines and polygons are pairs of coordinates forming a path and a ring, respectively.

* **.shx**: The **.shx** (shape index file) serves as the index to the **.shp** file and it confirms the value offset of the main file record from the starting of the **.shp** file. It ensures the spatial features read from the **.shp** file are quickly retrievable.

I can't easily share an example of what these two files would look like because the files are in binary.

* **.dbf**: The **.dbf** file contains attribute data in tabular format - it's effectively a simple database. Each row corresponds to a single feature and each column to a specific attribute. For example, a **.dbf** file for city polygons might include columns for name, population, and GDP, with each row representing a different city.

Remember, GeoJSON and shapefiles are just two different ways to store geographic features and associated data. GeoJSON is a little more web-friendly, while shapefiles are a little more optimized to carry really complex, precise geographical data.

## Polygonal Data in Action

So what are some effective use cases where we would really need polygonal data as data scientists? Well, when geography is a big part of the data we are trying to analyze, of course this kind of data will be important. If you are trying to analyze traffic congestion patterns, mapping advancing weather conditions, completing urban developement studies, or heck maybe you're even trying to study the way birds migrate - polygonal data is going to be your best friend.

At the beginning of this post I mentioned COVID. Polygonal data was a huge part of the recent COVID-19 pandemic as it helped public health researchers track and study the spread of the disease from locale to locale. You can imagine that geography was a huge part of how the disease got around. Polygonal data was at the center of it all.

## Creating Polygonal Data

At this point you are probably very eager to get your hands on some polygonal data, or even create some yourself. Scientists with less-technical backgrounds may be more comfortable using GIS software like QGIS to create this kind of data. Programming-savvy data scientists can instead use programming libraries like Shapely to programmatically generate polygonal data. These libraries can be used to create, edit, and analyze polygonal data all in one.

Let's get to it, then, and play with some polygonal data of our own.

## Example: Creating a Map in Python

For a simple example, we can just create a simple map of the US outlined with a dotted line. For this we will use the folium and requests package. Folium is based on the Leaflet JavaScript library, but has a great python API that makes it easy to use. In Folium we can create interactive maps, where users can scroll in and out and interact in other ways with the maps that we create.

To install folium, just run the following command in your terminal.

```python
pip install folium
```

If you try out this code in your own environment, it will spit out a cool interactive map of the United States that you made yourself with GeoJSON data! If you want to save this figure somewhere you can just uncomment the line at the bottom and it will save your figure as an html file that you can plug into your browser.

```python
import folium
import requests

# Online repository to get GeoJSON data
url = "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json"
geo_json_data = requests.get(url).json()

# Specifying dimensions of our map
m = folium.Map([43, -100], zoom_start=4)

# Building map with folium
folium.GeoJson(
    geo_json_data,
    style_function=lambda feature: {
        "fillColor": "green",
        "color": "black",
        "weight": 2,
        "dashArray": "5, 5",
    },
).add_to(m)

m
# Uncomment the line below if you want to save your figure to an html file
# m.save("US_states_colored_by_folium.html")
```

As data scientists though, we want to take this further. Let's instead change the map up a little bit and see if we can create something that will teach our audience something, maybe about employment rates by state in the US? To do this, all we need is to pair our GeoJSON data with some data about employment rates.

```python
import pandas as pd

# Folium's demo repository of GeoJSON data
url = "https://raw.githubusercontent.com/python-visualization/folium/main/examples/data"
state_geo = f"{url}/us-states.json"
# Folium's repository of US Unemployment data
state_unemployment = f"{url}/US_Unemployment_Oct2012.csv"
state_data = pd.read_csv(state_unemployment)

# Specifying dimensions of our map
m = folium.Map(location=[48, -102], zoom_start=3)

# Building map with folium
folium.Choropleth(
    geo_data=state_geo,
    name="choropleth",
    data=state_data,
    columns=["State", "Unemployment"],
    key_on="feature.id",
    fill_color="YlGn",
    fill_opacity=0.7,
    line_opacity=0.2,
    legend_name="Unemployment Rate (%)",
).add_to(m)

folium.LayerControl().add_to(m)

m

# Uncomment the line below if you want to save your figure to an html file
# m.save("US_states_colored_by_folium.html")
```

Now isn't that pretty? I got this example from Folium's own documentation, if you want more examples and ideas you can check it out yourself [here](https://python-visualization.github.io/folium/quickstart.html#Choropleth-maps).

## Get Out There and Get Some Data

Now that you know more about what polygonal data is and what it can be used for, go out there and get ahold of some yourself and play around with it. Make some maps, draw some insights, just go crazy with it! I recommend starting with some sites like [OpenStreetMap](https://www.openstreetmap.org/#map=15/40.1520/-111.5812), [US Census Bureau](https://data.census.gov/), [Natural Earth](https://www.naturalearthdata.com/), or the [Web Soil Survey](https://websoilsurvey.nrcs.usda.gov/app/). You can even check out some of my own [work I did with polygonal data from the Web Soil Survey](https://www.datasciencemagic.org/posts/Corn-Corn-Corn/) if you want some more ideas.

Let me know what you come up with in the comments below, I'm excited to see what you all accomplish with polygonal data!
