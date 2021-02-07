---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

Un élément montrant une question et une échelle de cinq points à laquelle les élèves doivent répondre.

## Options

* __question__ | `(string|node)`: question à imprimer. Default: `''`.
* __options__ | `array`: un ensemble de cinq éléments contenant les étiquettes des différents niveaux d'échelle. Default: `none`.
* __noMultipleResponses__ | `boolean`: interdire les soumissions multiples d'un même étudiant. Default: `false`.
* __disableSubmitNotification__ | `boolean`: contrôle s'il faut désactiver les notifications de soumission. Default: `false`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Examples

```jsx live
<LikertScale 
    id="discrimination" 
    question="After your initial analysis of the data, how likely do you think it is that players are discriminated against by soccer referees because of their skin tone?" 
    options={[ 'Very unlikely', 'Unlikely', 'Neither unlikely nor likely', 'Likely', 'Very Likely']} 
/>
```

