---
title: Area in the Unit Square
tags:
    - short
    - graph
description: "Find the area of a region in a unit square."
---
{% extends "_layouts/question.njk" %}

{% block question %}
Find the area of the region enclosed between the axes, the line $y=c−x$, and the unit square (i.e. a square with corners $(0, 0), (0,1), (1,1), (1,0)$)
{% endblock question %}

{% block hints %}
Consider the different cases. For example, below is shown the case where $ 1 < c < 2 $:

![Area under curve; case where 1 < c < 2](/assets/images/area-under-curve-case2.png)

{% endblock hints %}

{% block answer %}
There are 4 cases. These are summarised below:
$$
A = \begin{cases}
   0 &\text{if } c \leq 0 \\\\
   \frac{1}{2} c^2 &\text{if } 0 < c \leq 1 \\\\
   1 - \frac{1}{2} (2-c)^2 &\text{if } 1 < c \leq 2 \\\\
   1 &\text{if } c > 2
\end{cases}
$$
{% endblock answer %}