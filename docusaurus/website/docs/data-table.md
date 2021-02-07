---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

A component rendering data in a tabular display. Built on top of [react-table](https://react-table.js.org/).

## Options

* __data__ | `(array|object) (required)`: A data object or array to be viewed. If it is an object, the keys correspond to column values while an array will expect an array of objects with a named field corresponding to each column. Default: `none`.
* __dataInfo__ | `object`: object with `info` string array describing the data set, the `name` of the dataset, an `object` of `variables` with keys corresponding to variable names and values to variable descriptions, an a `showOnStartup` boolean controlling whether to display the info modal on startup. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: controls whether columns for which no `info` exist have a button which when clicked calls the `onColumnDelete` callback function. Default: `false`.
* __undeletableVars__ | `array<string>`: array of variable names of columns which may not be deleted. Default: `[]`.
* __filterable__ | `boolean`: controls whether columns are filterable. Default: `true`.
* __editable__ | `array`: array of names for columns that shall be editable. Default: `[]`.
* __getTrProps__ | `function`: callback function executed for each row to customize its styling (passed table state, row info,
column, and the table instance). Default: `none`.
* __onColumnDrag__ | `function`: function invoked when a column has been dragged to a different position. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: function invoked with the name of a column when the respective delete button for a column is clicked. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: function invoked when a column has been renamed (called with the old name as first and new name as second argument). Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: function specifying an action to take for rows removed from the data (defaults to an empty function). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: function invoked with the updated data set after the value of a cell was changed by the user (only applies when table is `editable`). Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: function invoked when user has completed the data table tutorial. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: undefined. Default: `[]`.
* __onFilteredChange__ | `function`: function invoked with the current filters after data has been filtered by user. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: indicates whether to display checkboxes for rows to be removed. Default: `false`.
* __showIdColumn__ | `boolean`: controls whether to show an ID column. Default: `true`.
* __disableDownload__ | `boolean`: whether to hide the button to download the data as a CSV or JSON file. Default: `false`.
* __className__ | `string`: class name. Default: `''`.
* __style__ | `object`: An object allowing for custom css styling. Defaults to an empty object. Default: `{}`.


## Examples

```jsx live
<DataTable
    showRemove
    onClickRemove={( data ) => { console.log(data); }}
    data={{ 
        firstName: [ 'Hans', 'Lotti', 'Fritz' ], 
        lastName: [ 'Bauer', 'Müller', 'Schultz' ],
        age: [ 37, 55, 62 ]
    }}
    style={{ width: 600 }}
/>
```

