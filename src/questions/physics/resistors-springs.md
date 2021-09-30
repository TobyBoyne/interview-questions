---
title: Resistors and Springs
tags:
    - short
description: "Why do resistors and springs behave differently in series/parallel?"
---
{% extends "_layouts/question.njk" %}

{% block question %}
What is the effective resistance of two resistors in series?    
What is the effective spring constant of two springs in series?    
Why are these different?
{% endblock question %}

{% block hints %}
Think about what quantities are conserved in series.    
Write down the equations that involve resistance and the spring constant.
{% endblock hints %}

{% block answer %}
Take two **resistors** in series, $A$ and $B$. For this circuit, using Kirchhoff's Laws:
 - the current through both resistors is equal
 - the voltages of the resistors are added    

Let $I$ be the current through the whole circuit. In series, the voltages are added. 
Using $V = IR$,    
$$ V_\text{total} = V_A + V_B = IR_A + IR_B = I(R_A + R_B) = IR_\text{total} $$
Therefore the total resistance is the sum of the two resistors.

Take two **springs** in series, $1$ and $2$. For this combination:
 - the force acting on each spring is equal (can be checked by resolving forces in equilibrium)
 - the extension of the springs are added (if each spring extends by 1 cm, the combination will extend by 2 cm)

Using $F=kx$, which can be rearranged to $x=F/k$ you can see that the quantity that is equal, $F$, *divided* by the spring constant; compare this to $V=IR$, where $I$ is conserved but is *multiplied* by the resistance. Using a similar method,
$$ x_\text{total} = x_1 + x_2 = \frac{F}{k_1} + \frac{F}{k_2} = F(\frac{1}{k_1} + \frac{1}{k_2}) = F(\frac{1}{k_\text{total} }) $$
Therefore the reciprocal of the total spring constant is equal to the sum of the reciprocals of the two spring constants.
{% endblock answer %}