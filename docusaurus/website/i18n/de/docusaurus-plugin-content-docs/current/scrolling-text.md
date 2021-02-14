---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Eine dynamische Hintergrundkomponente, die in einem festgelegten Intervall eine Liste von Texten durchläuft.

## Options

* __text__ | `array<string>`: Text oder Liste von Texten, die angezeigt werden sollen. Default: `[]`.
* __loop__ | `boolean`: gibt an, ob der Prozess unendlich angezeigt werden soll. Default: `false`.
* __direction__ | `string`: die Richtung des Textflusses (entweder `left`, `right`, `oben`, `unten`, `verfolgen`, `fokussieren` oder `wirbeln`). Default: `'right'`.
* __hold__ | `number`: die Zeit, die der Text stillsteht (in Sekunden). Default: `5`.
* __wait__ | `number`: die Zeit bis zum Eintreffen eines neuen Textes (in Sekunden). Default: `3`.
* __inTime__ | `number`: Zeit des Eintrittseffekts (in Sekunden). Default: `1`.
* __outTime__ | `number`: Zeit des Ausgangseffekts (in Sekunden). Default: `1`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Stile des Textes. Default: `{}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Delay and Sound', value: 'delayAndSound' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Array of Strings', value: 'array' },
        { label: 'Humanized', value: 'humanized' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Typewriter text="Lorem ipsum" />
```

</TabItem>

<TabItem value="delayAndSound">

```jsx live
<Typewriter text="Lorem ipsum" sound delay={2000} />
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Typewriter text="Styled Text" style={{ fontSize: 66, color: 'red'}} />
```

</TabItem>

<TabItem value="array">

```jsx live
<Typewriter text={["First Entry", "Second Entry", "Third Entry"]}  hold={2000} />
```

</TabItem>

<TabItem value="humanized">

```jsx live
<Typewriter text="This is a humanized performance" random interval={170} />
```

</TabItem>

</Tabs>



