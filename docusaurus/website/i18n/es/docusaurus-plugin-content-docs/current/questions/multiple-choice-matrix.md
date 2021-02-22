---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

Un componente de la ISLE que hace una matriz de preguntas de opción múltiple con las mismas respuestas.

## Opciones

* __questions__ | `array (required)`: una serie de preguntas. Default: `none`.
* __answers__ | `array (required)`: una serie de respuestas. Default: `none`.
* __title__ | `(string|node)`: El título se mostrará en la parte superior de la matriz de preguntas. Default: `none`.
* __solution__ | `array<array>`: matriz booleana cuyo elemento indica si el respectivo botón de radio o casilla de verificación debe ser marcado. Default: `none`.
* __type__ | `string`: tipo de pregunta (`radio` corresponde a "Seleccionar uno", `caja de selección` a "Seleccionar todos los que se aplican"). Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: controla si se desactivan las notificaciones de presentación. Default: `false`.
* __onChange__ | `function`: llamada de retorno invocada cuando el valor de una casilla de verificación / botón de radio cambia; invocada con la matriz booleana bidimensional del estado activo para cada opción de respuesta. Default: `onChange() {}`.
* __onSubmit__ | `function`: llamada de retorno invocada cuando el usuario hace clic en el botón "Enviar"; invocada con la matriz booleana bidimensional del estado activo para cada opción de respuesta. Default: `onSubmit() {}`.


## Ejemplos

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
