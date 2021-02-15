---
id: violinplot
title: Violin Plot
sidebar_label: Violin Plot
---

Spisek skrzypcowy.

## Options

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variable__ | `string (required)`: zmienna do wyświetlania. Default: `none`.
* __group__ | `string`: zmienna grupowania. Default: `none`.
* __showBox__ | `boolean`: kontroluje, czy w środku ma być wyświetlany wykres skrzynkowy. Default: `false`.


## Examples

```jsx live
<ViolinPlot 
    data={heartdisease} 
    variable="Interventions"
/>
```

