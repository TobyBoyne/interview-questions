---
title: Limits
tags:
    - short
description: "Some short limits questions."
---
{% extends "_layouts/question.njk" %}

{% block question %}
Evaluate the following limits:
$$ \lim_{x \to \infty} e^{-x} $$
$$ \lim_{x \to \infty} xe^{-x} $$
$$ \lim_{x \to \infty} x!e^{-x} $$  
Where $x!$ is the factorial of $x$, i.e. $x\*(x-1)\*(x-2)\*(x-3)\*...\*3\*2\*1$
{% endblock question %}

{% block hints %}
For limits that are the product of two terms, think about whether one term grows faster than the other term shrinks. As we are looking at the limit as $x$ approaches inifinity, consider what happens for *large* values of $x$.
{% endblock hints %}

{% block answer %}
$$ \lim_{x \to \infty} e^{-x} = 0 $$
$$ \lim_{x \to \infty} xe^{-x} = 0$$
$$ \lim_{x \to \infty} x!e^{-x} = \infty $$  
For the last limit, consider large values of $x$ - for example, $x=100$. Then, compare to $x=101$.
$$ 101!e^{-101} = 101 e^{-1} \* 100!e^{-100} > 100!e^{-100} $$
This pattern follows for larger values of $x$, and so the function is strictly increasing, and will approach infinity as $x$ approaches infinity.
{% endblock answer %}