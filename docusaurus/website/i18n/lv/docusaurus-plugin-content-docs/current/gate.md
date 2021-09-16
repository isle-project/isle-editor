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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Timed', value: 'timed' },
        { label: 'Hidden', value: 'hidden' },
        { label: 'Custom Banner', value: 'customBanner' },
        { label: 'Custom Check', value: 'customCheck' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Gate enrolled >
    <h1>Content for users enrolled in a cohort of the course</h1>
</Gate>
```

</TabItem>

<TabItem value="timed">

```jsx live
<Gate
    after={date({ year: 2020, month: 9, day: 1, hour: 9, minute: 30, second: 0, utcOffset: 4 })}
    until={date({ year: 2020, month: 12, day: 20, hour: 9, minute: 30, second: 0, utcOffset: 5 })}
>
    # Only visible in Fall 2020 semester
</Gate>
```

</TabItem>

<TabItem value="hidden">

```jsx live
<Gate banner={null} owner >
    <h1>Content for owners without a message for others</h1>
</Gate>
```

</TabItem>

<TabItem value="customBanner">

```jsx live
<Gate owner banner={<h3>Only visible by course owners...</h3>} >
    <h1> User Analytics </h1>
</Gate>
```

</TabItem>

<TabItem value="customCheck">

```jsx live
<Gate check={( ) => {
    return session.user.email === 'admin@cmu.edu';
}} >
    <h1> User Analytics only visible to specified user</h1>
</Gate>
```

</TabItem>

</Tabs>

