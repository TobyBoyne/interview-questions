---
title: Series
tags:
    - short

description: "Prove some common series equations."
---
{% extends "_layouts/question.njk" %}

{% block question %}
Prove that the sum $ 1 + 2 + 3 + ... + n = \frac{1}{2} n(n+1) $.  
Prove that the sum $ 1^2 + 2^2 + 3^2 + ... + n^2 = \frac{1}{6} n(n+1)(2n+1) $.  
What is the value of $ 1 - x + x^2 - x^3 + ... $?  
{% endblock question %}

{% block hints %}

{% endblock hints %}

{% block answer %}
Both of these series can be proven with induction. However, the first can also be proven as follows:
$$ S = 1 + 2 + 3 + ... + (n-2) + (n-1) + n $$
$$ S = n + (n-1) + (n-2) + ... + 3 + 2 + 1 $$
$$ S + S = (n+1) + (n-1+2) + (n-2+3) + ... + (n-2+3) + (n-1+2) + (n+1) $$
$$ 2S = n(n+1) $$
$$ S = \frac{1}{2} n(n+1) $$

For the final sum:
$$ S = 1 - x + x^2 - x^3 + ... $$
$$ xS = x - x^2 + x^3 - x^4 + ... $$
$$ S + xS = 1 + (x-x) + (x^2-x^2) + (x^3-x^3) + ... $$
$$ S + xS = 1 $$
$$ S = \frac{1}{1+x} $$
Note that this is only valid for $|x| < 1 $, as we assumed that $x^\infty$ is infinitessimally small. If $|x| > 1 $, then sum is *divergent* (as it alternates between $\pm \infty $)
{% endblock answer %}