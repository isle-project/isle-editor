---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

Komponenta ISLE, která vykresluje matici otázek s výběrem odpovědi se stejnými odpověďmi.

## Možnosti

* __questions__ | `array (required)`: řada otázek. Default: `none`.
* __answers__ | `array (required)`: řada odpovědí. Default: `none`.
* __title__ | `(string|node)`: název, který se zobrazí v horní části matice otázek.. Default: `none`.
* __solution__ | `array<array>`: boolean matice, jejíž prvek udává, zda má být příslušné přepínač nebo zaškrtávací políčko zaškrtnuto.. Default: `none`.
* __type__ | `string`: typ otázky (`radio` odpovídá odpovědi "Vyberte jednu", `checkbox` odpovídá odpovědi "Vyberte vše, co se týká").. Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: kontroluje, zda se mají vypnout oznámení o odeslání. Default: `false`.
* __onChange__ | `function`: zpětné volání vyvolané při změně hodnoty zaškrtávacího políčka / rádiového tlačítka; vyvolává se s dvourozměrným logickým polem aktivního stavu pro každou možnost odpovědi.. Default: `onChange() {}`.
* __onSubmit__ | `function`: zpětné volání vyvolané po kliknutí uživatele na tlačítko "Odeslat"; vyvolané s dvourozměrným logickým polem aktivního stavu pro každou možnost odpovědi.. Default: `onSubmit() {}`.


## Příklady

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
