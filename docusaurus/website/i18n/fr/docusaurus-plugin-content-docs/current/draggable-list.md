---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Une liste d'éléments pouvant être déplacés qui peuvent être réorganisés par les élèves.

## Options

* __data__ | `array (required)`: tableau d'objets avec des clés "id" et "text. Default: `none`.
* __onChange__ | `function`: rappel invoqué avec un tableau de données nouvellement ordonné à chaque changement. Default: `onChange(){}`.
* __onInit__ | `function`: fonction de rappel invoquée après le montage du composant. Default: `onInit(){}`.
* __shuffle__ | `boolean`: contrôle si les éléments de données doivent être mélangés lors de l'affichage initial. Default: `false`.
* __disabled__ | `boolean`: contrôle si les éléments peuvent être déplacés ou non. Default: `false`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Exemples

```jsx live
<DraggableList
    data={[
        { id: 0, text: "Compact" },
        { id: 1, text: "Large" },
        { id: 2, text: "Midsize" },
        { id: 3, text: "Small" }
    ]}
/>
```

