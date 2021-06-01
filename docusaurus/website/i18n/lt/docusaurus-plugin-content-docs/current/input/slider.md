---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

Šliaužiklio įvesties komponentas. Gali būti naudojamas kaip ISLE prietaisų skydelio dalis arba atskirai. Pastaruoju atveju norite apdoroti pakeitimus naudodami atributą `onChange` arba susieti vertę su globaliu kintamuoju naudodami atributą `bind`.

## Parinktys

* __defaultValue__ | `number`: Pradinė slankiklio vertė. Default: `10`.
* __disabled__ | `boolean`: kontroliuoja, ar slankiklio įvestis yra aktyvi, ar ne. Jei nustatyta reikšmė true, slankiklis bus ekrane, nors ir pilkos spalvos.. Default: `false`.
* __inline__ | `boolean`: kontroliuoja, ar slankiklį dėti į teksto eilutę, ar už jos ribų.. Default: `false`.
* __legend__ | `(string|node)`: įvesties antraštė. Default: `none`.
* __max__ | `number`: Didžiausia slankiklio vertė. Default: `100`.
* __maxLabel__ | `string`: vietoj didžiausios reikšmės rodyti etiketę slankiklio dešinėje.. Default: `none`.
* __min__ | `number`: Mažiausia slankiklio vertė. Default: `0`.
* __minLabel__ | `string`: etiketė turi būti rodoma kairėje šliaužiklio pusėje, o ne mažiausia vertė.. Default: `none`.
* __onChange__ | `function`: grįžtamasis skambutis, iškviečiamas su nauja verte, kai pasikeičia slankiklio vertė.. Default: `onChange() {}`.
* __precision__ | `number`: įvesties apvalinimas. Vertė bus suapvalinta taip, kad reikšminių skaitmenų būtų ne daugiau nei tikslumas. Pavyzdžiui, jei norima naudoti tik sveikuosius skaičius, bus naudojamas 10 tikslumas, o jei norima suapvalinti iki šimtųjų skaitmenų, bus naudojamas 0,001 tikslumas.. Default: `10`.
* __step__ | `(number|string)`: slankiklio žingsnio dydis. Default: `1`.
* __hideTooltip__ | `boolean`: kontroliuoja, ar slėpti įrankių užuominą. Default: `false`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __numberInputStyle__ | `object`: Numerių įvesties komponento CSS eilutės stiliai. Default: `{}`.
* __rangeInputStyle__ | `object`: CSS įvesties komponento CSS eilutės stilius. Default: `{}`.


## Pavyzdžiai

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
