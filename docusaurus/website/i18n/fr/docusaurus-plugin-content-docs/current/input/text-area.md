---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Un composant de zone de texte. Utilisé comme un composant autonome, les modifications doivent être traitées via l'attribut "onChange".

## Options

* __defaultValue__ | `string`: valeur par défaut de la zone de texte. Default: `''`.
* __value__ | `string`: valeur du texte (pour le composant contrôlé). Default: `none`.
* __disabled__ | `boolean`: contrôle si la zone de texte doit être désactivée. Default: `false`.
* __legend__ | `(string|node)`: texte de légende. Default: `''`.
* __onBlur__ | `function`: fonction de rappel invoquée lorsque la zone de texte perd le focus. Default: `onBlur() {}`.
* __onChange__ | `function`: fonction de rappel invoquée avec le nouveau texte lorsque le texte de la zone change. Default: `onChange() {}`.
* __placeholder__ | `string`: texte de remplacement. Default: `none`.
* __resizable__ | `string`: contrôle si la zone de texte doit être redimensionnable (peut être soit "les deux", "horizontale", "verticale", ou "aucune"). Default: `'none'`.
* __rows__ | `number`: nombre de lignes. Default: `5`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Exemples

```jsx live
<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
/>
```



