---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

Un componente di ingresso a cursore. Può essere utilizzato come parte di un cruscotto ISLE o autonomo. In quest'ultimo caso, si vuole gestire le modifiche tramite l'attributo `onChange` o legare il valore ad una variabile globale tramite l'attributo `bind`.

## Options

* __defaultValue__ | `number`: Il valore di partenza del cursore. Default: `10`.
* __disabled__ | `boolean`: controlla se l'ingresso cursore è attivo o meno. Se impostato su true, il cursore sarà presente sullo schermo, anche se in grigio. Default: `false`.
* __inline__ | `boolean`: controlla se posizionare il cursore in linea con il testo o all'esterno. Default: `false`.
* __legend__ | `(string|node)`: didascalia dell'ingresso. Default: `none`.
* __max__ | `number`: Il valore massimo del cursore. Default: `100`.
* __maxLabel__ | `string`: etichetta da visualizzare a destra del cursore al posto del valore massimo. Default: `none`.
* __min__ | `number`: Il valore minimo del cursore. Default: `0`.
* __minLabel__ | `string`: etichetta da visualizzare a sinistra del cursore invece del valore minimo. Default: `none`.
* __onChange__ | `function`: richiamata con il nuovo valore quando cambia il valore dello slider. Default: `onChange() {}`.
* __precision__ | `number`: arrotondamento dell'ingresso. Il valore sarà arrotondato per non avere cifre più significative della precisione. Per esempio, se si desidera utilizzare solo numeri interi, si utilizzerà una precisione di 10, mentre se si desidera arrotondare al centinaio, si utilizzerà una precisione di 0,001. Default: `10`.
* __step__ | `(number|string)`: dimensione del passo del cursore. Default: `1`.
* __hideTooltip__ | `boolean`: controlla se nascondere il tooltip. Default: `false`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __numberInputStyle__ | `object`: Stili in linea CSS per il componente di input del numero. Default: `{}`.
* __rangeInputStyle__ | `object`: Stile CSS in linea per il componente di ingresso della gamma. Default: `{}`.


## Examples

```jsx live
<SliderInput
    legend="Success Probability"
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```



