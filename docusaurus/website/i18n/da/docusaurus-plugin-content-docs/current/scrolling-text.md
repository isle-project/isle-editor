---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

En dynamisk baggrundskomponent, der gennemløber en liste med tekster med et bestemt interval.

## Indstillinger

* __text__ | `(string|array<string>)`: tekst eller liste over tekster, der skal vises. Default: `[]`.
* __loop__ | `boolean`: angiver, om processen skal vises i det uendelige. Default: `false`.
* __direction__ | `string`: retningen af tekststrømmen (enten `venstre`, `højre`, `op`, `ned`, `sporing`, `fokus` eller `swirl`). Default: `'right'`.
* __hold__ | `number`: den tid, som teksten står stille (i sekunder). Default: `5`.
* __wait__ | `number`: tiden, før der kommer en ny tekst (i sekunder). Default: `3`.
* __inTime__ | `number`: tid for indgangseffekten (i sekunder). Default: `1`.
* __outTime__ | `number`: tidspunktet for exit-effekten (i sekunder). Default: `1`.
* __className__ | `string`: klassens navn. Default: `''`.
* __style__ | `object`: CSS-stilarter for teksten. Default: `{}`.


## Eksempler


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
