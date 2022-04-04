---
type: blog
category: tiktok
title: "TikTok, Russia & the emerging Splinternet"
subtitle: "Contextualizing our Special Report on TikTok content restrictions in Russia"
extraCSS: "/css/informative.css"
date: 2022-03-31
pdf: "https://tracking.exposed/pdf/PR-tiktok-russia-15march2022.pdf"

og_title: "TikTok, Russia & the emerging Splinternet"
og_description: "Contextualizing our Special Report on TikTok content restrictions in Russia"
og_image: "/images/report-splinternet/tiktok_ban.jpg"
---


On March 15, 2022, Tracking Exposed released a [special report](https://tracking.exposed/pdf/tiktok-russia-15march2022.pdf) documenting our investigation into TikTok’s content restrictions in Russia, which was picked up by news outlets, such as [The Wall Street Journal](https://www.wsj.com/articles/tiktoks-pullback-in-russia-leaves-more-space-for-pro-kremlin-propaganda-11647370257), [The Financial Times](https://www.ft.com/content/b2a9c0a0-1f6b-4a25-9cd2-42f17b2f5a51), [Vice News](https://www.vice.com/en/article/epx8bw/russia-tiktok-censorship), [Le Monde](https://www.lemonde.fr/pixels/article/2022/03/15/tiktok-accuse-d-offrir-un-passe-droit-aux-propagandistes-du-kremlin_6117655_4408996.html), and [WIRED Italia](https://www.wired.it/article/russia-tiktok-propaganda/). It also gained substantial traction on Twitter.

<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    Today we release a special 24 page report into TikTok’s activities in Russia. Our researchers exclusively discovered that TikTok has blocked an estimated 95% of content previously available to its 55 million users in Russia ~without announcing this move~ <a href="https://t.co/RbHGPlpQ0D">
      https://t.co/RbHGPlpQ0D
    </a> <a href="https://t.co/WcDKy5jlRQ">pic.twitter.com/WcDKy5jlRQ</a>
  </p>&mdash; tracking.exposed (@trackingexposed) <a href="https://twitter.com/trackingexposed/status/1503734082840182788?ref_src=twsrc%5Etfw">March 15, 2022</a>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


We found that on March 7, 2022, TikTok made all the content posted by non-Russian channels unavailable to Russian users. This unannounced restriction removes an estimated 95% of the content previously available to Russian TikTok users. The restriction is happening at the application layer rather than the transport layer, which requires the direct involvement of TikTok. It is the first time a global social media platform has restricted access to content at this scale. Not only this, but a network of coordinated accounts is using a loophole to post new content promoting Russian pro-war propaganda in Russia, despite the current ban on new content uploads.

Since then, TikTok has made no public announcements regarding their content policies in Russia. However, the Tracking Exposed team has been busy. In a soon to be released report, we show how TikTok has continued to tweak what content is available to Russia users, thereby reinforcing the Kremlin’s ability to spread state-run propaganda. To be the first to read about our latest investigation, follow us on Twitter [@trackingexposed](https://twitter.com/trackingexposed).

Our swift and timely research is possible through the tools we develop; using our [custom open access free software](https://github.com/tracking-exposed/yttrex) we can automate access of TikTok’s content in Russia using both Russian Virtual Private Networks (VPNs) and Residential Internet Protocol (IP) addresses. Our TikTok tool infrastructure scrapes the data from automated browsers in order to investigate the platform, since Tiktok does not provide data access through APIs for transparency and public scrutiny. The data collection pipeline emulates real users, allowing an independent and realistic monitoring of how the platform behaves in Russia, and what content is available. Forensic evidence is collected for every experiment, including the responses of our requests to TikTok's servers. All Tracking Exposed tools are publicly available and released under an open access and free-software license, so they can be used and reviewed by anyone.

In the following section, we contextualize our March 22, 2022 findings within recent internet policy in Russia, global platforms’ previous interactions with the Kremlin, and the emerging Splinternet. Read on to learn why this matters:

### Introduction

TikTok is currently the only remaining global social media platform still operating in Russia. In response to Russia’s March 3, 2022 “fake news” law that criminalizes “fake news” related to the invasion of Ukraine, TikTok announced that it would stop all livestreams and new content uploads until it reviewed how it could safely operate in the country [1]. However, Tracking Exposed found that the company quietly took more extreme measures: TikTok made all content posted by non-Russian channels unavailable to Russian users. This unannounced restriction removes an estimated 95% of the content previously available to Russian TikTok users and is happening at the application layer rather than the transport layer, which means that this was a move executed by TikTok (as opposed to being blocked by Russia). We also found that a network of coordinated Russian accounts (also called "political bots" [2]) is using a loophole to post new content promoting Russian pro-war propaganda despite the restriction.

TikTok is blocking information about the Ukraine-Russia war in a way that is above and beyond what is required in response to the “fake news” law. This is the first time a global social media platform has restricted access to content at this scale. The move reinforces Russia’s strategies for suppressing dissent and contributes to a new form of the splinternet, in which a combination of external and internal forces isolate the Russian internet.

### Internet Policy in Russia

When TikTok banned content from non-Russian channels for Russian users, it played into the Kremlin’s strategy to discourage dissent through internet control. Russia’s internet was fairly open until the early 2010s, when it began to develop piecemeal, and at times contradictory, legislation to clamp down on internet freedom [3]. This clampdown came as a result of the use of the internet and social media for activism [4], such as during the December 2011 Moscow opposition demonstrations [5] and 2014 protests in Ukraine [6].

Russia has conceptualized its approach to digital sovereignty through the framework of internet security, and more specifically, information security [7]. It attempts to control information flows by maintaining a hold over internet data, infrastructure, and the “promotion of Russian internet governance initiatives at the international level,” [7]. The government operates through an “informal power network” coined sistema, which allows it to take actions to control the internet in covert ways that go overlooked by citizens [8].This is, however, ineffective with global tech companies, leading to more explicit legislation to attempt to control them.

While foreign threats play a role in the formation of Russia’s digital sovereignty strategy, Litvinenko [7] has found that the biggest influence is the elite’s desire to “control oppositional discourse.” This sentiment is reflected in Russian legislation developed in the past few years, for instance, the "Yarovaya" Amendments. Originally introduced in 2016 and later built upon, the amendments have various data retention requirements for “information dissemination organizers,” including social media companies. The amendments require that the Russian government can access data without a warrant in the name of “protecting Russia’s ‘critical informational infrastructure’” [9]. Further, the Kremlin’s 2017 law on VPNs and internet anonymizers prevents these services from allowing users to access banned content [9]. Under the guise of national security, the 2019 Sovereign Internet Law increases the state’s control of key internet infrastructure, allowing the state to restrict access to whatever content it deems unacceptable by requiring ISPs to install state-sponsored monitoring devices [7, 9]. While these laws have only been successful to varying degrees, they nonetheless reflect the Kremlin’s desire to control information flows.

The Fake News Law implemented on March 3, 2022 follows suit; it criminalizes the distribution of “fake news” about the war in Ukraine, with the definition of “fake news” at the discretion of the Kremlin [10]. For fear of their journalists’ safety, news outlets such as Bloomberg, the BBC, and CNN have temporarily suspended reporting from inside Russia [10, 13]. Similarly, independent Russia news sources, such as Novaya Gazeta, removed content related to the war in order to remain in operation [10]. However, after a second warning, they suspended activity entirely [11]. With Facebook, Instagram, and Twitter blocked, and various news media sites suspending reporting, the flow of non-Russian state information is limited. Even YouTube is at risk, although it has manged to survive thus far likely due to its high user base in the country [12]. Without access to information, it becomes increasingly difficult for Russians to access dissenting viewpoints [8, 14].

As a result of the Fake News Law, TikTok, the last social media company operating in the country, made the decision to suspend live-streaming and new content in Russia. However, our findings show that the company’s actions were far more expansive, namely, restricting access to all non-Russian channels for Russian users. Social media has been a key tool for activism thus far in the war in Ukraine, from debunking Russian propaganda to getting people to safety [15]. By limiting content in this way, TikTok is not only removing an avenue for dissent, but also subjecting the Russian public to an information vacuum [14]. This move actively plays a role in contributing to the Kremlin’s control over information flows and subjects the Russian public to more state-run propaganda.

TikTok’s content restriction also aligns with the Russian more typically discreet mechanism of control, in which it uses legislation to force an action, rather than an outright ban (which it felt compelled to do with Facebook and Twitter). In this sense, Russia can, in theory, benefit from Tiktok’s restriction while absolving itself of directly causing it. This may help Russia keep its publics loyal [8].

### Global Tech Companies in Russia

This is not the first time that TikTok has had to respond to legislation and demands from the Russian government. In fact, it has a track record of being more compliant with demands than its peers. While the Russian internet landscape was unique until now, in that it was the only country where an ecosystem of national platforms (like VKontakte and Yandex) was able to flourish without banning or restricting the foreign equivalents (like Facebook, Twitter), foreign tech companies have nonetheless been in a constant tug-of-war with the Kremlin.

For instance, the Kremlin used intimidation tactics to force Google and Apple to remove a voting app that supported Putin’s rival [16]. In an unprecedented move just last year, Apple worked with the Kremlin to ensure that Russian social media applications were easily downloadable on new iPhones [16]. Apple has also not given “Russian users access to a new security tool, Private Relay, that could help Russians reach foreign news coverage and other content deemed illegal by the government,” which is automatically available on its US phones [16].

This is not to say that these companies have not also pushed back. For instance, Twitter has been steadfast in denying Kremlin requests to take down content that go against Russian law [8]. After recently being blocked in Russia, Twitter immediately released a version of its site that can safely be accessed with the Tor browser [17]. Even in March 2021, Twitter refused to censor content about the jailing of opposition leader Alexey Navalny, whereas TikTok was far more compliant [18]. TikTok was also found to heavily censor LGBTQ+ content for Russia, with the Australian Strategic Policy Institute going so far as to say, “...in countries such as Vietnam and Russia, TikTok has gone beyond complying with the letter of the law and has instead seemingly offered censorship as a service to those administrations” [24].

In the current situation, platforms are in a tricky position. If they do not take enough action, then they are seen as prioritizing business, whereas too many restrictions means isolating Russian citizens by removing channels for activism [18]. TikTok is subject to this as well, and has made the decision to be overly restricted, which falls in line with its past interactions with the Russian government. Through examples like Twitter, we see that this does not have to be the case.

### The Splinternet, Fragmentation, and Digital Sovereignty

TikTok’s non-Russian content ban accelerates the Splinternet. Digital sovereignty (or internet sovereignty) is a contested term employed by states to generally refer to internet governance by nation [7]. While the term was previously associated with countries like Russia, China, and Iran who seek to heavily control their countries’ respective internet freedoms, it is increasingly being used by Western governments as well, albeit, to different ends [7]. The digital sovereignty of different nations leads some to fear a “Splinternet,” “where segments of the internet are controlled and regulated by different states and actors, [and] could lead to incompatibility among technical, regulatory, and operational standards – thus impeding cross-border cooperation and the interoperability of the global internet,” [19]. It also risks cutting off vital international news sources for citizens of authoritarian regimes [20].

In the context of the Russia-Ukraine war, the Splinternet has taken on a slightly different form. While digital sovereignty tends to focus on a country’s internet regulation in accordance with its own legal and cultural framework, in this case, we see the broader world reinforcing this separation. As Russian digital privacy nonprofit Roskomvoda explains, the actions by tech companies to end their services in Russia will have little effect on what’s happening in Ukraine and instead “can significantly worsen the situation in Russia with regard to respect of fundamental human rights,” [21]. The removal of services by large telecom operators like Cogent, they argue, heavily limits access to foreign information and provides a pretense for Russia to argue for their own internal infrastructures [21]. TikTok’s ban of non-Russian content contributes to this isolation by acting in the direct interest of the Russian government.

In the case of TikTok, there are various levers at play. First, TikTok is owned by the Chinese company ByteDance, and Russia and China have publicly acknowledged a joint effort to work together on information security [22]. In the days after Russia's invasion of Ukraine, Chinese social media platforms Weibo, WeChat and Douyin restricted anti-war content, suggesting an alliance between Russia and China in the information warfare part of the conflict. This may have led Chinese authorities to put pressure on ByteDance to restrict content in Russia. The move is likely also motivated by business constraints. To remain active in Russia (the platform's fourth biggest market), TikTok had to comply with the Russian “fake news” law. Since most of the critics of the Russian army come from outside Russia, banning all non-Russian content was a very coarse but relatively effective way to comply with the new law.

While Russia and China have similar views on internet censorship, their pathway to the Splinternet differs. The Splinternet is often associated with China’s internet and its Great Firewall, which allows the government to track all incoming and outgoing data and block access to sites and platforms [23]. China’s tactics have been public and rather consistent since the introduction of the internet in the country [23], whereas Russia has taken more discreet actions to nationalize their internet [8]. And while China’s censorship and policies have made it nearly impossible for foreign tech companies to compete there, Russia has allowed them while simultaneously struggling to get them to comply with national internet law [8].

Russia has, in part, framed the Western web as a threat. With the Russian content removals by platforms outside of Europe, Putin can use this as a tool to confirm his suspicions for the general public [18]. The Russians are moving towards a Splinternet through the interplay between foreign companies removing Russian content, Russia subsequently blocking social media platforms, and the ceasing of operations of vital internet infrastructure (like Cogent) in the country. The international community and the Russian government are co-creating a Russian splinternet, with TikTok’s content restriction a key player.

### Conclusion

With its current content restriction in place, TikTok has become a propaganda tool for the Kremlin, cut off avenues for dissent, and contributed to the formation of a Splinternet. The restriction is likely a patch, as opposed to a long term solution. Nonetheless, TikTok needs to think carefully about how it treads, given it is one of the last fully operational global social media companies in Russia. Tracking Exposed calls on TikTok to provide data access via an open API, in order to allow researchers to independently analyze TikTok’s activities and verify TikTok’s own reports, without delay. In light of our findings, we also ask TikTok to clarify the following:

1. Why are foreign accounts blocked in Russia? Is this a policy decision, and if so why was this not announced on their official website?
2. Is TikTok aware of the loophole that allows new videos to be uploaded despite the announcement that they are restricted in Russia?
3. Will TikTok commit to removing the Russian sponsored pro-war propaganda that is being posted by individual influencers? Will TikTok commit to removing the networked news accounts that use this same loophole?

To be the first to hear about our next investigation, follow us on Twitter ([@trackingexposed](https://twitter.com/trackingexposed)).


### References

[1] https://newsroom.tiktok.com/en-us/bringing-more-context-to-content-on-tiktok?utm_source=COMMSTWITTER&utm_medium=social&utm_campaign=030622.

[2] https://oxford.universitypressscholarship.com/view/10.1093/oso/9780190931407.001.0001/oso-9780190931407.

[3] https://journals.uic.edu/ojs/index.php/fm/article/view/11685.

[4] https://firstmonday.org/ojs/index.php/fm/article/view/11693/10124.

[5] https://www.fiia.fi/wp-content/uploads/2017/01/bp98.pdf.

[6] https://journals.sagepub.com/doi/10.1007/s12290-014-0296-4.

[7] https://www.cogitatiopress.com/mediaandcommunication/article/viewFile/4292/4292.

[8] https://www.tandfonline.com/doi/full/10.1080/1060586X.2015.1121712.

[9] https://www.hrw.org/news/2020/06/18/russia-growing-internet-isolation-control-censorship#:~:text=Russian%20internet%20users.-,The%20Sovereign%20Internet%20Law,state's%20control%20over%20internet%20infrastructure.

[10] https://www.niemanlab.org/2022/03/an-information-dark-age-russias-new-fake-news-law-has-outlawed-most-independent-journalism-there/.

[11] https://www.reuters.com/world/europe/russias-novaya-gazeta-newspaper-pauses-activities-after-official-warning-2022-03-28/.

[12] https://time.com/6156927/youtube-russia-ukraine-disinformation/.

[13] https://www.washingtonpost.com/technology/2022/03/04/russia-ukraine-internet-cogent-cutoff/.

[14] https://github.com/e-oz/files/blob/main/statement_of_roskomsvoboda_team.pdf.

[15] https://www.washingtonpost.com/technology/2022/03/01/social-media-ukraine-russia/.

[16] https://www.washingtonpost.com/world/2022/03/12/russia-putin-google-apple-navalny/.

[17] https://apnews.com/article/russia-ukraine-technology-business-europe-media-f1da10285a1631542b332597c5d35c29.

[18] https://foreignpolicy.com/2022/03/15/russia-ukraine-war-facebook-meta-twitter-youtube-block-censorship/.

[19] https://www.ssoar.info/ssoar/bitstream/handle/document/66221/ssoar-2020-epifanova-Deciphering_Russias_Sovereign_Internet_Law.pdf?sequence=1&isAllowed=y&lnkname=ssoar-2020-epifanova-Deciphering_Russias_Sovereign_Internet_Law.pdf.

[20] https://www.politico.com/news/2022/03/04/russia-splinternet-facebook-twitter-00014408.

[21] https://github.com/e-oz/files/blob/main/statement_of_roskomsvoboda_team.pdf.

[22] https://tass.com/economy/1398177?utm_source=thediplomat.com&utm_medium=referral&utm_campaign=thediplomat.com&utm_referrer=thediplomat.com.  

[23] https://www.theguardian.com/news/2018/jun/29/the-great-firewall-of-china-xi-jinpings-internet-shutdown.

[24] https://www.aspi.org.au/index.php/report/tiktok-wechat.
