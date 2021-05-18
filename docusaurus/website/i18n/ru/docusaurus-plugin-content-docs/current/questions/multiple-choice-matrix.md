---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

ISLE-компонент, представляющий собой матрицу вопросов множественного выбора с одними и теми же ответами.

## Варианты

* __questions__ | `array (required)`: ряд вопросов. Default: `none`.
* __answers__ | `array (required)`: массив ответов. Default: `none`.
* __title__ | `(string|node)`: заголовок для отображения поверх матрицы вопросов. Default: `none`.
* __solution__ | `array<array>`: булева матрица, элемент которой указывает, должна ли быть отмечена соответствующая радиокнопка или флажок. Default: `none`.
* __type__ | `string`: тип вопроса (`радио` соответствует "Выберите один", `чейкбокс` - "Выберите все, что применимо"). Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: контроль выключения подачи уведомлений. Default: `false`.
* __onChange__ | `function`: вызывается при изменении значения флажка / радиокнопки; вызывается с двухмерным булевым массивом активного статуса для каждой опции ответа. Default: `onChange() {}`.
* __onSubmit__ | `function`: вызов обратного вызова, когда пользователь нажимает кнопку "Отправить"; вызывается с двухмерным булевым массивом активного статуса для каждой опции ответа. Default: `onSubmit() {}`.


## Примеры

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
