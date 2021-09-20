---
title: Length of a Curve
tags:
    - short
description: "Find the length of a line that approaches a given curve."
---
{% extends "_layouts/question.njk" %}

{% block question %}
Consider each of the graphs below, that show the functions $f(x)$ and $g(x)$. What is the *length* of the orange line, $L$, in each?  
What does the length of the orange line approach as $h \to 0$?  
What might the length of the line look like for any arbitrary function? What properties of the function would affect this expression?

![Length of curve](/assets/images/limits_on_graph_10.png)  
![Length of curve parabola](/assets/images/limits_on_graph_parabola.png)  

{% endblock question %}

{% block hints %}
Take $h=1$, $h=\frac{1}{2}$, and $h=\frac{1}{3}$. What is the value of $L$ for these values of $h$? How will the pattern continue for infinitessimally small values of $h$?
{% endblock hints %}

{% block answer %}
For $f(x)$, the shape of $f(x)$ doesn't matter - $L$ depends only on the start and end value. In this case, $L=f(1)-f(0) + 1$.  

For $g(x)$, the location of the turning point is important too. For this reason, $L$ actually increases with $h$, until one of the sampled points touches the minimum of the curve. As the minimum is at $x=\frac{1}{2}$, $$L=[g(1)-g(\frac{1}{2})] + [g(0)-g(\frac{1}{2})]+1=g(1)-2g(\frac{1}{2}) + g(0)+1$$  
Note that the signs have been chosen to avoid taking the absolute value of the difference of two points.  

For the arbitrary case, the length can be split into the horizontal component, and the vertical component. The horizontal component will always be $1$. The vertical component will be the sum of difference in $y(x)$ between adjecent turning points. Therefore $L$ depends on: 
 - the value of the function at $x=0$ and $x=1$
 - the number of turning points of the curve
 - the value of the function at those turning points.
{% endblock answer %}