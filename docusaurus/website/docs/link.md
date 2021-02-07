---
id: link
title: Link
sidebar_label: Link
---

A component for displaying a link.

## Options

* __href__ | `string (required)`: URL of website to link to. Default: `none`.
* __target__ | `string`: defines where link is opened: set to `_blank` for new window, `_self` own frame, `_parent` for parent, `_top` for full body of window, or the name of the frame. Default: `'_blank'`.
* __className__ | `string`: class name. Default: `''`.
* __style__ | `object`: CSS inline styles. Default: `{}`.


## Examples

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

