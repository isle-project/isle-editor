---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

Element wejściowy suwaka. Może być używany jako część deski rozdzielczej ISLE lub autonomiczny. W tym ostatnim przypadku, chcesz obsługiwać zmiany za pomocą atrybutu `onChange` lub powiązać wartość ze zmienną globalną za pomocą atrybutu `bind`.

## Opcje

* __defaultValue__ | `number`: Wartość początkowa suwaka. Default: `10`.
* __disabled__ | `boolean`: kontroluje, czy wejście suwaka jest aktywne, czy nie. Jeśli jest ustawiona na wartość true, suwak będzie obecny na ekranie, choć wyszarzony.. Default: `false`.
* __inline__ | `boolean`: kontroluje ustawienie suwaka w linii z tekstem lub na zewnątrz. Default: `false`.
* __legend__ | `(string|node)`: napis na wejściu. Default: `none`.
* __max__ | `number`: Maksymalna wartość suwaka. Default: `100`.
* __maxLabel__ | `string`: etykieta wyświetlana po prawej stronie suwaka zamiast wartości maksymalnej. Default: `none`.
* __min__ | `number`: Minimalna wartość suwaka. Default: `0`.
* __minLabel__ | `string`: etykieta wyświetlana na lewo od suwaka zamiast wartości minimalnej. Default: `none`.
* __onChange__ | `function`: wywołanie zwrotne z nową wartością przy zmianie wartości suwaka. Default: `onChange() {}`.
* __precision__ | `number`: zaokrąglenie wejścia. Wartość zostanie zaokrąglona tak, aby nie zawierała więcej znaczących cyfr niż precyzja. Na przykład, jeśli chcemy używać tylko liczb całkowitych, użyjemy precyzji 10, a jeśli chcemy zaokrąglić do setek, użyjemy precyzji 0,001. Default: `10`.
* __step__ | `(number|string)`: wielkość kroku suwaka. Default: `1`.
* __hideTooltip__ | `boolean`: kontroluje, czy należy ukryć końcówkę narzędzia. Default: `false`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __numberInputStyle__ | `object`: Style CSS w linii dla elementów wejściowych liczb. Default: `{}`.
* __rangeInputStyle__ | `object`: Styl CSS w linii dla komponentu wejściowego zakresu. Default: `{}`.


## Przykłady

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
