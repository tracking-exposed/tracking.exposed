---
title: Measuring diversity, our takes on "proxy goals"
date: 2020-03-21
type: post
draft: false
category: indifferent
---

### Measuring diversity

This small update comes when reading about **proxy goals**, here summarized from a book we credit below:

    What is the purpose of the Netflix site, both for the end user and for the provider? For end users, the use of Netflix recommendations is to find relevant content that they want to watch at that specific time. Imagine that you didn’t have any ordering or filtering. How would you ever find anything in the Netflix catalog when it has more than 10,000 items? And the purpose for the provider (in this case, Netflix) is ultimately to make customers pay for the subscription month after month by providing content they want to watch, right at their fingertips.

    Netflix considers the amount of content viewed as a deciding factor in how they’re doing. Measuring something else instead of your direct goal is called using a proxy goal. Using a proxy goal is something you should be careful about because it can inadvertently end up measuring other effects than what you wanted—more time spent on the Netflix platform could mean frustrated customers who search and search without finding what they’re looking for, or they may have found it, but the site keeps stalling.

    Behind the scenes, there might also be considerations to balance things in such a way that Netflix pays the least money possible for what you’re watching. Netflix probably pays less to offer 10-year-old episodes of Friends than a newer series or, even better, a Netflix original series where they don’t have to pay a license fee to anybody.

    A purpose could also be to give information or to help or educate the user. In most cases, however, the purpose is probably to sell more. What type of customers would you rather serve: consumers who arrive once and expect good recommendations or loyal visitors who create profiles and return on a regular basis? Will the site be based on automatic consumption (for example, the Spotify radio station, which keeps playing music based on a song or a single artist)?

We recommend Weapons of Math Destruction by Cathy O’Neil (Broadway Books, 2016) if you want to know more about how wrong things can go when you use proxy goals.

## Our takes

In the way we design metrics, we define what we consider and measure success. For us should be 'diversity' of the network observed. Diversity in Facebook pages would means also ad, disinformation campaigns, meme, estimating what is gathering the attention of certain demographics. in general, tracking exposed can take three directions:

* Will be a platform for researcher performing tests (current situation, with large room for improvement),
* Like above, but with tools for individual comparison (we are at the beginning)
* Like above, but with tools for collective comparison (we did research on this)
* Like above, with privacy preserving API to use the database (theoretical work in progress)

Regardless the third point above, we need to understand our own bias, and have a metric to figure out how much we are missing out, before even plan an interface like that.
Concerning the fourth point, the value of such access should be measure with more respectful metrics then "number of users".

And this is a need we have already now. We are counting number of new installation, and active users per day (in every project, at the page /impact ), [facebook](https://facebook.tracking.exposed/impact), [youtube](https://youtube.tracking.exposed/impact), [pornhub](https://pornhub.tracking.exposed/impact), *but, [amazon](https://facebook.tracking.exposed/impact) not yet: coming soon!*

We want to find an indicator of diversity, but how can we compute it?
