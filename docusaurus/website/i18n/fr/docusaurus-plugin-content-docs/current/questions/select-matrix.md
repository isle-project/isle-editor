---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Une question dont la réponse consiste en plusieurs cases de sélection.

## Options

* __question__ | `(string|node)`: question à afficher en haut de la matrice de sélection des questions. Default: `''`.
* __rows__ | `array`: étiquettes de lignes. Default: `[]`.
* __cols__ | `array`: étiquettes de colonnes. Default: `[]`.
* __options__ | `object`: objet avec des paires clé-valeur avec des clés ayant la forme "row:col", par exemple "0:0", "0:1", "1:0", etc., et leurs valeurs correspondantes étant des tableaux de choix de réponse possibles pour les différentes questions de sélection. Default: `{}`.
* __solution__ | `object`: objet solution avec des paires clé-valeur avec des clés ayant la forme `row:col`, par exemple `0:0`, `0:1`, `1:0` etc., et leurs valeurs correspondantes étant l'index de l'élément de réponse correcte du tableau `options` respectif. Default: `{}`.
* __hints__ | `array<(string|node)>`: des conseils sur la façon de répondre à la question. Default: `[]`.
* __hintPlacement__ | `string`: l'emplacement des indices (soit "en haut", "à gauche", "à droite" ou "en bas"). Default: `'bottom'`.
* __feedback__ | `boolean`: contrôle l'affichage des boutons de rétroaction. Default: `true`.
* __provideFeedback__ | `string`: s'il convient de fournir un retour d'information "aucun", un retour d'information "individuel" sur la ou les réponses soumises, ou un retour d'information "global" pour toutes les questions. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: s'il faut autoriser les soumissions sans sélection dans chaque case de sélection. Default: `false`.
* __nTries__ | `number`: après combien d'essais aucune autre réponse n'est acceptée (si "provideFeedback" n'est pas "none"). Default: `1`.
* __failureMsg__ | `string`: texte de notification affiché lors de la soumission de réponses incorrectes. Default: `none`.
* __successMsg__ | `string`: texte de notification affiché lors de la soumission des réponses correctes. Default: `none`.
* __cellLabels__ | `object`: des étiquettes pour les cellules définies par objet avec des clés ayant le format "row:col. Default: `{}`.
* __chat__ | `boolean`: contrôle si l'élément doit avoir un chat intégré. Default: `false`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onSubmit__ | `function`: fonction de rappel invoquée lors de la soumission avec les réponses comme premier paramètre et un booléen indiquant l'exactitude comme second paramètre. Default: `onSubmit() {}`.


## Examples

```jsx live
<SelectQuestionMatrix
    rows={[ 'First Row' ]} 
    cols={[ 'First Column', 'Second Column' ]} 
    options={{ '0:0': [ 'Incorrect', 'Correct' ], '0:1':  [ 'Incorrect', 'Incorrect', 'Correct' ] }} 
    solution={{ '0:0': 1, '0:1': 2 }}
/>
```
