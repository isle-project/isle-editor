---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

Un composant ISLE qui rend une matrice de questions à choix multiples avec les mêmes réponses.

## Options

* __questions__ | `array (required)`: une série de questions. Default: `none`.
* __answers__ | `array (required)`: un éventail de réponses. Default: `none`.
* __title__ | `(string|node)`: titre à afficher en haut de la matrice des questions. Default: `none`.
* __solution__ | `array<array>`: matrice booléenne dont l'élément indique si le bouton radio ou la case à cocher correspondant doit être coché. Default: `none`.
* __type__ | `string`: type de question ("radio" correspond à "Sélectionnez un", "case à cocher" à "Sélectionnez tout ce qui s'applique"). Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: contrôle s'il faut désactiver les notifications de soumission. Default: `false`.
* __onChange__ | `function`: rappel invoqué lorsque la valeur d'une case à cocher / d'un bouton radio change ; invoqué avec le tableau booléen bidimensionnel de l'état actif pour chaque option de réponse. Default: `onChange() {}`.
* __onSubmit__ | `function`: rappel invoqué lorsque l'utilisateur clique sur le bouton "Soumettre" ; invoqué avec le tableau booléen bidimensionnel de l'état actif pour chaque option de réponse. Default: `onSubmit() {}`.


## Exemples

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
