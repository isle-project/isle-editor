---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

Een ISLE component die een matrix van meerkeuzevragen met dezelfde antwoorden maakt.

## Opties

* __questions__ | `array (required)`: een reeks vragen. Default: `none`.
* __answers__ | `array (required)`: een reeks antwoorden. Default: `none`.
* __title__ | `(string|node)`: titel die boven op de vragenmatrix moet worden weergegeven. Default: `none`.
* __solution__ | `array<array>`: booleaanse matrix waarvan het element aangeeft of het betreffende keuzerondje of selectievakje moet worden aangekruist. Default: `none`.
* __type__ | `string`: vraagtype (`radio` komt overeen met "Selecteer een", `checkbox` met "Selecteer alles wat van toepassing is"). Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: controleert of de aanmeldingskennisgevingen moeten worden uitgeschakeld. Default: `false`.
* __onChange__ | `function`: callback aangeroepen wanneer de waarde van een selectievakje / keuzerondje verandert; aangeroepen met de tweedimensionale boolean-array van de actieve status voor elke antwoordoptie. Default: `onChange() {}`.
* __onSubmit__ | `function`: terugroeping aangeroepen wanneer de gebruiker op de knop "Submit" klikt; aangeroepen met de tweedimensionale boolean-array van de actieve status voor elke antwoordoptie. Default: `onSubmit() {}`.


## Voorbeelden

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
