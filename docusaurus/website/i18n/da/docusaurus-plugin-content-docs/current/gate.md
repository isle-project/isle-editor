---
id: gate 
title: Gate
sidebar_label: Gate
---

En ISLE-komponent, der gør det muligt kun at vise sine børn til reserveret publikum.

## Indstillinger

* __user__ | `boolean`: når det er indstillet, vises det afskærmede indhold for brugerne. Default: `false`.
* __notUser__ | `boolean`: når det er indstillet, vises det beskyttede indhold **ikke** for brugerne. Default: `false`.
* __enrolled__ | `boolean`: når det er indstillet, vises det begrænsede indhold for de studerende, der er tilmeldt kurset. Default: `false`.
* __notEnrolled__ | `boolean`: når det er indstillet, vises det beskyttede indhold **ikke** for de studerende, der er tilmeldt kurset. Default: `false`.
* __owner__ | `boolean`: når det er indstillet, vises det beskyttede indhold til kursets ejer (normalt instruktøren). Default: `false`.
* __notOwner__ | `boolean`: når det er indstillet, vises det beskyttede indhold **ikke** for ejeren af kurset (normalt underviseren). Default: `false`.
* __after__ | `Date`: den tid, hvorefter indholdet af porten skal blive synligt. Default: `none`.
* __until__ | `Date`: den tid, indtil indholdet af porten skal forblive synligt. Default: `none`.
* __banner__ | `node`: en brugerdefineret meddelelse, der vises til besøgende, for hvem portens børn ikke er synlige, i stedet for standardmeddelelsen. Default: `none`.
* __disabled__ | `boolean`: hvis en gate er deaktiveret, vises banneret uanset hvad. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: styrer, om portens indhold skal vises i præsentationstilstand, når porten er synlig for `owner`s. Default: `false`.
* __check__ | `function`: callback-funktion, der returnerer et "boolean", der angiver, om gate skal vise underordnede komponenter; funktionen kaldes, når der ankommer sessionshandlinger. Default: `none`.


## Eksempler

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

