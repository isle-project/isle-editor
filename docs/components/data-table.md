# Data Table

A component rendering data in a tabular display. Built on top of [react-table](https://react-table.js.org/).

#### Example:

``` js
<DataTable
    showRemove
    onClickRemove={( data ) => { console.log(data); }}
    data={{ 
        firstName: [ 'Hans', 'Lotti', 'Fritz' ], 
        lastName: [ 'Bauer', 'Müller', 'Schultz' ],
        age: [ 37, 55, 62 ]
    }}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/data-table)

#### Options:

* __data__ | `(array|object) (required)`: A data object or array to be viewed. If it is an object, the keys correspond to column values while an array will expect an array of objects with a named field corresponding to each column. Default: `none`.
* __dataInfo__ | `object`: hints providing guidance on how to answer the question. Default: `{
  'info': [],
  'name': '',
  'variables': null
}`.
* __onClickRemove__ | `function`: A function specifying an action to take for rows removed from the data. Defaults to an empty function. Default: `onClickRemove() {}`.
* __showRemove__ | `boolean`: A boolean value indicating whether to allow for rows to be removed. Default: `false`.
* __style__ | `object`: An object allowing for custom css styling. Defaults to an empty object. Default: `{}`.
