---
id: runner 
title: Runner
sidebar_label: Runner
---

Komponentas "Runner" įvykdys pateiktą funkciją vieną kartą arba tam tikru intervalu.

## Parinktys

* __active__ | `boolean`: kontroliuoja, ar bėgikas turi būti aktyvus. Įjungus funkciją `onEvaluate`, ji iškviečiama per nurodytą intervalą (arba vieną kartą).. Default: `true`.
* __interval__ | `number`: milisekundžių skaičius tarp `onEvaluate` iškvietimų. Jei intervalas nenustatytas, funkcija iškviečiama tik vieną kartą. Default: `none`.
* __onEvaluate__ | `function`: iškviečiama funkcija. Default: `onEvaluate() {}`.


## Pavyzdžiai

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



