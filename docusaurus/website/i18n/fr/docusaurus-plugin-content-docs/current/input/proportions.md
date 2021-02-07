---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

Une composante d'entrée des proportions. Peut être utilisé dans le cadre d'un tableau de bord ISLE ou de manière autonome. Dans ce dernier cas, vous souhaitez gérer les modifications via l'attribut "onChange" ou lier la valeur à une variable globale via l'attribut "bind".

## Options

* __colors__ | `array<string>`: une gamme de couleurs pour les composantes du camembert. Si elle n'est pas définie, une échelle de couleurs personnalisée sera utilisée. Default: `none`.
* __disabled__ | `boolean`: contrôle si le champ de saisie est désactivé. Default: `false`.
* __height__ | `number`: proportions hauteur d'entrée (en px). Default: `200`.
* __legends__ | `array`: étiquettes de groupe. Default: `[]`.
* __onChange__ | `function`: fonction de rappel à invoquer lors d'un choix. Default: `onChange(){}`.
* __precision__ | `number`: la précision affichée des valeurs de proportion. Default: `1`.
* __step__ | `number`: le pas des flèches visibles lors du survol du curseur au-dessus de la zone de saisie. Default: `0.1`.


## Examples

```jsx live
<ProportionsInput
    user
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

