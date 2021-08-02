---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

This component is used by students to briefly summarize data as it is presented and perform various statistical tests.

## Options

* __categorical__ | `array`: array of strings indicating the name of each categorical variable. Default: `[]`.
* __quantitative__ | `array`: array of strings indicating the name of each quantitative variable. Default: `[]`.
* __data__ | `object`: data object or array to be viewed. If it is an object, the keys correspond to column values while an array will expect an array of objects with a named field corresponding to each column. If you wish to allow students the ability to import a `.csv` file, set the `data` option to be `false`. Default: `{}`.
* __dataInfo__ | `object`: object containing the keys \'name\', whose value is a string, \'info\', whose value is an array of strings in which each element in the array is a new line and \'variables\', an object with keys as variable names and values as variable descriptions. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: boolean indicating whether to show the editor to the user. Default: `true`.
* __editorProps__ | `object`: object of properties to be passed to the `TextEditor` (see documentation for <TextEditor />). Default: `none`.
* __editorTitle__ | `string`: string indicating the title of the explorer to be displayed. Default: `none`.
* __dataTable__ | `boolean`: boolean value indicating whether to hide the data table from view. Default: `true`.
* __dataTableProps__ | `object`: properties passed to the data table component (see documentation for <DataTable />). Default: `{}`.
* __history__ | `boolean`: controls whether to display a history log of carried out actions. Default: `true`.
* __reportMode__ | `string`: controls whether to sync editor changes for everyone (`collaborative`), across users in groups (`group`), or not (`individual`). Default: `'individual'`.
* __histogramDensities__ | `boolean`: boolean value indicating whether to display histogram densities. Default: `true`.
* __models__ | `array`: array of strings indicating models that may be fit on the data. Default: `[
  'Simple Linear Regression',
  'Multiple Linear Regression',
  'LASSO',
  'Decision Tree',
  'Random Forest',
  'Logistic Regression',
  'Naive Bayes',
  'PCA',
  'Hierarchical Clustering',
  'kmeans'
]`.
* __opened__ | `string`: page opened at startup. Default: `none`.
* __plots__ | `array`: array of strings indicating which plots to show to the user. Default: `[
  'Bar Chart',
  'Pie Chart',
  'Mosaic Plot',
  'Histogram',
  'Interval Plot',
  'Box Plot',
  'Line Plot',
  'Scatterplot',
  'Scatterplot Matrix',
  'Heat Map',
  'Contour Chart',
  'Violin Plot',
  'QQ Plot'
]`.
* __questions__ | `(array|object)`: array of nodes of text and question components to be displayed in a `questions` tab or an object of properties passed down to an underlying `<Pages />` component. Default: `none`.
* __showTestDecisions__ | `boolean`: boolean indicating whether to show the decisions made for each test based on the calculated p-values. Default: `true`.
* __statistics__ | `array`: array of strings indicating which summary statistics may be calculated. Default: `[
  'Mean',
  'Median',
  'Min',
  'Max',
  'Range',
  'Interquartile Range',
  'Standard Deviation',
  'Variance',
  'Correlation',
  'Correlation Matrix',
  'Skewness',
  'Excess Kurtosis',
  'First Quartile',
  'Third Quartile',
  'Quantile',
  'Five-Number Summary'
]`.
* __style__ | `object`: CSS inline styles for main container. Default: `{}`.
* __tables__ | `array`: array of strings indicating which tables may be created from the data. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: array of objects and keys indicating any custom tabs to add. Default: `[]`.
* __tests__ | `array`: array of strings indicating which hypothesis tests to include. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-squared Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: boolean indicating whether to display variable transformation tools. Default: `true`.
* __onTutorialCompletion__ | `function`: function invoked when user has completed the data explorer tutorial. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: function invoked when user starts the data explorer tutorial. Default: `onTutorialStart() {}`.


## Examples

In creating a data explorer, one needs a *.json dataset. This step may be accomplished by including the following in the header of a *.isle file:

```js
require:
    dataName: "./dataName.json"
```

Consider a dataset called "heartdisease" with the following variables:
* __Gender__: _Categorical_
* __Drugs__: _Categorical_
* __Complications__: _Categorical_
* __Cost__: _Quantitative_
* __Age__: _Quantitative_
* __Interventions__: _Quantitative_
* __ERVisit__: _Quantitative_
* __Comorbidities__: _Quantitative_
* __Duration__: _Quantitative_

We will include the explorer with the following code:

```jsx live
<DataExplorer 
    id="heartdisease"
    data={heartdisease} 
    categorical={[ 'Gender', 'Drugs', 'Complications' ]}
    quantitative={[ 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
    tests={[]}
/>
```



