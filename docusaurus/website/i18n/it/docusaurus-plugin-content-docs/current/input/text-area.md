---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Un componente dell'area di testo. Usato come componente a sé stante, le modifiche dovrebbero essere gestite tramite l'attributo `onChange`.

## Options

* __defaultValue__ | `string`: valore predefinito dell'area di testo. Default: `''`.
* __value__ | `string`: valore di testo (per componente controllato). Default: `none`.
* __disabled__ | `boolean`: controlla se l'area di testo deve essere disabilitata. Default: `false`.
* __legend__ | `(string|node)`: testo della leggenda. Default: `''`.
* __onBlur__ | `function`: funzione di callback invocata quando l'area di testo perde la messa a fuoco. Default: `onBlur() {}`.
* __onChange__ | `function`: funzione di richiamo richiamata con il nuovo testo quando il testo dell'area cambia. Default: `onChange() {}`.
* __placeholder__ | `string`: testo segnaposto. Default: `none`.
* __resizable__ | `string`: controlla se l'area di testo deve essere ridimensionabile (può essere sia "sia", "orizzontale", "verticale" o "nessuno"). Default: `'none'`.
* __rows__ | `number`: numero di righe. Default: `5`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Examples

```jsx live
<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
/>
```



