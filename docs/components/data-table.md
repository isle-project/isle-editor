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

* __data__: `object` holding a multitude of arrays.  
* __showRemove__: `boolean` allowing to remove data entries individually. Default: `false`.
* __onClickRemove__: callback `function` which is triggered after the checkbox to remove an entry has been clicked. The function is called with the complete data-set as its first argument, augmented with a `removed` property allowing one to differentiate between the items. 
* __style__: `object` for styling the tables. Default: `{}`.
