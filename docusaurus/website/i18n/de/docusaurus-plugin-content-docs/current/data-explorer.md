---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Diese Komponente wird von den Schülern verwendet, um Daten kurz zusammenzufassen, während sie präsentiert werden, und um verschiedene statistische Tests durchzuführen.

## Optionen

* __categorical__ | `array`: Array von Strings, die den Namen jeder kategorialen Variablen angeben. Default: `[]`.
* __quantitative__ | `array`: Array von Strings, die den Namen jeder quantitativen Variablen angeben. Default: `[]`.
* __data__ | `object`: Datenobjekt oder Array, das angezeigt werden soll. Wenn es sich um ein Objekt handelt, entsprechen die Schlüssel den Spaltenwerten, während ein Array ein Array von Objekten mit einem benannten Feld erwartet, das jeder Spalte entspricht. Wenn Sie den Schülern die Möglichkeit geben möchten, eine "csv"-Datei zu importieren, setzen Sie die Option "data" auf "false". Default: `{}`.
* __dataInfo__ | `object`: Objekt mit den Schlüsseln \'name\', dessen Wert eine Zeichenkette ist, \'info\', dessen Wert ein Array von Zeichenketten ist, in dem jedes Element des Arrays eine neue Zeile ist, und \'variables\', ein Objekt mit Schlüsseln als Variablennamen und Werten als Variablenbeschreibungen. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: boolescher Wert, der angibt, ob der Editor dem Benutzer angezeigt werden soll. Default: `true`.
* __editorProps__ | `object`: Objekt mit Eigenschaften, die an den `TextEditor` übergeben werden (siehe Dokumentation zu <TextEditor />). Default: `none`.
* __editorTitle__ | `string`: String, der den Titel des anzuzeigenden Explorers angibt. Default: `none`.
* __dataTable__ | `boolean`: boolescher Wert, der angibt, ob die Datentabelle ausgeblendet werden soll. Default: `true`.
* __dataTableProps__ | `object`: Eigenschaften, die an die Datentabellenkomponente übergeben werden (siehe Dokumentation zu <DataTable />). Default: `{}`.
* __history__ | `boolean`: steuert, ob ein Verlaufsprotokoll der ausgeführten Aktionen angezeigt werden soll. Default: `true`.
* __reportMode__ | `string`: steuert, ob Editoränderungen für alle (`collaborative`), für Benutzer in Gruppen (`group`) oder nicht (`individual`) synchronisiert werden sollen. Default: `'individual'`.
* __histogramDensities__ | `boolean`: boolescher Wert, der angibt, ob Histogramm-Dichten angezeigt werden sollen. Default: `true`.
* __models__ | `array`: Array von Strings, die Modelle angeben, die an die Daten angepasst werden können. Default: `[
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
* __opened__ | `string`: beim Start geöffnete Seite. Default: `none`.
* __plots__ | `array`: Array von Strings, die angeben, welche Plots dem Benutzer angezeigt werden sollen. Default: `[
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
* __questions__ | `(array|object)`: Array mit Knoten von Text- und Fragekomponenten, die in einer Registerkarte `questions` angezeigt werden sollen, oder ein Objekt mit Eigenschaften, das an eine darunterliegende `<Pages />` Komponente. Default: `none`.
* __showTestDecisions__ | `boolean`: boolescher Wert, der angibt, ob die für jeden Test getroffenen Entscheidungen basierend auf den berechneten p-Werten angezeigt werden sollen. Default: `true`.
* __statistics__ | `array`: Array von Strings, die angeben, welche Zusammenfassungsstatistiken berechnet werden dürfen. Default: `[
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
* __style__ | `object`: CSS-Inlinestile für den Hauptcontainer. Default: `{}`.
* __tables__ | `array`: Array von Strings, die angeben, welche Tabellen aus den Daten erstellt werden dürfen. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: Array von Objekten und Schlüsseln, die alle hinzuzufügenden benutzerdefinierten Registerkarten angeben. Default: `[]`.
* __tests__ | `array`: Array von Strings, die angeben, welche Hypothesentests einbezogen werden sollen. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-squared Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: Boolescher Wert, der angibt, ob Werkzeuge zur Variablentransformation angezeigt werden sollen. Default: `true`.
* __onTutorialCompletion__ | `function`: Funktion, die aufgerufen wird, wenn der Benutzer das Data-Explorer-Tutorial abgeschlossen hat. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: Funktion, die aufgerufen wird, wenn der Benutzer das Datenexplorer-Tutorial startet. Default: `onTutorialStart() {}`.


## Beispiele

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



