--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

A dashboard for combining the handling of multiple child input fields.

## Options

* __autoStart__ | `boolean`: if set to `true`, the `onGenerate` function is executed at startup with the default input values. Default: `true`.
* __autoUpdate__ | `boolean`: controls whether the `onGenerate` function should be invoked automatically when one of the child input fields changes. Default: `false`.
* __description__ | `(string|node)`: dashboard description. Default: `''`.
* __disabled__ | `boolean`: controls whether the dashboard shall be disabled. Default: `false`.
* __label__ | `string`: button label. Default: `none`.
* __maxWidth__ | `number`: maximum width of dashboard. Default: `600`.
* __className__ | `string`: class name. Default: `''`.
* __bodyClassName__ | `string`: undefined. Default: `'d-grid gap-3'`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onGenerate__ | `function`: function invoked when the button is clicked or one of the dashboard input values changes (if `autoUpdate` is set to `true`). The function is called with the values of the input fields, in the order in which they are placed in the dashboard. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: card title. Default: `''`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Multiple Inputs', value: 'multipleInputs' }
    ]}
>

<TabItem value="minimal"> 

```jsx live
<Dashboard title="Alerter" onGenerate={( x ) => { alert( x ); }} autoStart={false} >
    <SliderInput
        legend="Input value"
    />
</Dashboard>
```

</TabItem>

<TabItem value="multipleInputs" > 

```jsx live
<Dashboard 
    title="Multiply three numbers."
    style={{ width: 600, boxShadow: '0 0 24px black' }}
    onGenerate={( x, y, z ) => { alert( x*y*z ); }} 
    autoStart={false} 
>
    <SliderInput
        legend="First Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
    <SliderInput
        legend="Second Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
    <SliderInput
        legend="Third Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
</Dashboard>
```

</TabItem>

</Tabs>
