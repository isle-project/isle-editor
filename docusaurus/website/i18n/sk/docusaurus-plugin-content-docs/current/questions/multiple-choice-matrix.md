---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

Komponent ISLE, ktorý vykresľuje maticu otázok s výberom odpovede s rovnakými odpoveďami.

## Možnosti

* __questions__ | `array (required)`: množstvo otázok. Default: `none`.
* __answers__ | `array (required)`: rad odpovedí. Default: `none`.
* __title__ | `(string|node)`: názov, ktorý sa zobrazí v hornej časti matice otázok. Default: `none`.
* __solution__ | `array<array>`: boolean matica, ktorej prvok označuje, či má byť príslušné rádiové tlačidlo alebo zaškrtávacie políčko zaškrtnuté. Default: `none`.
* __type__ | `string`: typ otázky (`radio` zodpovedá "Vyberte jednu", `checkbox` zodpovedá "Vyberte všetky, ktoré sa vzťahujú"). Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: kontroluje, či sa majú vypnúť oznámenia o odoslaní.. Default: `false`.
* __onChange__ | `function`: spätné volanie vyvolané pri zmene hodnoty zaškrtávacieho políčka / rádiového tlačidla; vyvolané s dvojrozmerným logickým poľom aktívneho stavu pre každú možnosť odpovede. Default: `onChange() {}`.
* __onSubmit__ | `function`: spätné volanie vyvolané, keď používateľ klikne na tlačidlo "Odoslať"; vyvolané s dvojrozmerným logickým poľom aktívneho stavu pre každú možnosť odpovede. Default: `onSubmit() {}`.


## Príklady

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
