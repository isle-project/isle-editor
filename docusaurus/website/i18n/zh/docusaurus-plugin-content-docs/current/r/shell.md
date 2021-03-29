---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

一个交互式的R Shell，可以用来在云端使用[OpenCPU](https://www.opencpu.org/)执行R命令。

## 选项

* __code__ | `string`: 要评估的R代码. Default: `''`.
* __solution__ | `string`: 对于编程问题，R代码`string`代表问题的正式解决方案. Default: `''`.
* __hints__ | `array<(string|node)>`: 对于编程问题，一系列的提示提供了如何处理问题的指导。. Default: `[]`.
* __addPreceding__ | `boolean`: 如果设置为 "true"，则shell将评估当前组件的所有代码和课程中出现的所有先前的代码。. Default: `false`.
* __libraries__ | `array`: 当输入的 "code "被执行时，应自动加载的R库。. Default: `[]`.
* __precompute__ | `boolean`: 控制组件挂载后是否应该执行默认代码。. Default: `false`.
* __prependCode__ | `(string|array)`: 在评估 "code "时，将R代码 "string"(或R代码块 "array")前置到存储在 "code "中的代码。. Default: `''`.
* __chat__ | `boolean`: 控制是否应该启用群聊功能. Default: `false`.
* __disabled__ | `boolean`: 控制是否禁用所有用户输入并使代码块静态化。. Default: `false`.
* __lines__ | `number`: 显示行数. Default: `5`.
* __resettable__ | `boolean`: 控制是否显示复位按钮，以恢复默认代码输入。. Default: `false`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onChange__ | `function`: 每当文本字段输入发生变化时，就会调用回调。. Default: `onChange() {}`.
* __onEvaluate__ | `function`: 每当点击 "评价 "按钮时，就会调用回调。. Default: `onEvaluate(){}`.
* __onResult__ | `function`: 每当从云中获取代码执行结果时，就会调用回调。结果 "string "作为唯一参数传递给回调函数。. Default: `onResult() {}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Multiline', value: 'multiline' },
        { label: 'Precompute & Disabled', value: 'precompute' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Add Preceding Code', value: 'addPreceding' },
        { label: 'Hints & Solution', value: 'hintsAndSolution' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
/>
```

</TabItem>

<TabItem value="multiline" >

```jsx live
<RShell code={`x <- runif( 100 );
y <- 3.0 * x + rnorm( 100 );
fit <- lm( y ~ x );
summary( fit );
`} resettable />
```

</TabItem>

<TabItem value="precompute" >

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
    precompute
    disabled
    lines={2}
/>
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<RShell libraries={['dplyr']} code={'starwars %>% filter(species == "Droid")'} lines={2} />
```

</TabItem>

<TabItem value="addPreceding" >

```jsx live
<RShell code="library(dplyr)" lines={2} disabled />

<RShell code={'starwars %>% filter(species == "Droid")'} addPreceding lines={2} />
```

</TabItem>

<TabItem value="hintsAndSolution" >

```jsx live
**(a)** Use the lm() function to regress `Price` on: `EngineSize`, `Origin`, `MPG.highway`, `MPG.city` and `Horsepower`.

<RShell 
    id="prob1a"
    code="" 
    solution={`cars.lm <- lm(Price ~ EngineSize + Origin + MPG.highway + MPG.city + Horsepower,
data = Cars93)
summary(cars.lm)`} 
    lines={5} 
    hints={["Use the model formula syntax to specify your regression equation. Type ?formula if you don't remember how formulas work.","You can use the summary() function to retrieve a detailed regression output for a lm object"]}
/>
```

</TabItem>

</Tabs>
