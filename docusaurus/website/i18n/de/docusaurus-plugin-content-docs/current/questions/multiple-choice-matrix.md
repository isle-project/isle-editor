---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

Eine ISLE-Komponente, die eine Matrix von Multiple-Choice-Fragen mit gleichen Antworten wiedergibt.

## Optionen

* __questions__ | `array (required)`: eine Vielzahl von Fragen. Default: `none`.
* __answers__ | `array (required)`: eine Reihe von Antworten. Default: `none`.
* __title__ | `(string|node)`: Titel, der oben in der Fragenmatrix angezeigt werden soll. Default: `none`.
* __solution__ | `array<array>`: boolesche Matrix, deren Element angibt, ob der jeweilige Radiobutton oder das jeweilige Kontrollkästchen angekreuzt werden soll. Default: `none`.
* __type__ | `string`: Fragetyp (`Radio` entspricht "Wähle eins", `Checkbox` entspricht "Wähle alles, was zutrifft"). Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: steuert, ob Übermittlungsbenachrichtigungen deaktiviert werden sollen. Default: `false`.
* __onChange__ | `function`: Callback, der aufgerufen wird, wenn sich der Wert einer Checkbox / eines Radiobuttons ändert; wird mit dem zweidimensionalen booleschen Array des aktiven Status für jede Antwortoption aufgerufen. Default: `onChange() {}`.
* __onSubmit__ | `function`: Callback, der aufgerufen wird, wenn der Benutzer auf die Schaltfläche "Senden" klickt; wird mit dem zweidimensionalen booleschen Array des aktiven Status für jede Antwortoption aufgerufen. Default: `onSubmit() {}`.


## Beispiele

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
