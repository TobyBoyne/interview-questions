---
title: Power Matching
tags:
    - short
description: "What load resistance maximises the power across the load?"
---
{% extends "_layouts/question.njk" %}

{% block question %}
Consider two resistors in series: a resistor with a value $R$, and a load resistor with value $R_L$. A voltage is applied across the series combination. What value of $R_L$ maximises the power dissipated in the load resistor, in terms of $R$?
{% endblock question %}

{% block hints %}

{% endblock hints %}

{% block answer %}
To find the maximum power dissipated in the resistor, $P$, we need to find an expression for $P$ in terms of $R_L$, and then differentiate. Note that finding the *maximum* of $P$ is equivalent to finding the *minimum* of $\frac{1}{P}$, which is an easier calculation in this case.  
$$ I = \frac{V}{R+R_L} $$
$$ P = VI = V^2 \frac{R_L}{(R+R_L)^2} $$
$$ \frac{1}{P} = \frac{1}{V^2} \left(\frac{R^2 + 2RR_L + R_L^2}{R_L}\right) $$
$$ \frac{1}{P} = \frac{1}{V^2} \left(\frac{R^2}{R_L} + 2R + R_L\right) $$
$$ \frac{d}{dR_L} \left(\frac{1}{P}\right) = \frac{1}{V^2} \left(-\frac{R^2}{R_L^2}+1\right)=0 $$
$$ 1 - \frac{R^2}{R_L^2} = 0 $$
$$ R_L = R $$  
Therefore to maximise the power across the load, the load resistor should be equal to the resistor $R$. This effect is called 'Power Matching'.
{% endblock answer %}