---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Dinamična komponenta ozadja, ki v določenem časovnem intervalu ciklično premika seznam besedil.

## Možnosti

* __text__ | `(string|array<string>)`: besedilo ali seznam besedil, ki se prikažejo.. Default: `[]`.
* __loop__ | `boolean`: označuje, ali se proces prikazuje v neskončnost.. Default: `false`.
* __direction__ | `string`: smer toka besedila (`left`, `right`, `top`, `dol`, `sledenje`, `fokus` ali `vijuganje`).. Default: `'right'`.
* __hold__ | `number`: čas, ko besedilo miruje (v sekundah). Default: `5`.
* __wait__ | `number`: čas do prihoda novega besedila (v sekundah). Default: `3`.
* __inTime__ | `number`: čas vstopnega učinka (v sekundah). Default: `1`.
* __outTime__ | `number`: čas učinka izhoda (v sekundah). Default: `1`.
* __className__ | `string`: ime razreda. Default: `''`.
* __style__ | `object`: slogi CSS za besedilo. Default: `{}`.


## Primeri


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
