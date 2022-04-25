---
id: gate 
title: Gate
sidebar_label: Gate
---

Egy ISLE komponens, amely lehetővé teszi, hogy gyermekeit csak a fenntartott közönség számára jelenítse meg.

## Opciók

* __user__ | `boolean`: ha be van állítva, a korlátos tartalom megjelenik a felhasználók számára.. Default: `false`.
* __notUser__ | `boolean`: ha be van állítva, a zárolt tartalom **nem** jelenik meg a felhasználók számára. Default: `false`.
* __enrolled__ | `boolean`: ha be van állítva, akkor a zárolt tartalom megjelenik a kurzusra beiratkozott hallgatók számára.. Default: `false`.
* __notEnrolled__ | `boolean`: ha be van állítva, a zárolt tartalom **nem** jelenik meg a kurzusra beiratkozott hallgatók számára.. Default: `false`.
* __owner__ | `boolean`: ha be van állítva, a zárolt tartalom a kurzus tulajdonosának (általában az oktatónak) jelenik meg.. Default: `false`.
* __notOwner__ | `boolean`: ha be van állítva, a zárolt tartalom **nem** jelenik meg a kurzus tulajdonosa (általában az oktató) számára.. Default: `false`.
* __after__ | `Date`: az idő, amely után a kapu tartalmának láthatóvá kell válnia.. Default: `none`.
* __until__ | `Date`: az idő, amíg a kapu tartalma láthatóvá válik. Default: `none`.
* __banner__ | `node`: egy egyéni üzenet, amely az alapértelmezett üzenet helyett megjelenik azoknak a látogatóknak, akik számára a kapu gyermekei nem láthatók.. Default: `none`.
* __disabled__ | `boolean`: ha egy kapu le van tiltva, a banner megjelenik, függetlenül attól, hogy mi történik.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: szabályozza, hogy a kapu tartalma megjelenjen-e prezentációs módban, amikor a kapu látható a `tulajdonos` számára.. Default: `true`.
* __check__ | `function`: callback függvény, amely egy "bólé" értéket ad vissza, amely jelzi, hogy a gate-nek meg kell-e jelenítenie a gyermek komponenseket; a függvényt akkor hívja meg, amikor munkamenet-akciók érkeznek.. Default: `none`.


## Példák

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

