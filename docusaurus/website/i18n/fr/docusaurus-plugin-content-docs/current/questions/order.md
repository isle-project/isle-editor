---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Un élément de question d'ordre qui demande à l'élève d'amener une collection d'éléments dans le bon ordre.

## Options

* __question__ | `(string|node)`: question pour laquelle l'étudiant doit mettre les "options" disponibles dans le bon ordre. Default: `''`.
* __options__ | `array (required)`: un ensemble de textes que l'étudiant doit mettre dans l'ordre correct (supposé être l'ordre fourni). Default: `none`.
* __provideFeedback__ | `boolean`: contrôle l'affichage d'une notification indiquant si la réponse soumise est correcte ou non. Default: `true`.
* __hintPlacement__ | `string`: l'emplacement des indices (soit `top`, `left`, `right` ou `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: des conseils sur la façon de répondre à la question. Default: `[]`.
* __feedback__ | `boolean`: contrôle l'affichage des boutons de rétroaction. Default: `true`.
* __chat__ | `boolean`: contrôle si l'élément doit avoir un chat intégré. Default: `false`.
* __failureMsg__ | `string`: message à afficher lorsque l'élève soumet une mauvaise réponse. Default: `none`.
* __successMsg__ | `string`: message à afficher lorsque l'étudiant soumet la bonne réponse. Default: `none`.
* __disableSubmitNotification__ | `boolean`: contrôle s'il faut désactiver les notifications de soumission. Default: `false`.
* __until__ | `Date`: le temps nécessaire pour permettre aux étudiants de soumettre des réponses. Default: `none`.
* __points__ | `number`: nombre maximum de points attribués dans le classement. Default: `10`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onChange__ | `function`: le rappel qui est déclenché après avoir fait glisser un élément ; a deux paramètres : un "booléen" indiquant si les éléments ont été placés dans le bon ordre et un "tableau" avec l'ordre actuel. Default: `onChange() {}`.
* __onSubmit__ | `function`: rappel invoqué lors de la soumission de la réponse ; a comme seul paramètre un "booléen" indiquant si les éléments ont été placés dans le bon ordre. Default: `onSubmit() {}`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Hints', value: 'hints' },
        { label: 'Submit Function', value: 'submitFunction' },
        { label: 'With Points and Feedback Message', value: 'withGradingAndFeedback' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
/>
```
</TabItem>

<TabItem value="hints">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
    hints={[ 'Delta succeeds Gamma in the Greek alphabet' ]}
    hintPlacement="bottom"
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "A",
        "G",
        "V"
    ]}
    onSubmit={() => {
        alert( 'Any JavaScript function could be executed here...' );
    }}
/>
```
</TabItem>

<TabItem value="withGradingAndFeedback">

```jsx live
<OrderQuestion
    question="Arrange the events in historical order"
    options={[
        "Napoleon's coronation as emperor",
        "The Crimean War",
        "Bombing of Hiroshima",
        "Fall of the Berlin Wall",
        "Donald Trump's inauguration",
    ]}
    points={10}
    successMsg = "Great! Looks like you are a history expert"
/>
```
</TabItem>

</Tabs>
