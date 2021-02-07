---
id: text-input
title: Text Input
sidebar_label: Text Input
---

Un élément de saisie de texte. Peut être utilisé dans le cadre d'un tableau de bord ISLE ou de manière autonome. Dans ce dernier cas, vous souhaitez gérer les modifications via l'attribut "onChange" ou lier la valeur à une variable globale via l'attribut "bind".

## Options

* __bind__ | `string`: nom de la variable globale pour le numéro à attribuer. Default: `none`.
* __defaultValue__ | `string`: Une valeur indiquant la valeur par défaut de l'entrée au démarrage. Default: `''`.
* __value__ | `string`: valeur du texte (pour le composant contrôlé). Default: `none`.
* __legend__ | `(string|node)`: Une chaîne de caractères indiquant le texte affiché à côté du numéro saisi. Default: `''`.
* __inline__ | `boolean`: Indique si l'entrée est affichée en ligne. Default: `false`.
* __onBlur__ | `function`: fonction de rappel invoquée lorsque la zone de texte perd le focus. Default: `onBlur() {}`.
* __onChange__ | `function`: Une fonction à appeler lorsqu'une valeur de texte est modifiée. Default: `onChange() {}`.
* __onKeyDown__ | `function`: fonction de rappel à invoquer en appuyant sur n'importe quelle touche. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: fonction de rappel à invoquer lors de la saisie de toute clé. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: fonction de rappel à invoquer lorsque la clé est libérée. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: Une chaîne de caractères indiquant la valeur à afficher avant un premier choix. Default: `none`.
* __width__ | `number`: Un nombre indiquant la largeur de l'entrée en pixels. Default: `80`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Examples

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

