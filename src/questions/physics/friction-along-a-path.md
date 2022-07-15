---
title: Friction along a Path
description: "Investigate some cases of a particle moving on a rough surface."
---
{% extends "_layouts/question.njk" %}

{% block question %}
 1. Sketch a graph of the friction, $F$, acting on a particle on a rough surface as a function of the applied force, $T$
 2. A ball is projected on a smooth, flat plane with initial velocity $u$. The ball is subject to a drag force proportional to its velocity, $F=\lambda v$. How long will it take the ball to come to rest?
 3. A ball travels from point $P$ to $Q$ (where $Q$ is lower than $P$) along a rough, straight slope with coefficient of friction $\mu$ (released from rest). How much work is done against friction?
    - derive an expression fo the velocity of the ball at $Q$. Hence find the ratio of $\frac{y}{x}$ such that the ball does not move from rest. 
    - consider a path that is not a straight line between $P$ and $Q$. Would the previous calculation still apply? If not, why?
{% endblock question %}

{% block hints %}
 1.
 2. Using the chain rule, $$a=\frac{dv}{dt}=\frac{dv}{dr}\*\frac{dr}{dt}=v\*\frac{dv}{dr}$$
 3. Consider the forces acting on a particle moving on a curved path. Are there any additional forces as compared to a straight path? Would this affect the energy balance of the system?
{% endblock hints %}

{% block answer %}
The velocity of the ball follows an exponential decay (as the rate of decrease 
of $v$ is proportional to $v$ itself). Therefore it will take infinite time for 
the ball to become stationary. However, the total distance can be found using 
the chain rule as described in the hints. From there, resolving in the positive 
direction:
$$\begin{aligned}
F &= -\lambda v \\\\
m a &= -\lambda v \\\\
m v \frac{dv}{dr} &= -\lambda v \\\\
m\\, dv &= -\lambda \\, dr \\\\
\int_u^0{m\\, dv} &= \int_0^D{-\lambda \\, dr} \\\\
-m u &= -\lambda D \\\\
D &= \frac{m u}{\lambda} 
\end{aligned}$$
 Infinite time, $\frac{mu}{\lambda}$ distance
 
 Work done is $mgx\mu$. Ratio is $\mu$.
{% endblock answer %}