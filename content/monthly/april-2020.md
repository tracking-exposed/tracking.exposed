---
title: April 2020 work in progress - Quarantine edition n. II
drafts: false
date: 2020-04-20T10:01:21+01:00
layout: monthly
description: slow and steady, wetest data release
---

# Actions performed (they goes on April reporting)

On facebook.tracking.exposed we purge cyclically data. The data is backup and not accessible as historical reference. We wonder if might be interesting, in the future, see how Facebook HTML and timelines looks like.
Still, from the online server, everything older than 2019 is wiped.

On different platforms (youtube), we plan to organize differently the data retention policy:

    switched to db facebook
    PRIMARY> db.timelines2.count({ "startTime" :{  "$lt": new Date("2018-01-01") }} )
    0
    PRIMARY> db.timelines2.count({ "startTime" :{  "$lt": new Date("2019-01-01") }} )
    590177
    PRIMARY> db.timelines2.remove({ "startTime" :{  "$lt": new Date("2019-01-01") }} )
    WriteResult({ "nRemoved" : 590177 })

With the command above we deleted the timelines, the object linking all the impressions to an user and to a unique sequence.

    PRIMARY> db.impressions2.remove({ "impressionTime": { "$lt": new Date("2019-01-01") }} )
    WriteResult({ "nRemoved" : 7619540 })

With the above we deleted impressions, an object reporting if the impression is public or private, and if there is an HTML (public posts).
Private post have an impression number, and this guarantee a sequence. impressionOrder come from 1 to the length of the timelines.

    PRIMARY> db.htmls2.remove({ "savingTime" : { "$lt" : new Date("2019-01-01") } })
    WriteResult({ "nRemoved" : 4586490 })

Remove HTML collection.

---

# TODOS project management (20 April)

https://github.com/tracking-exposed/youtube.tracking.exposed/projects/1

Here important the privacy updates required to every extension from Mozilla and Google. we'll begin by youtube.

In addition, there is a work in progress on parsing more information from youtube format, necessary for [wetest1](https://youtube.tracking.exposed/wetest/1).

## Italian below

C'è stata la puntata di LOST del 19 Aprile 2020, con interessanti spunti al minuto 50. La puntata completa e più opzioni la si trova [qui](https://archive.org/details/20200419loco19) al minuto 59:15 inizia Giulia x Trex!, qui l'[mp3](https://archive.org/download/20200419loco19/2020-04-19-loco19.mp3)

## Testi da rivedere e produrre.

Trasformare i tre pezzi in tre documenti a se stanti, da pubblicare e diffondere sviluppando nuovi canali.
Si potrebbero impaginare in latex e diffondere il .pdf, che copiarli in markdown qui. I pad temporanei sono:

* https://hackmd.io/@popcorn/r1UY-RFdU?both questo del pezzo letto finale
* https://pad.riseup.net/p/trexvirusprivacy questo con Covid
* https://pad.riseup.net/p/trexvirusprivacy-version2 questo su privacy
