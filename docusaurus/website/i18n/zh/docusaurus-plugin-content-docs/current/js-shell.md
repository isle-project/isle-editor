---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

一个可以用来执行JavaScript命令的交互式Javascript shell。该shell包含一个显示错误信息和警告等的控制台。

## 选项

* __code__ | `string`: 要评估的JavaScript代码. Default: `''`.
* __solution__ | `string`: 对于编程问题，代码 "string "代表问题的正式解决方案。. Default: `''`.
* __hints__ | `array<(string|node)>`: 对于编程问题，一系列的提示提供了如何处理问题的指导。. Default: `[]`.
* __precompute__ | `boolean`: 控制组件挂载后是否应该执行默认代码。. Default: `false`.
* __chat__ | `boolean`: 控制是否应该启用群聊功能. Default: `false`.
* __check__ | `string`: 附加的JavaScript代码用于检查要评估的 "代码"。. Default: `none`.
* __disabled__ | `boolean`: 控制是否禁用所有用户输入并使代码块静态化。. Default: `false`.
* __lines__ | `number`: 显示行数. Default: `5`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onChange__ | `function`: 每当文本字段输入发生变化时，就会调用回调。. Default: `onChange() {}`.
* __onEvaluate__ | `function`: 每当点击 "评价 "按钮时，就会调用回调。. Default: `onEvaluate() {}`.
* __vars__ | `object`: 作用域对象，其中包含应提供给被评估的`code`的变量。. Default: `none`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Ten Lines', value: 'mLines' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<JSShell code = {`var a = 2; 
var b = 2;
console.log(a + b);`} />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />
```

</TabItem>

<TabItem value="mLines">

```jsx live
<JSShell lines={10} />
```

</TabItem>

</Tabs>




