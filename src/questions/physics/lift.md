---
title: Lift
tags: 
    - short
description: "How does an aeroplane generate lift?"
---
{% extends "_layouts/question.njk" %}

{% block question %}
How does an aeroplane generate lift?
{% endblock question %}

{% block hints %}
In order for lift to be generated, a force must be acting upwards on the plane. Where is this force located on the plane, and where does it come from?
{% endblock hints %}

{% block answer %}
There are two main mechanisms that lead to the generation of lift:
 - the angle of the wing deflects air downwards, therefore imposing a force on the air. By Newton's Third Law, there must be an equal and opposite force acting upwards on the wing of the plane, creating lift.
 - the wing curves the path of the air. This leads to an area of higher pressure below the wing, with the pressure difference causing a net force upwards.

 You aren't expected to know the cause of this pressure effect. Essentially, it arises as there is a centripetal force acting on the air particles in order to curve the path of the motion around the wing. This force is caused by a pressure gradient, leading to a region of low pressure just underneath the wing. This is an interesting topic to look further into, and there are many good articles online investigating this effect!

A commonly believed myth is that the air on top of and below the wing reach the tip of the wing at the same time. This is not true, as shown by [this video](https://www.cam.ac.uk/research/news/how-wings-really-work).
{% endblock answer %}