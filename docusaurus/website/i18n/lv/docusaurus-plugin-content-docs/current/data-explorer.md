---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Šo komponentu skolēni izmanto, lai īsi apkopotu iesniegtos datus un veiktu dažādus statistiskos testus.

## Iespējas

* __categorical__ | `array`: virkņu masīvs, kurā norādīts katra kategoriskā mainīgā nosaukums.. Default: `[]`.
* __quantitative__ | `array`: virkņu masīvs, kurā norādīts katra kvantitatīvā mainīgā nosaukums.. Default: `[]`.
* __data__ | `object`: skatāmo datu objektu vai masīvu. Ja tas ir objekts, atslēgas atbilst kolonnu vērtībām, bet masīva gadījumā tiek sagaidīts objektu masīvs ar nosauktu lauku, kas atbilst katrai kolonnai. Ja vēlaties, lai skolēniem būtu iespēja importēt `.csv` failu, iestatiet `data` opciju `false`.. Default: `{}`.
* __dataInfo__ | `object`: objekts, kas satur atslēgas \'name\', kura vērtība ir virkne, \'info\', kura vērtība ir virkņu masīvs, kurā katrs masīva elements ir jauna rinda, un \'variables\', objekts ar atslēgām kā mainīgo nosaukumiem un vērtībām kā mainīgo aprakstiem.. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: boolean, kas norāda, vai lietotājam parādīt redaktoru.. Default: `true`.
* __editorProps__ | `object`: rekvizītu objekts, kas jānodod `TextEditor` (skat. dokumentāciju <TextEditor />).. Default: `none`.
* __editorTitle__ | `string`: virkne, kas norāda rādāmā pārlūka nosaukumu.. Default: `none`.
* __dataTable__ | `boolean`: boolean vērtība, kas norāda, vai datu tabulu paslēpt no skata.. Default: `true`.
* __dataTableProps__ | `object`: datu tabulas komponentei nodotās īpašības (skat. dokumentāciju <DataTable />).. Default: `{}`.
* __history__ | `boolean`: kontrolē, vai tiek rādīts veikto darbību vēstures žurnāls.. Default: `true`.
* __reportMode__ | `string`: nosaka, vai sinhronizēt redaktora izmaiņas visiem lietotājiem (`kooperatīvs`), visiem lietotājiem grupās (`grupa`) vai nesinhronizēt (`individuāls`).. Default: `'individual'`.
* __histogramDensities__ | `boolean`: boolean vērtība, kas norāda, vai attēlot histogrammas blīvumu.. Default: `true`.
* __models__ | `array`: virkņu masīvs, kurā norādīti modeļi, kurus var piemērot datiem.. Default: `[
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
* __opened__ | `string`: lapa, kas tiek atvērta pie palaišanas. Default: `none`.
* __plots__ | `array`: virkņu masīvs, kas norāda, kurus laukumus parādīt lietotājam.. Default: `[
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
* __questions__ | `(array|object)`: teksta un jautājuma komponentu mezglu masīvs, kas jāattēlo `questions` cilnē, vai īpašību objekts, kas nodots pakārtotai sistēmai `<Pages />` komponentei. Default: `none`.
* __showTestDecisions__ | `boolean`: boolean, kas norāda, vai parādīt katram testam pieņemtos lēmumus, pamatojoties uz aprēķinātajām p-vērtībām.. Default: `true`.
* __statistics__ | `array`: virkņu masīvs, kas norāda, kuru kopsavilkuma statistiku var aprēķināt.. Default: `[
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
* __style__ | `object`: Galvenā konteinera CSS iebūvētie stili. Default: `{}`.
* __tables__ | `array`: virkņu masīvs, kas norāda, kuras tabulas var izveidot no datiem.. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: objektu un atslēgu masīvs, kurā norādītas visas pievienojamās cilnes.. Default: `[]`.
* __tests__ | `array`: virkņu masīvs, kas norāda, kurus hipotēžu testus iekļaut.. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-squared Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: boolean, kas norāda, vai attēlot mainīgo transformācijas rīkus.. Default: `true`.
* __onTutorialCompletion__ | `function`: funkcija, kas tiek izsaukta, kad lietotājs ir pabeidzis datu pārlūka pamācību.. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: funkcija, kas tiek izsaukta, kad lietotājs sāk datu pārlūka pamācību. Default: `onTutorialStart() {}`.


## Piemēri

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



