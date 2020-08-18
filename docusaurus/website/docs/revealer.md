---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

An ISLE component that instructors may use to selectively reveal or hide children content to all students during class.

## Example

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

## Options

* __message__ | `(string|node)`: message to be displayed when content is hidden. Default: `none`.
* __show__ | `boolean`: controls whether to initially display child elements. Default: `false`.
