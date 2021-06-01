---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

O componentă ISLE care redă o matrice de întrebări cu alegere multiplă cu aceleași răspunsuri.

## Opțiuni

* __questions__ | `array (required)`: o serie de întrebări. Default: `none`.
* __answers__ | `array (required)`: o serie de răspunsuri. Default: `none`.
* __title__ | `(string|node)`: titlul care urmează să fie afișat în partea de sus a matricei de întrebări. Default: `none`.
* __solution__ | `array<array>`: matrice booleană al cărei element indică dacă butonul radio sau caseta de selectare respectivă trebuie bifată sau nu. Default: `none`.
* __type__ | `string`: tipul de întrebare (`radio` corespunde la "Selectați una", `checkbox` la "Selectați toate cele care se aplică"). Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: controlează dacă se dezactivează sau nu notificările de trimitere. Default: `false`.
* __onChange__ | `function`: callback invocat atunci când se modifică valoarea unei casete de selectare / buton radio; invocat cu matrice booleană bidimensională a statutului activ pentru fiecare opțiune de răspuns. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback invocat atunci când utilizatorul face clic pe butonul "Trimite"; invocat cu matrice booleană bidimensională a statutului activ pentru fiecare opțiune de răspuns. Default: `onSubmit() {}`.


## Exemple

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
