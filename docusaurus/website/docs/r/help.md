---
id: r-help
title: R Help
sidebar_label: R Help
---

Make words pull up R documentation in a modal window when clicked.

## Examples

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

## Options

* __func__ | `string`: name of the `R function` for which to open the documentation. If not supplied, the content of the `RHelp` tag is assumed to be equal to the name of the function. Default: `''`.
* __library__ | `string`: name of the R package in which the function resides. Default: `'base'`.
* __visible__ | `boolean`: controls whether the help modal window should be opened at startup. Default: `false`.
