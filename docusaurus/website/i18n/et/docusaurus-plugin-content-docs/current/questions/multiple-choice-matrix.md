---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

ISLE komponent, mis esitab samade vastustega valikvastustega küsimuste maatriksi.

## Valikud

* __questions__ | `array (required)`: hulga küsimusi. Default: `none`.
* __answers__ | `array (required)`: hulga vastuseid. Default: `none`.
* __title__ | `(string|node)`: pealkiri, mis kuvatakse küsimuste maatriksi ülaosas. Default: `none`.
* __solution__ | `array<array>`: boolean maatriks, mille element näitab, kas vastav raadionupp või märkeruut tuleb märkida.. Default: `none`.
* __type__ | `string`: küsimuse tüüp ("raadio" vastab "Vali üks", "märkeruut" vastab "Vali kõik, mis kehtivad").. Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: kontrollib, kas keelata esitamisteated. Default: `false`.
* __onChange__ | `function`: callback, mida kutsutakse üles, kui ruutu / valiknupu väärtus muutub; kutsutakse üles koos iga vastusevariandi aktiivse staatuse kahemõõtmelise boolean-massiiviga.. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, mida kutsutakse esile, kui kasutaja vajutab nupule "Submit"; kutsutakse esile iga vastusevariandi aktiivse staatuse kahemõõtmelise boolean massiivi abil.. Default: `onSubmit() {}`.


## Näited

```jsx live
<MultipleChoiceMatrix 
    title="Do you think these concepts are important for an introductory statistics course, and do you (or your department) cover them in your introductory courses?" id="topics" 
    questions={[
        'Data Visualizations',
        'Hand calculations (e.g. standard deviation, z-scores)',
        'Combinatorics',
        'Basic probability theory (conditional probability, independence...)',
        'Calculus-based probability',
        'Sampling distributions',
        'Confidence intervals (traditional, formula-based)',
        'Boostrapping',
        'Hypothesis testing (traditional, e.g. t-test or chi-square formulas and tables)',
        'Simple linear regression',
        'Bayesian statistics',
        'Randomization- or simulation-based inference'
    ]}
    type="checkbox" 
    answers={[ 'I cover it', 'I think it\'s important' ]} 
/>
```
