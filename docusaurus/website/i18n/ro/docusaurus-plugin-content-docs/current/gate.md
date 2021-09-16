---
id: gate 
title: Gate
sidebar_label: Gate
---

O componentă ISLE care permite afișarea copiilor săi numai pentru publicul rezervat.

## Opțiuni

* __user__ | `boolean`: atunci când este setat, conținutul cu porți este afișat utilizatorilor. Default: `false`.
* __notUser__ | `boolean`: atunci când este setat, conținutul închis nu este **nu** afișat utilizatorilor. Default: `false`.
* __enrolled__ | `boolean`: atunci când este setat, conținutul cu porți este afișat studenților înscriși la curs. Default: `false`.
* __notEnrolled__ | `boolean`: atunci când este setat, conținutul de tip gated nu este **nu** afișat studenților înscriși la curs. Default: `false`.
* __owner__ | `boolean`: atunci când este setat, conținutul închis este afișat proprietarului cursului (de obicei, instructorul). Default: `false`.
* __notOwner__ | `boolean`: atunci când este setat, conținutul închis nu este **nu** afișat proprietarului cursului (de obicei, instructorul). Default: `false`.
* __after__ | `Date`: timpul după care conținutul porții trebuie să devină vizibil. Default: `none`.
* __until__ | `Date`: timpul până când conținutul porții trebuie să rămână vizibil. Default: `none`.
* __banner__ | `node`: un mesaj personalizat care este afișat vizitatorilor pentru care copiii porții nu sunt vizibili, în locul celui implicit. Default: `none`.
* __disabled__ | `boolean`: în cazul în care o poartă este dezactivată, bannerul va fi afișat indiferent ce se întâmplă. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: controlează dacă se afișează conținutul porții în modul de prezentare atunci când poarta este vizibilă pentru "proprietar".. Default: `false`.
* __check__ | `function`: funcție de callback care returnează un `boolean` indicând dacă poarta trebuie să afișeze componentele copil; funcția este invocată ori de câte ori sosesc acțiuni de sesiune. Default: `none`.


## Exemple

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

