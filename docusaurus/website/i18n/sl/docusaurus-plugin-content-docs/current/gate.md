---
id: gate 
title: Gate
sidebar_label: Gate
---

Komponenta ISLE, ki omogoča prikaz svojih otrok samo rezerviranemu občinstvu.

## Možnosti

* __user__ | `boolean`: ko je nastavljeno, se uporabnikom prikaže vsebina z ograjami.. Default: `false`.
* __notUser__ | `boolean`: ko je nastavljeno, se vsebina z ograjami **ne prikaže** uporabnikom.. Default: `false`.
* __enrolled__ | `boolean`: ko je nastavljena, se vsebina z ograjami prikaže učencem, vpisanim v tečaj.. Default: `false`.
* __notEnrolled__ | `boolean`: ko je nastavljeno, se vsebina z ograjami **ne prikaže** učencem, ki so vpisani v tečaj.. Default: `false`.
* __owner__ | `boolean`: ko je nastavljena, se vsebina z ograjami prikaže lastniku tečaja (običajno inštruktorju).. Default: `false`.
* __notOwner__ | `boolean`: ko je nastavljena, se vsebina z ograjami **ne** prikaže lastniku tečaja (običajno inštruktorju).. Default: `false`.
* __after__ | `Date`: čas, po katerem mora vsebina vrat postati vidna.. Default: `none`.
* __until__ | `Date`: čas, do katerega mora vsebina vrat ostati vidna.. Default: `none`.
* __banner__ | `node`: sporočilo po meri, ki se namesto privzetega prikaže obiskovalcem, za katere otroci vrat niso vidni.. Default: `none`.
* __disabled__ | `boolean`: če so vrata onemogočena, se banner prikaže ne glede na to.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: nadzoruje, ali naj se vsebina vrat prikaže v predstavitvenem načinu, ko so vrata vidna za `lastnika`.. Default: `false`.
* __check__ | `function`: povratna funkcija, ki vrača `boolean`, ki označuje, ali naj vrata prikažejo otroške komponente; funkcija se sproži, kadarkoli pridejo akcije seje. Default: `none`.


## Primeri

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

