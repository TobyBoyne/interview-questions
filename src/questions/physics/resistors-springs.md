---
title: Resistors and Springs
tags:
    - short
description: "Why do resistors and springs behave differently in series/parallel?"
---
{% extends "_layouts/question.njk" %}

{% block question %}
What is the effective resistance of two resistors in series?    
What is the effective spring constant two springs in series?    
Why are these different?
{% endblock question %}

{% block hints %}
Think about what quantities are conserved in series.
{% endblock hints %}

{% block answer %}
For resistors in series, the current through the circuit is conserved, and voltage is added. $V=IR$
For springs in series, the force is conserved, and extension is added. $F=kx$
{% endblock answer %}