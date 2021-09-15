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
* __showOwnerInPresentationMode__ | `boolean`: controls whether to show gate contents in presentation mode when gate is visible for `owner`s. Default: `false`.
* __check__ | `function`: callback function returning a `boolean` indicating whether gate should display child components; the function is invoked whenever session actions arrive. Default: `none`.


## Examples

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



