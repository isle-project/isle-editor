# ProportionsSurvey

Component that allows a group of people to vote on the weights and importance of given options.

#### Example:

``` js
<ProportionsSurvey 
    user
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "Bitcoin", "Gold", "Diamanten" ]}
/>
```

#### Options:

* __user__: Makes it visible to registered users.
* __id__: `string` - the ID of the component (required).
* __question__: `string` that describes the question at hand.
* __group__: `string` that gives the title of the group decision.
* __nElements__: `number of elements` that shall be weighed.
* __legends__: `Array of strings` that describe the options to be weighed.
* __colors__: `Array of strings` that define the colors. If not defined, a custom color scale will be used.
* __personalHeight__: `number` which defines the height of the personal input.
* __groupHeight__: `number` which defines the height of the group element.
* __margin__: `string in px` which allows the correction of the number display.








