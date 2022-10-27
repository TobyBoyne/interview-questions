---
title: Rollercoaster Loop

description: "How fast does a rollercoast need to go to make it around a loop?"
---
{% extends "_layouts/question.njk" %}

{% block question %}
A rollercoaster starts at the top of a ramp, at a height $h$. It then moves 
from rest, into a circular loop-the-loop of radius $R$. What is the minimum 
value of $h$, in terms of $R$, such that the rollercoaster makes it all the 
way around the loop. 
{% endblock question %}

{% block hints %}
Consider the conditions at the top of the loop. Balance forces - what condition 
is satisfied at the *minimum* speed required to pass through the loop.
{% endblock hints %}

{% block answer %}
As the cart moves around the circle, the net force it experiences is 
$\frac{mv^2}{R}$. At the top, the reaction force from the track, and the force 
from gravity act in the same direction, such that $\frac{mv^2}{R}=N+mg$. At 
the minimum required speed, $N=0$, as if the cart were to move any slower then 
it would fall off the track. This gives $v_{\text{min}}^2=gR$.

Thus, assuming no energy loss, the initial energy can be equated to the energy 
at the top of the loop:
$$mgh=\frac{1}{2}mv_{\text{min}}^2 + mg(2R)$$
$$h=\frac{1}{2}R + 2R$$
$$h=\frac{5}{2}R$$
{% endblock answer %}