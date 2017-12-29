# ProportionsInput

Component that allows a group of people to vote on the weights and importance of given options.

#### Example:

``` js
<ProportionsInput
    user
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/proportions-survey/)

#### Options:

* __disabled__: `boolean` indicating that the component is not editable
* __height__: `number` indicating the height of the element
* __innerRadius__: `number` indicating the inner radius of the element
* __id__: `string` - the ID of the component (required).
* __nElements__: `number of elements` that shall be weighed.
* __legends__: `Array of strings` that describe the options to be weighed.
* __colors__: `Array of strings` that define the colors. If not defined, a custom color scale will be used.
* __margin__: `string in px` which allows the correction of the number display.
* __onChange__: callback `function` invoked whenever the user changes the values