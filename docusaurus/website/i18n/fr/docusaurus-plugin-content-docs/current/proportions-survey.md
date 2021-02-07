---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Composante qui permet à un groupe de personnes de voter sur les poids et l'importance d'options données.

## Options

* __allowMultipleAnswers__ | `boolean`: contrôle si l'on souhaite permettre aux étudiants de répondre plusieurs fois à l'enquête. Default: `false`.
* __anonymous__ | `boolean`: contrôle si les réponses des étudiants sont anonymes. Default: `false`.
* __colors__ | `array`: une gamme de couleurs pour les composantes du camembert. Si elle n'est pas définie, une échelle de couleurs personnalisée sera utilisée. Default: `none`.
* __disabled__ | `boolean`: contrôle si l'enquête est désactivée. Default: `false`.
* __group__ | `string`: titre de l'affichage de groupe. Default: `'group results'`.
* __groupHeight__ | `number`: hauteur d'entrée des proportions pour l'affichage des groupes (en px). Default: `100`.
* __legends__ | `array`: des étiquettes de légende qui décrivent les options à peser. Default: `[]`.
* __margin__ | `string`: proportion de la marge d'entrée (en px). Default: `'40px'`.
* __onSubmit__ | `function`: la fonction de rappel est activée dès que l'étudiant soumet une réponse. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: proportions hauteur d'entrée pour chaque élève (en px). Default: `200`.
* __precision__ | `number`: la précision affichée des valeurs de proportion. Default: `2`.
* __question__ | `(string|node)`: la question à afficher. Default: `''`.
* __step__ | `number`: le pas des flèches visibles lors du survol du curseur au-dessus de la zone de saisie. Default: `0.25`.


## Examples

```jsx live
<ProportionsSurvey 
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```



