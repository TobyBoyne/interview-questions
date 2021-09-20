---
title: Packing Efficiency
tags:
 - investigate
description: "How densely can we pack circles and spheres?"
---
{% extends "_layouts/question.njk" %}

{% block question %}
Packing efficiency is defined as the percentage of space that is filled by an object as a percentage of the total available space. What is the packing efficiency of a box full of cylinders? A box full of spheres?
{% endblock question %}

{% block hints %}
To find the packing efficiency for an object, consider a small tile that can be infinitely repeated. An example of this might be a circle in the middle of a square. This has a tiling efficiency of $\frac{A_{circle}}{A_{square}}=\frac{\pi r^2}{4r^2}=\frac{\pi}{4}$. However, this isn't the most efficient packing of circles in a grid.  
For cylinders, simplify to a 2D case - what is the packing efficiency of a circle?    
For spheres, look up "Face Centred Cubic" to have an idea of what the packing would look like
{% endblock hints %}

{% block answer %}
Cylinder packing: Consider triangle made up of joining centres of 3 touching circles
$$A_{triangle}=\frac{1}{2} (2R)^2 \sin⁡(60)$$
$$A_{circle}=\frac{180}{360} \pi R^2$$
$$A_{circle}/A_{triangle} =\pi/(2\sqrt{3})=90.7 \\% $$

Sphere packing: Consider FCC packing. In each corner, there is $\frac{1}{8}$ of a sphere. At each face, there is $\frac{1}{2}$ of a sphere. Therefore in total, there are $\frac{8}{8}+\frac{6}{2}=4$ spheres in the unit cube. Let the radius of the spheres be $R$, and the side-length of the cube be $a$.
$$V_{sphere}=4∗\frac{4}{3} \pi R^3$$
Pythagoras:
$$a=2\sqrt{2} R$$
$$V_{cube}=16\sqrt{2} R$$
$$V_{sphere}/V_{cube} = 74.1 \\% $$
{% endblock answer %}