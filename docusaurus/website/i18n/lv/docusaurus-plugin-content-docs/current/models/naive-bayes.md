---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naive Bayes, pieņemot, ka prognozētājiem, ņemot vērā piederību klasei, ir normāls sadalījums.

## Iespējas

* __data__ | `object (required)`: vērtību masīvu objekts. Default: `none`.
* __y__ | `(string|Factor) (required)`: iznākuma mainīgais. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: viens vai vairāki prognozējošie mainīgie lielumi. Default: `none`.
* __quantitative__ | `array<string> (required)`: `data` mainīgo masīvs, kas ir `kvantitatīvie`.. Default: `none`.
* __omitMissing__ | `boolean`: kontrolē, vai izlaist trūkstošās vērtības.. Default: `false`.
* __onPredict__ | `function`: pēc modeļa pielāgošanas izsaukts atpakaļsaukums ar prognozēm un atlikumiem.. Default: `none`.


## Piemēri

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

