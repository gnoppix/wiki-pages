---
title: Gnoppix Community 
description: Ways to support us
---

**Who is Liable When Using Open Source Software?** (from the German view of point) and you will understand why this is not acceptable for us as a Opensource Linux Project. 

Open Source Software (OSS) has become an indispensable part of today's software world. The development of modern cloud, embedded, and mobile computing technologies, in particular, relies heavily on OSS solutions. More and more software providers are using open-source components. Microsoft, for example, which has an important revenue stream from its traditional Windows business with paid software, has now become an active player in the OSS market and has even made parts of its own code openly accessible, including the .NET Framework and Visual Studio Code. GitHub, the largest repository for open-source project infrastructure, was also acquired by Microsoft in 2018, which did not diminish the popularity of this service.

#### Complex Interdependencies

For many commercial software providers, OSS is a crucial component. Software providers use individual components programmed by OSS rights holders, and then distribute the product—usually for a fee. Identifying and fixing vulnerabilities in software products is often a costly and time-consuming process. The large proportion of OSS presents manufacturers with the task of ensuring efficient ways to detect, analyze, and mitigate risks. However, even with the most careful examination, programming errors can never be completely ruled out.

#### Which Law Applies?

This raises the question: Who is responsible for security gaps and vulnerabilities in the software? To anticipate the answer: The (complete) exclusion of liability agreed upon in numerous OSS licenses should not lull a provider into a false sense of security. It leads to the assumption that one does not have to be accountable for errors. Under German law, such a far-reaching exclusion of liability is regularly ineffective.

The situation is particularly tricky if the rights holder has their habitual residence in the USA and US American law is applicable to the legal relationship. If there is no explicit choice of law by the parties, the law of the state in which the contracting party providing the characteristic performance has its habitual residence applies to OSS license agreements. In OSS license agreements, this characteristic performance will be seen in the (free) granting of usage rights, so that in disputes, the law of the state in which the licensor has their residence is applicable. German law will therefore only be relevant if the rights holder has their habitual residence in Germany.

This has direct implications for the licensee's warranty and liability claims. While liability, for example, could indeed be excluded under US American law, such an exclusion would regularly be ineffective in the relationship between the user and the consumer. This applies particularly to contracts with consumers.

#### What Claims Do Users Have?

Whether and in what form the user is entitled to warranty and other liability claims depends on the agreements between the parties. However, the provisions of the German Civil Code (BGB) for General Terms and Conditions (AGB) in particular lead to the ineffectiveness of overly extensive limitations on legally stipulated claims. The characteristic contractual performance in OSS lies in the free provision of software and the simultaneous granting of extensive simple rights of use. The prevailing opinion therefore considers the OSS (license) agreement as a donation agreement combined with a license agreement with elements of donation law. The distribution of proprietary software that (also) includes OSS from the rights holder is assigned to purchase law in the case of a fee-based transfer, and to rental law in the case of a temporary transfer; in the case of transfer within the scope of implementation projects, a contract for work may exist.

In the case of a donation, the donor's liability is severely limited. In principle, they are only liable for gross negligence and intent. If software contains defective OSS components, both the rights holder and the user are only liable in cases of malice (Arglist). A case of malice could exist if the rights holder/user, with conscious knowledge of (serious) security vulnerabilities, continues to develop their software using this component or distributes the software without informing the user about this circumstance.

#### For Which Errors Is the Author Liable?

The special feature of software is that, as a complex work, it will almost never be absolutely error-free in a technical sense. A security vulnerability, however, will generally constitute a material defect. This becomes particularly relevant if the customer offers a telemedia service (cf. § 13 (7) TMG), operates a so-called critical infrastructure (cf. § 8a (1) BSIG), or is to be regarded as a "provider of digital services" in the future (cf. § 8c BSIG-E), and the software provider is aware of the security vulnerability. If the software has a material defect in the form of a security vulnerability at the time of purchase, the user is entitled to warranty rights. In the presence of a material defect, the OSS user initially has a right to subsequent performance to remedy the security vulnerability. In addition, they are entitled to claims for damages for losses incurred in connection with the defect, for example, in the event of an operational failure.

#### Compensation for Danger to Life and Limb

The crucial question now is how the author and user of the OSS must react to security vulnerabilities. If life, body, health, property, or another absolute legal right is violated by software burdened with security vulnerabilities, the injured party has a claim for damages under so-called "tort law" (Deliktsrecht). Data loss for the user can also be considered a violation of property rights. Here, a negligent violation is sufficient.

The manufacturer has so-called duties of care (Verkehrssicherungspflichten). In terms of design, production, and instruction, the manufacturer must adhere to the recognizable and ascertainable state of science and technology. If the manufacturer of software recognizes that its use, e.g., due to existing security vulnerabilities, can lead to a risk to life, body, health, property, or another absolute legal right, then appropriate steps must be taken to avert the danger.

In the case of a donation, the rights holder is generally only liable for malice in the case of damages due to a material defect; otherwise, for gross negligence. In purchase law, there is no comparable relief from liability (see donation law according to §§ 521 ff. BGB). Under the Product Liability Act (ProdHaftG), the manufacturer of a defective product is obliged to pay damages if the defect results in someone being killed, injured in body or health, or if property is damaged. This can be particularly relevant when using FOSS in "embedded systems," e.g., in aircraft, cars, etc.

#### Special Requirements for Critical Infrastructure

In addition to the general Product Liability Act, there are special laws that impose particular obligations on certain persons in the area of IT security. This includes, in particular, the Act on the Federal Office for Information Security (BSIG). According to § 8a (1) BSIG, operators of critical infrastructures must take "appropriate organizational and technical precautions to prevent disruptions to the availability, integrity, authenticity, and confidentiality of their information technology systems, components, or processes." Critical infrastructure includes the sectors of energy, information technology and telecommunications, transport and traffic, health, water, food, and finance and insurance, as well as infrastructures "of high importance for the functioning of society." This can also include telemedia and cloud providers. Although the obligations under the BSIG are not directly addressed to software manufacturers, the Federal Office for Information Security (BSI) can demand remedies from manufacturers in the event of security vulnerabilities (cf. § 8b (6) BSIG).
