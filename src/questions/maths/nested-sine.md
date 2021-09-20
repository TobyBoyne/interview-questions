---
title: Nested Sine
tags:
    - investigate
    - graph
description: "Sketch the curve of a nested sine function."
---
{% extends "_layouts/question.njk" %}

{% block question %}
 1. Sketch the curve $y=\sin(x)$
 2. Sketch the curve $y=\sin(\sin(x))$
 3. Sketch the curve $y=\sin(a\sin(x))$. What are the different cases of $a$ to consider? How many turning points are there in the interval $[0, 2\pi]$?
{% endblock question %}

{% block hints %}
Note that for all three of these graphs, $y(-x)=-y(x)$. This means that they are odd, and therefore have rotational symmetry about the origin. You only need to consider $x > 0$.
{% endblock hints %}

{% block answer %}
![Graph of sin(sin(x))](/assets/images/nested-sine.png)
There are a few ways to approach this question. The simplest is to realise that the value of $\sin(x)$ is between $0$ and $1$ for all values of $x$. For a small $\theta$, $\sin(\theta)\approx \theta$. This is approximately valid for $-1 < \theta < 1$, which means that the curve $\sin(\sin(x))$ will look approximately like a sine curve. There will be some 'squashing' for larger values of $\sin(x)$, so the maxima will only reach a height of $\sin(1)=0.84$.

For the final curve, first differentiate to get
$$ \frac{dy}{dx}= a \cos(a \sin(x)) \cos(x) $$
This will have turning points when 
$$\cos(x)=0 \implies x=\frac{\pi}{2}, \frac{3\pi}{2}, ... $$  
There will also be turning points when
$$ \cos(a \sin(x)) =0 \implies a \sin(x) = \frac{\pi}{2}, \frac{3\pi}{2}, ... $$
$$ \implies \sin(x) = \frac{\pi}{2a}, \frac{3\pi}{2a}, ... = \frac{n\pi}{2a} $$  
where $n$ is an odd number.  
As the maximum value of $ \sin(x) $ is 1, $ \frac{n\pi}{2a} < 1 $, so $ a > \frac{n\pi}{2} $.  
This means that each time $a$ increases above an odd multiple of $ \frac{\pi}{2} $, another turning point is introduced in the region $[0, \pi/2]$.

The total number of turning points in the region $[0, 2\pi]$ is the sum of those due to the $ \cos(x)=0 $ term and the $ \cos(a \sin(x)) = 0 $ term, giving a total of $ 2 + 2(n+1) = 4 + 2n$ turning points.
where $n$ is defined such that $ \frac{n\pi}{2} < a \leq \frac{(n+1)\pi}{2}$.

Note that the last part of the question is particularly tough, and you aren't expected to get the exact expression, or to be able to sketch the graph perfectly. The key insight is that increasing $a$ increases the number of turning points on the graph. You should plug the curves into a graphing software, such as [Desmos](https://www.desmos.com/calculator), and investigate the behaviour of the curve for different values of $a$.
{% endblock answer %}