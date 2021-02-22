---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Eine dynamische Hintergrundkomponente, die in einem festgelegten Intervall eine Liste von Texten durchläuft.

## Optionen

* __text__ | `array<string>`: Text oder Liste von Texten, die angezeigt werden sollen. Default: `[]`.
* __loop__ | `boolean`: gibt an, ob der Prozess unendlich angezeigt werden soll. Default: `false`.
* __direction__ | `string`: die Richtung des Textflusses (entweder `left`, `right`, `oben`, `unten`, `verfolgen`, `fokussieren` oder `wirbeln`). Default: `'right'`.
* __hold__ | `number`: die Zeit, die der Text stillsteht (in Sekunden). Default: `5`.
* __wait__ | `number`: die Zeit bis zum Eintreffen eines neuen Textes (in Sekunden). Default: `3`.
* __inTime__ | `number`: Zeit des Eintrittseffekts (in Sekunden). Default: `1`.
* __outTime__ | `number`: Zeit des Ausgangseffekts (in Sekunden). Default: `1`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Stile des Textes. Default: `{}`.


## Beispiele


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
    text= "This is a text re-appearing every five seconds"
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
