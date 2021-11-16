---
title: Centre of Mass of a Can
tags:
    - short
description: "When drinking a can of a beverage, when is the centre of mass lowest?"
---
{% extends "_layouts/question.njk" %}

{% block question %}
When drinking a can of a beverage, how much liquid is in the can when the centre of mass is at its 
lowest? Assume the can has a constant cross-sectional area, and a height of $2H$. Give your answer 
in terms of $H$, the mass of the can $m$, and the density of the liquid $\rho$.
{% endblock question %}

{% block hints %}
There are two contributions to the centre of mass - the constant weight of the can itself, and the 
weight due to mass of the beverage which depends on the remaining volume.    

Initially, the centre of mass is in the middle of the can. After drinking all of the beverage, the 
centre of mass is in the middle of the can.
{% endblock hints %}

{% block answer %}

{% diagram 'com-of-can' %}

The equation for the centre of mass, for an object made up of  is given by
$$\text{total mass}\*\bar{x}=\sum_{i=0}^N{m_i*x_i}$$    
Where $\bar{x}$ is the distance of the centre of mass from the origin, $m_i$ and $x_i$ is the mass 
and distance from origin of the $i$th particle respectively.

In this case,
$$(m+x\rho)\bar{x}=mH+\frac{1}{2}\rho x^2$$
You can find the minimum value of $\bar{x}$ via differentiation. However, another method is to 
notice that the minimum occurs at $\bar{x}=x$ - when the top of the fluid is in line with the CoM. 
This is because, at this point:
 - Increasing $x$ will bring more mass above the CoM, raising $\bar{x}$
 - Decreasing $x$ will reduce the amount of mass that is below the CoM, raising $\bar{x}$

Therefore, just substitute $x=\bar{x}$ into the equation above to get a quadratic in $\bar{x}$, the 
(positive) solution to which is

$$ x=\frac{-m+\sqrt{m^2 +2\rho mH}}{\rho} $$

This answer can be simplified by considering the ratio of masses $r=\frac{m}{\rho}$, giving

$$ x=-r+\sqrt{r^2 +2rH} $$
{% endblock answer %}