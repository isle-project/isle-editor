---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Seda komponenti kasutavad õpilased andmete esitamisel lühikese kokkuvõtte tegemiseks ja erinevate statistiliste testide tegemiseks.

## Valikud

* __categorical__ | `array`: stringide massiivi, mis näitab iga kategoorilise muutuja nime.. Default: `[]`.
* __quantitative__ | `array`: stringide massiivi, mis näitab iga kvantitatiivse muutuja nime. Default: `[]`.
* __data__ | `object`: vaadeldav andmeobjekt või -massiiv. Kui tegemist on objektiga, vastavad võtmed veergude väärtustele, samas kui massiivi puhul oodatakse objektide massiivi, mille igale veerule vastab nimeline väli. Kui soovite lubada õpilastele võimalust importida `.csv` faili, seadke `data` valikuks `false`.. Default: `{}`.
* __dataInfo__ | `object`: objekt, mis sisaldab võtmeid \'nimi\', mille väärtus on string, \'info\', mille väärtus on stringide massiivi, mille iga element on uus rida, ja \'muutujad\', objekt, mille võtmed on muutujate nimed ja väärtused on muutujate kirjeldused.. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: boolean, mis näitab, kas kasutajale kuvatakse redaktorit.. Default: `true`.
* __editorProps__ | `object`: objekt, mille omadused antakse üle `TextEditorile` (vt dokumentatsiooni <TextEditor />). Default: `none`.
* __editorTitle__ | `string`: string, mis näitab kuvatava exploreri pealkirja. Default: `none`.
* __dataTable__ | `boolean`: boolean-väärtus, mis näitab, kas andmetabelit varjatakse vaatamise eest.. Default: `true`.
* __dataTableProps__ | `object`: andmetabeli komponendile edastatud omadused (vt dokumentatsiooni <DataTable />). Default: `{}`.
* __history__ | `boolean`: kontrollib, kas kuvada teostatud tegevuste ajalooprotokoll. Default: `true`.
* __reportMode__ | `string`: kontrollib, kas sünkroniseerida redaktori muudatused kõigile (`collaborative`), rühmade kasutajatele (`group`) või mitte (`individual`).. Default: `'individual'`.
* __histogramDensities__ | `boolean`: boolean väärtus, mis näitab, kas kuvada histogrammi tihedust. Default: `true`.
* __models__ | `array`: stringide massiivi, mis näitab mudeleid, mida võib andmetele sobitada.. Default: `[
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
* __opened__ | `string`: käivitamisel avatud lehekülg. Default: `none`.
* __plots__ | `array`: stringide massiivi, mis näitab, milliseid graafikuid kasutajale näidata.. Default: `[
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
* __questions__ | `(array|object)`: teksti- ja küsimuskomponentide sõlmede massiivi, mis kuvatakse `questions` vahekaardil, või objekti omaduste objekti, mis on edastatud allolevasse `<Pages />` komponendile. Default: `none`.
* __showTestDecisions__ | `boolean`: boolean, mis näitab, kas näidata iga testi puhul tehtud otsuseid, mis põhinevad arvutatud p-väärtustel.. Default: `true`.
* __statistics__ | `array`: stringide massiivi, mis näitab, milliseid kokkuvõtlikke statistilisi andmeid võib arvutada.. Default: `[
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
* __style__ | `object`: CSS inline stiilid peamise konteineri jaoks. Default: `{}`.
* __tables__ | `array`: stringide massiivi, mis näitab, milliseid tabeleid võib andmetest luua.. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: objektide ja võtmete massiivi, mis näitab lisatavaid kohandatud vahekaarte. Default: `[]`.
* __tests__ | `array`: stringide massiivi, mis näitab, milliseid hüpoteesiteste tuleb kaasata. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-square Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: boolean, mis näitab, kas kuvada muutuja muundamise vahendeid. Default: `true`.
* __onTutorialCompletion__ | `function`: funktsioon, mida kutsutakse üles, kui kasutaja on lõpetanud andmeekspluateerija õpetuse. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: funktsioon, mis käivitub, kui kasutaja alustab andmeekspluateerija õpetust. Default: `onTutorialStart() {}`.


## Näited

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



