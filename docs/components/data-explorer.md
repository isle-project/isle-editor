# Data Explorer

This component is used by students to briefly summarize data as it is presented and perform various statistical tests. This component may be used as a standalone feature in a lesson. If you wish to allow students the ability to import a `.csv` file, set the `'data` option to be `false`.

#### Example

In creating a data explorer, one needs a *.json dataset. This step may be accomplished by including the following in the header of a *.isle file:

```js
require:
	dataName: "./dataName.json"
```

Consider a dataset called "heartdisease" with the following variables:
* __Gender__: _Categorical_
* __Drugs__: _Categorical_
* __Complications__: _Categorical_
* __Cost__: _Continuous_
* __Age__: _Continuous_
* __Interventions__: _Continuous_
* __ERVisit__: _Continuous_
* __Comorbidities__: _Continuous_
* __Duration__: _Continuous_

We will include the explorer with the following code:

```js
<DataExplorer 
	id="heartdisease"
	data={heartdisease} 
	categorical={[ 'Gender', 'Drugs', 'Complications' ]}
	continuous={[ 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
	tests={[]}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/data-explorer/)

#### Options:

* __categorical__ | `array`: An array of strings indicating the name of each categorical variable.. Default: `[]`.
* __continuous__ | `array`: An array of strings indicating the name of each continuous variable.. Default: `[]`.
* __data__ | `object`: A data object or array to be viewed. If it is an object, the keys correspond to column values while an array will expect an array of objects with a named field corresponding to each column.. Default: `{}`.
* __dataInfo__ | `object`: An object containing the keys 'name', whose value is a string, 'info', whose value is an array of strings in which each element in the array is a new line and 'variables', an object with keys as variable names and values as variable descriptions.. Default: `{
  'info': '',
  'name': '',
  'variables': null
}`.
* __distributions__ | `array`: An array of strings indicating distributions that may be used in calculating probabilities. This functionality exists independently of the dataset provided. Currently limited to normal, uniform and exponential distributions. Default: `[
  'Normal',
  'Uniform',
  'Exponential'
]`.
* __editorProps__ | `object`: An object to be passed to `MarkdownEditor` indicating properties to be used. Default: `none`.
* __editorTitle__ | `string`: A string indicating the title of the explorer to be displayed. Default: `'Report'`.
* __hideDataTable__ | `boolean`: A boolean value indicating whether to hide the data table from view. Default: `false`.
* __histogramDensities__ | `boolean`: A boolean value indicating whether to display histogram densities. Default: `true`.
* __models__ | `array`: An array of strings indicating models that may be fit on the data. Default: `[
  'Simple Linear Regression'
]`.
* __plots__ | `array`: An array of strings indicating which plots to show to the user. Default: `[
  'Bar Chart',
  'Pie Chart',
  'Histogram',
  'Box Plot',
  'Scatterplot',
  'Heat Map',
  'Mosaic Plot',
  'Contour Chart'
]`.
* __questions__ | `node`: A node indicating surrounding text and question components to be displayed in a tabbed window. Default: `none`.
* __showEditor__ | `boolean`: A boolean indicating whether to show the editor to the user. Default: `false`.
* __showTestDecisions__ | `boolean`: A boolean indicating whether to show the decisions made for each test based on the calculated p-values. Default: `true`.
* __statistics__ | `array`: An array of strings indicating which summary statistics may be calculated. Default: `[
  'Mean',
  'Median',
  'Min',
  'Max',
  'Range',
  'Interquartile Range',
  'Standard Deviation',
  'Variance',
  'Correlation'
]`.
* __tables__ | `array`: An array of strings indicating which tables may be created from the data. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: An array of objects and keys indicating any custom tabs to add. Default: `[]`.
* __tests__ | `array`: An array of strings indicating which hypothesis tests to include. Default: `[
  'One-Sample Mean Test',
  'One-Sample Proportion Test',
  'Two-Sample Mean Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-squared Independence Test',
  'One-Way ANOVA'
]`.
* __transformer__ | `boolean`: A boolean indicating whether one wants to display a variable transformer. Default: `false`.
