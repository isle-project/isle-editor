---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

Eine Liste mit verschiebbaren Elementen, die von den Schülern neu geordnet werden können.

## Options

* __data__ | `array (required)`: Array von Objekten mit den Schlüsseln `id` und `text`. Default: `none`.
* __onChange__ | `function`: Callback, der bei jeder Änderung mit neu geordnetem Datenarray aufgerufen wird. Default: `onChange(){}`.
* __onInit__ | `function`: Callback-Funktion, die nach der Montage der Komponente aufgerufen wird. Default: `onInit(){}`.
* __shuffle__ | `boolean`: steuert, ob die Datenelemente bei der ersten Anzeige gemischt werden sollen. Default: `false`.
* __disabled__ | `boolean`: steuert, ob Elemente gezogen werden können oder nicht. Default: `false`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


## Examples

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

