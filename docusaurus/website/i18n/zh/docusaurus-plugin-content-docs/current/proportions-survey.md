---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

允许一群人对给定选项的权重和重要性进行投票的组件。

## 选项

* __allowMultipleAnswers__ | `boolean`: 控制是否允许学生多次回答调查问卷。. Default: `false`.
* __anonymous__ | `boolean`: 控制学生的答案是否被匿名化. Default: `false`.
* __colors__ | `array`: 饼图组件的颜色数组。如果没有定义，将使用自定义色标。. Default: `none`.
* __disabled__ | `boolean`: 控制是否停用调查。. Default: `false`.
* __group__ | `string`: 组别标题. Default: `'group results'`.
* __groupHeight__ | `number`: 比例输入组显示高度(单位：px). Default: `100`.
* __legends__ | `array`: 图例标签，描述了要称量的选项。. Default: `[]`.
* __margin__ | `string`: 比例输入余量. Default: `'40px'`.
* __onSubmit__ | `function`: 当学生提交答案时，调用回调函数。. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: 比例输入每个学生的高度(单位：px). Default: `200`.
* __precision__ | `number`: 显示比例值的精度. Default: `2`.
* __question__ | `(string|node)`: 题目. Default: `''`.
* __step__ | `number`: 当光标悬停在输入框上方时，所看到的箭头的步长。. Default: `0.25`.


## 例子

```jsx live
<ProportionsSurvey 
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```



