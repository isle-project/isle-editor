---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

Składnik ISLE, który tworzy matrycę pytań wielokrotnego wyboru z tymi samymi odpowiedziami.

## Options

* __questions__ | `array (required)`: szereg pytań. Default: `none`.
* __answers__ | `array (required)`: szereg odpowiedzi. Default: `none`.
* __title__ | `(string|node)`: tytuł, który będzie wyświetlany na górze matrycy pytań. Default: `none`.
* __solution__ | `array<array>`: matryca logiczna, której element wskazuje, czy dany przycisk radiowy lub pole wyboru ma być zaznaczony. Default: `none`.
* __type__ | `string`: typ pytania (`radio` odpowiada "Wybierz jedno", `pole wyboru` do "Wybierz wszystko, co dotyczy"). Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: kontrola, czy należy wyłączyć powiadomienia o złożeniu wniosku. Default: `false`.
* __onChange__ | `function`: callback wywoływany przy zmianie wartości pola wyboru / przycisku radiowego; wywoływany z dwuwymiarową tablicą boolean aktywnego stanu dla każdej opcji odpowiedzi. Default: `onChange() {}`.
* __onSubmit__ | `function`: wywołanie zwrotne po kliknięciu przycisku "Prześlij"; wywołane dwuwymiarową tablicą boolean aktywnego stanu dla każdej z opcji odpowiedzi. Default: `onSubmit() {}`.


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
