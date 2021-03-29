---
id: r-help
title: R Help
sidebar_label: R Help
---

Make words pull up R documentation in a modal window when clicked.

## Options

* __func__ | `string`: name of the `R function` for which to open the documentation. If not supplied, the content of the `RHelp` tag is assumed to be equal to the name of the function. Default: `''`.
* __library__ | `string`: name of the R package in which the function resides. Default: `'base'`.
* __visible__ | `boolean`: controls whether the help modal window should be opened at startup. Default: `false`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'From Library', value: 'otherLibrary' },
        { label: 'Visible on Startup', value: 'visible' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<span><RHelp>sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

<TabItem value="otherLibrary" >

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

</TabItem>

<TabItem value="visible" >

```jsx live
<span><RHelp visible={true} >sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

</Tabs>
