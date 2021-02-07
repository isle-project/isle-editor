---
id: panel 
title: Panel
sidebar_label: Panel
---

Card component.

## Examples

```jsx live
<Panel>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Panel>
``` 

## Options

* __className__ | `string`: CSS class name. Default: `''`.
* __header__ | `(string|node)`: panel heading (h3). Default: `none`.
* __footer__ | `(string|node)`: panel footer. Default: `none`.
* __minimizable__ | `boolean`: whether the panel can be minimized. Default: `false`.
* __fullscreen__ | `boolean`: whether the panel can be made fullscreen (only for instructors). Default: `false`.
* __hideTooltip__ | `string`: tooltip displayed over the hide button. Default: `none`.
* __bodyStyle__ | `object`: CSS inline styles for body. Default: `{}`.
* __footerStyle__ | `object`: CSS inline styles for footer. Default: `{}`.
* __style__ | `object`: CSS inline styles for container. Default: `{}`.
* __onHide__ | `function`: callback invoked when the close button is clicked. Default: `none`.
