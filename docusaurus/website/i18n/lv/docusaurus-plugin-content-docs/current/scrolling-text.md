---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Dinamiska fona komponente, kas noteiktā intervālā cikliski izkārto tekstu sarakstu.

## Iespējas

* __text__ | `(string|array<string>)`: tekstu vai rādāmo tekstu sarakstu.. Default: `[]`.
* __loop__ | `boolean`: norāda, vai process tiks rādīts bezgalīgi.. Default: `false`.
* __direction__ | `string`: teksta plūsmas virziens (`kreisais`, `kreisais`, `augšup`, `dupurē`, `sekošana`, `fokuss` vai `virpuļošana`).. Default: `'right'`.
* __hold__ | `number`: laiks, cik ilgi teksts ir nekustīgs (sekundēs).. Default: `5`.
* __wait__ | `number`: laiks līdz jauna teksta saņemšanai (sekundēs).. Default: `3`.
* __inTime__ | `number`: ieejas efekta laiks (sekundēs). Default: `1`.
* __outTime__ | `number`: izejas efekta laiks (sekundēs). Default: `1`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: Teksta CSS stili. Default: `{}`.


## Piemēri


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
