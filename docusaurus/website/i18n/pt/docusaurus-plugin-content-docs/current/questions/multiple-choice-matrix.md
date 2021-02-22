---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

Um componente do ISLE que torna uma matriz de perguntas de múltipla escolha com as mesmas respostas.

## Options

* __questions__ | `array (required)`: uma série de perguntas. Default: `none`.
* __answers__ | `array (required)`: uma série de respostas. Default: `none`.
* __title__ | `(string|node)`: título a ser exibido no topo da matriz de perguntas. Default: `none`.
* __solution__ | `array<array>`: matriz booleana cujo elemento indica se o respectivo botão de rádio ou caixa de seleção deve ser assinalado. Default: `none`.
* __type__ | `string`: tipo de pergunta (`rádio` corresponde a "Selecione uma", `caixa de seleção` a "Selecione todas as que se aplicam"). Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: controla se as notificações de submissão devem ser desativadas. Default: `false`.
* __onChange__ | `function`: chamada de retorno invocada quando o valor de uma caixa de seleção / botão de rádio muda; invocada com a matriz booleana bidimensional do status ativo para cada opção de resposta. Default: `onChange() {}`.
* __onSubmit__ | `function`: chamada de retorno invocada quando o usuário clica no botão "Submit"; invocada com a matriz booleana bidimensional do status ativo para cada opção de resposta. Default: `onSubmit() {}`.


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
