---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

Composante de l'enquête dans laquelle l'instructeur peut recueillir des données numériques en temps réel auprès des étudiants.

## Options

* __question__ | `(string|node)`: la question à afficher. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: contrôle si le même utilisateur (ou la même session si elle est anonyme) peut soumettre des réponses multiples). Default: `false`.
* __anonymous__ | `boolean`: Permet aux étudiants de soumettre des données de manière anonyme. Notez que si cette option est réglée sur "vrai", les professeurs ne pourront pas voir l'identité de l'étudiant qui a soumis les données.. Default: `false`.
* __step__ | `(number|string)`: Une valeur "chaîne" ou "numérique" indiquant le pas des flèches vues lorsque le curseur est passé au-dessus de la zone de saisie. Si "any", le pas sera fixé à "1".. Default: `'any'`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onSubmit__ | `function`: la fonction de rappel est activée dès que l'étudiant soumet une réponse. Default: `onSubmit() {}`.


## Exemples

```jsx live
<NumberSurvey
    allowMultipleAnswers={true}
    anonymous="false"
    id="generic_mean_question"
    question="Submit a number"
    defaultValue={0}
    step="any"
/>
```

