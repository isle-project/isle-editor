# Data Explorer
<<<<<<< HEAD

This component is used by students to briefly summarize data as it is presented and perform various statistical tests. This component may be used as a standalone feature in a lesson. 

#### Example

In creating a data explorer, one needs a *.json dataset. This step may be accomplished by including the following in the header of a *.isle file:

``` js
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
* __Comorbidities: _Continuous_
* __Duration__: _Continuous_

We will include the explorer with the following code:

``` js, eval=FALSE
<DataExplorer 
    id="heartdisease"
	data={heartdisease} 
	categorical={['Gender','Drugs','Complications']}
	continuous={['Cost','Age','Interventions','ERVisit','Comorbidities','Duration']}
	tests={[]}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/data-explorer/)

#### Options

* __data__: The name of the .json dataset that will be used in the explorer
* __onSelect__: A function to be passed.
* __tabs__: An array containing additional tabs to be used in the display interface. Each entry in the array will include a string 'title' and content. For example, if one wishes to add an additional tab with a text content of "A Note", the following code would be used: ```tabs={[ {title: 'Note', content: <div>A Note</div>} ]}```
* __Questions__: Questions to be asked of the dataset. May also be embedded in a question object independent of the data explorer apparatus.
* __transformer__: A bool value indicating whether a transformation is to be applied to a variable.
* __statistics__: Relevant statistical operations that can be applied to data, such as "mean" or "correlation". The following operations are enabled by default:
-- Mean
-- Median
-- Min
-- Max
-- Interquartile Range
-- Standard Deviation
-- Variance
-- Correlation
* __plots__: Specification of which plots may be produced by the explorer. The following may be used and are enabled by default:
-- Bar Chart
-- Pie Chart
-- Histogram
-- Box Plot
-- Scatterplot
-- Heat Map
-- Mosaic Plot
* __tables__: Two-way tables that may be compiled from the data. One maty choose either (or both) of the following options: Frequency Table, Contingency Table
* __tests__: Statistical tests that may be applied to the data. Must be some combination of the following, all of which are enabled by default:
-- One-Sample Mean Test
-- One-Sample Proportion Test
-- Two-Sample Mean Test
-- Two-Sample Proportion Test
-- Correlation Test
-- Chi-squared Independence Test
-- One-Way ANOVA
* __models__: Modelling paradigms to be used in creating models from the variables presented. Currently this functionality is limited to "Simple Linear Regression" (which is enabled by default), yet will be extended in the future.
* __categorical__: An array of string variables that represent the categorical variables in a dataset.
* __continuous__: An array of string variables that represent the continuous variables in a dataset.
* __distributions__: Distributions that may be used in calculating probabilities. This functionality exists independently of the dataset provided. Currently limited to normal, uniform and exponential distributions.

#### Default Options

``` js
DataExplorer.defaultProps = {
	data: {},
	onSelect(){},
	tabs: [],
	questions: null,
	transformer: false,
	statistics: [
		'Mean',
		'Median',
		'Min',
		'Max',
		'Range',
		'Interquartile Range',
		'Standard Deviation',
		'Variance',
		'Correlation'
	],
	plots: [
		'Bar Chart',
		'Pie Chart',
		'Histogram',
		'Box Plot',
		'Scatterplot',
		'Heat Map',
		'Mosaic Plot'
	],
	tables: [
		'Frequency Table',
		'Contingency Table'
	],
	tests: [
		'One-Sample Mean Test',
		'One-Sample Proportion Test',
		'Two-Sample Mean Test',
		'Two-Sample Proportion Test',
		'Correlation Test',
		'Chi-squared Independence Test',
		'One-Way ANOVA'
	],
	models: [
		'Simple Linear Regression'
	],
	categorical: [],
	continuous: [],
	distributions: [ 'Normal', 'Uniform', 'Exponential' ]
};
```
=======
>>>>>>> 06a8573d9a1452cb3fbcbefb69418f126718d441
