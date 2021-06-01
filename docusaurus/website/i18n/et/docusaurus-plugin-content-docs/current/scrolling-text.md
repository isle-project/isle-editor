---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Dünaamiline taustakomponent, mis läbib tekstide nimekirja kindlaksmääratud intervalliga.

## Valikud

* __text__ | `(string|array<string>)`: kuvatav tekst või tekstide loetelu. Default: `[]`.
* __loop__ | `boolean`: näitab, kas protsess kuvatakse lõpmatult. Default: `false`.
* __direction__ | `string`: tekstivoo suund (kas "vasakule", "paremale", "üles", "alla", "jälgimine", "fookus" või "keeramine").. Default: `'right'`.
* __hold__ | `number`: aeg, mille jooksul tekst püsib paigal (sekundites). Default: `5`.
* __wait__ | `number`: aeg enne uue teksti saabumist (sekundites). Default: `3`.
* __inTime__ | `number`: sissepääsuefekti aeg (sekundites). Default: `1`.
* __outTime__ | `number`: väljumise mõju aeg (sekundites). Default: `1`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __style__ | `object`: teksti CSS stiilid. Default: `{}`.


## Näited


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
