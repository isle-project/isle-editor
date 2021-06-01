---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naivusis Bayesas daro prielaidą, kad prognozuojamieji rodikliai, atsižvelgiant į priklausymą klasei, pasiskirsto pagal normalųjį skirstinį.

## Parinktys

* __data__ | `object (required)`: verčių masyvų objektas. Default: `none`.
* __y__ | `(string|Factor) (required)`: rezultato kintamasis. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: vienas ar daugiau predikcinių kintamųjų.. Default: `none`.
* __quantitative__ | `array<string> (required)`: `data` kintamųjų, kurie yra `kvantitatyvūs`, masyvas. Default: `none`.
* __omitMissing__ | `boolean`: kontroliuoja, ar praleisti trūkstamas reikšmes.. Default: `false`.
* __onPredict__ | `function`: grįžtamasis skambutis, iškviečiamas su prognozėmis ir liekanomis po modelio pritaikymo. Default: `none`.


## Pavyzdžiai

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

