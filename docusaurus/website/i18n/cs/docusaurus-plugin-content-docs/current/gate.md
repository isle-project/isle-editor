---
id: gate 
title: Gate
sidebar_label: Gate
---

Komponenta ISLE, která umožňuje zobrazit své potomky pouze vyhrazenému publiku.

## Možnosti

* __user__ | `boolean`: po nastavení se uživatelům zobrazí obsah s bránou.. Default: `false`.
* __notUser__ | `boolean`: když je nastaveno, že se uživatelům **nezobrazuje** obsah s bránou.. Default: `false`.
* __enrolled__ | `boolean`: když je nastaveno, že se studentům zapsaným do kurzu zobrazí obsah s bránou.. Default: `false`.
* __notEnrolled__ | `boolean`: když je nastaveno, že se studentům zapsaným do kurzu **nezobrazuje** obsah s bránou.. Default: `false`.
* __owner__ | `boolean`: po nastavení se obsah s bránou zobrazí vlastníkovi kurzu (obvykle instruktorovi).. Default: `false`.
* __notOwner__ | `boolean`: po nastavení se obsah kurzu **nezobrazuje** vlastníkovi kurzu (obvykle instruktorovi).. Default: `false`.
* __after__ | `Date`: doba, po které by měl být obsah brány viditelný.. Default: `none`.
* __until__ | `Date`: doba, po kterou by obsah brány měl zůstat viditelný.. Default: `none`.
* __banner__ | `node`: vlastní zpráva, která se zobrazí návštěvníkům, pro které nejsou děti brány viditelné, místo výchozí zprávy.. Default: `none`.
* __disabled__ | `boolean`: pokud je brána zakázána, banner se zobrazí bez ohledu na to, co se stane.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: řídí, zda se má obsah brány zobrazit v režimu prezentace, když je brána viditelná pro `vlastníka`.. Default: `false`.
* __check__ | `function`: funkce zpětného volání vracející hodnotu `boolean` určující, zda má brána zobrazit podřízené komponenty; funkce je vyvolána vždy, když přijdou akce relace.. Default: `none`.


## Příklady

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

