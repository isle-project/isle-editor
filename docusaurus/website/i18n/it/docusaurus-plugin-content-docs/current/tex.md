---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

`TeX` è un elemento ISLE che può essere usato per visualizzare le equazioni LaTeX.

## Opzioni

* __raw__ | `(string|number) (required)`: La letterale "corda" LaTeX da rendere. Accetta anche i "numeri". Default: `none`.
* __displayMode__ | `boolean`: `booleano` che indica se visualizzare l'equazione in linea o in modalità di visualizzazione. Default: `false`.
* __numbered__ | `boolean`: controlla se visualizzare un numero di equazione per le equazioni del modo di visualizzazione. Default: `false`.
* __style__ | `object`: `oggetto` con coppie chiave-valore CSS da applicare al contenitore dell'equazione. Default: `{}`.
* __tag__ | `string`: Caratteri personalizzati visualizzati per le equazioni di visualizzazione sul lato destro. Il valore predefinito è il numero dell'equazione all'interno della lezione. Default: `none`.
* __elems__ | `object`: "oggetto" con "tasti" che indicano i caratteri LaTeX e i loro valori corrispondenti sono "oggetti" di configurazione per renderli interattivi. L'impostazione di un'opzione `tooltip` mostrerà un tooltip quando si passa sopra i caratteri LaTeX. Impostando una proprietà `variabile` verrà visualizzato un cursore di input per cambiare la rispettiva variabile di stato; in questo caso, sono supportate le proprietà aggiuntive `legend`, `min`, `max` e `step`. Default: `{}`.
* __popoverPlacement__ | `string`: posizione popover per gli `elems` specificati (sia `top`, `right`, `bottom`, o `left`). Default: `'bottom'`.
* __onPopover__ | `function`: richiamata `funzione` quando un popover di controllo viene attivato o disattivato; riceve lo stato di visualizzazione come booleano come unico argomento. Default: `onPopover() {}`.
* __onClick__ | `function`: richiamata `funzione` invocata ogni volta che un utente clicca sull'equazione. Default: `none`.


## Esempi

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



