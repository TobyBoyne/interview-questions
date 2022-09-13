---
title: Designing a Windmill
tags:
    - calculus
description: "Consider the different factors in designing a windmill."
---
{% extends "_layouts/question.njk" %}

{% block question %}
Windmills tend to have 3 blades. Why is this?

The speed of air through a windmill is the average of the speed of air into 
the turbine and the speed of air exiting the turbine, $v_{mid}=\frac{v_{in}+v_{out}}{2}$. 
By considering the mass of air through the windmill, and the change in kinetic 
energy, find an estimate for the most efficient ratio $r=v_{out}/v_{in}$.
{% endblock question %}

{% block hints %}
The mass through the turbine can be found by considering the conservation of mass. 
For a constant cross sectional area (i.e. the cross-section of the turbine blades), 
the mass flow rate is a factor of the speed $v_{mid}$. That is, if the speed of 
the air is halved, then the mass flow rate through the turbine is halfed.
{% endblock hints %}

{% block answer %}
There are two competing factors when designing a windmill:
1. Mass flow rate needs to be *maximised*, to increase the amount of energy 
input to the windmill.
2. Energy extraction efficiency needs to be *maximised*, meaning the energy of 
the output airflow - and therefore the output velocity - need to be *minimised*.

These two competing factors mean that the number of turbine blades is a *compromise* 
between extracting energy, and allowing mass to flow.

The factor by which the mass flow rate is reduced is given by
$$v_{mid} = \frac{v_{in}}{2} (1 + r)$$

The energy extracted per unit mass by the turbine is given by 
$$\frac{E}{\dot m} =\frac{1}{2} (v_{in}^2-v_{out}^2) \propto v_{in}^2(1-r^2)$$

The total efficiency is given by the product of these two terms. Differentiate 
and set to zero to find the maximum efficiency is achieved at $r=\frac{1}{3}$.

Video explanations by Minute Physics
- [Peak efficiency](https://www.youtube.com/watch?v=CI-bwqhhTTw)
- [Windmill design](https://www.youtube.com/watch?v=WGKIjojADmg)
{% endblock answer %}