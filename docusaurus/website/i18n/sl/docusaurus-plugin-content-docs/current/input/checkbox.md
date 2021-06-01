---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Komponenta za vnos potrditvenega polja. Uporablja se lahko kot del nadzorne plošče ISLE ali samostojno. V slednjem primeru želite obdelati spremembe s pomočjo atributa `onChange` ali vezati vrednost na globalno spremenljivko s pomočjo atributa `bind`.

## Možnosti

* __bind__ | `string`: ime globalne spremenljivke, ki ji bo dodeljena vrednost potrditvenega polja.. Default: `''`.
* __defaultValue__ | `boolean`: logična vrednost, ki označuje privzeto vrednost potrditvenega polja. Default: `false`.
* __value__ | `boolean`: vrednost potrditvenega polja (za nadzorovano komponento). Default: `none`.
* __disabled__ | `boolean`: označuje, ali je vhod aktiven ali ne.. Default: `false`.
* __inline__ | `boolean`: označuje, ali se potrditveno polje prikaže v vrstici.. Default: `false`.
* __onChange__ | `function`: povratna funkcija, ki se sproži ob kliku na potrditveno polje. Funkcija se pokliče s trenutno vrednostjo potrditvenega polja. Default: `onChange() {}`.
* __legend__ | `(string|node)`: besedilo, ki se prikaže ob potrditvenem polju.. Default: `''`.
* __tooltip__ | `string`: besedilo, ki se prikaže ob premikanju nad potrditvenim poljem. Default: `''`.
* __tooltipPlacement__ | `string`: položaj gumba s podnapisom. Default: `'right'`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri

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
