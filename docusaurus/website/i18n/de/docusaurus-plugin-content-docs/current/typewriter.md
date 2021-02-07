---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

Eine ISLE-Komponente, mit der Sie einen Schreibmaschineneffekt erzeugen können.

## Options

* __delay__ | `number`: Anfangsverzögerung vor dem Start der Schreibmaschine (in Millisekunden). Default: `none`.
* __hold__ | `number`: wenn text ein Array von Zeichenketten ist, halten Sie die Dauer fest, die der Volltext angezeigt wird, bevor er zum nächsten Element im Array übergeht. Default: `2000`.
* __interval__ | `number`: das Intervall der Schreibmaschine (in Millisekunden). Default: `100`.
* __random__ | `boolean`: wenn random eingestellt ist, werden die Tastendrücke mit einer gewissen, "humanen" Zufälligkeit ausgeführt. Default: `false`.
* __sound__ | `boolean`: der getippte Tastenanschlag wird ebenfalls gehört. Default: `false`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __text__ | `(string|array<string>)`: der anzuzeigende Volltext. Default: `''`.


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

