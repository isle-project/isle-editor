# Beacon Tooltip

Component placeing a beacon in the lesson, either independently or attached to a `target`. Upon hovering or clicking on the beacon, a tooltip is displayed.

#### Example

```js
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/beacon-tooltip/)

#### Options:

* __title__ | `(string|node)`: title to be displayed at the top of the tooltip. Default: `none`.
* __content__ | `(string|node)`: tooltip content. Default: `'`content` comes here...'`.
* __event__ | `string`: if set to `click`, tooltip is toggled when clicking on beacon; if set to `hover`, the tooltip is activated via hovering. Default: `'click'`.
* __placement__ | `string`: placement of the tooltip relative to `target` (either `top`, `top-start`, `top-end`, `bottom`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`, `auto`, or `center`). Default: `'left'`.
* __target__ | `string`: class or ID selector for element to attach tooltip to. Default: `''`.
* __offset__ | `number`: distance between the tooltip and `target` in pixels. Default: `15`.
* __onChange__ | `function`: callback invoked upon state change of the tooltip. Receives two arguments: the `action` (`open` or `close`) and the passed `props`. Default: `onChange() {}`.
