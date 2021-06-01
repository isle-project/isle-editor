---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

En ISLE-komponent som visar en matris av flervalsfrågor med samma svar.

## Alternativ

* __questions__ | `array (required)`: en rad frågor. Default: `none`.
* __answers__ | `array (required)`: en uppsättning svar. Default: `none`.
* __title__ | `(string|node)`: titel som ska visas överst i frågematrisen. Default: `none`.
* __solution__ | `array<array>`: Boolsk matris vars element anger om respektive radioknapp eller kryssruta ska vara markerad.. Default: `none`.
* __type__ | `string`: Frågetyp (radio motsvarar "Välj en", checkbox motsvarar "Välj alla som gäller").. Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: kontrollerar om anmälningar om inlämning ska inaktiveras. Default: `false`.
* __onChange__ | `function`: callback som aktiveras när värdet på en kryssruta/radioknapp ändras; aktiveras med den tvådimensionella boolska matrisen för den aktiva statusen för varje svarsalternativ.. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback som aktiveras när användaren klickar på knappen "Skicka"; aktiveras med den tvådimensionella boolska matrisen med den aktiva statusen för varje svarsalternativ.. Default: `onSubmit() {}`.


## Exempel

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
