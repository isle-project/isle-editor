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
* __dataInfo__ | `object`: object with `info` string array describing the data set, the `name` of the dataset, an `object` of `variables` with keys corresponding to variable names and values to variable descriptions, an a `showOnStartup` boolean controlling whether to display the info modal on startup. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showInfo': false
}`.
* __onClickRemove__ | `function`: A function specifying an action to take for rows removed from the data (defaults to an empty function). Default: `onClickRemove() {}`.
* __filters__ | `array`: undefined. Default: `[]`.
* __onFilteredChange__ | `function`: undefined. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: indicates whether to display checkboxes for rows to be removed. Default: `false`.
* __style__ | `object`: An object allowing for custom css styling. Defaults to an empty object. Default: `{}`.
