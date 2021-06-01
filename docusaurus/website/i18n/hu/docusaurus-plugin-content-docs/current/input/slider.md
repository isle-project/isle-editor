---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

Egy csúszka bemeneti komponens. Használható egy ISLE műszerfal részeként vagy önállóan. Az utóbbi esetben a változásokat az `onChange` attribútummal kell kezelni, vagy az értéket a `bind` attribútummal egy globális változóhoz kell kötni.

## Opciók

* __defaultValue__ | `number`: A csúszka kezdőértéke. Default: `10`.
* __disabled__ | `boolean`: szabályozza, hogy a csúszkabemenet aktív legyen-e vagy sem. Ha true-ra van állítva, a csúszka jelen lesz a képernyőn, bár szürkén.. Default: `false`.
* __inline__ | `boolean`: szabályozza, hogy a csúszkát a szöveggel egy vonalban vagy azon kívül helyezzük-e el.. Default: `false`.
* __legend__ | `(string|node)`: a bemenet felirata. Default: `none`.
* __max__ | `number`: A csúszka maximális értéke. Default: `100`.
* __maxLabel__ | `string`: a maximális érték helyett a csúszkától jobbra megjelenő címke. Default: `none`.
* __min__ | `number`: A csúszka minimális értéke. Default: `0`.
* __minLabel__ | `string`: címke a csúszka bal oldalán jelenjen meg a minimális érték helyett. Default: `none`.
* __onChange__ | `function`: callback az új értékkel, amikor a csúszka értéke megváltozik. Default: `onChange() {}`.
* __precision__ | `number`: a bemenet kerekítése. Az értéket úgy kerekíti, hogy a pontosságnál nem lesz több szignifikáns számjegye. Például, ha csak egész számokat szeretnénk használni, akkor 10-es pontosságot használunk, míg ha százasra szeretnénk kerekíteni, akkor 0,001-es pontosságot használunk.. Default: `10`.
* __step__ | `(number|string)`: a csúszka lépcsőmérete. Default: `1`.
* __hideTooltip__ | `boolean`: szabályozza, hogy elrejtse-e a tooltip-et. Default: `false`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __numberInputStyle__ | `object`: CSS inline stílusok a szám beviteli komponenshez. Default: `{}`.
* __rangeInputStyle__ | `object`: CSS inline stílus a tartományi beviteli komponenshez. Default: `{}`.


## Példák

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
