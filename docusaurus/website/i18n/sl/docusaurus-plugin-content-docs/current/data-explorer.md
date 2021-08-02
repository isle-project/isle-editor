---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

To komponento učenci uporabljajo za kratko povzemanje predstavljenih podatkov in izvajanje različnih statističnih testov.

## Možnosti

* __categorical__ | `array`: niz nizov, ki označujejo ime vsake kategorične spremenljivke. Default: `[]`.
* __quantitative__ | `array`: polje nizov, ki označuje ime vsake kvantitativne spremenljivke. Default: `[]`.
* __data__ | `object`: podatkovni objekt ali polje, ki ga je treba pregledati. Če gre za objekt, ključi ustrezajo vrednostim stolpcev, pri polju pa se pričakuje polje objektov z imenovanim poljem, ki ustreza vsakemu stolpcu. Če želite učencem omogočiti uvoz datoteke `.csv`, nastavite možnost `data` na vrednost `false`.. Default: `{}`.
* __dataInfo__ | `object`: objekt, ki vsebuje ključe \'name\', katerega vrednost je niz, \'info\', katerega vrednost je polje nizov, v katerem je vsak element polja nova vrstica, in \'variables\', objekt s ključi kot imeni spremenljivk in vrednostmi kot opisi spremenljivk. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: boolean, ki označuje, ali naj se uporabniku prikaže urejevalnik.. Default: `true`.
* __editorProps__ | `object`: predmet lastnosti, ki se posredujejo urejevalniku `TextEditor` (glej dokumentacijo za <TextEditor />). Default: `none`.
* __editorTitle__ | `string`: niz, ki označuje naslov raziskovalca, ki se prikaže.. Default: `none`.
* __dataTable__ | `boolean`: logična vrednost, ki označuje, ali naj se podatkovna tabela skrije pred pogledom.. Default: `true`.
* __dataTableProps__ | `object`: lastnosti, posredovane komponenti podatkovne tabele (glej dokumentacijo za <DataTable />). Default: `{}`.
* __history__ | `boolean`: nadzoruje, ali naj se prikaže dnevnik zgodovine izvedenih dejanj.. Default: `true`.
* __reportMode__ | `string`: nadzoruje, ali naj se spremembe urejevalnika sinhronizirajo za vse (`sodelovanje`), med uporabniki v skupinah (`skupina`) ali ne (`posameznik`).. Default: `'individual'`.
* __histogramDensities__ | `boolean`: logična vrednost, ki označuje, ali naj se prikaže gostota histograma. Default: `true`.
* __models__ | `array`: niz nizov, ki označujejo modele, ki jih je mogoče uporabiti za podatke.. Default: `[
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
* __opened__ | `string`: stran, odprta ob zagonu. Default: `none`.
* __plots__ | `array`: niz nizov, ki določajo, katere parcele naj se prikažejo uporabniku.. Default: `[
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
* __questions__ | `(array|object)`: polje vozlišč sestavnih delov besedila in vprašanj, ki se prikažejo v zavihku `questions`, ali predmet lastnosti, ki se posreduje osnovnemu `<Pages />` komponente. Default: `none`.
* __showTestDecisions__ | `boolean`: boolean, ki označuje, ali naj se prikažejo odločitve za vsak test na podlagi izračunanih p-vrednosti.. Default: `true`.
* __statistics__ | `array`: polje nizov, ki določajo, katere zbirne statistike se lahko izračunajo.. Default: `[
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
* __style__ | `object`: Vnosni slogi CSS za glavno posodo. Default: `{}`.
* __tables__ | `array`: niz nizov, ki določajo, katere tabele se lahko ustvarijo iz podatkov.. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: polje predmetov in ključev, ki označujejo zavihke po meri, ki jih želite dodati. Default: `[]`.
* __tests__ | `array`: polje nizov, ki določajo, katere teste hipotez je treba vključiti. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-squared Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: boolean, ki označuje, ali se prikažejo orodja za preoblikovanje spremenljivk.. Default: `true`.
* __onTutorialCompletion__ | `function`: funkcija, ki se sproži, ko uporabnik zaključi učno gradivo raziskovalca podatkov.. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: funkcija, ki se sproži, ko uporabnik zažene učbenik za raziskovalca podatkov. Default: `onTutorialStart() {}`.


## Primeri

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



