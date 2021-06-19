---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Dynamický komponent na pozadí, ktorý v určenom intervale cyklicky prechádza zoznamom textov.

## Možnosti

* __text__ | `(string|array<string>)`: text alebo zoznam textov, ktoré sa majú zobraziť. Default: `[]`.
* __loop__ | `boolean`: označuje, či sa má proces zobrazovať donekonečna. Default: `false`.
* __direction__ | `string`: smer toku textu (buď `left`, `right`, `nahoru`, `nadol`, `sledovanie`, `ostrosť` alebo `vlnenie`). Default: `'right'`.
* __hold__ | `number`: čas, počas ktorého sa text nehýbe (v sekundách). Default: `5`.
* __wait__ | `number`: čas do príchodu novej správy (v sekundách). Default: `3`.
* __inTime__ | `number`: čas vstupného efektu (v sekundách). Default: `1`.
* __outTime__ | `number`: čas výstupného efektu (v sekundách). Default: `1`.
* __className__ | `string`: názov triedy. Default: `''`.
* __style__ | `object`: CSS štýly textu. Default: `{}`.


## Príklady


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
