---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

A component rendering data in a tabular display. Built on top of [react-table](https://react-table.js.org/).

## Example

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

## Options

* __data__ | `(array|object) (required)`: A data object or array to be viewed. If it is an object, the keys correspond to column values while an array will expect an array of objects with a named field corresponding to each column. Default: `none`.
* __dataInfo__ | `object`: object with `info` string array describing the data set, the `name` of the dataset, an `object` of `variables` with keys corresponding to variable names and values to variable descriptions, an a `showOnStartup` boolean controlling whether to display the info modal on startup. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: controls whether columns for which no `info` exist have a button which when clicked calls the `onColumnDelete` callback function. Default: `false`.
* __filterable__ | `boolean`: controls whether columns are filterable. Default: `true`.
* __editable__ | `array`: array of names for columns that shall be editable. Default: `[]`.
* __onColumnDrag__ | `function`: undefined. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: function invoked with the name of a column when the respective delete button for a column is clicked. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: undefined. Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: A function specifying an action to take for rows removed from the data (defaults to an empty function). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: function invoked with the updated data set after the value of a cell was changed by the user (only applies when table is `editable`). Default: `onEdit() {}`.
* __filters__ | `array`: undefined. Default: `[]`.
* __onFilteredChange__ | `function`: undefined. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: indicates whether to display checkboxes for rows to be removed. Default: `false`.
* __showIdColumn__ | `boolean`: controls whether to show an ID column. Default: `true`.
* __style__ | `object`: An object allowing for custom css styling. Defaults to an empty object. Default: `{}`.
