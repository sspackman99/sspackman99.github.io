---
# layout: post
title:  Randomized Grid Search- The Faster Way to Tune Hyperparameters
date:   2023-08-31
categories: [Machine Learning]
tags: [python, scikit-learn]
description: Ever frusterated with how long it takes to tune hyperparameters for your machine learning model? Try scikit-learn's randomized grid search!
---

<img src="https://github.com/sspackman99/sspackman99.github.io/raw/main/assets/images/runner.jpeg" alt="" style="width:800px;"/>

## Hyperparameters and How to Find Them

The goal of training a machine learning model is to develop a model that can accurately predict an outcome by learning the relationships between the variables in the data. When training a model, a machine learning engineer starts with a very generalized model framework and from there tries to shape it into something specific to the problem at hand. They do this by training the model on relevant data, but that training process is dictated by what are called "hyperparameters". A hyperparameter could be something as simple as the number of times cross-validation is run, or the type of regularization parameter used. Finding the best hyperparameters for the most accurate model can be a time-consuming and challenging task. If you want to learn more about what hyperparameters are specifically, check out [this page from AWS on hyperparameters](https://aws.amazon.com/what-is/hyperparameter-tuning/).

One way to find the best hyperparameters is to use grid search CV. This is a method used in scikit-learn that exhaustively searches through a predefined grid of possible hyperparameter values, evaluating each combination on a hold-out set of data. This can take a long time and be very computationally expensive, especially for large datasets and complex models.

A faster alternative to grid search CV is randomized grid search CV.

In this blog post, I will introduce randomized grid search CV and show you how to use it in Python. I will also provide an example that shows how much faster randomized grid search CV is than regular grid search.

## Randomized Grid Search

<img src="https://github.com/sspackman99/sspackman99.github.io/raw/main/assets/images/random.jpeg" alt="" style="width:800px;"/>

Randomized grid search CV is a faster alternative to grid search CV. It works by randomly sampling a subset of given possible hyperparameter combinations, then evaluating each combination on a hold-out set of data. The hyperparameter combination that produces the best performance on the hold-out set is selected as the best hyperparameters.

Randomized grid search CV is much faster than grid search CV, but it may not find the absolute best possible hyperparameters. This is because it is not guaranteed to explore all of the possible hyperparameter combinations. That being said, not every machine learning task needs an accuracy > .9999999999, so you can already see how faster training can be beneficial when you're still guaranteed good hyperparameters.

### Advantages of Randomized Grid Search

* It is way faster than Grid Search
* It can still find good hyperparameters for most models
* It's easy to get started!

## Using Randomized Grid Search

To use Randomized Grid Search, simply import the `RandomizedSearchCV` class from the `sklearn.model_selection` library.

The `RandomizedSearchCV` class takes the following parameters:

* `estimator` : The machine learning model to be used.
* `param_distributions` : A dictionary that specifies the hyperparameters to be searched.
* `n_iter` : The number of hyperparameter combinations to be sampled.
* `cv` : The number of folds to use for cross-validation.
* `verbose` : The verbosity level.

If you really want to dive deep into randomized grid search you can refer to the documentation on scikit-learn's website found [here](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.RandomizedSearchCV.html).

## Example

Alright let's dive into an example and compare the effectiveness of Grid Search and Randomized Search. We'll practice on the classic iris dataset using a Random Forest Classifier.

We'll start by importing the necessary packages, including `RandomizedSearchCV`, and loading the dataset.

```python
import numpy as np
import pandas as pd
from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import GridSearchCV, RandomizedSearchCV, train_test_split
import time

# Load the iris dataset
iris = load_iris()
```

Then we'll instantiate a model and create the training and test datasets.

```python
# Split the data into train and test sets
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.25)

# Create a RandomForestClassifier model
rf = RandomForestClassifier()
```

Now we'll see how much faster the randomized grid search is than the regular grid search. You'll notice that I can specify the parameters that the grid search will search through the same way I specify the parameters the randomized grid search will search through. Even though I do this, the two grid seraches will look through them differently. This is because for the regular grid search takes a brute-force approach to hyperparameter tuning, working its way through every possible combinations of parameters given, whereas for the randomized grid search it accepts the parameters given as *ranges* (or more properly, *distributions*) of options that the grid search will then randomly select options from.

Note that for both the regular grid search and for the randomized grid search you can use `numpy` to generate lists of hyperparameter values, however depending on the type of grid search you are using it will use those lists differently like I mentioned above.

```python
import time

# Perform grid search CV with 1000 iterations
param_grid = {"n_estimators": np.arange(10, 101, 10), "max_depth": np.arange(3, 8, 1)}

start_time = time.time()
grid_search = GridSearchCV(rf, param_grid, n_jobs=-1, cv=10, verbose=2)
grid_search.fit(X_train, y_train)
end_time = time.time()

print("Time taken for grid search CV:", end_time - start_time)

# Print the best hyperparameters found by grid search CV
print(grid_search.best_params_)

# Print the best score from the grid search CV
print(grid_search.best_score_)

# Perform randomized search CV with 1000 iterations
param_distributions = {
    "n_estimators": np.arange(10, 101, 10),
    "max_depth": np.arange(3, 8, 1),
}

start_time = time.time()
randomized_search = RandomizedSearchCV(
    rf, param_distributions, n_jobs=-1, cv=10, verbose=2
)
randomized_search.fit(X_train, y_train)
end_time = time.time()

print("Time taken for randomized search CV:", end_time - start_time)

# Print the best hyperparameters found by randomized grid search CV
print(randomized_search.best_params_)

# Print the best score from the randomized grid search CV
print(randomized_search.best_score_)
```

Take a moment to notice how the randomized grid search was several seconds faster than the regular grid search, without really sacrificing accuracy.

## Conclusion

There you have it! Randomized grid search is a much faster approach to hyperparameter tuning. Let me know in the comments below how you end up using it in your own machine learning problems!
