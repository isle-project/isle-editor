---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Deze component wordt door de studenten gebruikt om de gegevens kort samen te vatten zoals ze worden gepresenteerd en om verschillende statistische tests uit te voeren.

## Opties

* __categorical__ | `array`: array van strings die de naam van elke categorische variabele aangeven. Default: `[]`.
* __quantitative__ | `array`: reeks reeksen strengen met aanduiding van de naam van elke kwantitatieve variabele. Default: `[]`.
* __data__ | `object`: data-object of -array te bekijken. Als het een object is, komen de toetsen overeen met kolomwaarden, terwijl een array een array van objecten verwacht met een naamsveld dat overeenkomt met elke kolom. Als je leerlingen de mogelijkheid wilt geven om een `.csv` bestand te importeren, stel dan de `data` optie in op `false`. Default: `{}`.
* __dataInfo__ | `object`: object met de toetsen 'naam', waarvan de waarde een string is, 'info', waarvan de waarde een array van strings is waarin elk element in de array een nieuwe regel is en 'variabelen', een object met toetsen als variabele namen en waarden als variabele beschrijvingen. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: boolean die aangeeft of de editor aan de gebruiker moet worden getoond. Default: `true`.
* __editorProps__ | `object`: object van eigenschappen die moeten worden doorgegeven aan de `TextEditor` (zie documentatie voor <TextEditor />). Default: `none`.
* __editorTitle__ | `string`: tekenreeks die de titel van de te tonen verkenner aangeeft. Default: `none`.
* __dataTable__ | `boolean`: booleaanse waarde die aangeeft of de gegevenstabel aan het zicht moet worden onttrokken. Default: `true`.
* __dataTableProps__ | `object`: eigenschappen doorgegeven aan de datatabelcomponent (zie documentatie voor <DataTable />). Default: `{}`.
* __history__ | `boolean`: controleert of er een historiek van uitgevoerde acties wordt weergegeven. Default: `true`.
* __reportMode__ | `string`: bepaalt of de wijzigingen in de editor voor iedereen worden gesynchroniseerd (`collaboratief`), tussen gebruikers in groepen (`groep`), of niet (`individueel`). Default: `'individual'`.
* __histogramDensities__ | `boolean`: booleaanse waarde die aangeeft of de histogramdichtheid moet worden weergegeven. Default: `true`.
* __models__ | `array`: array van strings die de modellen aangeven die op de gegevens kunnen passen. Default: `[
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
* __opened__ | `string`: pagina geopend bij het opstarten. Default: `none`.
* __plots__ | `array`: array van strings die aangeven welke percelen aan de gebruiker moeten worden getoond. Default: `[
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
* __questions__ | `(array|object)`: array van nodes van tekst- en vraagcomponenten die moeten worden weergegeven in een `questions` tabblad of een object van eigenschappen die worden doorgegeven aan een onderliggende `<Pages />` component. Default: `none`.
* __showTestDecisions__ | `boolean`: booleaanse aanduiding of de beslissingen die voor elke test worden genomen op basis van de berekende p-waarden moeten worden getoond. Default: `true`.
* __statistics__ | `array`: reeks reeksen van reeksen die aangeven welke samenvattende statistieken kunnen worden berekend. Default: `[
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
* __style__ | `object`: CSS inline stijlen voor hoofdcontainer. Default: `{}`.
* __tables__ | `array`: array van strings die aangeven welke tabellen kunnen worden aangemaakt op basis van de gegevens. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: array van objecten en toetsen die eventuele aangepaste tabbladen aangeven om toe te voegen. Default: `[]`.
* __tests__ | `array`: reeks reeksen strengen die aangeven welke hypothesetests moeten bevatten. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-squared Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: boolean die aangeeft of er variabele transformatiegereedschappen moeten worden weergegeven. Default: `true`.
* __onTutorialCompletion__ | `function`: functie die wordt aangeroepen wanneer de gebruiker de data explorer tutorial heeft voltooid. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: functie die wordt aangeroepen wanneer de gebruiker de data explorer tutorial start. Default: `onTutorialStart() {}`.


## Voorbeelden

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



