---
id: gate 
title: Gate
sidebar_label: Gate
---

An ISLE component that allows to display its children only to reserved audiences.

## Example

```jsx live
<Gate 
    banner={"<div>You have to be logged in to see the content</div>"}
    user 
>
    <h1>For users only</div>
</Gate>
``` 

[Open interactive preview](https://isle.heinz.cmu.edu/components/gate/)

## Options

* __user__ | `boolean`: when set the gated content is displayed to subscribed users. Default: `false`.
* __notUser__ | `boolean`: when set the gated content is **not** displayed to subscribed users. Default: `false`.
* __enrolled__ | `boolean`: when set the gated content is displayed to the students enrolled in the course. Default: `false`.
* __notEnrolled__ | `boolean`: when set the gated content is **not** displayed to the students enrolled in the course. Default: `false`.
* __owner__ | `boolean`: when set the gated content is displayed to the owner of the course (usually the instructor). Default: `false`.
* __notOwner__ | `boolean`: when set the gated content is **not** displayed to the owner of the course (usually the instructor). Default: `false`.
* __banner__ | `node`: a message which is visible to the visitors lacking the gate privilege. Default: `none`.
* __disabled__ | `boolean`: if a gate is disabled, the banner will be displayed no matter what. Default: `false`.
* __check__ | `function`: callback function returning a `boolean` indicating whether gate should display child components; the function is invoked whenever session actions arrive. Default: `none`.
