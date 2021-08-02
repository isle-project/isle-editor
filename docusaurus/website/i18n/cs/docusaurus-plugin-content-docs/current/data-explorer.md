---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Tuto složku studenti používají ke stručnému shrnutí prezentovaných dat a k provádění různých statistických testů.

## Možnosti

* __categorical__ | `array`: pole řetězců označující název každé kategoriální proměnné.. Default: `[]`.
* __quantitative__ | `array`: pole řetězců označující název každé kvantitativní proměnné. Default: `[]`.
* __data__ | `object`: datový objekt nebo pole, které se má zobrazit. Pokud se jedná o objekt, klíče odpovídají hodnotám sloupců, zatímco u pole se očekává pole objektů s pojmenovaným polem odpovídajícím každému sloupci. Pokud chcete studentům umožnit importovat soubor `.csv`, nastavte volbu `data` na hodnotu `false`.. Default: `{}`.
* __dataInfo__ | `object`: objekt obsahující klíče \'name\', jehož hodnota je řetězec, \'info\', jehož hodnota je pole řetězců, v němž každý prvek pole je nový řádek, a \'variables\', objekt s klíči jako názvy proměnných a hodnotami jako popisy proměnných.. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: boolean určující, zda se má editor uživateli zobrazit.. Default: `true`.
* __editorProps__ | `object`: objekt vlastností, které mají být předány `TextEditoru` (viz dokumentace na <TextEditor />).. Default: `none`.
* __editorTitle__ | `string`: řetězec označující název průzkumníka, který se má zobrazit.. Default: `none`.
* __dataTable__ | `boolean`: boolean hodnota určující, zda se má tabulka dat skrýt před zobrazením.. Default: `true`.
* __dataTableProps__ | `object`: vlastnosti předávané komponentě datové tabulky (viz dokumentace na <DataTable />).. Default: `{}`.
* __history__ | `boolean`: určuje, zda se má zobrazit protokol historie provedených akcí.. Default: `true`.
* __reportMode__ | `string`: určuje, zda se mají změny editoru synchronizovat pro všechny (`spolupráce`), pro uživatele ve skupinách (`skupina`), nebo ne (`individuální`).. Default: `'individual'`.
* __histogramDensities__ | `boolean`: logická hodnota určující, zda se má zobrazit hustota histogramu.. Default: `true`.
* __models__ | `array`: pole řetězců označujících modely, které lze na data napasovat.. Default: `[
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
* __opened__ | `string`: stránka otevřená při spuštění. Default: `none`.
* __plots__ | `array`: pole řetězců určujících, které grafy se mají uživateli zobrazit.. Default: `[
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
* __questions__ | `(array|object)`: pole uzlů textových a otázkových komponent, které se mají zobrazit na kartě `questions`, nebo objekt vlastností předávaný podkladovému modulu `<Pages />` komponenty. Default: `none`.
* __showTestDecisions__ | `boolean`: boolean určující, zda se mají zobrazit rozhodnutí učiněná pro každý test na základě vypočtených p-hodnot.. Default: `true`.
* __statistics__ | `array`: pole řetězců označujících, které souhrnné statistiky lze vypočítat.. Default: `[
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
* __style__ | `object`: Řádkové styly CSS pro hlavní kontejner. Default: `{}`.
* __tables__ | `array`: pole řetězců označujících, které tabulky lze z dat vytvořit.. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: pole objektů a klíčů označujících všechny vlastní karty, které chcete přidat.. Default: `[]`.
* __tests__ | `array`: pole řetězců určujících, které testy hypotéz mají být zahrnuty.. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-squared Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: boolean určující, zda se mají zobrazit nástroje pro transformaci proměnných. Default: `true`.
* __onTutorialCompletion__ | `function`: funkce vyvolaná po dokončení výukového kurzu průzkumníka dat.. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: funkce vyvolaná při spuštění výukového kurzu průzkumníka dat.. Default: `onTutorialStart() {}`.


## Příklady

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



