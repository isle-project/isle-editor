---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naive Bayes предполага, че прогнозите, дадени за принадлежността към класа, следват нормално разпределение.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __y__ | `(string|Factor) (required)`: променлива на резултата. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: една или повече прогнозни променливи.. Default: `none`.
* __quantitative__ | `array<string> (required)`: масив от променливи в `data`, които са `количествени`. Default: `none`.
* __omitMissing__ | `boolean`: контролира дали да се пропускат липсващи стойности.. Default: `false`.
* __onPredict__ | `function`: обратна връзка, извикана с прогнозите и остатъците след напасване на модела. Default: `none`.


## Примери

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

