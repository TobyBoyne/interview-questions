---
title: All Questions
layout: "_layouts/base.njk"
permalink: "questions/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
pagination:
    data: collections.question
    size: 10
    alias: questions
---
# All Questions

{% include "_components/question_list.njk"%}