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

[Open interactive preview](https://isle.heinz.cmu.edu/components/match-list-question/)

#### Options:

* __question__ | `string`: question to be displayed at the top of the match list question component. Default: `''`.
* __elements__ | `array<{a,b}>`: an `array` holding the correct pairs displayed at the top of the free text question component. Each `array` element must be an `object` with `a` and `b` properties. Default: `[]`.
* __hintPlacement__ | `string`: placement of the hints (either `top`, `left`, `right`, or `bottom`). Default: `'bottom'`.
* __hints__ | `array<string>`: hints providing guidance on how to answer the question. Default: `[]`.
* __feedback__ | `object`: controls whether to display feedback buttons. Default: `false`.
* __chat__ | `boolean`: controls whether the element should have an integrated chat. Default: `false`.
* __colorScale__ | `array`: if set, the supplied colors are used for the tiles. Default: `none`.
* __onSubmit__ | `function`: callback invoked when students submits an answer. Default: `onSubmit() {}`.
