---
id: gate 
title: Gate
sidebar_label: Gate
---

En ISLE-komponent som gör det möjligt att visa sina barn endast för reserverade målgrupper.

## Alternativ

* __user__ | `boolean`: När det är inställt visas det skyddade innehållet för användarna.. Default: `false`.
* __notUser__ | `boolean`: När det är inställt visas det skyddade innehållet **inte** för användarna.. Default: `false`.
* __enrolled__ | `boolean`: När det är inställt visas det skyddade innehållet för de studenter som är inskrivna i kursen.. Default: `false`.
* __notEnrolled__ | `boolean`: När den är inställd visas det skyddade innehållet **inte** för de studenter som är inskrivna i kursen.. Default: `false`.
* __owner__ | `boolean`: När den är inställd visas det skyddade innehållet för kursens ägare (vanligtvis läraren).. Default: `false`.
* __notOwner__ | `boolean`: När det är inställt visas det skyddade innehållet **inte** för kursens ägare (vanligtvis läraren).. Default: `false`.
* __after__ | `Date`: Den tid efter vilken innehållet i porten ska bli synligt.. Default: `none`.
* __until__ | `Date`: tid till dess att innehållet i porten ska förbli synligt.. Default: `none`.
* __banner__ | `node`: ett anpassat meddelande som visas för besökare som inte kan se portens barn i stället för standardmeddelandet.. Default: `none`.
* __disabled__ | `boolean`: Om en grind är inaktiverad visas bannern oavsett vad som händer.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: kontrollerar om grindinnehållet ska visas i presentationsläge när grinden är synlig för "ägarens" ägare.. Default: `true`.
* __check__ | `function`: callback-funktion som returnerar en "boolean" som anger om grinden ska visa underordnade komponenter; funktionen anropas när sessionsåtgärder anländer.. Default: `none`.


## Exempel

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

