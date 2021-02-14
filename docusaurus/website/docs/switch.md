---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

The Switch component allows the display of one element out of a list of several elements. Users can cycle through the different children of the Switch tag by clicking on the currently displayed one.

## Options

* __active__ | `boolean`: controls whether the switch is active or not. Default: `true`.
* __tooltip__ | `string`: tooltip displayed when hovering over the switch element. Default: `none`.
* __tooltipPos__ | `string`: placement of the tooltip (either `top`, `left`, `right`, or `bottom`). Default: `'top'`.
* __className__ | `string`: class name for the enclosing span element. Default: `''`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onChange__ | `function`: callback invoked when elements are switched. Receives as its first argument the index of the currently displayed child. Default: `onChange() {}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Tooltip', value: 'withTooltip' },
        { label: 'With Style', value: 'withStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Switch>
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```

</TabItem>

<TabItem value="withTooltip">

```jsx live
<Switch tooltip="Just click and see" tooltipPos="left">
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<Switch  
  style={{ fontSize: 80, fontFamily: 'Open Sans Condensed'}} 
>
    <span>Some Clouds</span>
    <img src="https://bit.ly/3rLGE30" />
    <img src ="https://bit.ly/2OzxEj3" />
</Switch>
```

</TabItem>

</Tabs>
