---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

En slider-indgangskomponent. Kan bruges som en del af et ISLE-dashboard eller som en selvstændig komponent. I sidstnævnte tilfælde skal du håndtere ændringer via `onChange`-attributten eller binde værdien til en global variabel via `bind`-attributten.

## Indstillinger

* __defaultValue__ | `number`: Startværdien for skyderen. Default: `10`.
* __disabled__ | `boolean`: styrer, om skydeinput er aktivt eller ej. Hvis den er indstillet til true, vil skyderen være til stede på skærmen, om end den er gråtonet.. Default: `false`.
* __inline__ | `boolean`: styrer, om skyderen skal placeres på linje med teksten eller uden for. Default: `false`.
* __legend__ | `(string|node)`: billedtekst for input. Default: `none`.
* __max__ | `number`: Den maksimale værdi af skyderen. Default: `100`.
* __maxLabel__ | `string`: etiket skal vises til højre for skyderen i stedet for den maksimale værdi. Default: `none`.
* __min__ | `number`: Mindste værdi for skyderen. Default: `0`.
* __minLabel__ | `string`: label skal vises til venstre for skyderen i stedet for minimumsværdien. Default: `none`.
* __onChange__ | `function`: callback, der påkaldes med den nye værdi, når skyderens værdi ændres. Default: `onChange() {}`.
* __precision__ | `number`: afrunding af input. Værdien afrundes, så den ikke har flere betydende cifre end præcisionen. Hvis man f.eks. kun ønsker at anvende hele tal, vil der blive anvendt en præcision på 10, mens man, hvis man ønsker at afrunde til hundredepladsen, vil anvende en præcision på 0,001.. Default: `10`.
* __step__ | `(number|string)`: trinstørrelse for skyderen. Default: `1`.
* __hideTooltip__ | `boolean`: styrer, om værktøjstip skal skjules. Default: `false`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __numberInputStyle__ | `object`: CSS inline-stilarter for komponent til indtastning af tal. Default: `{}`.
* __rangeInputStyle__ | `object`: CSS inline-stil til indtastningskomponent for rækkevidde. Default: `{}`.


## Eksempler

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
