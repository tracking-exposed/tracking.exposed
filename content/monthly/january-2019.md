---
title: January 2019 report
drafts: false
date: 2018-08-16T15:01:21+01:00
layout: page
description: Anticipation on our EU electoral analysis, and our first workshop on algorithm accountability and analysis
---

After the last year's CCC talk(https://media.ccc.de/v/35c3-9797-analyze_the_facebook_algorithm_and_reclaim_data_sovereignty) and the 2017-2018 status report(https://github.com/tracking-exposed/presentation/raw/master/fbTREX%20-%20project%20status%20and%20analysis%20-%20December%202018.pdf), we describe here the progress made during January.

- Started splitting the project between Algorithm Exposed(https://algorithms.exposed), Facebook Tracking Exposed(https://facebook.tracking.exposed) which will be more technical and the various campaigns such as EU19(https://eu19.tracking.exposed).
- Prepared a document that defines Tracking Exposed as a brand. It helps communicating complex concepts when we open up as a community by clarifying what we do and how we do it.
- Offered a 3-days workshop in the context of Digital Methods Initiative Winter School(https://wiki.digitalmethods.net/Dmi/WinterSchool2019AlgorithmsExposed). [ADD LESSONS LEARNED,ETC]
- Started preparing the texts for the European Elections 2019 portal. The goal is to engage people in collaborative effort. We want to reach a target audience composed of social scientists, data scientists/analysts, journalists, political candidates or advertisers, as well as all the other Facebook users (especially curious ones).
- Gave three public talks: in Berlin at Transmediale(link) and in Brussels at CPDP2019(link) and Privacy Camp(link). We followed this script([has been made a branch here: https://github.com/tracking-exposed/eu19/pull/12 still should be converted in markdown and then transformed in page. this would be the same procedure as when we public comments/piece]),and the slides can be found here(link). During this experience, we found the 'algorithmic literacy narrative' to be the most engaging. -- links are here https://github.com/tracking-exposed/eu19/pull/12#issuecomment-460991246
- At Transmediale, offered a workshop with 3 collaborators
https://2019.transmediale.de/content/bring-your-metadata-a-practical-analysis-of-the-facebook-algorithm [ if useful https://pad.riseup.net/p/transmediale-fbtrex-links ]
. We had a very positive outcome, with most of the people producing their own results. The workshop went through 3 different phases: (1) environment and extension setup, (2) creation and reading of the data feed and (3) introduction to data visualization with different frameworks. Initially we used Tableau to explore the collected data, but participatns had good experience in using the produced CSV (downloaded from their personal summary page) with https://rawgraphs.io.
- Made some tests on the RSS feed, adding semantic analysis as a feature and abuse-prevention method though Dandelion(https://dandelion.eu/), this is kindly offered by our partner Spazio Dati (https://spaziodati.eu) which gave us a researcher access. We had good results, the analysis of Dandelion extracts many languages, but we need to still implement the API which would enable individual in getting a better understanding of the processed content. This is also the fundation of the RSS service we are working on, it respresent the first experiment in letting people play with their own algorithm, we still have to implement and document all this complexity.
- We released a new version of the "personal summary", it is based on https://isotope.metafizzy.co/ javascript library, and permit filtering and sorting by metadata.
