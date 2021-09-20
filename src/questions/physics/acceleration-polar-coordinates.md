---
title: Acceleration in Polar Coordinates
tags:
    - investigate
description: "Investigate the terms of acceleration for a particle in a different coordinate system."
---
{% extends "_layouts/question.njk" %}

{% block question %}
For this question, consider a particle on a rotating disk. The disk has radius $R$, and angular velocity $\omega$
 1. What is the linear velocity at the outer rim?
 2. What is the linear velocity at a distance $\frac{R}{2}$ from the centre?
 3. What is the radial acceleration?
 4. The particle moves radially outward at a constant velocity $u$. Explain why this must introduce an additional tangential acceleration. What is this new acceleration a function of?
{% endblock question %}

{% block hints %}

{% endblock hints %}

{% block answer %}
The new acceleration is called the Coriolis acceleration. This must exist as, when the particle moves outwards, its velocity increases (as shown in the first two parts of the question). Coriolis acceleration is proportional to $u$, and $\omega$. Further analysis shows that the magnitude of Coriolis acceleration is $2u\omega$.

The velocity and acceleration terms can also be derived by expressing the position as unit vectors, and then differentiating the position twice. This process involves differentiating the unit vectors (as the direction of the vector changes over time).
{% endblock answer %}