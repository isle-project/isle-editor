---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Composante de l'enquête dans laquelle l'instructeur peut recueillir des données d'enquête à choix multiples auprès des étudiants en temps réel.

## Options

* __question__ | `(string|node)`: chaîne indiquant la question à poser aux élèves. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: contrôle si l'on souhaite permettre aux étudiants de répondre plusieurs fois à l'enquête. Default: `false`.
* __anonymous__ | `boolean`: contrôle si les réponses des étudiants sont anonymes. Default: `false`.
* __answers__ | `array`: tableau indiquant les choix de réponses des élèves. Default: `[]`.
* __multipleAnswers__ | `boolean`: indique si les étudiants peuvent choisir plus d'une réponse. Notez que cela diffère de allowMultipleAnswers en ce sens que allow rend les étudiants capables de soumettre la question plusieurs fois. Default: `false`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onSubmit__ | `function`: fonction à appeler lors de la soumission d'une réponse. Default: `onSubmit() {}`.


## Examples

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

