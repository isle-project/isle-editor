---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Valintaruudun syöttökomponentti. Voidaan käyttää osana ISLE-kojelautaa tai itsenäisesti. Jälkimmäisessä tapauksessa haluat käsitellä muutokset `onChange`-attribuutilla tai sitoa arvon globaaliin muuttujaan `bind`-attribuutilla.

## Vaihtoehdot

* __bind__ | `string`: sen globaalin muuttujan nimi, johon valintaruudun arvo osoitetaan.. Default: `''`.
* __defaultValue__ | `boolean`: boolean-arvo, joka ilmaisee valintaruudun oletusarvon.. Default: `false`.
* __value__ | `boolean`: valintaruudun arvo (valvotun komponentin osalta). Default: `none`.
* __disabled__ | `boolean`: osoittaa, onko tulo aktiivinen vai ei. Default: `false`.
* __inline__ | `boolean`: osoittaa, näytetäänkö valintaruutu rivissä. Default: `false`.
* __onChange__ | `function`: callback-funktio, joka käynnistetään, kun valintaruutua napsautetaan. Funktiota kutsutaan nykyisellä valintaruudun arvolla.. Default: `onChange() {}`.
* __legend__ | `(string|node)`: valintaruudun vieressä näkyvä teksti. Default: `''`.
* __tooltip__ | `string`: teksti, joka näytetään, kun valintaruudun yläpuolelle viedään hiiren kursori. Default: `''`.
* __tooltipPlacement__ | `string`: painikkeen tooltipin sijainti. Default: `'right'`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä

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
