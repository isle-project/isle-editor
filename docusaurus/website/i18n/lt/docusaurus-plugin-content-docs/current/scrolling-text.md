---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Dinaminis fono komponentas, kuris nustatytu intervalu cikliškai peržiūri tekstų sąrašą.

## Parinktys

* __text__ | `(string|array<string>)`: rodomas tekstas arba tekstų sąrašas. Default: `[]`.
* __loop__ | `boolean`: nurodo, ar procesas turi būti rodomas be galo.. Default: `false`.
* __direction__ | `string`: teksto srauto kryptis (į kairę, į dešinę, į viršų, į apačią, į viršų, į apačią, į apačią, į fokusavimą arba į sūkurį).. Default: `'right'`.
* __hold__ | `number`: laikas, kurį tekstas nejuda (sekundėmis). Default: `5`.
* __wait__ | `number`: laikas iki naujo teksto gavimo (sekundėmis).. Default: `3`.
* __inTime__ | `number`: įėjimo efekto laikas (sekundėmis). Default: `1`.
* __outTime__ | `number`: išėjimo efekto laikas (sekundėmis). Default: `1`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __style__ | `object`: teksto CSS stiliai. Default: `{}`.


## Pavyzdžiai


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'List of Texts', value: 'list' },
        { label: 'Background Image', value: 'backgroundImage' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScrollingText
    text="This is a text re-appearing every five seconds"
    style={{ fontSize: 44, color: 'blue' }}
    wait={5}
    hold={2}
    loop
/>
```

</TabItem>

<TabItem value="list">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

<TabItem value="backgroundImage">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

</Tabs>
