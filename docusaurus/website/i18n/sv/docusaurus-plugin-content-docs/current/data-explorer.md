---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Den här komponenten används av eleverna för att kort sammanfatta data som presenteras och utföra olika statistiska tester.

## Alternativ

* __categorical__ | `array`: En array av strängar som anger namnet på varje kategorisk variabel.. Default: `[]`.
* __quantitative__ | `array`: en array av strängar som anger namnet på varje kvantitativ variabel.. Default: `[]`.
* __data__ | `object`: dataobjekt eller matris som ska visas. Om det är ett objekt motsvarar nycklarna kolumnvärdena, medan en array förväntar sig en array av objekt med ett namngivet fält som motsvarar varje kolumn. Om du vill ge eleverna möjlighet att importera en .csv-fil, ställ in alternativet `data` till `false`.. Default: `{}`.
* __dataInfo__ | `object`: objekt som innehåller nycklarna \'name\', vars värde är en sträng, \'info\', vars värde är en array av strängar där varje element i arrayen är en ny rad och \'variables\', ett objekt med nycklar som variabelnamn och värden som variabelbeskrivningar.. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: Boolean som anger om redigeraren ska visas för användaren.. Default: `true`.
* __editorProps__ | `object`: objekt med egenskaper som ska skickas till `TextEditor` (se dokumentationen för <TextEditor />). Default: `none`.
* __editorTitle__ | `string`: sträng som anger titeln på den utforskare som ska visas. Default: `none`.
* __dataTable__ | `boolean`: Boolsk värde som anger om datatabellen ska döljas från visning.. Default: `true`.
* __dataTableProps__ | `object`: Egenskaper som skickas till datatabellskomponenten (se dokumentationen för <DataTable />).. Default: `{}`.
* __history__ | `boolean`: Kontrollerar om en historisk logg över utförda åtgärder ska visas.. Default: `true`.
* __reportMode__ | `string`: styr om ändringar i redigeraren ska synkroniseras för alla (`collaborative`), mellan användare i grupper (`group`) eller inte (`individual`).. Default: `'individual'`.
* __histogramDensities__ | `boolean`: Booleanskt värde som anger om histogramtätheter ska visas.. Default: `true`.
* __models__ | `array`: en rad strängar som anger de modeller som kan anpassas till uppgifterna.. Default: `[
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
* __opened__ | `string`: sida som öppnas vid start. Default: `none`.
* __plots__ | `array`: en rad strängar som anger vilka tomter som ska visas för användaren.. Default: `[
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
* __questions__ | `(array|object)`: matris av noder med text- och frågekomponenter som ska visas i en flik på `questions` eller ett objekt med egenskaper som överförs till en underliggande `<Pages />` komponent. Default: `none`.
* __showTestDecisions__ | `boolean`: Boolean som anger om besluten som fattats för varje test baserat på de beräknade p-värdena ska visas.. Default: `true`.
* __statistics__ | `array`: en rad strängar som anger vilken sammanfattande statistik som kan beräknas.. Default: `[
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
* __style__ | `object`: CSS-stilar för huvudbehållaren. Default: `{}`.
* __tables__ | `array`: en rad strängar som anger vilka tabeller som kan skapas från uppgifterna.. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: matris med objekt och nycklar som anger vilka anpassade flikar som ska läggas till.. Default: `[]`.
* __tests__ | `array`: en rad strängar som anger vilka hypotesprövningar som ska inkluderas.. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-square Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: Boolean som anger om verktyg för omvandling av variabler ska visas.. Default: `true`.
* __onTutorialCompletion__ | `function`: funktion som anropas när användaren har slutfört dataexploratorns handledning. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: funktion som anropas när användaren startar dataexploratorns handledning. Default: `onTutorialStart() {}`.


## Exempel

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



