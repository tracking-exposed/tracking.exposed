---
title: "Major Update, introducing: Reality Check"
date: 2018-05-19
drafts: false
type: update
lang: English
category: facebook 
---

Hi! it is 2018, and this project run over a major update cycle, but first:

Thanks for being resilient and contributing to the project. Despite the apparence, the project is doing OK. Besides... we have not yet offer features to you because it turns out, we achieved exciting results in research, and this was simpler than develop an UX.

Now the things are going to change, perhaps. Since version 1.1.15 (released 2018-07-17), the new personal dashboard has begun to be deployed.

What's happened in the last 12 months

- Google Chrome <a href="https://www.openrightsgroup.org/blog/2018/facebook-don%E2%80%99t-want-you-to-know-how-their-algorithm-works">took down our browser extension</a>. Allegedly this was due to a <em>trademark infringment</em> (for the presence of 'Facebook' in the name, meh!). The extension was renamed to <em>tracking.exposed: investigating algorithms</em>', but Google's legal team has <a href="https://github.com/tracking-exposed/web-extension/issues/72">kept it down so far</a>.
- Spanish language is supported
- A clearer opt-in process
- Work in progress in the new personal interface!
- FbTREX and WebFoundation delivered an innovative black box analysis of Facebook algorithm in Argentina (check out the <a href="https://webfoundation.org/research/the-invisible-curation-of-content-facebooks-news-feed-and-our-information-diets/">report written by the WebFoundation</a>.
- FbTREX team made an even more advanced analysis of the Italian national elections, you can find a document written by Fabio Chiusi and Claudio Agosti in <a href="https://ourdataourselves.tacticaltech.org/posts/overview-italy/">this report by TacticalTech</a>.
- Inspired by <a href="https://legacy.gitbook.com/book/hintjens/social-architecture/details">Social Architecture - Building On-line Communities</a>, we want to replicate the <a href="https://rfc.zeromq.org/spec:42/C4/%22">Collective Code Construction Contract</a>, or C4. See below for more details.
- If you are a data analyst or want to play with data, we <a href="https://github.com/tracking-exposed/experiments-data/tree/master/e18">released the full dataset</a> obtained during the Italian 2018 electoral campaign experiment. It is a mix of two data sources: 100% of the post shared by 30 pages and what Facebook decided to show to 6 bots run by us. The bots were following only the said 30 pages, the only differences among them were few I like, and still the quality and diversity of information shifted seriously.
- The <a href="https://tracking.exposed">Tracking Exposed</a> Manifesto of tracking.exposed is finally published.


### On C4

C4 is meant to provide a reusable optimal collaboration model for open source software projects. It has these specific goals:

- To maximize the scale and diversity of the community around a project, by reducing the friction for new Contributors and creating a scaled participation model with strong positive feedbacks;
- To relieve dependencies on key individuals by separating different skill sets so that there is a larger pool of competence in any required domain;
- To allow the project to develop faster and more accurately, by increasing the diversity of the decision making process;
- To support the natural life cycle of project versions from experimental through to stable, by allowing safe experimentation, rapid failure, and isolation of stable code;
- To reduce the internal complexity of project repositories, thus making it easier for Contributors to participate and reducing the scope for error;
- To enforce collective ownership of the project, which increases economic incentive to Contributors and reduces the risk of hijack by hostile entities.
