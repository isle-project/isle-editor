# Timer

Displays a timer that will trigger a predefined callback when the time is up. An example use case is the timing of quizzes.

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

* __id__ | `string (required)`: the unique `string` ID for the timer. If an ID is set, the timer component is persistent over page refreshes. Default: `none`.
* __active__ | `boolean (required)`: flag that can be toggled to start or pause the timer. Default: `none`.
* __duration__ | `number (required)`: duration in seconds for the timer. Default: `none`.
* __invisible__ | `boolean`: controls whether the timer should be hidden. Default: `false`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onTimeUp__ | `function`: callback invoked when the timer runs out. Default: `onTimeUp() {}`.
