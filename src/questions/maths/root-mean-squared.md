---
title: Root Mean Squared
description: "Find an expression for the root mean sqaure of a sine wave."
---
{% extends "_layouts/question.njk" %}

{% block question %}
The process for finding the root mean square (RMS) of a signal is:
 - square all of the values of the signal
 - find the mean value of this squared signal
 - take the square root of the mean  

When finding the RMS, think about the time period over which you are taking the mean.

An alternating current is passed through a wire, with a value $ I(t) = I_0 \sin(\omega t) $. Show that the root mean square of this signal is given by $ \frac{I_0}{\sqrt{2} } $.
{% endblock question %}

{% block hints %}
As the signal is a sine wave, it is periodic with time period $ T = \frac{2\pi}{\omega} $.

The mean square of the signal is given by:
$$ \frac{1}{T} \int_{0}^{T} I(t)^2 \\, dt  $$
Take the square root of this expression to get the root mean square.
{% endblock hints %}

{% block answer %}
For further questions, look at [the RMS value for some other waveforms](https://en.wikipedia.org/wiki/Root_mean_square#In_common_waveforms), and derive these expressions
{% endblock answer %}