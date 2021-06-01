---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

Vhodna komponenta drsnika. Uporablja se lahko kot del nadzorne plošče ISLE ali samostojno. V slednjem primeru želite obdelati spremembe s pomočjo atributa `onChange` ali vezati vrednost na globalno spremenljivko s pomočjo atributa `bind`.

## Možnosti

* __defaultValue__ | `number`: Začetna vrednost drsnika. Default: `10`.
* __disabled__ | `boolean`: nadzoruje, ali je vhod drsnika aktiven ali ne. Če je nastavljeno na true, bo drsnik prisoten na zaslonu, čeprav sivkasto obarvan.. Default: `false`.
* __inline__ | `boolean`: nadzoruje, ali naj se drsnik postavi v vrstico z besedilom ali zunaj njega.. Default: `false`.
* __legend__ | `(string|node)`: podnapis vnosa. Default: `none`.
* __max__ | `number`: Največja vrednost drsnika. Default: `100`.
* __maxLabel__ | `string`: oznaka, ki se prikaže na desni strani drsnika namesto največje vrednosti. Default: `none`.
* __min__ | `number`: Najmanjša vrednost drsnika. Default: `0`.
* __minLabel__ | `string`: oznaka, ki se prikaže na levi strani drsnika namesto najmanjše vrednosti. Default: `none`.
* __onChange__ | `function`: povratni klic, ki se sproži z novo vrednostjo, ko se spremeni vrednost drsnika.. Default: `onChange() {}`.
* __precision__ | `number`: zaokroževanje vhodnih podatkov. Vrednost bo zaokrožena tako, da ne bo imela več pomembnih števk, kot je natančnost. Na primer, če želimo uporabiti samo cela števila, se uporabi natančnost 10, če pa želimo zaokrožiti na stotinke, se uporabi natančnost 0,001.. Default: `10`.
* __step__ | `(number|string)`: velikost koraka drsnika. Default: `1`.
* __hideTooltip__ | `boolean`: nadzoruje, ali naj se skrije namig za orodje.. Default: `false`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __numberInputStyle__ | `object`: Vnosni slogi CSS za komponento vnosa številk. Default: `{}`.
* __rangeInputStyle__ | `object`: Vnosni slog CSS za komponento vnosa obsega. Default: `{}`.


## Primeri

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
