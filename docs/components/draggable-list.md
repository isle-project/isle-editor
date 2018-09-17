# Draggable List

A list of draggable elements that can be re-ordered by the students.

#### Example:

``` js
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

[Open interactive preview](https://isle.heinz.cmu.edu/components/draggable-list/)

#### Options:

* __data__ | `array (required)`: array of objects with `id` and `text` keys. Default: `none`.
* __onChange__ | `function`: callback invoked with newly ordered data array on each change. Default: `onChange(){}`.
* __onInit__ | `function`: callback function invoked after mounting of component. Default: `onInit(){}`.
* __shuffle__ | `boolean`: controls whether data elements should be shuffled in initial display. Default: `false`.
