---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

O componentă dinamică de fundal care parcurge o listă de texte la un interval specificat.

## Opțiuni

* __text__ | `(string|array<string>)`: text sau listă de texte care urmează să fie afișate. Default: `[]`.
* __loop__ | `boolean`: indică dacă procesul trebuie să fie afișat la infinit. Default: `false`.
* __direction__ | `string`: direcția de curgere a textului (fie `left`, `left`, `right`, `up`, `down`, `tracking`, `focus`, sau `swirl`). Default: `'right'`.
* __hold__ | `number`: timpul în care textul rămâne nemișcat (în secunde). Default: `5`.
* __wait__ | `number`: timpul până la sosirea unui nou text (în secunde). Default: `3`.
* __inTime__ | `number`: timpul efectului de intrare (în secunde). Default: `1`.
* __outTime__ | `number`: timpul efectului de ieșire (în secunde). Default: `1`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Stiluri CSS ale textului. Default: `{}`.


## Exemple


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
