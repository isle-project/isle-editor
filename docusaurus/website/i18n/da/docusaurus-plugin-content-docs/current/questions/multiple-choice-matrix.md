---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

En ISLE-komponent, der gengiver en matrix af multiple choice-spørgsmål med de samme svar.

## Indstillinger

* __questions__ | `array (required)`: en række spørgsmål. Default: `none`.
* __answers__ | `array (required)`: en række svar. Default: `none`.
* __title__ | `(string|node)`: titel, der skal vises øverst i spørgsmålsmatrixen. Default: `none`.
* __solution__ | `array<array>`: boolsk matrix, hvis element angiver, om den pågældende radioknap eller afkrydsningsfelt skal afkrydses. Default: `none`.
* __type__ | `string`: spørgsmålstype (`radio` svarer til "Vælg en", `checkbox` svarer til "Vælg alle de relevante spørgsmål"). Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: kontrollerer, om meddelelser om indsendelse skal deaktiveres. Default: `false`.
* __onChange__ | `function`: callback, der påkaldes, når værdien af en afkrydsningsboks/radioknap ændres; påkaldes med det todimensionale boolske array af den aktive status for hver svarmulighed. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, der påkaldes, når brugeren klikker på "Send"-knappen; påkaldes med det todimensionale boolske array af den aktive status for hver svarmulighed. Default: `onSubmit() {}`.


## Eksempler

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
