---
id: text-input
title: Text Input
sidebar_label: Text Input
---

Un componente per l'inserimento di testo. Può essere utilizzato come parte di un cruscotto ISLE o autonomo. In quest'ultimo caso, si desidera gestire le modifiche tramite l'attributo `onChange` o legare il valore ad una variabile globale tramite l'attributo `bind`.

## Opzioni

* __bind__ | `string`: nome della variabile globale per il numero da assegnare a. Default: `none`.
* __defaultValue__ | `string`: Un valore che indica il valore di default dell'ingresso all'inizio. Default: `''`.
* __value__ | `string`: valore di testo (per componente controllato). Default: `none`.
* __legend__ | `(string|node)`: Una stringa che indica il testo visualizzato accanto al numero inserito. Default: `''`.
* __inline__ | `boolean`: Indica se l'ingresso viene visualizzato in linea. Default: `false`.
* __onBlur__ | `function`: funzione di callback invocata quando l'area di testo perde la messa a fuoco. Default: `onBlur() {}`.
* __onChange__ | `function`: Una funzione da richiamare quando viene modificato un valore di testo. Default: `onChange() {}`.
* __onKeyDown__ | `function`: funzione di richiamo da richiamare quando si preme un tasto qualsiasi. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: funzione di richiamo da richiamare quando viene inserito un tasto qualsiasi. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: funzione di richiamo da richiamare al rilascio del tasto. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: Una stringa che indica il valore da visualizzare prima della scelta iniziale. Default: `none`.
* __width__ | `number`: Un numero che indica la larghezza dell'ingresso in pixel. Default: `80`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Esempi

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

