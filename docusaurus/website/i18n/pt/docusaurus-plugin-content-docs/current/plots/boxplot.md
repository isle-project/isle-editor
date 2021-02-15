---
id: boxplot
title: Box Plot
sidebar_label: Box Plot
---

Um enredo de caixa.

## Options

* __data__ | `object (required)`: objeto de arrays de valor. Default: `none`.
* __variable__ | `(array|string) (required)`: variável a exibir. Default: `none`.
* __group__ | `array`: uma ou duas variáveis de agrupamento. Default: `[]`.
* __orientation__ | `string`: Orientação `vertical` ou `horizontal`.. Default: `'vertical'`.
* __overlayPoints__ | `boolean`: controla se devem ser sobrepostos pontos. Default: `false`.


## Examples

```jsx live
<BoxPlot 
    data={heartdisease} 
    variable="Cost"
/>
```

