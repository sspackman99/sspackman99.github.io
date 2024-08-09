---
# layout: post
math: true
title:  Optimization for Chumps
date:   2023-06-15
categories: [Data Science Theory]
tags: [Basics, Math]
description: This is a simple introduction to the optimization theory behind much of data science and modeling. 
---
<img src="https://github.com/sspackman99/sspackman99.github.io/raw/main/assets/images/optimization.jpeg" alt="" style="width:800px;"/>

## What is Optimization

Optimization is something that you perform every day. GPS systems try to optimize your drive so that you get there faster. When you haggle the price of something, you are trying to optimize the transaction so you get the most value for the least amount of money. Every time you try to "work harder, not smarter", you are optimizing your work.

Put simply, optimization is the maximizing or minimizing of something. It has been around for a long time and has [a solid history in mathematics and calculus](https://www.britannica.com/science/optimization).

## Why Optimization in Data Science

So what does optimization have to do with data science? Much of the modeling associated with data science is built off of the idea of optimization. Almost all machine learning problems are just optimization problems, under the hood. Fancy statistical multiple linear regression models just use optimization techiniques to draw the right line. If data scientists can really understand the idea behind optimization then they can choose the right model to use in the right circumstances to get the best results.

## Simple Mathematical Introduction

<img src="https://github.com/sspackman99/sspackman99.github.io/raw/main/assets/images/math Medium.jpeg" alt="" style="width:800px;"/>

Let's dive right in then. I'll start with a simple example just to get the ball rolling and then later kick it up a notch.

An optimization problem can be understood as minimizing/maximizing some function $f(x)$ with respect to some variable $x$ within some constraint $a \leq x \leq b$.

Take this function for example:

<img src="https://github.com/sspackman99/sspackman99.github.io/raw/main/assets/images/random_plot.png" alt="" style="width:1000px;"/>

The function has several hills and valleys. If I told you that the x-axis represents the amount of hours you worked at your job in a week and the y-axis is how much you got paid, then told you to find the best amount of hours to work to get paid the most, you would point to where the graph is highest with respect to the y-axis, right? You just performed optimization right there. You maximized some function $f(x)$ (money made) with respect to some variable $x$ (hours worked).

But wait, it's not realistic to work 120 hours every week. It's much more common to work 40 hours in a week. This is what we call a constraint. Looking back at the graph now, how many hours would we need to work to make the most money, keeping in mind we can't work more than 40 hours a week?

<img src="https://github.com/sspackman99/sspackman99.github.io/raw/main/assets/images/random_plot_constraints.png" alt="" style="width:1000px;"/>

Naturally you would want to work the full 40 hours in the week. This relationship/optimization was really easy to pick out because we could just read the graph. But how do we optimize in situations where the relationship between variables is a little more complicated? Maybe there are 3, 4, even 100 different variables that could affect your pay? Or maybe the constraints are just so complicated it is too hard to read and understand the graph? This is where mathematical optimization comes in so handy, we don't need to use graphs anymore to understand how to maximize or minimize anything.

### A Little More Math

Now let's talk through an example of how we can optimize something with math.

Let's say that you are a sales leader at a large tech company. You want to bring in the most money for your company that you can, but you also need to cut costs so your company can stay profitable. The big question that you and your team are left wondering is how many sales representatives the company should keep on to maximize (did you notice that keyword there?) profits?

Let's say that every sales rep brings in about $150k a year for your company. We can represent this mathematically as a function of revenue like this:

$$r(x) = 150x$$

(Remember, we're doing the math in the thousands)

However, after discussing things with your operations team it looks like the costs for your company (paying for sales reps to travel to meet with potential customers, facilities costs, salaries, etc.) can also be represented like this:

$$c(x) = x^3-500x^2 + 10x$$

We also know that profits are just the revenue minus the costs. This can now be represented as just a combination of the two functions above:

$$p(x) = 150x - x^3+500x^2 - 10x$$

We can simplify it to look like this instead:

$$p(x) = - x^3+500x^2 + 140x$$

That's quite the doozy. With calculus things can become a little easier though. We know that the derivative of a function can essentially be understood as the instantaneous rate of change (or slope) at any given point on that function. In our situation, that would represent the change in profits as the number of sales reps changes. A positive slope would mean that as the number of sales reps goes up, profit also increases. A negative slope means that as the number of sales reps goes up, profits decrease.

But what if the slope were zero?

I'll show you a graph so you can see this in your head better.

<img src="https://github.com/sspackman99/sspackman99.github.io/raw/main/assets/images/sin.png" alt="" style="width:1000px;"/>

The graph above shows a simple curve. Can you see the two points where the slope of the function is neither positive nor negative? The slope is neither positive nor negative at the very top of the hill and very bottom of the valley on the curve. Those are also where the function is at a maximum or minimum. This means that if we want to find the maximum or minimum of a function we just need to find where the derivitive of that function is equal to zero*!

Let's try this out with our sample problem above.

We'll start by take the derivative of the function above.

$$p'(x) = - 3x^2+1000x + 140$$

Now we need to find where $p'(x)$ = 0.

$$- 3x^2+1000x + 140 = 0$$

Let's solve this through using the quadratic formula.

$$x = \frac{-1000 \pm \sqrt{1000^2 -4*-3*140}}{-6}$$

$$x = \frac{-1000 \pm \sqrt{1000000 - (-1680)}}{-6}$$

$$x = \frac{-1000 \pm \sqrt{1001680}}{-6}$$

This leaves us with only two possible answers, $x$ = -.14 and $x$ = 333.47. Logic informs us that we can't have a negative number of sales reps so the only number we're interested in at this point is 333. However, our work is not yet done. We don't know yet whether this is a maximum or minimum. To figure this out, we need to use the 2nd Derivative Test. This is essentially where we look at how the derivative changes throughout the function to decide whether the slope is increasing or decreasing.

So let's take the second derivative of our function now.

$$p'(x) = - 3x^2+1000x + 140$$

$$p''(x) = - 6x+1000$$

We now check whether the second derivative is positive or negative at 333 (we can't employ .47 of a person so we'll just go with 333).

$$- 6(333)+1000 = ?$$

Without even finishing the calculation we can see that the 2nd derivative is negative. This means that the function at that point is peaking, and we have found a maximum.

Calculus and optimization just found us the number of sales reps our fake tech company needs to employ to bring us the most profit.

## Implications in a Statistical Context

<img src="https://github.com/sspackman99/sspackman99.github.io/raw/main/assets/images/statistics Medium.jpeg" alt="" style="width:800px;"/>

Optimization like this has a strong application in a statistical context. Two terms that you often hear in statistics are "least-squares" and "maximum likelihood". These are two different names for methods used to fit models to data. Least-squares fits a model to data by minimizing the squared differences between a model's predictions and the observed data. In a more concrete sense, it tries to find the line (or curve, for more complex models) that best fits your data according to the criterion of minimizing the total "distance" between your data points and the model's predicted points.

Maximum liklihood fits a model to data by finding the model parameters that make the observed data the most probable. In other words, it's as if you're asking "what values for my model's parameters make the data that I've observed most likely?"

Both of these approaches depend on optimization, and use principles like cost functions and constraints that we talked about above.

## Impact on Modeling/Machine Learning

Optimization is just as important in machine learning and AI. Every AI or machine learning model operates at its core with optimization. For every model, there is a cost function at its heart that must be minimized or maximized to make predictions. If you want to become an effective machine learning engineer then it pays to know what these cost functions are and how to effectively manipulate them to match your specific situation.

I'll just give a few examples of common machine learning models and their cost functions below.

**Linear Regression:**

The cost function used in linear regression is the "Mean Squared Error" (MSE) function.

$$ J(\theta) = \frac{N}{2} \cdot \sum (\text{Predicted} - \text{Actual})^2 $$

We predict the output with our model, subtract the actual output, square it, and average over all instances. In simple terms, the MSE is the average squared difference between our predictions and the actual values. We want to minimize this.

**Logistic Regression:**

In logistic regression we use the "Log-Loss" function.

$$ J(\theta) = -\frac{1}{N} \sum \left( \text{Actual} \cdot \log(\text{Predicted}) + (1 - \text{Actual}) \cdot \log(1-\text{Predicted}) \right) $$

Here, we're essentially measuring how far our predictions are from the actual values in terms of probability. The cost is very high for confident wrong predictions, while its less for right predictions.

**Support Vector Machines (SVMs):**

SVMs typically use a Hinge Loss function.

$$ J(\theta) = \frac{1}{N} \sum \max(0, 1 - \text{Actual} \cdot \text{Predicted}) + \lambda|w|^2 $$

> SVMs have a notoriously difficult cost function to understand, so don't worry about it if it confuses you the first time. The goal of this is mainly to demonstrate how each of these common machine learning models have similar underpinnings, since each works based on a cost function.

Anyways, the first part of this formula measures the "misclassification margin" - amount and severity by which our prediction was wrong. The second part is a regularization term that tries to keep the model simple to prevent overfitting. Here, $w$ is the weights vector, $\|w\|^2$ is the square of the magnitude of the weights vector, and $\lambda$ is a regularization parameter. SVMs try to find a decision boundary that maximizes the margin from both classes, and the hinge loss function allows it to ignore errors as long as they fall within the margin space.

You'll notice how the last portion of the Hinge Loss function has a regularization parameter. Once you as a machine learning engineer can get a handle on different cost functions and machine learning models and how each works in different circumstances, you can start to tweak cost functions a little to meet your needs. Common examples are changing the Ordinary Least Squares (OLS) cost function we saw above by adding regularization parameters, turning an OLS model into a ridge or lasso regression model. You can look through Chapter 15 [of this guide](https://buildmedia.readthedocs.org/media/pdf/ml-cheatsheet/latest/ml-cheatsheet.pdf) for deeper explanations of common cost/loss functions.

## Conclusion

You have seen now what optimization means and how you see it in every day life. You understand it a little better from a mathematical standpoint, and you've worked through a simple example. You now understand how optimization impacts the statistical and machine learning worlds, and you understand how optimization is used in specific machine learning models. Now go and practice optimizing a cost function in your own life and let me know how it goes in the comments below!
