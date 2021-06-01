---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

En komponent för kryssrutor. Kan användas som en del av en ISLE-instrumentpanel eller fristående. I det senare fallet vill du hantera ändringar via attributet `onChange` eller binda värdet till en global variabel via attributet `bind`.

## Alternativ

* __bind__ | `string`: namnet på den globala variabeln för det värde som ska tilldelas kryssrutan. Default: `''`.
* __defaultValue__ | `boolean`: boolska värde som anger kryssrutans standardvärde.. Default: `false`.
* __value__ | `boolean`: Värde för kryssrutan (för kontrollerad komponent).. Default: `none`.
* __disabled__ | `boolean`: anger om ingången är aktiv eller inte. Default: `false`.
* __inline__ | `boolean`: anger om kryssrutan ska visas inline. Default: `false`.
* __onChange__ | `function`: callback-funktion som ska aktiveras när kryssrutan klickas. Funktionen anropas med det aktuella värdet för kryssrutan.. Default: `onChange() {}`.
* __legend__ | `(string|node)`: text som visas bredvid kryssrutan. Default: `''`.
* __tooltip__ | `string`: text som visas när man håller muspekaren över kryssrutan. Default: `''`.
* __tooltipPlacement__ | `string`: positionen för knappens tooltip. Default: `'right'`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>


<TabItem value="minimal">

```jsx live
<CheckboxInput legend="Take the logarithm" />
```
</TabItem>

<TabItem value="inline">

```jsx live
<p>Please click
<CheckboxInput
    inline defaultValue={false}
/>
to confirm that you will follow our netiquette.</p>
```
</TabItem>


<TabItem value="withStyle">

```jsx live
<CheckboxInput
    style={{ fontSize: 30, color: 'blue'}}
    legend="Click to confirm"
    defaultValue={false}
/>
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<CheckboxInput
    legend="Click to confirm..."
    onChange={( value ) => {
        alert( 'New value: '+value );
    }}
/>
```

</TabItem>

</Tabs>
