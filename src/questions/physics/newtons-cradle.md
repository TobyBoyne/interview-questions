---
title: Newton's Cradle
permalink: questions/newtons-cradle/
description: "Investigate the behaviour of a Newton's Cradle when multiple spheres are released at once."
---
{% extends "_layouts/question.njk" %}

{% block question %}
In a Newton’s cradle, the leftmost ball collides with the stationary balls with a velocity $u$. Is it possible for the *two* rightmost balls to then move to the right together at a speed $\frac{1}{2}u$ after the collision? All of the balls have the same mass, $m$.
{% endblock question %}

{% block hints %}
Consider the instants before and and after the collision. What quantities are conserved? What equations can you make from this? 
{% endblock hints %}

{% block answer %}
The two quantities conserved in the collision are **momentum**, and **energy**. 

At the instant before the collision, the leftmost ball has velocity $u$. Immediately after, the two rightmost balls have velocity $v=\frac{u}{2}$.
Considering momentum:
$$ mu = m(\frac{u}{2}) + m(\frac{u}{2}) = mu $$
Momentum is therefore conserved in this situation.

Considering energy:
$$ \frac{1}{2} m u^2 = \frac{1}{2} m (\frac{u}{2})^2 + \frac{1}{2} m (\frac{u}{2})^2 = \frac{1}{4} m u^2 $$
There is a contradiction here, as the initial energy and final energy are not equal. There are two possibilities here:
 - some energy is lost in the collision - equal to $ \frac{1}{4} m u^2 $
 - if the collision is elastic, then this is impossible

 In real life, the collision is almost elastic, and you'll find that the number of balls released will always equal the number of balls that move off from the cradle, conserving both energy and momentum.
{% endblock answer %}