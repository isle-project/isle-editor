---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

Slaidu ievades komponents. Var izmantot kā daļu no ISLE paneļa vai atsevišķi. Pēdējā minētajā gadījumā vēlaties apstrādāt izmaiņas, izmantojot atribūtu `onChange`, vai piesaistīt vērtību globālajam mainīgajam, izmantojot atribūtu `bind`.

## Iespējas

* __defaultValue__ | `number`: Slīdņa sākuma vērtība. Default: `10`.
* __disabled__ | `boolean`: nosaka, vai slīdņa ievade ir aktīva vai nav. Ja iestatīts uz true, slīdnis būs redzams ekrānā, lai gan pelēks.. Default: `false`.
* __inline__ | `boolean`: nosaka, vai slīdni izvietot teksta rindā vai ārpus tās.. Default: `false`.
* __legend__ | `(string|node)`: ievades virsraksts. Default: `none`.
* __max__ | `number`: Maksimālā slīdņa vērtība. Default: `100`.
* __maxLabel__ | `string`: maksimālās vērtības vietā rādīt etiķeti slīdņa labajā pusē.. Default: `none`.
* __min__ | `number`: Slīdņa minimālā vērtība. Default: `0`.
* __minLabel__ | `string`: minimālās vērtības vietā rādīt etiķeti slīdņa kreisajā pusē.. Default: `none`.
* __onChange__ | `function`: atsauces zvans, kas tiek izsaukts ar jauno vērtību, kad mainās slīdņa vērtība.. Default: `onChange() {}`.
* __precision__ | `number`: ievades noapaļošana. Vērtība tiks noapaļota tā, lai tajā nebūtu vairāk zīmīgo ciparu par precizitāti. Piemēram, ja vēlaties izmantot tikai veselos skaitļus, tiks izmantota precizitāte 10, bet, ja vēlaties noapaļot līdz simtzīmēm, tiks izmantota precizitāte 0,001.. Default: `10`.
* __step__ | `(number|string)`: slīdņa soļa lielums. Default: `1`.
* __hideTooltip__ | `boolean`: kontrolē, vai paslēpt uzrakstu. Default: `false`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __numberInputStyle__ | `object`: CSS iebūvētie stili numuru ievades komponentei. Default: `{}`.
* __rangeInputStyle__ | `object`: CSS ievilkuma stils diapazona ievades komponentei. Default: `{}`.


## Piemēri

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
