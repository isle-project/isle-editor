---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

Visualizzazione della trama.

## Opzioni

* __data__ | `array (required)`: array di dati. Default: `none`.
* __draggable__ | `boolean`: controlla se la trama deve essere trascinabile. Default: `false`.
* __editable__ | `boolean`: controlla se le etichette della trama creata sono modificabili. Default: `false`.
* __id__ | `string`: identificatore di componente. Default: `none`.
* __layout__ | `object`: Oggetto del layout del lotto. Default: `{}`.
* __config__ | `object`: undefined. Default: `{}`.
* __legendButtons__ | `boolean`: controlla se visualizzare i pulsanti per la modifica della legenda. Default: `true`.
* __meta__ | `object`: trama meta-informazioni. Default: `none`.
* __revision__ | `number`: quando fornito, fa sì che il grafico si aggiorni quando il valore di revisione viene incrementato. Default: `none`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onAfterPlot__ | `function`: funzione di richiamo invocata ogni volta che viene tracciato un grafico. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: funzione di richiamo richiamata quando un elemento viene cliccato. Default: `onClick() {}`.
* __onInitialized__ | `function`: callback invocato una volta inizializzato il grafico; chiamato con figura (oggetto con tre tasti corrispondenti ai puntelli di input: `data`, `layout` e `frames`) e il nodo DOM `graphDiv`.. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: funzione di richiamo richiamata quando si fa clic sulla voce della legenda. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: funzione di richiamo richiamata quando si fa doppio clic sull'elemento della legenda. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: funzione di richiamo richiamata quando il relayout è attivato. Default: `onRelayout() {}`.
* __onSelected__ | `function`: funzione di richiamo richiamata quando gli elementi sono selezionati. Default: `onSelected() {}`.
* __onShare__ | `function`: funzione di richiamo richiamata quando si clicca sul pulsante "Condividi. Default: `none`.
* __removeButtons__ | `boolean`: controlla se rimuovere tutti i pulsanti (a parte il pulsante a schermo intero se abilitato). Default: `false`.
* __toggleFullscreen__ | `boolean`: controlla se consentire la visualizzazione del grafico in modalità a schermo intero. Default: `true`.


## Esempi

```jsx live
<Plotly
    data={[{
        values: [ 24, 7, 0.5 ],
        labels: [ 'English', 'Spanish', 'Other' ],
        type: 'pie'
            }]}
    layout={{ width: 300 }}
/>
```

