# Match List Question

An ISLE component that renders a question in which the learner has to match elements from two lists with each other in the correct way.

#### Example

``` javascript
<MatchListQuestion
    question="Please match the correct surnames and first names."
    elements={[
        { a: 'Ronald', b: 'Fisher' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Karl', b: 'Pearson' },
    ]}
    onSubmit={ ( answers ) => {
        
    }}
/>
```

#### Options

* __elements__: an `array` holding the correct pairs displayed at the top of the free text question component. Each `array` element must be an `object` with `a` and `b` properties.
* __onChange__: callback `function` invoked every time the text area value changes. Default: `null`.
* __question__: a `string` holding the question to be displayed at the top of the match list question component. Default: `null`.
