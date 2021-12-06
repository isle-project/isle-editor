---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Túto zložku študenti používajú na stručné zhrnutie prezentovaných údajov a na vykonávanie rôznych štatistických testov.

## Možnosti

* __categorical__ | `array`: pole reťazcov označujúcich názov každej kategorickej premennej. Default: `[]`.
* __quantitative__ | `array`: pole reťazcov označujúcich názov každej kvantitatívnej premennej. Default: `[]`.
* __data__ | `object`: dátový objekt alebo pole, ktoré sa má zobraziť. Ak ide o objekt, kľúče zodpovedajú hodnotám stĺpcov, zatiaľ čo pri poli sa očakáva pole objektov s pomenovaným poľom, ktoré zodpovedá každému stĺpcu. Ak chcete študentom umožniť importovať súbor `.csv`, nastavte možnosť `data` na hodnotu `false`.. Default: `{}`.
* __dataInfo__ | `object`: objekt obsahujúci kľúče \'name\', ktorého hodnota je reťazec, \'info\', ktorého hodnota je pole reťazcov, v ktorom každý prvok poľa je nový riadok a \'variables\', objekt s kľúčmi ako názvami premenných a hodnotami ako popismi premenných. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: boolean určujúci, či sa má editor zobraziť používateľovi. Default: `true`.
* __editorProps__ | `object`: objekt vlastností, ktoré sa majú odovzdať `TextEditoru` (pozri dokumentáciu na <TextEditor />). Default: `none`.
* __editorTitle__ | `string`: reťazec označujúci názov prieskumníka, ktorý sa má zobraziť. Default: `none`.
* __dataTable__ | `boolean`: logická hodnota, ktorá určuje, či sa má tabuľka údajov skryť pred zobrazením. Default: `true`.
* __dataTableProps__ | `object`: vlastnosti odovzdané komponentu tabuľky údajov (pozri dokumentáciu na <DataTable />). Default: `{}`.
* __history__ | `boolean`: ovláda, či sa má zobraziť protokol histórie vykonaných akcií.. Default: `true`.
* __reportMode__ | `string`: určuje, či sa majú synchronizovať zmeny v editore pre všetkých (`collaborative`), pre všetkých používateľov v skupinách (`group`) alebo nie (`individual`).. Default: `'individual'`.
* __histogramDensities__ | `boolean`: logická hodnota, ktorá určuje, či sa má zobraziť hustota histogramu. Default: `true`.
* __models__ | `array`: pole reťazcov označujúcich modely, ktoré sa môžu použiť na údaje. Default: `[
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
* __opened__ | `string`: stránka otvorená pri spustení. Default: `none`.
* __plots__ | `array`: pole reťazcov označujúcich, ktoré grafy sa majú zobraziť používateľovi. Default: `[
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
* __questions__ | `(array|object)`: pole uzlov textových a otázkových komponentov, ktoré sa majú zobraziť na karte `questions`, alebo objekt vlastností odovzdaný základnému `<Pages />` komponentu. Default: `none`.
* __showTestDecisions__ | `boolean`: boolean určujúci, či sa majú zobrazovať rozhodnutia prijaté pre každý test na základe vypočítaných p-hodnot.. Default: `true`.
* __statistics__ | `array`: pole reťazcov označujúcich, ktoré súhrnné štatistiky sa môžu vypočítať. Default: `[
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
* __style__ | `object`: Riadkové štýly CSS pre hlavný kontajner. Default: `{}`.
* __tables__ | `array`: pole reťazcov označujúcich, ktoré tabuľky sa môžu vytvoriť z údajov. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: pole objektov a kľúčov označujúcich všetky vlastné karty, ktoré sa majú pridať. Default: `[]`.
* __tests__ | `array`: pole reťazcov označujúcich, ktoré testy hypotéz sa majú zahrnúť. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-square Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: boolean určujúci, či sa majú zobraziť nástroje na transformáciu premenných. Default: `true`.
* __onTutorialCompletion__ | `function`: funkcia vyvolaná, keď používateľ dokončí výukový program Prieskumník údajov. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: funkcia vyvolaná pri spustení výukového programu prieskumníka údajov. Default: `onTutorialStart() {}`.


## Príklady

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



