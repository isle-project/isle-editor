---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Un élément de question numérique.

## Options

* __question__ | `(string|node)`: question numéro. Default: `''`.
* __hintPlacement__ | `string`: l'emplacement des indices (soit `top`, `left`, `right` ou `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: des conseils sur la façon de répondre à la question. Default: `[]`.
* __feedback__ | `boolean`: contrôle l'affichage des boutons de rétroaction. Default: `true`.
* __solution__ | `(number|array<number>)`: une réponse numérique au problème (ou plusieurs réponses correctes si un tableau est fourni). Default: `none`.
* __digits__ | `number`: nombre de chiffres pour lesquels la réponse fournie par l'élève doit correspondre à la solution pour être considérée comme correcte. Défini à 0 pour une correspondance sous forme d'un nombre entier. Si la valeur est nulle, une correspondance exacte sera recherchée. Default: `3`.
* __max__ | `number`: valeur d'entrée maximale autorisée. Default: `null`.
* __min__ | `number`: valeur d'entrée minimale autorisée. Default: `null`.
* __defaultValue__ | `number`: valeur présélectionnée de la saisie du numéro. Default: `none`.
* __provideFeedback__ | `boolean`: indique si un retour d'information comprenant la bonne réponse doit être affiché après que les apprenants aient soumis leurs réponses. Default: `true`.
* __submitAfterFeedback__ | `boolean`: contrôle si l'on doit pouvoir soumettre à nouveau une demande même après que la solution a été révélée). Default: `false`.
* __nTries__ | `number`: après combien d'essais un retour d'information doit être fourni (si "provideFeedback" est "true"). Default: `1`.
* __disableSubmitNotification__ | `boolean`: contrôle s'il faut désactiver les notifications de soumission. Default: `false`.
* __chat__ | `boolean`: contrôle si l'élément doit avoir un chat intégré. Default: `false`.
* __until__ | `Date`: le temps nécessaire pour permettre aux étudiants de soumettre des réponses. Default: `none`.
* __points__ | `number`: nombre maximum de points attribués dans le classement. Default: `10`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onChange__ | `function`: rappel qui est déclenché après que la valeur du champ du numéro change ; reçoit la valeur actuelle comme seul argument. Default: `onChange() {}`.
* __onSubmit__ | `function`: rappel invoqué lors de la soumission de la réponse ; a comme premier paramètre un "booléen" indiquant si la réponse a été correctement donnée (le cas échéant, "nul" sinon) et la réponse fournie comme second paramètre. Default: `onSubmit() {}`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'markdownStyling' },
        { label: 'With CSS', value: 'withCSS' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<NumberQuestion
    question="What is the number Pi? (include at least three digits after the decimal point)"
    solution={3.142}
/>
```
</TabItem>

<TabItem value="markdownStyling">

```jsx live
<NumberQuestion
    question={<span>What is the number $\pi$? (include at least _three_ digits after the decimal point)</span>}
    solution={3.142}
/>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<NumberQuestion
    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}
    solution={3.142}
/>
```
</TabItem>

</Tabs>
