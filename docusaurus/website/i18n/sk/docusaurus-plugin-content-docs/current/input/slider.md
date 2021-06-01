---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

Vstupný komponent posuvníka. Môže sa používať ako súčasť ovládacieho panela ISLE alebo samostatne. V druhom prípade chcete spracovávať zmeny pomocou atribútu `onChange` alebo viazať hodnotu na globálnu premennú pomocou atribútu `bind`.

## Možnosti

* __defaultValue__ | `number`: Počiatočná hodnota posuvníka. Default: `10`.
* __disabled__ | `boolean`: riadi, či je vstup posuvníka aktívny alebo nie. Ak je nastavená na hodnotu true, posuvník bude na obrazovke prítomný, aj keď bude sivý.. Default: `false`.
* __inline__ | `boolean`: určuje, či sa má posuvník umiestniť do riadku s textom alebo mimo neho.. Default: `false`.
* __legend__ | `(string|node)`: titulok vstupu. Default: `none`.
* __max__ | `number`: Maximálna hodnota posuvníka. Default: `100`.
* __maxLabel__ | `string`: zobrazenie štítku vpravo od posuvníka namiesto maximálnej hodnoty. Default: `none`.
* __min__ | `number`: Minimálna hodnota posuvníka. Default: `0`.
* __minLabel__ | `string`: zobrazenie štítku naľavo od posuvníka namiesto minimálnej hodnoty. Default: `none`.
* __onChange__ | `function`: spätné volanie vyvolané s novou hodnotou, keď sa zmení hodnota posuvníka. Default: `onChange() {}`.
* __precision__ | `number`: zaokrúhľovanie vstupu. Hodnota sa zaokrúhli tak, aby nemala viac významných číslic, ako je presnosť. Napríklad, ak chceme používať len celé čísla, použije sa presnosť 10, zatiaľ čo ak chceme zaokrúhľovať na stovky, použijeme presnosť 0,001. Default: `10`.
* __step__ | `(number|string)`: veľkosť kroku posuvníka. Default: `1`.
* __hideTooltip__ | `boolean`: kontroluje, či sa má skryť nápoveda k nástroju. Default: `false`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __numberInputStyle__ | `object`: Riadkové štýly CSS pre komponent zadávania čísel. Default: `{}`.
* __rangeInputStyle__ | `object`: Inline štýl CSS pre vstupnú zložku rozsahu. Default: `{}`.


## Príklady

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
