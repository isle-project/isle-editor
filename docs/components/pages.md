# Pages

An ISLE pagination component that allows the user to step through a sequence of pages.

#### Example:

``` js
<Pages title="Pages">
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
        <RShell />
    </div>
</Pages>
``` 

[Open interactive preview](https://isle.heinz.cmu.edu/components/pages/)

#### Options:

* __activePage__ | `number`: active page. Default: `1`.
* __title__ | `string`: displayed title of the pages container. Default: `''`.
* __size__ | `string`: size of the pagination buttons (one of `default`, `lg`, `large`, `sm`, `small`, `xs`, or `xsmall`). Default: `'default'`.
* __height__ | `(number|string)`: the maximum height of the container. If an embedded page is taller, a vertical scrollbar is added. Default: `none`.
* __voiceID__ | `string`: voice control identifier. Default: `none`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onSelect__ | `function`: Function invoked when active change is changed. Receives the new active page index as a sole parameter. Default: `onSelect() {}`.
