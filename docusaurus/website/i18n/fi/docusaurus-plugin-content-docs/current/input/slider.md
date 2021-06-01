---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

Liukusäätimen tulokomponentti. Voidaan käyttää osana ISLE-kojelautaa tai itsenäisesti. Jälkimmäisessä tapauksessa haluat käsitellä muutokset `onChange`-attribuutilla tai sitoa arvon globaaliin muuttujaan `bind`-attribuutilla.

## Vaihtoehdot

* __defaultValue__ | `number`: Liukusäätimen alkuarvo. Default: `10`.
* __disabled__ | `boolean`: ohjaa, onko liukusäätimen tulo aktiivinen vai ei. Jos arvoksi asetetaan true, liukusäädin on näytössä, vaikkakin harmaana.. Default: `false`.
* __inline__ | `boolean`: valitsee, sijoitetaanko liukusäädin tekstin kanssa riviin vai sen ulkopuolelle.. Default: `false`.
* __legend__ | `(string|node)`: syötteen kuvateksti. Default: `none`.
* __max__ | `number`: Liukusäätimen enimmäisarvo. Default: `100`.
* __maxLabel__ | `string`: etiketti näytetään liukusäätimen oikealla puolella maksimiarvon sijasta.. Default: `none`.
* __min__ | `number`: Liukusäätimen vähimmäisarvo. Default: `0`.
* __minLabel__ | `string`: merkintä näytetään liukusäätimen vasemmalla puolella minimiarvon sijasta.. Default: `none`.
* __onChange__ | `function`: callback, jota kutsutaan uudella arvolla, kun liukusäätimen arvo muuttuu.. Default: `onChange() {}`.
* __precision__ | `number`: syötteen pyöristäminen. Arvo pyöristetään siten, että siinä ei ole enempää merkitseviä numeroita kuin tarkkuus. Jos esimerkiksi halutaan käyttää vain kokonaislukuja, käytetään tarkkuutta 10, kun taas jos halutaan pyöristää sadasosaan, käytetään tarkkuutta 0,001.. Default: `10`.
* __step__ | `(number|string)`: liukusäätimen askelkoko. Default: `1`.
* __hideTooltip__ | `boolean`: ohjaa, piilotetaanko työkaluvihje. Default: `false`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __numberInputStyle__ | `object`: CSS-inline-tyylit numeron syöttökomponentille. Default: `{}`.
* __rangeInputStyle__ | `object`: CSS-inline-tyyli alueen syöttökomponentille. Default: `{}`.


## Esimerkkejä

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Mathematical Symbols via LaTeX', value: 'mathematicalSymbols' },
        { label: 'Custom Style', value: 'customStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SliderInput
    legend="Success Probability"
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```

</TabItem>

<TabItem value="mathematicalSymbols">

```jsx live
<SliderInput
    legend={<span>$\sigma$ (standard deviation)</span>}
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```

</TabItem>

<TabItem value="customStyle">

```jsx live
<SliderInput
    legend="Success Probability"
    style={{ padding: 30, fontSize: 25, background: 'tan', fontFamily: 'Georgia'}}
    rangeInputStyle ={{ minWidth: 500}}
    numberInputStyle = {{ background: 'white', boxShadow: '2px 2px 0px black'}}
    defaultValue={0.5}
    min={0}
    max={200}
    step={0.01}
/>
```

</TabItem>

</Tabs>
