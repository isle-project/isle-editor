---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Denne komponent bruges af eleverne til kort at opsummere data, når de præsenteres, og til at udføre forskellige statistiske test.

## Indstillinger

* __categorical__ | `array`: array af strenge, der angiver navnet på hver enkelt kategorisk variabel. Default: `[]`.
* __quantitative__ | `array`: array af strenge, der angiver navnet på hver kvantitativ variabel. Default: `[]`.
* __data__ | `object`: dataobjekt eller array, der skal vises. Hvis det er et objekt, svarer nøglerne til kolonneværdierne, mens et array vil forvente et array af objekter med et navngivet felt svarende til hver kolonne. Hvis du ønsker at give eleverne mulighed for at importere en `.csv'-fil, skal du indstille `data'-indstillingen til at være `false`.. Default: `{}`.
* __dataInfo__ | `object`: objekt, der indeholder nøglerne \'name\', hvis værdi er en streng, \'info\', hvis værdi er et array af strenge, hvor hvert element i arrayet er en ny linje, og \'variables\', et objekt med nøgler som variabelnavne og værdier som variabelbeskrivelser. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: boolean, der angiver, om editoren skal vises for brugeren. Default: `true`.
* __editorProps__ | `object`: objekt med egenskaber, der skal overføres til `TextEditor` (se dokumentationen for <TextEditor />). Default: `none`.
* __editorTitle__ | `string`: streng, der angiver titlen på den explorer, der skal vises. Default: `none`.
* __dataTable__ | `boolean`: boolsk værdi, der angiver, om datatabellen skal skjules fra visning. Default: `true`.
* __dataTableProps__ | `object`: egenskaber, der overføres til datatabellens komponent (se dokumentationen for <DataTable />). Default: `{}`.
* __history__ | `boolean`: styrer, om der skal vises en historiklog over udførte handlinger. Default: `true`.
* __reportMode__ | `string`: styrer, om redigeringsændringer skal synkroniseres for alle (`collaborative`), på tværs af brugere i grupper (`group`) eller ikke (`individual`). Default: `'individual'`.
* __histogramDensities__ | `boolean`: boolsk værdi, der angiver, om der skal vises histogramtætheder. Default: `true`.
* __models__ | `array`: array af strenge, der angiver de modeller, der kan tilpasses til dataene. Default: `[
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
* __opened__ | `string`: side åbnes ved opstart. Default: `none`.
* __plots__ | `array`: array af strenge, der angiver, hvilke plot der skal vises for brugeren. Default: `[
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
* __questions__ | `(array|object)`: array af knuder med tekst- og spørgsmålskomponenter, der skal vises i en `questions` -fane, eller et objekt med egenskaber, der overføres til en underliggende `<Pages />` komponent. Default: `none`.
* __showTestDecisions__ | `boolean`: boolean, der angiver, om der skal vises de beslutninger, der er truffet for hver test på grundlag af de beregnede p-værdier. Default: `true`.
* __statistics__ | `array`: array af strenge, der angiver, hvilke sammenfattende statistikker der kan beregnes. Default: `[
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
* __style__ | `object`: CSS inline-stilarter for hovedbeholderen. Default: `{}`.
* __tables__ | `array`: array af strenge, der angiver, hvilke tabeller der kan oprettes ud fra dataene. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: array af objekter og nøgler, der angiver eventuelle brugerdefinerede faner, der skal tilføjes. Default: `[]`.
* __tests__ | `array`: array af strenge, der angiver, hvilke hypotesetests der skal medtages. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-squared Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: boolean, der angiver, om der skal vises værktøjer til transformation af variabler. Default: `true`.
* __onTutorialCompletion__ | `function`: funktion, der påkaldes, når brugeren har gennemført data explorer tutorial. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: funktion, der påkaldes, når brugeren starter data explorer tutorial. Default: `onTutorialStart() {}`.


## Eksempler

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



