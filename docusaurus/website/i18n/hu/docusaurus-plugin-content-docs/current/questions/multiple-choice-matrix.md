---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

Egy olyan ISLE komponens, amely azonos válaszokat tartalmazó, többszörös választási lehetőségű kérdések mátrixát jeleníti meg.

## Opciók

* __questions__ | `array (required)`: kérdések sora. Default: `none`.
* __answers__ | `array (required)`: válaszok sora. Default: `none`.
* __title__ | `(string|node)`: a kérdésmátrix tetején megjelenítendő cím. Default: `none`.
* __solution__ | `array<array>`: boolean mátrix, amelynek eleme azt jelzi, hogy az adott rádiógombot vagy jelölőnégyzetet be kell-e jelölni.. Default: `none`.
* __type__ | `string`: a kérdés típusa (a "rádió" a "Válasszon ki egyet", a "jelölőnégyzet" a "Válassza ki az összeset, amelyik vonatkozik" kérdésnek felel meg).. Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: szabályozza a benyújtási értesítések letiltását. Default: `false`.
* __onChange__ | `function`: callback, amely akkor hívódik, amikor egy jelölőnégyzet / rádiógomb értéke megváltozik; az egyes válaszlehetőségek aktív állapotának kétdimenziós bóluszi tömbjével hívódik meg. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, amely akkor hívódik, amikor a felhasználó a "Submit" gombra kattint; az egyes válaszlehetőségek aktív státuszát tartalmazó kétdimenziós bóluszi tömbtel hívódik meg.. Default: `onSubmit() {}`.


## Példák

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
