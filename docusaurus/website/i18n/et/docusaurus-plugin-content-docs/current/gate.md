---
id: gate 
title: Gate
sidebar_label: Gate
---

ISLE komponent, mis võimaldab kuvada oma lapsi ainult reserveeritud publikule.

## Valikud

* __user__ | `boolean`: kui on määratud, kuvatakse kasutajatele piiritletud sisu.. Default: `false`.
* __notUser__ | `boolean`: kui see on määratud, ei kuvata kasutajatele **ei** piiritletud sisu.. Default: `false`.
* __enrolled__ | `boolean`: kui on määratud, siis kuvatakse kursusele registreerunud õpilastele piiritletud sisu.. Default: `false`.
* __notEnrolled__ | `boolean`: kui see on määratud, siis ei kuvata kursusele registreerunud õpilastele **ei** piiritletud sisu.. Default: `false`.
* __owner__ | `boolean`: kui see on määratud, kuvatakse kursuse omanikule (tavaliselt juhendajale) piiritletud sisu.. Default: `false`.
* __notOwner__ | `boolean`: kui see on määratud, siis ei kuvata kursuse omanikule (tavaliselt juhendajale) **ei**.. Default: `false`.
* __after__ | `Date`: aeg, mille möödudes peaks värava sisu muutuma nähtavaks.. Default: `none`.
* __until__ | `Date`: aeg, kuni värava sisu peaks jääma nähtavaks. Default: `none`.
* __banner__ | `node`: kohandatud sõnum, mis kuvatakse külastajatele, kelle jaoks värava lapsed ei ole nähtavad, vaikimisi sõnumi asemel.. Default: `none`.
* __disabled__ | `boolean`: kui värav on välja lülitatud, siis kuvatakse bännerit igal juhul.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: kontrollib, kas värava sisu näidatakse esitlusrežiimis, kui värav on nähtav `owner` jaoks.. Default: `false`.
* __check__ | `function`: callback-funktsioon, mis tagastab "boolean", mis näitab, kas värav peaks kuvama lapse komponente; funktsioon käivitub iga kord, kui sessiooni toimingud saabuvad.. Default: `none`.


## Näited

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

