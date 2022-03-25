---
id: number-input
title: Number Input
sidebar_label: Number Input
---

Un componente di input numerico. Può essere utilizzato come parte di un cruscotto ISLE o autonomo. In quest'ultimo caso, si vuole gestire le modifiche tramite l'attributo `onChange` o legare il valore ad una variabile globale tramite l'attributo `bind`.

## Opzioni

* __bind__ | `string`: nome della variabile globale per il numero da assegnare a. Default: `''`.
* __defaultValue__ | `number`: valore che indica il valore di default dell'ingresso all'avvio. Default: `0`.
* __disabled__ | `boolean`: booleano che indica se l'ingresso è attivo o meno. Default: `false`.
* __inline__ | `boolean`: indica se l'ingresso viene visualizzato in linea. Default: `false`.
* __legend__ | `(string|node)`: stringa che indica il testo visualizzato accanto al numero inserito. Default: `none`.
* __max__ | `number`: numero che indica il valore massimo che può essere inserito. Default: `null`.
* __min__ | `number`: numero che indica il più piccolo valore possibile che può essere inserito. Default: `null`.
* __numbersOnly__ | `boolean`: controlla se sono accettati solo numeri. Default: `true`.
* __placeholder__ | `string`: undefined. Default: `'0'`.
* __onBlur__ | `function`: funzione di richiamo da invocare quando si utilizza un metodo di sfocatura. Default: `onBlur() {}`.
* __onChange__ | `function`: funzione di callback da richiamare quando viene modificato l'ingresso del numero. Default: `onChange() {}`.
* __onKeyDown__ | `function`: funzione di richiamo da richiamare quando si preme un tasto qualsiasi. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: funzione di richiamo da richiamare quando viene inserito un tasto qualsiasi. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: funzione di richiamo da richiamare al rilascio del tasto. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: numero che indica le variazioni incrementali quando si utilizzano le frecce di incremento. Default: `1`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __inputStyle__ | `object`: Stili in linea CSS per l'elemento di ingresso. Default: `{}`.
* __value__ | `number`: valore del numero (per componente controllato). Default: `none`.
* __tooltip__ | `string`: stringa tooltip (se non impostata, il tooltip viene generato automaticamente). Default: `none`.
* __tooltipPlacement__ | `string`: direzione della punta dell'utensile. Default: `'left'`.


## Esempi

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

