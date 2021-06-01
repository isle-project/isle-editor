---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Ievades komponents izvēles rūtiņa. Var izmantot kā daļu no ISLE paneļa vai atsevišķi. Pēdējā minētajā gadījumā vēlaties apstrādāt izmaiņas, izmantojot atribūtu `onChange`, vai piesaistīt vērtību globālajam mainīgajam, izmantojot atribūtu `bind`.

## Iespējas

* __bind__ | `string`: globālā mainīgā nosaukums, kuram tiks piešķirta izvēles rūtiņas vērtība.. Default: `''`.
* __defaultValue__ | `boolean`: boolean vērtība, kas norāda izvēles rūtiņas noklusējuma vērtību.. Default: `false`.
* __value__ | `boolean`: izvēles rūtiņas vērtība (kontrolējamam komponentam). Default: `none`.
* __disabled__ | `boolean`: norāda, vai ieeja ir aktīva vai nav. Default: `false`.
* __inline__ | `boolean`: norāda, vai izvēles rūtiņa tiek rādīta inline. Default: `false`.
* __onChange__ | `function`: atsauces funkcija, kas jāizsauc, kad ir noklikšķināts uz izvēles rūtiņas. Funkcija tiek izsaukta ar pašreizējo izvēles rūtiņas vērtību. Default: `onChange() {}`.
* __legend__ | `(string|node)`: blakus izvēles rūtiņai parādītais teksts. Default: `''`.
* __tooltip__ | `string`: teksts, kas tiek parādīts, kad tiek pārvietots pār izvēles rūtiņu. Default: `''`.
* __tooltipPlacement__ | `string`: pogas uzraksta atrašanās vieta. Default: `'right'`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

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
