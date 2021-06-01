---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

En komponent för en reglageingång. Kan användas som en del av en ISLE-instrumentpanel eller fristående. I det senare fallet vill du hantera ändringar via attributet `onChange` eller binda värdet till en global variabel via attributet `bind`.

## Alternativ

* __defaultValue__ | `number`: Startvärdet för skjutreglaget. Default: `10`.
* __disabled__ | `boolean`: kontrollerar om reglaget är aktivt eller inte. Om den är inställd på true kommer reglaget att finnas på skärmen, även om det är grått.. Default: `false`.
* __inline__ | `boolean`: kontrollerar om reglaget ska placeras inline med texten eller utanför. Default: `false`.
* __legend__ | `(string|node)`: text för den inmatade informationen. Default: `none`.
* __max__ | `number`: Det maximala värdet för reglaget. Default: `100`.
* __maxLabel__ | `string`: Etikett ska visas till höger om reglaget i stället för det högsta värdet.. Default: `none`.
* __min__ | `number`: Minsta värde för skjutreglaget. Default: `0`.
* __minLabel__ | `string`: Etikett ska visas till vänster om reglaget i stället för minsta värde.. Default: `none`.
* __onChange__ | `function`: callback som anropas med det nya värdet när värdet på reglaget ändras. Default: `onChange() {}`.
* __precision__ | `number`: avrundning av inmatningen. Värdet avrundas så att det inte har fler signifikanta siffror än precisionen. Om man till exempel endast vill använda heltal, skulle en precision på 10 användas, medan om man vill avrunda till hundratal skulle man använda en precision på 0,001.. Default: `10`.
* __step__ | `(number|string)`: stegstorlek för glidaren. Default: `1`.
* __hideTooltip__ | `boolean`: kontrollerar om verktygstipsen ska döljas. Default: `false`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __numberInputStyle__ | `object`: CSS inline-stilar för komponent för inmatning av nummer. Default: `{}`.
* __rangeInputStyle__ | `object`: CSS inline-stil för komponent för inmatning av intervall. Default: `{}`.


## Exempel

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
