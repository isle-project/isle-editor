---
id: gate 
title: Gate
sidebar_label: Gate
---

ISLE komponents, kas ļauj parādīt savus bērnus tikai rezervētai auditorijai.

## Iespējas

* __user__ | `boolean`: kad iestatīts, lietotājiem tiek rādīts saturs ar vārtiem.. Default: `false`.
* __notUser__ | `boolean`: kad iestatīts, aizsargātais saturs lietotājiem netiek **atrādīts**.. Default: `false`.
* __enrolled__ | `boolean`: kad iestatīts, saturs ar vārtiem tiek parādīts kursā reģistrētajiem studentiem.. Default: `false`.
* __notEnrolled__ | `boolean`: ja iestatīts, saturs ar vārtiem **neparādās** kursā reģistrētajiem studentiem.. Default: `false`.
* __owner__ | `boolean`: kad tas ir iestatīts, slēgtais saturs tiek parādīts kursa īpašniekam (parasti pasniedzējam).. Default: `false`.
* __notOwner__ | `boolean`: kad iestatīts, saturs ar vārtiem netiek parādīts kursa īpašniekam (parasti pasniedzējam).. Default: `false`.
* __after__ | `Date`: laiks, pēc kura vārtu saturam jākļūst redzamam.. Default: `none`.
* __until__ | `Date`: laiks, līdz vārtu saturs paliek redzams.. Default: `none`.
* __banner__ | `node`: pielāgotu ziņojumu, kas tiek rādīts apmeklētājiem, kuriem vārtu bērni nav redzami, nevis noklusējuma ziņojumu.. Default: `none`.
* __disabled__ | `boolean`: ja vārti ir atspējoti, baneris tiks parādīts neatkarīgi no tā, kas notiek.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: kontrolē, vai parādīt vārtu saturu prezentācijas režīmā, kad vārti ir redzami `īpašniekam`.. Default: `false`.
* __check__ | `function`: atgriezeniskā zvana funkcija, kas atgriež `boolean`, norādot, vai vārtiem ir jāparāda bērnu komponenti; funkcija tiek izsaukta, kad vienreiz pienāk sesijas darbības.. Default: `none`.


## Piemēri

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



