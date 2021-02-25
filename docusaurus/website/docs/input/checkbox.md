---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

A checkbox input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.

## Options

* __bind__ | `string`: name of global variable for the checkbox value to be assigned to. Default: `''`.
* __defaultValue__ | `boolean`: boolean value indicating the default value of the checkbox. Default: `false`.
* __value__ | `boolean`: checkbox value (for controlled component). Default: `none`.
* __disabled__ | `boolean`: indicates whether the input is active or not. Default: `false`.
* __inline__ | `boolean`: indicates whether the checkbox is displayed inline. Default: `false`.
* __onChange__ | `function`: callback function to be invoked when checkbox is clicked. The function is called with the current checkbox value. Default: `onChange() {}`.
* __legend__ | `(string|node)`: text displayed next to the checkbox. Default: `''`.
* __tooltip__ | `string`: text displayed when hovering over checkbox. Default: `''`.
* __tooltipPlacement__ | `string`: position of button tooltip. Default: `'right'`.
* __style__ | `object`: CSS inline styles. Default: `{}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>


<TabItem value="minimal">

```jsx live
<CheckboxInput legend="Take the logarithm" />
```
</TabItem>

<TabItem value="inline">

```jsx live
<p>Please click
<CheckboxInput
    inline defaultValue={false}
/>
to confirm that you will follow our netiquette.</p>
```
</TabItem>


<TabItem value="withStyle">

```jsx live
<CheckboxInput
    style={{ fontSize: 30, color: 'blue'}}
    legend="Click to confirm"
    defaultValue={false}
/>
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<CheckboxInput
    legend="Click to confirm..."
    onChange={( value ) => {
        alert( 'New value: '+value );
    }}
/>
```

</TabItem>

</Tabs>
