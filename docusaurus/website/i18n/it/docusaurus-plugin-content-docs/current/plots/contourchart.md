---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Un grafico di contorno.

## Opzioni

* __data__ | `object (required)`: oggetto di array di valori per ogni variabile. Default: `none`.
* __x__ | `string (required)`: variabile dell'asse x. Default: `none`.
* __y__ | `string (required)`: variabile dell'asse y. Default: `none`.
* __overlayPoints__ | `boolean`: controlla se sovrapporre punti per ogni osservazione. Default: `false`.
* __smoothSpan__ | `number`: portata lisciante. Default: `0.66`.
* __regressionMethod__ | `array<string>`: array contenente "lineare" e/o "liscio" per sovrapporre una linea di regressione lineare e/o liscia. Default: `none`.
* __onSelected__ | `function`: richiamata quando i punti sono selezionati con valori x, y e i punti selezionati. Default: `onSelected() {}`.


## Esempi

```jsx live
<ContourChart 
    data={heartdisease} 
    x="Age"
    y="Cost"
/>
```

