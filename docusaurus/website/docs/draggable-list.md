---
id: draggable-list 
title: Draggable List
sidebar_label: Draggable List
---

A list of draggable elements that can be re-ordered by the students.

## Example

```jsx live
<DraggableList
    data={[
        { id: 0, text: "Compact" },
        { id: 1, text: "Large" },
        { id: 2, text: "Midsize" },
        { id: 3, text: "Small" }
    ]}
    onChange={ ( data ) => {
        let str = data
            .map( x => '"'+x.text+'"' )
            .join( ', ');
        alert( str );
    }}
/>
```

## Options

* __data__ | `array (required)`: array of objects with `id` and `text` keys. Default: `none`.
* __onChange__ | `function`: callback invoked with newly ordered data array on each change. Default: `onChange(){}`.
* __onInit__ | `function`: callback function invoked after mounting of component. Default: `onInit(){}`.
* __shuffle__ | `boolean`: controls whether data elements should be shuffled in initial display. Default: `false`.
* __disabled__ | `boolean`: controls whether elements can be dragged or not. Default: `false`.
* __className__ | `string`: class name. Default: `''`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
