---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

Un componente ISLE che rende una matrice di domande a scelta multipla con le stesse risposte.

## Options

* __questions__ | `array (required)`: una serie di domande. Default: `none`.
* __answers__ | `array (required)`: una serie di risposte. Default: `none`.
* __title__ | `(string|node)`: titolo da visualizzare sopra la matrice delle domande. Default: `none`.
* __solution__ | `array<array>`: matrice booleana il cui elemento indica se il rispettivo pulsante radio o la casella di controllo deve essere spuntata. Default: `none`.
* __type__ | `string`: tipo di domanda (`radio` corrisponde a "Seleziona uno", `checkbox` a "Seleziona tutto ciò che si applica"). Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: controlla se disabilitare le notifiche di presentazione. Default: `false`.
* __onChange__ | `function`: callback invocato quando cambia il valore di una casella di controllo / pulsante di opzione; invocato con l'array booleano bidimensionale dello stato attivo per ogni opzione di risposta. Default: `onChange() {}`.
* __onSubmit__ | `function`: richiamata quando l'utente clicca sul pulsante "Submit"; invocata con l'array booleano bidimensionale dello stato attivo per ogni opzione di risposta. Default: `onSubmit() {}`.


## Examples

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
