# ProportionsSurvey

Component that allows a gruop of people to decide (on a 100% basis) the weight and importance of a given optoin

#### Example:

``` js
   <ProportionsSurvey 
    user
    id = "Group2"
    question="Decide what is important"
    group= "The group decision"
    nElements = { 3 }
    colors = {["red", "blue", "gold"]}
    personalHeight= { 300 }
    groupHeight = { 200 }
    margin = { "80px" }
    legends = {["CMU", "Bitcoin", "Gold", "Diamanten"]}  />    
```

#### Options:

* __user__: Makes it visible only to the assigned users (required)`''`.
* __id__: `string` - the id of the component (required).
* __question__: `string` that describes the question at hand.
* __group__: `string` that gives the title of the group decision.
* __nElements__: `number of elements` that shall be weighed.
* __legenbds__: `Array of strings` that describe the options to be weighed.
* __colors__: `Array of strings` that define the colors. Ifd not defined, a custom color scale will be used.
* __personalHeight__: `number` which defines the height of the personal input.
* __groupHeight__: `number` which defines the height of the group element
* __margin__: `string in px` which allows the correction of the number display








