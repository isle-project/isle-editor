---
id: gate 
title: Gate
sidebar_label: Gate
---

An ISLE component that allows to display its children only to reserved audiences.

## Options

* __user__ | `boolean`: when set the gated content is displayed to users. Default: `false`.
* __notUser__ | `boolean`: when set the gated content is **not** displayed to users. Default: `false`.
* __enrolled__ | `boolean`: when set the gated content is displayed to the students enrolled in the course. Default: `false`.
* __notEnrolled__ | `boolean`: when set the gated content is **not** displayed to the students enrolled in the course. Default: `false`.
* __owner__ | `boolean`: when set the gated content is displayed to the owner of the course (usually the instructor). Default: `false`.
* __notOwner__ | `boolean`: when set the gated content is **not** displayed to the owner of the course (usually the instructor). Default: `false`.
* __after__ | `Date`: time after which the contents of the gate should become visible. Default: `none`.
* __until__ | `Date`: time until the contents of the gate should remain visible. Default: `none`.
* __banner__ | `node`: a custom message which is displayed to visitors for whom the gate's children are not visible instead of the default one. Default: `none`.
* __disabled__ | `boolean`: if a gate is disabled, the banner will be displayed no matter what. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: controls whether to show gate contents in presentation mode when gate is visible for `owner`s. Default: `true`.
* __check__ | `function`: callback function returning a `boolean` indicating whether gate should display child components; the function is invoked whenever session actions arrive. Default: `none`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Timed', value: 'timed' },
        { label: 'Hidden', value: 'hidden' },
        { label: 'Custom Banner', value: 'customBanner' },
        { label: 'Custom Check', value: 'customCheck' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Gate enrolled >
    <h1>Content for users enrolled in a cohort of the course</h1>
</Gate>
```

</TabItem>

<TabItem value="timed">

```jsx live
<Gate
    after={date({ year: 2020, month: 9, day: 1, hour: 9, minute: 30, second: 0, utcOffset: 4 })}
    until={date({ year: 2020, month: 12, day: 20, hour: 9, minute: 30, second: 0, utcOffset: 5 })}
>
    # Only visible in Fall 2020 semester
</Gate>
```

</TabItem>

<TabItem value="hidden">

```jsx live
<Gate banner={null} owner >
    <h1>Content for owners without a message for others</h1>
</Gate>
```

</TabItem>

<TabItem value="customBanner">

```jsx live
<Gate owner banner={<h3>Only visible by course owners...</h3>} >
    <h1> User Analytics </h1>
</Gate>
```

</TabItem>

<TabItem value="customCheck">

```jsx live
<Gate check={( ) => {
    return session.user.email === 'admin@cmu.edu';
}} >
    <h1> User Analytics only visible to specified user</h1>
</Gate>
```

</TabItem>

</Tabs>

