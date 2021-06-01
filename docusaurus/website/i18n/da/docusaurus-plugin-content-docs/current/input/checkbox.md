---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

En komponent til indtastning af en afkrydsningsboks. Kan bruges som en del af et ISLE-dashboard eller som en selvstændig komponent. I sidstnævnte tilfælde skal du håndtere ændringer via `onChange`-attributten eller binde værdien til en global variabel via `bind`-attributten.

## Indstillinger

* __bind__ | `string`: navnet på den globale variabel, som værdien af afkrydsningsfeltet skal tildeles. Default: `''`.
* __defaultValue__ | `boolean`: boolsk værdi, der angiver afkrydsningsfeltets standardværdi. Default: `false`.
* __value__ | `boolean`: afkrydsningsfeltets værdi (for kontrolleret komponent). Default: `none`.
* __disabled__ | `boolean`: angiver, om indgangen er aktiv eller ej. Default: `false`.
* __inline__ | `boolean`: angiver, om afkrydsningsfeltet skal vises inline. Default: `false`.
* __onChange__ | `function`: callback-funktion, der skal påkaldes, når der klikkes på afkrydsningsfeltet. Funktionen kaldes med den aktuelle værdi for afkrydsningsfeltet. Default: `onChange() {}`.
* __legend__ | `(string|node)`: tekst, der vises ved siden af afkrydsningsfeltet. Default: `''`.
* __tooltip__ | `string`: tekst, der vises, når man holder musen over afkrydsningsfeltet. Default: `''`.
* __tooltipPlacement__ | `string`: placering af knap tooltip. Default: `'right'`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

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
