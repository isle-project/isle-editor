---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Această componentă este utilizată de elevi pentru a rezuma pe scurt datele prezentate și pentru a efectua diverse teste statistice.

## Opțiuni

* __categorical__ | `array`: matrice de șiruri de caractere care indică numele fiecărei variabile categorice. Default: `[]`.
* __quantitative__ | `array`: matrice de șiruri de caractere care indică numele fiecărei variabile cantitative. Default: `[]`.
* __data__ | `object`: obiectul sau matricea de date care urmează să fie vizualizată. Dacă este vorba de un obiect, cheile corespund valorilor coloanelor, în timp ce pentru un tablou se așteaptă un tablou de obiecte cu un câmp numit corespunzător fiecărei coloane. Dacă doriți să permiteți studenților posibilitatea de a importa un fișier `.csv`, setați opțiunea `data` la `false`.. Default: `{}`.
* __dataInfo__ | `object`: obiect care conține cheile \'name\', a cărui valoare este un șir de caractere, \'info\', a cărui valoare este un tablou de șiruri de caractere în care fiecare element din tablou este o nouă linie și \'variables\', un obiect cu chei ca nume de variabile și valori ca descrieri de variabile.. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: boolean care indică dacă editorul trebuie afișat utilizatorului. Default: `true`.
* __editorProps__ | `object`: obiect de proprietăți care să fie transmise către `TextEditor` (vezi documentația pentru <TextEditor />). Default: `none`.
* __editorTitle__ | `string`: șir care indică titlul exploratorului care urmează să fie afișat. Default: `none`.
* __dataTable__ | `boolean`: valoare booleană care indică dacă tabelul de date trebuie ascuns din vedere. Default: `true`.
* __dataTableProps__ | `object`: proprietăți transmise componentei tabel de date (a se vedea documentația pentru <DataTable />). Default: `{}`.
* __history__ | `boolean`: controlează dacă se afișează sau nu un jurnal istoric al acțiunilor efectuate. Default: `true`.
* __reportMode__ | `string`: controlează dacă se sincronizează modificările editorului pentru toată lumea (`collaborative`), între utilizatorii din grupuri (`group`) sau nu (`individual`). Default: `'individual'`.
* __histogramDensities__ | `boolean`: valoare booleană care indică dacă se afișează densitățile histogramei. Default: `true`.
* __models__ | `array`: matrice de șiruri de caractere care indică modelele care pot fi adaptate la date. Default: `[
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
* __opened__ | `string`: pagina deschisă la pornire. Default: `none`.
* __plots__ | `array`: matrice de șiruri de caractere care indică ce parcele trebuie afișate utilizatorului. Default: `[
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
* __questions__ | `(array|object)`: matrice de noduri de componente de text și de întrebări care urmează să fie afișate într-o filă `questions` sau un obiect de proprietăți transmise la un sistem subiacent `<Pages />` componentă. Default: `none`.
* __showTestDecisions__ | `boolean`: boolean care indică dacă trebuie afișate deciziile luate pentru fiecare test pe baza valorilor p calculate. Default: `true`.
* __statistics__ | `array`: matrice de șiruri de caractere care indică ce statistici sumare pot fi calculate. Default: `[
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
* __style__ | `object`: Stiluri CSS inline pentru containerul principal. Default: `{}`.
* __tables__ | `array`: matrice de șiruri de caractere care indică ce tabele pot fi create din date. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: matrice de obiecte și chei care indică orice file personalizate care trebuie adăugate. Default: `[]`.
* __tests__ | `array`: matrice de șiruri de caractere care indică ce teste de ipoteză trebuie incluse. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-squared Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: boolean care indică dacă se afișează sau nu instrumentele de transformare a variabilelor. Default: `true`.
* __onTutorialCompletion__ | `function`: funcție invocată atunci când utilizatorul a terminat tutorialul Data Explorer. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: funcție invocată atunci când utilizatorul pornește tutorialul Data Explorer. Default: `onTutorialStart() {}`.


## Exemple

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



