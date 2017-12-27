# Timer

The Timer component provides a timer that will trigger a predefined callback when the time is up. An example use case is for the timing of quizzes.

#### Example:

``` js
<Timer 
    id='test-quiz'
    active={true} 
    duration={50} 
    onTimeUp={() => {
      alert( 'done' );
    }}
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/timer/)

#### Options:

* __id__:  the unique `string` ID for the timer. The timer component is persistent over page refreshes. Required.
* __active__: `boolean` flag that can be toggled to start or pause the timer. Default: `false`.
* __duration__: Duration in `number` seconds for the timer. Required. 
* __onTimeUp__: Callback `function` invoked when the timer runs out. Required. 
