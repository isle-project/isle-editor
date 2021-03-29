---
id: r-table
title: R Table
sidebar_label: R Table
---

Component for rendering a R data frame or matrix in a tabular display.

## Options

* __code__ | `string`: R code returning a data.frame containing the data to be displayed in the table. Default: `''`.
* __libraries__ | `array`: R libraries that should be loaded automatically when the input `code` is executed. Default: `[]`.
* __prependCode__ | `(string|array)`: R code `string` (or `array` of R code blocks) to be prepended to the code stored in `code` when evaluating. Default: `''`.
* __width__ | `number`: width (between 0 and 1). Default: `0.5`.


## Examples


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Custom Width', value: 'customWidth' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RTable
    code={`data <- matrix( runif(64), nrow=8, ncol=8); 
    data`}
/>
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
/>
```

</TabItem>

<TabItem value="customWidth" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
    width={0.85}
/>
```

</TabItem>

</Tabs>
