# Data Explorer

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

[Open interactive preview](https://isle.heinz.cmu.edu/36-200/heartdisease/#/)

#### Options


