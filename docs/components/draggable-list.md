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

* __data__ | `array (required)`: undefined. Default: `none`.
* __onChange__ | `function`: undefined. Default: `onChange(){}`.
* __onInit__ | `function`: undefined. Default: `onInit(){}`.
* __shuffle__ | `boolean`: undefined. Default: `false`.
