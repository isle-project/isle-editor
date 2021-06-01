---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Vstupná zložka zaškrtávacieho políčka. Môže sa používať ako súčasť ovládacieho panela ISLE alebo samostatne. V druhom prípade chcete spracovávať zmeny pomocou atribútu `onChange` alebo viazať hodnotu na globálnu premennú pomocou atribútu `bind`.

## Možnosti

* __bind__ | `string`: názov globálnej premennej, do ktorej sa má priradiť hodnota zaškrtávacieho políčka. Default: `''`.
* __defaultValue__ | `boolean`: logická hodnota označujúca predvolenú hodnotu zaškrtávacieho políčka. Default: `false`.
* __value__ | `boolean`: hodnota zaškrtávacieho políčka (pre kontrolovaný komponent). Default: `none`.
* __disabled__ | `boolean`: označuje, či je vstup aktívny alebo nie. Default: `false`.
* __inline__ | `boolean`: označuje, či sa zaškrtávacie políčko zobrazuje v riadku. Default: `false`.
* __onChange__ | `function`: funkcia spätného volania, ktorá sa vyvolá po kliknutí na zaškrtávacie políčko. Funkcia sa volá s aktuálnou hodnotou zaškrtávacieho políčka. Default: `onChange() {}`.
* __legend__ | `(string|node)`: text zobrazený vedľa začiarkavacieho políčka. Default: `''`.
* __tooltip__ | `string`: text zobrazený pri prejdení nad začiarkavacie políčko. Default: `''`.
* __tooltipPlacement__ | `string`: pozícia nápovedy tlačidla. Default: `'right'`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

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
