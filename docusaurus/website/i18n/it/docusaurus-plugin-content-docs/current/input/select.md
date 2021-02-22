---
id: select-input
title: Select Input
sidebar_label: Select Input
---

Un componente di ingresso selezionato. Può essere utilizzato come parte di un cruscotto ISLE o autonomo. In quest'ultimo caso, si desidera gestire le modifiche tramite l'attributo `onChange` o legare il valore ad una variabile globale tramite l'attributo `bind`.

## Opzioni

* __bind__ | `string`: nome della variabile globale per il numero da assegnare a. Default: `''`.
* __clearable__ | `boolean`: valore booleano che indica se si può chiarire la scelta o le scelte effettuate. Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: valore predefinito dell'ingresso all'avvio. Default: `none`.
* __disabled__ | `boolean`: controlla se l'ingresso è attivo o meno. Default: `false`.
* __inline__ | `boolean`: indica se l'ingresso viene visualizzato in linea. Default: `false`.
* __legend__ | `(string|node)`: testo visualizzato accanto all'input. Default: `''`.
* __menuPlacement__ | `string`: posizionamento del menu in relazione al controllo (sia `auto`, `top`, o `bottom`). Default: `'auto'`.
* __multi__ | `boolean`: controlla se si possono selezionare più risposte. Default: `false`.
* __onChange__ | `function`: funzione di richiamo da invocare quando si effettua una scelta. Default: `onChange() {}`.
* __options__ | `array`: array di indicazione delle scelte disponibili per l'utente. Default: `[]`.
* __placeholder__ | `string`: valore da visualizzare prima di una scelta iniziale. Default: `none`.
* __tooltip__ | `string`: testo visualizzato quando si passa sopra la legenda. Default: `none`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Esempi

```jsx live
<SelectInput
    legend="Choose the test direction"
    defaultValue="two-sided"
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```

