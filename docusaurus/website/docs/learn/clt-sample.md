---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

A learning component illustrating the Central Limit Theorem (CLT) when sampling from a supplied data set.

## Options

* __data__ | `object (required)`: data object with keys correspond to variable names and values holding the values of respective variables. Default: `none`.
* __hidePopulationStdev__ | `boolean`: hide display of population standard deviation. Default: `false`.
* __samples__ | `(array<number>|number)`: array of numbers or a single numbers denoting the sample sizes that can be drawn. Default: `25`.
* __populationProbabilities__ | `boolean`: whether to display equations for calculation of population probabilities. Default: `false`.
* __quantiles__ | `boolean`: whether to show tool for calculation of any quantiles. Default: `false`.
* __variables__ | `array (required)`: names of variables that can be sampled from. Default: `none`.


## Examples

```jsx live
<LearnSampleCLT 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

