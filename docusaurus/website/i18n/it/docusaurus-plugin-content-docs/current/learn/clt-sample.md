---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Una componente di apprendimento che illustra il Teorema del limite centrale (CLT) quando si effettua il campionamento da un set di dati fornito.

## Opzioni

* __data__ | `object (required)`: gli oggetti dati con le chiavi corrispondono ai nomi delle variabili e ai valori che contengono i valori delle rispettive variabili. Default: `none`.
* __hidePopulationStdev__ | `boolean`: nascondere la visualizzazione della deviazione standard della popolazione. Default: `false`.
* __samples__ | `(array<number>|number)`: una serie di numeri o un singolo numero che indica le dimensioni del campione che può essere disegnato. Default: `25`.
* __populationProbabilities__ | `boolean`: se visualizzare le equazioni per il calcolo delle probabilità di popolazione. Default: `false`.
* __quantiles__ | `boolean`: se mostrare strumento per il calcolo di eventuali quantili. Default: `false`.
* __variables__ | `array (required)`: nomi di variabili che possono essere campionati da. Default: `none`.


## Esempi

```jsx live
<LearnSampleCLT 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

