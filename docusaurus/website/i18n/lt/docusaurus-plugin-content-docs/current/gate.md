---
id: gate 
title: Gate
sidebar_label: Gate
---

ISLE komponentas, kuris leidžia rodyti savo antrininkus tik rezervuotai auditorijai.

## Parinktys

* __user__ | `boolean`: nustačius, naudotojams rodomas uždarytas turinys.. Default: `false`.
* __notUser__ | `boolean`: kai nustatyta, uždarytas turinys **nebus** rodomas naudotojams.. Default: `false`.
* __enrolled__ | `boolean`: nustačius, uždaras turinys rodomas į kursą užsiregistravusiems mokiniams.. Default: `false`.
* __notEnrolled__ | `boolean`: nustačius, uždarytas turinys **nebus** rodomas į kursą įtrauktiems studentams.. Default: `false`.
* __owner__ | `boolean`: nustačius, uždarytas turinys rodomas kurso savininkui (paprastai dėstytojui).. Default: `false`.
* __notOwner__ | `boolean`: nustačius, uždarytas turinys **nebus rodomas kurso savininkui (paprastai dėstytojui).. Default: `false`.
* __after__ | `Date`: laikas, po kurio turėtų būti matomas vartų turinys.. Default: `none`.
* __until__ | `Date`: laiką, kol vartų turinys turi likti matomas.. Default: `none`.
* __banner__ | `node`: pasirinktinis pranešimas, kuris rodomas lankytojams, kuriems vartų vaikai nėra matomi, o ne numatytasis.. Default: `none`.
* __disabled__ | `boolean`: jei vartai išjungti, reklaminis skydelis bus rodomas neatsižvelgiant į tai.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: kontroliuoja, ar rodyti vartų turinį pateikimo režimu, kai vartai matomi `savininkui`.. Default: `false`.
* __check__ | `function`: grįžtamojo ryšio funkcija, grąžinanti `boolean`, nurodančią, ar vartai turėtų rodyti vaikų komponentus; funkcija iškviečiama kiekvieną kartą, kai gaunami sesijos veiksmai.. Default: `none`.


## Pavyzdžiai

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

