---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Šį komponentą mokiniai naudoja trumpai apibendrinti pateiktus duomenis ir atlikti įvairius statistinius testus.

## Parinktys

* __categorical__ | `array`: eilučių masyvas, nurodantis kiekvieno kategorinio kintamojo pavadinimą.. Default: `[]`.
* __quantitative__ | `array`: eilučių masyvas, nurodantis kiekvieno kiekybinio kintamojo pavadinimą. Default: `[]`.
* __data__ | `object`: peržiūrimas duomenų objektas arba masyvas. Jei tai objektas, raktai atitinka stulpelių reikšmes, o iš masyvo tikimasi gauti objektų masyvą, kuriame kiekvienam stulpeliui atitinka pavadintas laukas. Jei norite, kad mokiniai galėtų importuoti `.csv` failą, nustatykite `data` parinktį `false`.. Default: `{}`.
* __dataInfo__ | `object`: objektas, kuriame yra raktai \'name\', kurio reikšmė yra eilutė, \'info\', kurio reikšmė yra eilučių masyvas, kuriame kiekvienas masyvo elementas yra nauja eilutė, ir \'variables\', objektas, kurio raktai yra kintamųjų vardai, o reikšmės - kintamųjų aprašymai.. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: loginis rodiklis, nurodantis, ar naudotojui rodyti redaktorių.. Default: `true`.
* __editorProps__ | `object`: savybių objektas, kurį reikia perduoti `TextEditor` (žr. <TextEditor /> dokumentaciją).. Default: `none`.
* __editorTitle__ | `string`: eilutė, nurodanti rodomą tyrėjo pavadinimą. Default: `none`.
* __dataTable__ | `boolean`: loginė reikšmė, rodanti, ar duomenų lentelę paslėpti nuo peržiūros.. Default: `true`.
* __dataTableProps__ | `object`: duomenų lentelės komponentui perduodamos savybės (žr. <DataTable /> dokumentaciją).. Default: `{}`.
* __history__ | `boolean`: kontroliuoja, ar rodyti atliktų veiksmų istorijos žurnalą.. Default: `true`.
* __reportMode__ | `string`: kontroliuoja, ar sinchronizuoti redaktoriaus pakeitimus visiems (`bendradarbiavimas`), visiems naudotojams grupėse (`grupė`), ar ne (`individualus`).. Default: `'individual'`.
* __histogramDensities__ | `boolean`: loginė reikšmė, rodanti, ar rodyti histogramos tankį. Default: `true`.
* __models__ | `array`: eilutės, nurodančios modelius, kuriuos galima pritaikyti duomenims, masyvas. Default: `[
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
* __opened__ | `string`: paleidimo metu atidarytas puslapis. Default: `none`.
* __plots__ | `array`: eilučių masyvas, nurodantis, kuriuos sklypus rodyti naudotojui.. Default: `[
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
* __questions__ | `(array|object)`:  `questions` skirtuke rodomų teksto ir klausimo komponentų mazgų masyvas arba savybių objektas, perduodamas pagrindiniam `<Pages />` komponentui. Default: `none`.
* __showTestDecisions__ | `boolean`: boolean, nurodantis, ar rodyti kiekvieno testo sprendimus, priimtus remiantis apskaičiuotomis p vertėmis.. Default: `true`.
* __statistics__ | `array`: eilučių masyvas, nurodantis, kokią suvestinę statistiką galima apskaičiuoti.. Default: `[
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
* __style__ | `object`: Pagrindinio konteinerio CSS įvesties stiliai. Default: `{}`.
* __tables__ | `array`: eilučių masyvas, nurodantis, kurias lenteles galima sukurti iš duomenų.. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: objektų ir raktų masyvas, nurodantis bet kokius pasirinktinius skirtukus, kuriuos reikia pridėti.. Default: `[]`.
* __tests__ | `array`: eilučių masyvas, nurodantis, kuriuos hipotezių testus įtraukti.. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-squared Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: loginis rodiklis, nurodantis, ar rodyti kintamųjų transformacijos įrankius. Default: `true`.
* __onTutorialCompletion__ | `function`: funkcija, iškviečiama, kai naudotojas baigė duomenų tyrinėtojo pamoką.. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: funkcija, iškviečiama vartotojui paleidus duomenų tyrinėtojo vadovėlį. Default: `onTutorialStart() {}`.


## Pavyzdžiai

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



