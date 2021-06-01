---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

Liuguri sisendkomponent. Saab kasutada ISLE armatuurlaua osana või iseseisvalt. Viimasel juhul soovite muudatusi käsitleda atribuudi `onChange` kaudu või siduda väärtus globaalse muutujaga atribuudi `bind` kaudu.

## Valikud

* __defaultValue__ | `number`: Liuguri algväärtus. Default: `10`.
* __disabled__ | `boolean`: kontrollib, kas liuguri sisend on aktiivne või mitte. Kui see on seatud väärtuseks true, on liugur ekraanil olemas, kuigi halliks tõmmatud.. Default: `false`.
* __inline__ | `boolean`: kontrollib, kas liugur paigutatakse teksti sisse või väljapoole.. Default: `false`.
* __legend__ | `(string|node)`: sisendi pealkiri. Default: `none`.
* __max__ | `number`: Liuguri maksimaalne väärtus. Default: `100`.
* __maxLabel__ | `string`: silt kuvatakse liuguri paremal pool maksimaalse väärtuse asemel. Default: `none`.
* __min__ | `number`: Liuguri minimaalne väärtus. Default: `0`.
* __minLabel__ | `string`: silt, mis kuvatakse liuguri vasakul pool minimaalse väärtuse asemel. Default: `none`.
* __onChange__ | `function`: callback, mida kutsutakse üles uue väärtusega, kui liuguri väärtus muutub. Default: `onChange() {}`.
* __precision__ | `number`: sisendi ümardamine. Väärtust ümardatakse nii, et see ei sisaldaks rohkem olulisi numbreid kui täpsus. Näiteks kui soovitakse kasutada ainult täisarvusid, kasutatakse täpsust 10, kui aga soovitakse ümardada sajani, kasutatakse täpsust 0,001.. Default: `10`.
* __step__ | `(number|string)`: liuguri sammu suurus. Default: `1`.
* __hideTooltip__ | `boolean`: kontrollib, kas peita tööriistavihik. Default: `false`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __numberInputStyle__ | `object`: CSS inline stiilid numbrisisestuse komponendi jaoks. Default: `{}`.
* __rangeInputStyle__ | `object`: CSS inline stiil vahemiku sisendkomponendi jaoks. Default: `{}`.


## Näited

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
