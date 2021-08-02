---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Ezt a komponenst a diákok arra használják, hogy röviden összefoglalják az adatokat, ahogyan azokat bemutatják, és különböző statisztikai teszteket végezzenek.

## Opciók

* __categorical__ | `array`: az egyes kategorikus változók nevét jelző karakterláncok tömbje. Default: `[]`.
* __quantitative__ | `array`: az egyes mennyiségi változók nevét jelző stringek tömbje. Default: `[]`.
* __data__ | `object`: megtekintendő adatobjektum vagy tömb. Ha objektumról van szó, akkor a kulcsok az oszlopértékeknek felelnek meg, míg egy tömb esetében objektumok tömbjét várja el, minden egyes oszlopnak megfelelő, megnevezett mezővel. Ha lehetővé kívánja tenni a tanulók számára a `.csv` fájl importálását, állítsa az `data` opciót `false`-ra.. Default: `{}`.
* __dataInfo__ | `object`: objektum, amely tartalmazza a \'név\' kulcsokat, amelyek értéke egy karakterlánc, \'info\', amelyek értéke egy karakterláncok tömbje, amelyben a tömb minden eleme egy új sor, és \'változók\', egy olyan objektum, amelynek kulcsai a változók nevei, értékei pedig a változók leírásai.. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: boolean, amely jelzi, hogy a szerkesztő megjelenjen-e a felhasználónak. Default: `true`.
* __editorProps__ | `object`: a `TextEditor`-nak átadandó tulajdonságok objektuma (lásd a dokumentációt a <TextEditor /> oldalon).. Default: `none`.
* __editorTitle__ | `string`: a megjelenítendő felfedező címét jelző karakterlánc. Default: `none`.
* __dataTable__ | `boolean`: boolean érték, amely jelzi, hogy elrejtse-e az adattáblát a nézetből. Default: `true`.
* __dataTableProps__ | `object`: az adattábla komponensnek átadott tulajdonságok (lásd a dokumentációt a <DataTable /> oldalon).. Default: `{}`.
* __history__ | `boolean`: szabályozza, hogy megjelenjen-e az elvégzett műveletek előzménynaplója. Default: `true`.
* __reportMode__ | `string`: szabályozza, hogy a szerkesztő módosításait mindenki számára (`collaborative`), a csoportok felhasználói között (`group`), vagy nem (`individual`) szinkronizálják-e.. Default: `'individual'`.
* __histogramDensities__ | `boolean`: boolean érték, amely jelzi, hogy a hisztogram sűrűsége megjelenjen-e. Default: `true`.
* __models__ | `array`: az adatokra illeszthető modelleket jelző karakterláncok tömbje. Default: `[
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
* __opened__ | `string`: indításkor megnyitott oldal. Default: `none`.
* __plots__ | `array`: stringek tömbje, amely jelzi, hogy mely ábrákat kell megmutatni a felhasználónak. Default: `[
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
* __questions__ | `(array|object)`: a `questions` lapon megjelenítendő szöveg- és kérdéskomponensek csomópontjainak tömbje, vagy a tulajdonságok egy objektuma, amelyet egy alapul szolgáló `<Pages />` komponensre. Default: `none`.
* __showTestDecisions__ | `boolean`: boolean, amely jelzi, hogy az egyes teszteknél a kiszámított p-értékek alapján hozott döntéseket meg kell-e jeleníteni.. Default: `true`.
* __statistics__ | `array`: stringekből álló tömb, amely jelzi, hogy mely összefoglaló statisztikák számolhatók ki.. Default: `[
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
* __style__ | `object`: CSS inline stílusok a fő konténerhez. Default: `{}`.
* __tables__ | `array`: stringek tömbje, amely jelzi, hogy az adatokból milyen táblák hozhatók létre. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: objektumok és kulcsok tömbje, amelyek a hozzáadandó egyéni fülekre utalnak. Default: `[]`.
* __tests__ | `array`: stringekből álló tömb, amely jelzi, hogy mely hipotézisteszteket kell bevonni.. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-squared Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: boolean, amely jelzi, hogy megjelenítse-e a változó transzformációs eszközöket. Default: `true`.
* __onTutorialCompletion__ | `function`: funkció, amely akkor hívódik meg, amikor a felhasználó befejezte az adatfeltáró oktatóprogramot.. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: funkció, amely akkor hívódik meg, amikor a felhasználó elindítja az adatfeltáró oktatóprogramot.. Default: `onTutorialStart() {}`.


## Példák

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



