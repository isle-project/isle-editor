---
id: gate 
title: Gate
sidebar_label: Gate
---

Komponent ISLE, ktorý umožňuje zobrazovať svoje deti len vyhradenému publiku.

## Možnosti

* __user__ | `boolean`: po nastavení sa používateľom zobrazí obsah s bránou. Default: `false`.
* __notUser__ | `boolean`: keď je nastavený, obsah brány sa používateľom **nezobrazuje**.. Default: `false`.
* __enrolled__ | `boolean`: keď je nastavené, že sa študentom zapísaným v kurze zobrazí obsah s bránou.. Default: `false`.
* __notEnrolled__ | `boolean`: keď je nastavené, že obsah s bránou sa **nezobrazuje** študentom zapísaným do kurzu.. Default: `false`.
* __owner__ | `boolean`: po nastavení sa obsah s bránou zobrazí vlastníkovi kurzu (zvyčajne inštruktorovi).. Default: `false`.
* __notOwner__ | `boolean`: keď je nastavené, že sa obsah brány **nezobrazuje** vlastníkovi kurzu (zvyčajne inštruktorovi).. Default: `false`.
* __after__ | `Date`: čas, po ktorom by mal byť obsah brány viditeľný. Default: `none`.
* __until__ | `Date`: čas, kým obsah brány zostane viditeľný. Default: `none`.
* __banner__ | `node`: vlastná správa, ktorá sa zobrazí návštevníkom, pre ktorých nie sú viditeľné deti brány, namiesto predvolenej správy. Default: `none`.
* __disabled__ | `boolean`: ak je brána vypnutá, banner sa zobrazí bez ohľadu na to, čo sa stane.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: ovláda, či sa má obsah brány zobrazovať v režime prezentácie, keď je brána viditeľná pre `vlastníka`. Default: `true`.
* __check__ | `function`: funkcia spätného volania, ktorá vracia hodnotu `boolean` označujúcu, či má brána zobraziť podriadené komponenty; funkcia sa vyvolá vždy, keď prídu akcie relácie. Default: `none`.


## Príklady

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

