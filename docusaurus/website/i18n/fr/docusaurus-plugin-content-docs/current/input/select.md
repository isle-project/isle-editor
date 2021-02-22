---
id: select-input
title: Select Input
sidebar_label: Select Input
---

Une composante d'entrée choisie. Peut être utilisé dans le cadre d'un tableau de bord ISLE ou de manière autonome. Dans ce dernier cas, vous souhaitez gérer les modifications via l'attribut "onChange" ou lier la valeur à une variable globale via l'attribut "bind".

## Options

* __bind__ | `string`: nom de la variable globale pour le numéro à attribuer. Default: `''`.
* __clearable__ | `boolean`: valeur booléenne indiquant si l'on peut effacer le ou les choix effectués. Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: valeur par défaut de l'entrée au démarrage. Default: `none`.
* __disabled__ | `boolean`: contrôle si l'entrée est active ou non. Default: `false`.
* __inline__ | `boolean`: indique si l'entrée est affichée en ligne. Default: `false`.
* __legend__ | `(string|node)`: texte affiché à côté de l'entrée. Default: `''`.
* __menuPlacement__ | `string`: le placement du menu par rapport au contrôle (soit "automatique", "haut" ou "bas"). Default: `'auto'`.
* __multi__ | `boolean`: contrôle si l'on peut sélectionner plusieurs réponses. Default: `false`.
* __onChange__ | `function`: fonction de rappel à invoquer lors d'un choix. Default: `onChange() {}`.
* __options__ | `array`: tableau indiquant les choix disponibles à l'utilisateur. Default: `[]`.
* __placeholder__ | `string`: valeur à afficher avant de faire un premier choix. Default: `none`.
* __tooltip__ | `string`: texte affiché lors du survol de la légende. Default: `none`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Exemples

```jsx live
<SelectInput
    legend="Choose the test direction"
    defaultValue="two-sided"
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```

