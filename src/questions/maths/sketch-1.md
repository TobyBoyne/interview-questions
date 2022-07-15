---
title: Sketch x/(1+x^2)
tags:
    - short
    - graph

description: "Sketch the curve y = x/(1+x^2)"
---
{% extends "_layouts/question.njk" %}

{% block question %}
Sketch the following curve,
$$ y = \frac{x}{1+x^2} $$
also giving the turning points.
{% endblock question %}

{% block hints %}
The turning points can be found with differentiation. However, they can also 
be calculated by considering where the curve intersects with the line $y=c$, 
where $c$ is a constant.
{% endblock hints %}

{% block answer %}
To sketch the curve, first note that $f(x)=-f(x)$, so the curve is 
anti-symmetrical about the origin. Also, find that $f(0)=0$, and 
$\lim_{x\to\infty}f(x)=0$.

The turning point can be found by setting $\frac{x}{1+x^2}=c$, rearranging to 
$$ c x^2 - x + c = 0 $$
This equation has exactly one solution when the line $y=c$ passes through the 
turning point, and so the discriminant must be equal to 0. Therefore
$$ \begin{aligned}
 1 - 4c^2 &= 0 \\\\
 c &= \pm \frac{1}{2} \\\\
 x &= \pm 1 
\end{aligned}$$
{% endblock answer %}