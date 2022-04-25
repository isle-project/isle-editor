---
id: gate 
title: Gate
sidebar_label: Gate
---

Een ISLE-component die het mogelijk maakt om zijn kinderen alleen aan een gereserveerd publiek te tonen.

## Opties

* __user__ | `boolean`: wanneer de gated content wordt weergegeven aan gebruikers. Default: `false`.
* __notUser__ | `boolean`: wanneer de gated content is ingesteld wordt **niet** weergegeven aan gebruikers. Default: `false`.
* __enrolled__ | `boolean`: wanneer de gated content wordt weergegeven aan de studenten die zijn ingeschreven in de cursus. Default: `false`.
* __notEnrolled__ | `boolean`: wanneer de gated content is ingesteld, wordt **niet** weergegeven aan de studenten die zijn ingeschreven voor de cursus. Default: `false`.
* __owner__ | `boolean`: wanneer de gated content wordt weergegeven aan de eigenaar van de cursus (meestal de instructeur). Default: `false`.
* __notOwner__ | `boolean`: wanneer de gated content is ingesteld wordt **niet** weergegeven aan de eigenaar van de cursus (meestal de instructeur). Default: `false`.
* __after__ | `Date`: tijd waarna de inhoud van de poort zichtbaar moet worden. Default: `none`.
* __until__ | `Date`: tijd tot de inhoud van de poort zichtbaar blijft. Default: `none`.
* __banner__ | `node`: een aangepast bericht dat wordt getoond aan bezoekers voor wie de kinderen van de poort niet zichtbaar zijn, in plaats van het standaardbericht. Default: `none`.
* __disabled__ | `boolean`: als een poort is uitgeschakeld, zal de banner worden weergegeven, wat er ook gebeurt. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: controleert of de inhoud van de poort in de presentatiemodus wordt weergegeven wanneer de poort zichtbaar is voor `eigenaars'. Default: `true`.
* __check__ | `function`: callback functie die een `boolean` retourneert en aangeeft of het hekje kinderonderdelen moet weergeven; de functie wordt aangeroepen wanneer de sessie-acties aankomen. Default: `none`.


## Voorbeelden

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

