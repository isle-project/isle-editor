---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Tätä komponenttia opiskelijat käyttävät lyhyeen yhteenvetoon esitetyistä tiedoista ja erilaisten tilastollisten testien suorittamiseen.

## Vaihtoehdot

* __categorical__ | `array`: joukko merkkijonoja, jotka ilmaisevat kunkin kategorisen muuttujan nimen.. Default: `[]`.
* __quantitative__ | `array`: joukko merkkijonoja, jotka ilmaisevat kunkin määrällisen muuttujan nimen.. Default: `[]`.
* __data__ | `object`: tarkasteltava datakohde tai -joukko. Jos kyseessä on objekti, avaimet vastaavat sarakkeiden arvoja, kun taas array odottaa joukko objekteja, joissa on nimetty kenttä jokaista saraketta varten. Jos haluat sallia opiskelijoiden tuoda `.csv`-tiedoston, aseta `data`-vaihtoehdon arvoksi `false`.. Default: `{}`.
* __dataInfo__ | `object`: objekti, joka sisältää avaimet \'name\', jonka arvo on merkkijono, \'info\', jonka arvo on merkkijonojen joukko, jossa jokainen elementti on uusi rivi, ja \'variables\', objekti, jonka avaimet ovat muuttujien nimiä ja arvot muuttujien kuvauksia.. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: boolean, joka ilmaisee, näytetäänkö editori käyttäjälle.. Default: `true`.
* __editorProps__ | `object`: `TextEditor`:lle välitettävien ominaisuuksien objekti (katso dokumentaatio osoitteesta <TextEditor />).. Default: `none`.
* __editorTitle__ | `string`: merkkijono, joka ilmaisee näytettävän etsimen otsikon.. Default: `none`.
* __dataTable__ | `boolean`: boolean-arvo, joka ilmaisee, piilotetaanko datataulukko näkyvistä.. Default: `true`.
* __dataTableProps__ | `object`: datataulukkokomponentille välitettävät ominaisuudet (katso dokumentaatio osoitteesta <DataTable />).. Default: `{}`.
* __history__ | `boolean`: valvoo, näytetäänkö suoritettujen toimien historialoki.. Default: `true`.
* __reportMode__ | `string`: määrittää, synkronoidaanko editorin muutokset kaikille (`collaborative`), ryhmäkäyttäjille (`group`) vai ei (`individual`).. Default: `'individual'`.
* __histogramDensities__ | `boolean`: boolean-arvo, joka ilmaisee, näytetäänkö histogrammin tiheydet.. Default: `true`.
* __models__ | `array`: joukko merkkijonoja, jotka osoittavat malleja, jotka voidaan sovittaa dataan.. Default: `[
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
* __opened__ | `string`: käynnistyksen yhteydessä avattava sivu. Default: `none`.
* __plots__ | `array`: joukko merkkijonoja, jotka osoittavat, mitkä piirrokset näytetään käyttäjälle.. Default: `[
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
* __questions__ | `(array|object)`:  `questions` -välilehdellä näytettävien teksti- ja kysymyskomponenttien solmujen joukko tai kohde, joka sisältää ominaisuuksia, jotka siirretään alla olevaan `<Pages />` komponentille. Default: `none`.
* __showTestDecisions__ | `boolean`: boolean, joka osoittaa, näytetäänkö kullekin testille tehdyt päätökset, jotka perustuvat laskettuihin p-arvoihin.. Default: `true`.
* __statistics__ | `array`: joukko merkkijonoja, jotka osoittavat, mitä yhteenvetotilastoja voidaan laskea.. Default: `[
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
* __style__ | `object`: CSS-inline-tyylit pääsäiliölle. Default: `{}`.
* __tables__ | `array`: merkkijonojen joukko, joka osoittaa, mitä taulukoita voidaan luoda tiedoista.. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: joukko objekteja ja avaimia, jotka ilmaisevat mahdolliset lisättävät mukautetut välilehdet.. Default: `[]`.
* __tests__ | `array`: joukko merkkijonoja, jotka ilmoittavat, mitkä hypoteesitestit sisällytetään mukaan. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-square Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: boolean, joka ilmaisee, näytetäänkö muuttujien muunnostyökalut.. Default: `true`.
* __onTutorialCompletion__ | `function`: toiminto, jota kutsutaan, kun käyttäjä on suorittanut data explorer -oppaan loppuun.. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: toiminto, joka käynnistyy, kun käyttäjä käynnistää data explorer -opetusohjelman.. Default: `onTutorialStart() {}`.


## Esimerkkejä

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



