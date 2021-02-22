---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

Un componente di ingresso proporzionato. Può essere utilizzato come parte di un cruscotto ISLE o autonomo. In quest'ultimo caso, si vuole gestire le modifiche tramite l'attributo `onChange` o legare il valore ad una variabile globale tramite l'attributo `bind`.

## Opzioni

* __colors__ | `array<string>`: gamma di colori per i componenti del grafico a torta. Se non definita, verrà utilizzata una scala di colori personalizzata. Default: `none`.
* __disabled__ | `boolean`: controlla se il campo di ingresso è disattivato. Default: `false`.
* __height__ | `number`: proporzioni altezza di ingresso (in px). Default: `200`.
* __legends__ | `array`: etichette di gruppo. Default: `[]`.
* __onChange__ | `function`: funzione di richiamo da invocare quando si effettua una scelta. Default: `onChange(){}`.
* __precision__ | `number`: precisione di visualizzazione dei valori delle proporzioni. Default: `1`.
* __step__ | `number`: il passo delle frecce che si vedono quando si posiziona il cursore sopra la casella di immissione. Default: `0.1`.


## Esempi

```jsx live
<ProportionsInput
    user
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```

