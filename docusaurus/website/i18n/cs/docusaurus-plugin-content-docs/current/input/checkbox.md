---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Vstupní komponenta zaškrtávacího políčka. Lze použít jako součást ovládacího panelu ISLE nebo samostatně. V druhém případě chcete zpracovávat změny pomocí atributu `onChange` nebo vázat hodnotu na globální proměnnou pomocí atributu `bind`.

## Možnosti

* __bind__ | `string`: název globální proměnné, do které se přiřadí hodnota zaškrtávacího políčka.. Default: `''`.
* __defaultValue__ | `boolean`: boolean hodnota udávající výchozí hodnotu zaškrtávacího políčka. Default: `false`.
* __value__ | `boolean`: hodnota zaškrtávacího políčka (pro řízenou komponentu). Default: `none`.
* __disabled__ | `boolean`: označuje, zda je vstup aktivní, nebo ne. Default: `false`.
* __inline__ | `boolean`: označuje, zda se zaškrtávací políčko zobrazuje inline. Default: `false`.
* __onChange__ | `function`: zpětné volání, které se vyvolá po kliknutí na zaškrtávací políčko. Funkce je volána s aktuální hodnotou zaškrtávacího políčka. Default: `onChange() {}`.
* __legend__ | `(string|node)`: text zobrazený vedle zaškrtávacího políčka. Default: `''`.
* __tooltip__ | `string`: text zobrazený při najetí na zaškrtávací políčko. Default: `''`.
* __tooltipPlacement__ | `string`: pozice nápovědy tlačítka. Default: `'right'`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

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
