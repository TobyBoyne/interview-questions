---
title: Sugar on Scales
description: "What is the reading on a set of scales while sugar is being poured from a height?"
---
{% extends "_layouts/question.njk" %}

{% block question %}
Sugar is dropped from rest onto an electric balance from a fixed height $h$, and constant rate $\dot{m}$ without bouncing. The flow of sugar is cut off at the source when the balance shows the *exact weight* required. What will be the final reading on the scale, once the sugar in the air has settled on the pan?
{% endblock question %}

{% block hints %}
There are two effects on the reading: the weight of the sugar in the air, and the false reading due to the change in momentum of the falling sugar. Show that these two effects exactly cancel out.
{% endblock hints %}

{% block answer %}
False reading due to change in momentum:  
$$ R = Mg + \dot{m} v $$
Using suvat (or conservation of energy)
$$ gh = \frac{1}{2} v^2 $$
$$ v = \sqrt{2gh} $$
$$ R = Mg + \dot{m} \sqrt{2gh} $$
$$ \text{force due to change in momentum} = \dot{m} \sqrt{2gh} $$

Weight of sugar in the air:   
Let $T$ be the time taken to fall 
$$ \text{mass in air} = M_{air} = \dot{m} T $$
$$ \text{final velocity} = v = \text{acceleration} \* T $$
$$ \sqrt{2gh} = gT $$
$$ T = \sqrt{\frac{2h}{g}} $$
$$ M_{air} = \dot{m} \sqrt{\frac{2h}{g}} $$
$$ \text{weight in air} = M_{air} g = \dot{m} \sqrt{2gh} $$

The increase in the reading due to change in momentum is therefore equal to the decrease in the reading due to the weight of sugar still in the air.
{% endblock answer %}