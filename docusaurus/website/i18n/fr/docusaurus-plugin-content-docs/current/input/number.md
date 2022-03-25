---
id: number-input
title: Number Input
sidebar_label: Number Input
---

Un élément de saisie de chiffres. Peut être utilisé dans le cadre d'un tableau de bord ISLE ou de manière autonome. Dans ce dernier cas, vous souhaitez gérer les modifications via l'attribut "onChange" ou lier la valeur à une variable globale via l'attribut "bind".

## Options

* __bind__ | `string`: nom de la variable globale pour le numéro à attribuer. Default: `''`.
* __defaultValue__ | `number`: valeur indiquant la valeur par défaut de l'entrée au démarrage. Default: `0`.
* __disabled__ | `boolean`: booléen indiquant si l'entrée est active ou non. Default: `false`.
* __inline__ | `boolean`: indique si l'entrée est affichée en ligne. Default: `false`.
* __legend__ | `(string|node)`: chaîne de caractères indiquant le texte affiché à côté du numéro saisi. Default: `none`.
* __max__ | `number`: numéro indiquant la valeur maximale qui peut être insérée. Default: `null`.
* __min__ | `number`: numéro indiquant la plus petite valeur possible qui peut être insérée. Default: `null`.
* __numbersOnly__ | `boolean`: contrôle si seuls les numéros sont acceptés. Default: `true`.
* __placeholder__ | `string`: undefined. Default: `'0'`.
* __onBlur__ | `function`: fonction de rappel à invoquer en cas d'utilisation d'une méthode de flou. Default: `onBlur() {}`.
* __onChange__ | `function`: fonction de rappel à invoquer en cas de modification de la saisie du numéro. Default: `onChange() {}`.
* __onKeyDown__ | `function`: fonction de rappel à invoquer en appuyant sur n'importe quelle touche. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: fonction de rappel à invoquer lors de la saisie de toute clé. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: fonction de rappel à invoquer lorsque la clé est libérée. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: numéro indiquant les changements progressifs lors de l'utilisation des flèches d'augmentation. Default: `1`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __inputStyle__ | `object`: Styles CSS en ligne pour les éléments d'entrée. Default: `{}`.
* __value__ | `number`: valeur numérique (pour les composants contrôlés). Default: `none`.
* __tooltip__ | `string`: chaîne d'info-bulle (si elle n'est pas définie, l'info-bulle est automatiquement générée). Default: `none`.
* __tooltipPlacement__ | `string`: direction de l'infobulle. Default: `'left'`.


## Exemples

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

