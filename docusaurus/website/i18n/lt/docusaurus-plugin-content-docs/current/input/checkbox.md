---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Žymimojo langelio įvesties komponentas. Gali būti naudojamas kaip ISLE prietaisų skydelio dalis arba atskirai. Pastaruoju atveju norite apdoroti pakeitimus naudodami atributą `onChange` arba susieti reikšmę su pasauliniu kintamuoju naudodami atributą `bind`.

## Parinktys

* __bind__ | `string`: pasaulinio kintamojo, kuriam bus priskirta žymimojo langelio vertė, pavadinimas. Default: `''`.
* __defaultValue__ | `boolean`: loginė reikšmė, nurodanti numatytąją žymimojo langelio reikšmę. Default: `false`.
* __value__ | `boolean`: žymimojo langelio reikšmė (valdomam komponentui). Default: `none`.
* __disabled__ | `boolean`: nurodo, ar įvestis aktyvi, ar ne.. Default: `false`.
* __inline__ | `boolean`: nurodo, ar žymimasis langelis rodomas eilutėje.. Default: `false`.
* __onChange__ | `function`: grįžtamojo ryšio funkcija, kuri bus iškviečiama, kai bus spustelėtas žymimasis langelis. Funkcija iškviečiama su dabartine žymimojo langelio verte. Default: `onChange() {}`.
* __legend__ | `(string|node)`: šalia žymimojo langelio rodomas tekstas.. Default: `''`.
* __tooltip__ | `string`: tekstas, rodomas užvedus žymimąjį langelį. Default: `''`.
* __tooltipPlacement__ | `string`: mygtuko užuominos padėtis. Default: `'right'`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

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
