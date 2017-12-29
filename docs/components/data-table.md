# Data Table

A number question component. Usually, this will be used as part of an [ISLE dashboard](dashboard.md), but it can also be used standalone. In this case, you want to handle changes via the `onChange` attribute. 

#### Example:

``` js
<DataTable
    question="What is the number PI - three digits after the period"
    solution={3.142}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/number-question/)

#### Options:

* __data__: `object` holding a multitude of arrays.  
* __showRemove__: `boolean` allowing to remove data entries individually. Default: `false`
* __onClickRemove__: callback `function` which is triggered after the an entry has been removed. It returns the complete data-set, augmented with a  `removed` property allowing to differentiate between the items. 
* __style__: `object` for styling the tables: `''`.