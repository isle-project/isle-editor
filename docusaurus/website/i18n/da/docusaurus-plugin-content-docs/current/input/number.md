---
id: number-input
title: Number Input
sidebar_label: Number Input
---

En talindgangskomponent. Kan bruges som en del af et ISLE-dashboard eller som en selvstændig komponent. I sidstnævnte tilfælde skal du håndtere ændringer via `onChange`-attributten eller binde værdien til en global variabel via `bind`-attributten.

## Indstillinger

* __bind__ | `string`: navnet på den globale variabel for det nummer, der skal tildeles. Default: `''`.
* __defaultValue__ | `number`: værdi, der angiver inputets standardværdi ved opstart. Default: `0`.
* __disabled__ | `boolean`: boolean, der angiver, om indgangen er aktiv eller ej. Default: `false`.
* __inline__ | `boolean`: angiver, om input vises inline. Default: `false`.
* __legend__ | `(string|node)`: streng, der angiver den tekst, der vises ved siden af talindtastningen. Default: `none`.
* __max__ | `number`: tal, der angiver den maksimale værdi, der kan indsættes. Default: `null`.
* __min__ | `number`: tal, der angiver den mindste mulige værdi, der kan indsættes. Default: `null`.
* __numbersOnly__ | `boolean`: kontrollerer, om kun tal accepteres. Default: `true`.
* __placeholder__ | `string`: undefined. Default: `'0'`.
* __onBlur__ | `function`: callback-funktion, der skal påkaldes, når der anvendes en sløringsmetode. Default: `onBlur() {}`.
* __onChange__ | `function`: callback-funktion, der skal påkaldes, når talindtastningen ændres. Default: `onChange() {}`.
* __onKeyDown__ | `function`: callback-funktion, der skal påkaldes, når en tast trykkes ned. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: callback-funktion, der skal påkaldes, når en tast indtastes. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: callback-funktion, der skal påkaldes, når tasten slippes. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: tal, der angiver de trinvise ændringer ved brug af pilene til forøgelse. Default: `1`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __inputStyle__ | `object`: CSS inline-stilarter for indgangselement. Default: `{}`.
* __value__ | `number`: talværdi (for kontrolleret komponent). Default: `none`.
* __tooltip__ | `string`: tooltip-streng (hvis den ikke er indstillet, genereres tooltippet automatisk). Default: `none`.
* __tooltipPlacement__ | `string`: retning af værktøjstip. Default: `'left'`.


## Eksempler

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

