---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Dinamikus háttérkomponens, amely meghatározott időközönként ciklikusan végigfut egy szöveglistán.

## Opciók

* __text__ | `(string|array<string>)`: megjelenítendő szöveg vagy szövegek listája. Default: `[]`.
* __loop__ | `boolean`: azt jelzi, hogy a folyamatot végtelenítve kell-e megjeleníteni.. Default: `false`.
* __direction__ | `string`: a szöveg áramlásának iránya (balra, jobbra, fel, le, követés, fókusz vagy örvénylés).. Default: `'right'`.
* __hold__ | `number`: az idő, amíg a szöveg mozdulatlan marad (másodpercben). Default: `5`.
* __wait__ | `number`: az új szöveg megérkezése előtti idő (másodpercben). Default: `3`.
* __inTime__ | `number`: a belépési hatás ideje (másodpercben). Default: `1`.
* __outTime__ | `number`: a kilépési hatás ideje (másodpercben). Default: `1`.
* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: A szöveg CSS stílusai. Default: `{}`.


## Példák


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
