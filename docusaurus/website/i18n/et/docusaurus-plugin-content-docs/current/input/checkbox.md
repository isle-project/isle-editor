---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Valikukasti sisendkomponent. Saab kasutada ISLE armatuurlaua osana või iseseisvalt. Viimasel juhul soovite muudatusi käsitleda atribuudi `onChange` kaudu või siduda väärtus globaalse muutujaga atribuudi `bind` kaudu.

## Valikud

* __bind__ | `string`: globaalse muutuja nimi, millele määratakse ruutu väärtus. Default: `''`.
* __defaultValue__ | `boolean`: boolean väärtus, mis näitab ruutu vaikeväärtust.. Default: `false`.
* __value__ | `boolean`: märkeruutude väärtus (kontrollitava komponendi puhul). Default: `none`.
* __disabled__ | `boolean`: näitab, kas sisend on aktiivne või mitte. Default: `false`.
* __inline__ | `boolean`: näitab, kas märkeruut kuvatakse rivis. Default: `false`.
* __onChange__ | `function`: callback-funktsioon, mis kutsutakse esile, kui ruutu klikkida. Funktsiooni kutsutakse välja praeguse märkeruudu väärtusega.. Default: `onChange() {}`.
* __legend__ | `(string|node)`: tekst, mis kuvatakse märkeruutude kõrval. Default: `''`.
* __tooltip__ | `string`: tekst, mis kuvatakse, kui hõljuda märkeruudu kohal. Default: `''`.
* __tooltipPlacement__ | `string`: nupu tooltip'i asukoht. Default: `'right'`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

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
