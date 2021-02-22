---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

Un volet ISLE pour les questions dont les réponses des étudiants doivent être fournies sous forme de texte libre. Ce qui différencie ce composant de la **FreeTextQuestion** est le fait que les données agrégées des groupes sont affichées à tous en temps réel.

## Options

* __question__ | `(string|node)`: la question à poser aux étudiants. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: contrôle si l'on souhaite permettre aux étudiants de répondre plusieurs fois à l'enquête. Default: `false`.
* __anonymous__ | `boolean`: contrôle si les réponses des étudiants sont recueillies de manière anonyme. Default: `false`.
* __rows__ | `number`: nombre de lignes de texte dans le champ de saisie. Default: `4`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onSubmit__ | `function`: fonction de rappel appelée lorsqu'une réponse est soumise. Default: `onSubmit() {}`.


## Exemples

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

