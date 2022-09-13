---
title: Braking Distance
tags:
 - short
description: "What is the impact of going a little faster on your braking distance?"
---
{% extends "_layouts/question.njk" %}

{% block question %}
If you're driving at 30mph, see a bollard and brake. You stop *just* before hitting 
the bollard. If instead you were initially travelling at 35mph, how fast would 
you be moving when you hit the bollard? Attempt to estimate the answer without 
a calculator.
{% endblock question %}

{% block hints %}
Assume that the breaks are applying a constant force in both instances.
This can be solved using either *suvat* equations, or conservation of energy. 
{% endblock hints %}

{% block answer %}
The problem is time-independent. Therefore, you can use the following equation:
$$ v^2 = u^2 + 2as $$
The $2as$ term is constant, as the distance between the driver and the bollard, 
$s$, and the acceleration (braking force) are constant.

Rearranging for $2as$ and equating the two cases gives
$$ \begin{aligned}
 v_1^2 - u_1^2 &= v_2^2 - u_2^2 \\\\
 (30)^2 - (0)^2 &= (35)^2 - u_2^2 \\\\
 u_2 &= \sqrt{(35)^2 - (30)^2} 
\end{aligned}$$

A calculator can be used to find an exact answer. However, to quickly estimate 
the value of $u_2$, the difference of two squares can be used:
$$ \begin{aligned}
 \sqrt{(35)^2 - (30)^2} &= \sqrt{(35-30)(35+30)} \\\\
  &= \sqrt{5 \cdot 75} \\\\
  &= \sqrt{375} 
\end{aligned}$$

Since $19^2 < 375 < 20^2 $, the answer is approximately $19.5\text{ mph}$ .
{% endblock answer %}
