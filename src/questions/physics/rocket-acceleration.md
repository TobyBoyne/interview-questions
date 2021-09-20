---
title: Rocket Acceleration
tags:
    - calculus
description: "Investigate the speed of a rocket ship over time."
---
{% extends "_layouts/question.njk" %}

{% block question %}
A rocket of initial combined mass (mass of the rocket + fuel) $m_0$ is at rest. At time $t=0$, the rocket begins ejecting fuel downwards at a speed of $u$ relative to the rocket, and a mass flow rate of $\dot{m}$. Find the forces acting on the rocket, and find the velocity $v$ at time $t$ as a function of the variables defined above, and the gravitational constant $g$.
{% endblock question %}

{% block hints %}
The mass of the rocket at time $t$ is the initial mass, take away the ejected fuel: $m=m_0-\dot{m}t$.  
The thrust of the rocket is created due to the change in momentum of the fuel, which is accelerated from rest (relative to the rocket) to a speed $u$.
{% endblock hints %}

{% block answer %}
Balancing forces:
$$ \text{thrust} = F = \text{change in momentum of fuel} = \dot{m} u $$
$$ \text{weight} = W = mg $$
$$ F - W = ma $$
$$ \dot{m} u - mg = ma $$  
Using the mass of the rocket at time $t$ found in the 'hints' section:  
$$ \dot{m} u - (m_0 - \dot{m} t)g = (m_0 - \dot{m} t)a $$
$$ \frac{\dot{m} u}{m_0 - \dot{m} t} - g = \frac{dv}{dt} $$  
Here, we have an expression for the acceleration as a function of time. To find the velocity as a function of time, we need to integrate this expression by seperating the variables, and then integrating from the initial condition ($v=0$ at $t=0$ as starting from rest), up to the condition we are looking for ($v=v$ at $t=t$).  
$$ \int_{0}^{t} \frac{\dot{m} u}{m_0 - \dot{m} t} - g \\, dt = \int_{0}^{v} dv $$
$$ [-u \ln(m_0 - \dot{m} t) - gt]_{0}^{t} = v $$
$$ v = u \ln\left( \frac{m_0}{m_0-\dot{m} t} \right) - gt $$
{% endblock answer %}