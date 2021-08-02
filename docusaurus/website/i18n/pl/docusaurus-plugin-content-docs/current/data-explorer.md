---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Ten komponent jest wykorzystywany przez uczniów do krótkiego podsumowania danych w trakcie ich prezentacji oraz do przeprowadzania różnych testów statystycznych.

## Opcje

* __categorical__ | `array`: tablica łańcuchów wskazująca nazwę każdej zmiennej kategorycznej. Default: `[]`.
* __quantitative__ | `array`: szereg ciągów znaków wskazujących nazwę każdej zmiennej ilościowej. Default: `[]`.
* __data__ | `object`: obiekt lub tablicę danych, które mają być przeglądane. Jeśli jest to obiekt, to klucze odpowiadają wartościom kolumn, podczas gdy tablica będzie oczekiwała tablicy obiektów z nazwanym polem odpowiadającym każdej kolumnie. Jeśli chcesz zezwolić studentom na import pliku `.csv`, ustaw opcję `data` na `fałszywy'. Default: `{}`.
* __dataInfo__ | `object`: obiekt zawierający klucze \"name\", którego wartością jest łańcuch, \"info\", którego wartością jest tablica łańcuchów, w której każdy element tablicy jest nowym wierszem oraz \"variables\", obiekt z kluczami jako nazwami zmiennych i wartościami jako opisami zmiennych. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: boolean wskazujący, czy edytor ma być pokazywany użytkownikowi. Default: `true`.
* __editorProps__ | `object`: obiekt właściwości, które mają zostać przekazane do `TextEditor` (patrz dokumentacja do <TextEditor />). Default: `none`.
* __editorTitle__ | `string`: ciąg znaków wskazujący tytuł badacza, który ma zostać wyświetlony. Default: `none`.
* __dataTable__ | `boolean`: wartość boolean wskazująca, czy należy ukryć tabelę danych z widoku. Default: `true`.
* __dataTableProps__ | `object`: właściwości przekazane do komponentu tabeli danych (patrz dokumentacja dla <DataTable />). Default: `{}`.
* __history__ | `boolean`: kontroluje, czy ma być wyświetlany dziennik historii przeprowadzonych działań. Default: `true`.
* __reportMode__ | `string`: kontroluje czy synchronizować zmiany w edytorze dla wszystkich (`współpracujących`), dla wszystkich użytkowników w grupach (`grupach`), czy też nie (`indywidualnie`). Default: `'individual'`.
* __histogramDensities__ | `boolean`: wartość boolean wskazująca, czy mają być wyświetlane gęstości histogramów. Default: `true`.
* __models__ | `array`: szereg łańcuchów wskazujących modele, które mogą zmieścić się na danych. Default: `[
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
* __opened__ | `string`: strona otwierana przy uruchamianiu. Default: `none`.
* __plots__ | `array`: tablica łańcuchów wskazująca, które wątki mają być pokazane użytkownikowi. Default: `[
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
* __questions__ | `(array|object)`: tablicę węzłów komponentów tekstowych i pytań do wyświetlenia w zakładce `questions` lub obiekt właściwości przekazywanych do bazowego komponentu `<Pages />` komponentu. Default: `none`.
* __showTestDecisions__ | `boolean`: boolean wskazujący, czy należy wykazać decyzje podjęte dla każdego badania w oparciu o obliczone wartości p. Default: `true`.
* __statistics__ | `array`: szereg łańcuchów wskazujących, które z podsumowań statystycznych mogą być obliczane. Default: `[
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
* __style__ | `object`: Style inline CSS dla kontenera głównego. Default: `{}`.
* __tables__ | `array`: tablica łańcuchów wskazująca, które tabele mogą być tworzone z danych. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: tablica obiektów i klawiszy wskazująca dowolne niestandardowe zakładki do dodania. Default: `[]`.
* __tests__ | `array`: szereg sznurków wskazujących, które hipoteza ma objąć. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-squared Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: boolean wskazujący, czy mają być wyświetlane narzędzia do zmiennej transformacji. Default: `true`.
* __onTutorialCompletion__ | `function`: funkcja wywoływana po ukończeniu przez użytkownika tutorialu eksploratora danych. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: funkcja wywoływana podczas uruchamiania przez użytkownika samouczka eksploratora danych. Default: `onTutorialStart() {}`.


## Przykłady

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



