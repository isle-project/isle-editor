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

* __data__: An `Array` of list elements, each represented as an `Object` with `id` and `text` fields. Default: `[]`.
* __onChange__: Callback `function` invoked after each change in the order of the elements. The function receives the new data as its first parameter. Default: `null`.
* __onInit__: `function` invoked once after the component has been mounted. Default: `null`.
