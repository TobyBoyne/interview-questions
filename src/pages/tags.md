---
layout: "_layouts/base.njk"
pagination:
  data: tagsList
  size: 1
  alias: tag
  filter:
    - all
    - question
permalink: /tags/{{ tag }}/
---
<h1>Tagged “{{ tag }}”</h1>
<p>{{ tagsList[tag] | safe }}</p>
<ol>
{% set taglist = collections[ tag ] %}
{% for question in taglist | reverse %}
  <li><a href="{{ question.url | url }}">{{ question.data.title }}</a></li>
{% endfor %}
</ol>