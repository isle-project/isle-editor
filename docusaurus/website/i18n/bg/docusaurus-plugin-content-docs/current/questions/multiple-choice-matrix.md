---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

Компонент на ISLE, който визуализира матрица от въпроси с множествен избор с еднакви отговори.

## Опции

* __questions__ | `array (required)`: множество въпроси. Default: `none`.
* __answers__ | `array (required)`: масив от отговори. Default: `none`.
* __title__ | `(string|node)`: заглавие, което да се показва в горната част на матрицата с въпроси. Default: `none`.
* __solution__ | `array<array>`: boolean матрица, чийто елемент показва дали съответният радио бутон или квадратче трябва да бъде маркиран. Default: `none`.
* __type__ | `string`: тип въпрос (`radio` отговаря на "Изберете едно", `checkbox` на "Изберете всичко, което се отнася"). Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: контролира дали да деактивира известията за подаване. Default: `false`.
* __onChange__ | `function`: обратно извикване, когато стойността на квадратче за отметка/радио бутон се промени; извикване с двуизмерен булев масив на активното състояние за всяка опция за отговор. Default: `onChange() {}`.
* __onSubmit__ | `function`: обратна връзка, извикана, когато потребителят кликне върху бутона "Изпрати"; извиква се с двуизмерен булев масив на активното състояние за всяка опция за отговор. Default: `onSubmit() {}`.


## Примери

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
