---
id: r-table
title: R Table
sidebar_label: R Table
---

用于在表格显示中渲染R数据框架或矩阵的组件。

## 选项

* __code__ | `string`: 返回一个data.frame的R代码，该frame包含要在表中显示的数据。. Default: `''`.
* __libraries__ | `array`: 当输入的 "code "被执行时，应自动加载的R库。. Default: `[]`.
* __prependCode__ | `(string|array)`: 在评估 "code "时，将R代码 "string"(或R代码块 "array")前置到存储在 "code "中的代码。. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.


## 例子


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Custom Style', value: 'customStyle' }
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

<TabItem value="customStyle" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
    style={{ width: '400px' }}
/>
```

</TabItem>

</Tabs>
