---
id: r-output
title: R Output
sidebar_label: R Output
---

用于在ISLE课程中渲染R输出的组件。

## 选项

* __code__ | `string`: 用于评估的R代码. Default: `''`.
* __libraries__ | `array`: 当输入的 "code "被执行时，应自动加载的R库。. Default: `[]`.
* __prependCode__ | `(string|array)`: 在评估 "code "中存储的代码时，要把R代码（或代码块的 "数组"）放在前面。. Default: `''`.
* __onPlots__ | `function`: 回调调用任何生成的绘图. Default: `onPlots() {}`.
* __onResult__ | `function`: 调用 "error"(如果操作成功则为 "null")和 "result "的回调，保留R的输出。. Default: `onResult() {}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Multiline', value: 'multiline' },
        { label: 'Loading Data', value: 'loadingData' },
        { label: 'Using Libraries', value: 'usingLibraries' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<ROutput code="runif(10)" />
```

</TabItem>

<TabItem value="multiline" >

```jsx live
<ROutput code={`
x <- runif( 100 );
y <- 3.0 * x + rnorm( 100 );
fit <- lm( y ~ x );
summary( fit );
`} />
```

</TabItem>

<TabItem value="loadingData" >

```jsx live
<ROutput 
    prependCode={'wages <- read.table( "https://raw.githubusercontent.com/stdlib-js/stdlib/develop/lib/node_modules/%40stdlib/datasets/berndt-cps-wages-1985/data/data.csv", header=TRUE, sep=",")'} 
    code="summary(wages)"
/>
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<ROutput 
    libraries={[ 'dplyr' ]}
    code={'starwars %>% filter(species == "Droid")'}
/>
```

</TabItem>

</Tabs>
