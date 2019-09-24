---
title: Spring 2019 report
drafts: false
date: 2019-05-30T15:01:21+01:00
layout: page
description: The struggle on the European Election analysis
---


During the spring, three unique things have been completed:

* https://eu19.tracking.exposed, finally, our announced European election monitor. This has been also the first experiment using HUGO as new framework to build our \*.tracking.exposed websites; The semantic API have been released, and they allow to query by topics.
* A young and talented collaborator meet at the [Winter School](https://data-activism.net/2019/01/alex-dmi-winterschool/) had to do a bachelor thesis on algorithm in pornography, and we start to work on the analysis of the Pornhub algorithm, by using the same technology developed for the YouTube algorithm analysis! She release her thesis, and we will make this experiment reusable [by every Internet user, because, reasons](https://www.youtube.com/watch?v=LTJvdGcb7Fs).
* fbtrexRSS (now renamed as Zuckless News). We reuse the data available in the database as long as they are: *1)* public *2)* unlinked from the supporter *3)* mentioning public interest topics. This data policy leads to a first attempt to offer an algorithm under people control. In version 1.0, anyone can subscribe to a topic. All the voices in Wikipedia are assumed topic in the public interest. Every observed public post mentioning the topic by linguistic and semantic analysis would update the RSS feed. [Zuckless News](https://facebook.tracking.exposed/zuckless-news), a system that allows seeing Facebook content about its context (or semantic topics) It goes in a different direction compared to the common habit of following known sources.
  * This experiment have been implemented in [eu19](https://eu19.tracking.exposed) map, and you can play with the [API for semantic query](https://github.com/tracking-exposed/facebook/issues/128).
