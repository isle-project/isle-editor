---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Questo componente è utilizzato dagli studenti per riassumere brevemente i dati così come vengono presentati ed eseguire vari test statistici.

## Opzioni

* __categorical__ | `array`: array di stringhe che indicano il nome di ogni variabile categoriale. Default: `[]`.
* __quantitative__ | `array`: array di stringhe che indicano il nome di ogni variabile quantitativa. Default: `[]`.
* __data__ | `object`: oggetto dati o array da visualizzare. Se si tratta di un oggetto, le chiavi corrispondono ai valori delle colonne, mentre un array si aspetterà un array di oggetti con un campo denominato corrispondente ad ogni colonna. Se si desidera consentire agli studenti la possibilità di importare un file `.csv`, impostare l'opzione `data` come `falso`. Default: `{}`.
* __dataInfo__ | `object`: oggetto contenente le chiavi \'nome\', il cui valore è una stringa, \'info\', il cui valore è un array di stringhe in cui ogni elemento dell'array è una nuova riga e \'variabili\', un oggetto con chiavi come nomi di variabili e valori come descrizioni di variabili. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: booleano che indica se mostrare l'editor all'utente. Default: `true`.
* __editorProps__ | `object`: oggetto delle proprietà da passare al `TextEditor` (vedere documentazione per <TextEditor />). Default: `none`.
* __editorTitle__ | `string`: stringa che indica il titolo dell'esploratore da visualizzare. Default: `none`.
* __dataTable__ | `boolean`: valore booleano che indica se nascondere la tabella dei dati alla vista. Default: `true`.
* __dataTableProps__ | `object`: proprietà passate al componente tabella dati (vedi documentazione per <DataTable />). Default: `{}`.
* __history__ | `boolean`: controlla se visualizzare un registro cronologico delle azioni effettuate. Default: `true`.
* __reportMode__ | `string`: controlla se sincronizzare i cambiamenti dell'editor per tutti (`collaborative`), tra gli utenti in gruppi (`gruppo`), oppure no (`individuale`). Default: `'individual'`.
* __histogramDensities__ | `boolean`: valore booleano che indica se visualizzare le densità degli istogrammi. Default: `true`.
* __models__ | `array`: array di stringhe che indicano i modelli che possono essere adattati ai dati. Default: `[
  'Simple Linear Regression',
  'Multiple Linear Regression',
  'LASSO',
  'Decision Tree',
  'Random Forest',
  'Logistic Regression',
  'Naive Bayes',
  'PCA',
  'Hierarchical Clustering',
  'kmeans'
]`.
* __opened__ | `string`: pagina aperta all'avvio. Default: `none`.
* __plots__ | `array`: array di stringhe che indicano quali trame mostrare all'utente. Default: `[
  'Bar Chart',
  'Pie Chart',
  'Mosaic Plot',
  'Histogram',
  'Interval Plot',
  'Box Plot',
  'Line Plot',
  'Scatterplot',
  'Scatterplot Matrix',
  'Heat Map',
  'Contour Chart',
  'Violin Plot',
  'QQ Plot'
]`.
* __questions__ | `(array|object)`: array di nodi di componenti di testo e domande da visualizzare in una scheda `questions` o un oggetto di proprietà passato a un `<Pages />` componente. Default: `none`.
* __showTestDecisions__ | `boolean`: booleano che indica se mostrare le decisioni prese per ogni test in base ai valori p calcolati. Default: `true`.
* __statistics__ | `array`: array di stringhe che indicano quali statistiche riassuntive possono essere calcolate. Default: `[
  'Mean',
  'Median',
  'Min',
  'Max',
  'Range',
  'Interquartile Range',
  'Standard Deviation',
  'Variance',
  'Correlation',
  'Correlation Matrix',
  'Skewness',
  'Excess Kurtosis',
  'First Quartile',
  'Third Quartile',
  'Quantile',
  'Five-Number Summary'
]`.
* __style__ | `object`: Stili in linea CSS per il contenitore principale. Default: `{}`.
* __tables__ | `array`: array di stringhe che indicano quali tabelle possono essere create dai dati. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: array di oggetti e chiavi che indicano eventuali schede personalizzate da aggiungere. Default: `[]`.
* __tests__ | `array`: serie di stringhe che indicano quali test di ipotesi includere. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-square Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: booleano che indica se visualizzare gli strumenti di trasformazione delle variabili. Default: `true`.
* __onTutorialCompletion__ | `function`: funzione invocata quando l'utente ha completato il tutorial di data explorer. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: funzione invocata quando l'utente avvia il tutorial di data explorer. Default: `onTutorialStart() {}`.


## Esempi

In creating a data explorer, one needs a *.json dataset. This step may be accomplished by including the following in the header of a *.isle file:

```js
require:
    dataName: "./dataName.json"
```

Consider a dataset called "heartdisease" with the following variables:
* __Gender__: _Categorical_
* __Drugs__: _Categorical_
* __Complications__: _Categorical_
* __Cost__: _Quantitative_
* __Age__: _Quantitative_
* __Interventions__: _Quantitative_
* __ERVisit__: _Quantitative_
* __Comorbidities__: _Quantitative_
* __Duration__: _Quantitative_

We will include the explorer with the following code:

```jsx live
<DataExplorer 
    id="heartdisease"
    data={heartdisease} 
    categorical={[ 'Gender', 'Drugs', 'Complications' ]}
    quantitative={[ 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
    tests={[]}
/>
```



