---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

Vstupní komponenta posuvníku. Lze ji použít jako součást ovládacího panelu ISLE nebo samostatně. V druhém případě chcete zpracovávat změny pomocí atributu `onChange` nebo svázat hodnotu s globální proměnnou pomocí atributu `bind`.

## Možnosti

* __defaultValue__ | `number`: Počáteční hodnota posuvníku. Default: `10`.
* __disabled__ | `boolean`: řídí, zda je vstup posuvníku aktivní, nebo ne. Pokud je nastavena hodnota true, posuvník bude na obrazovce přítomen, i když bude šedý.. Default: `false`.
* __inline__ | `boolean`: určuje, zda má být posuvník umístěn v řádku s textem nebo mimo něj.. Default: `false`.
* __legend__ | `(string|node)`: popisek vstupu. Default: `none`.
* __max__ | `number`: Maximální hodnota posuvníku. Default: `100`.
* __maxLabel__ | `string`: štítek, který se zobrazuje vpravo od posuvníku místo maximální hodnoty.. Default: `none`.
* __min__ | `number`: Minimální hodnota posuvníku. Default: `0`.
* __minLabel__ | `string`: štítek, který se zobrazuje vlevo od posuvníku místo minimální hodnoty.. Default: `none`.
* __onChange__ | `function`: zpětné volání vyvolané s novou hodnotou, když se změní hodnota posuvníku.. Default: `onChange() {}`.
* __precision__ | `number`: zaokrouhlení vstupu. Hodnota bude zaokrouhlena tak, aby neměla více významných číslic, než je přesnost. Pokud si například přejeme používat pouze celá čísla, použijeme přesnost 10, zatímco pokud chceme zaokrouhlovat na stovky, použijeme přesnost 0,001.. Default: `10`.
* __step__ | `(number|string)`: velikost kroku posuvníku. Default: `1`.
* __hideTooltip__ | `boolean`: kontroluje, zda se má skrýt nápověda k nástroji. Default: `false`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __numberInputStyle__ | `object`: Řádkové styly CSS pro komponentu zadávání čísel. Default: `{}`.
* __rangeInputStyle__ | `object`: Řádkový styl CSS pro vstupní komponentu rozsahu. Default: `{}`.


## Příklady

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
