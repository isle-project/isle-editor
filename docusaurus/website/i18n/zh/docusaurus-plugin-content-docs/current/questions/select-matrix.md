---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

一道题的答案由多个选择框组成。

## 选项

* __question__ | `(string|node)`: 在选择问题矩阵的顶部显示的问题。. Default: `''`.
* __rows__ | `array`: 行标签. Default: `[]`.
* __cols__ | `array`: 列标签. Default: `[]`.
* __options__ | `object`: 对象的键值对，键值形式为`row:col`，例如`0:0`、`0:1`、`1:0`等，其相应的值是各个选择题可能的答案选择数组。. Default: `{}`.
* __solution__ | `object`: 含有键值对的解决方案对象，键值形式为`row:col`，例如`0:0`，`0:1`，`1:0`等，其相应的值是相应`选项`数组中正确答案元素的索引。. Default: `{}`.
* __hints__ | `array<(string|node)>`: 指导如何回答问题的提示。. Default: `[]`.
* __hintPlacement__ | `string`: 提示的位置（可以是 `top`、`left`、`right`, 或 `bottom`）。. Default: `'bottom'`.
* __feedback__ | `boolean`: 控制是否显示反馈按钮. Default: `true`.
* __provideFeedback__ | `string`: 是提供 "无 "反馈，还是对提交的答案提供 "个别 "反馈，还是对所有问题提供 "总体 "反馈；. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: 是否允许在每个选择框中不做选择的情况下进行提交。. Default: `false`.
* __nTries__ | `number`: 经过多少次尝试后，不再接受进一步的答案（如果`provideFeedback`不是`none`）。. Default: `3`.
* __failureMsg__ | `string`: 提交错误答案时显示的通知文字. Default: `none`.
* __successMsg__ | `string`: 提交正确答案时显示的通知文字. Default: `none`.
* __cellLabels__ | `object`: 对象定义的单元格的标签，键值格式为 "row:col"。. Default: `{}`.
* __chat__ | `boolean`: 控制该元素是否应该有一个集成的聊天. Default: `false`.
* __panelProps__ | `object`: 要传递给外部<Panel /> 组件的额外属性. Default: `{}`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onChange__ | `function`: 改变答案时调用的回调函数. Default: `onChange() {}`.
* __onSubmit__ | `function`: 提交时调用的回调函数，第一个参数是答案，第二个参数是表示正确性的布尔值。. Default: `onSubmit() {}`.


## 例子


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Feedback Messages', value: 'feedbackMessages' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestionMatrix
  question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
    hints={[
        'His father Johann Sebastian was a famous composer too',
        'He was famous for his FAUST - so definitely an author',
        'Poussin was an 18th century painter',
        'Courbet was a realistic painter'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestionMatrix
    style={{ 
        fontFamily: 'Georgia',
        fontSize: 22, 
        textShadow: '0 0  10px white',
        background: 'rgb(251,213,112)',
        background: 'radial-gradient(circle, yellow 0%, orange 30%, green 100%)'
    }}
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>


<TabItem value="feedbackMessages">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    failureMsg="Sorry, that was wrong." 
    successMsg ="Wow! Congratulations, you are a specialist!"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```

</TabItem>

</Tabs>

