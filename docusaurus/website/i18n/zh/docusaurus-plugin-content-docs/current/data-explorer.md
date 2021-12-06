---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

这一部分内容是由学生对呈现的数据进行简单的总结，并进行各种统计检验。

## 选项

* __categorical__ | `array`: 表示每个分类变量名称的字符串数组。. Default: `[]`.
* __quantitative__ | `array`: 表示每个定量变量名称的字符串数组。. Default: `[]`.
* __data__ | `object`: 要查看的数据对象或数组。如果它是一个对象，键对应于列值，而数组将期待一个对象数组，每个列对应一个命名字段。如果你想让学生能够导入一个`.csv`文件，将`data`选项设置为`false`。. Default: `{}`.
* __dataInfo__ | `object`: 对象包含键值为字符串的 "name/"、值为字符串数组的 "info/"（数组中的每个元素都是一个新行）和键值为变量名称和值为变量描述的 "variables/"的对象。. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: 表示是否向用户显示编辑器的布尔值。. Default: `true`.
* __editorProps__ | `object`: 要传递给`TextEditor'的属性对象(见<TextEditor />的文档). Default: `none`.
* __editorTitle__ | `string`: 字符串，表示要显示的资源管理器的标题。. Default: `none`.
* __dataTable__ | `boolean`: 表示是否隐藏数据表的布尔值。. Default: `true`.
* __dataTableProps__ | `object`: 传递给数据表组件的属性(见<DataTable />文档). Default: `{}`.
* __history__ | `boolean`: 控制是否显示已执行行动的历史日志。. Default: `true`.
* __reportMode__ | `string`: 控制是否为每个人("合作")、组中的用户("组")或不同步编辑更改("个人"). Default: `'individual'`.
* __histogramDensities__ | `boolean`: 表示是否显示直方图密度的布尔值。. Default: `true`.
* __models__ | `array`: 表示可能适合数据的模型的字符串数组。. Default: `[
  'Simple Linear Regression',
  'Multiple Linear Regression',
  'LASSO',
  'Decision Tree',
  'Random Forest',
  'Logistic Regression',
  'Naive Bayes',
  'PCA',
  'Hierarchical Clustering',
  'kmeans'
]`.
* __opened__ | `string`: 开机页. Default: `none`.
* __plots__ | `array`: 字符串数组，表示要显示给用户的图。. Default: `[
  'Bar Chart',
  'Pie Chart',
  'Mosaic Plot',
  'Histogram',
  'Interval Plot',
  'Box Plot',
  'Line Plot',
  'Scatterplot',
  'Scatterplot Matrix',
  'Heat Map',
  'Contour Chart',
  'Violin Plot',
  'QQ Plot'
]`.
* __questions__ | `(array|object)`: 在`questions` 标签中显示的文本和问题组件的节点数组，或传递到底层的属性对象 `<Pages />`组件. Default: `none`.
* __showTestDecisions__ | `boolean`: boolean，表示是否要根据计算出的p值来显示每个测试的决定。. Default: `true`.
* __statistics__ | `array`: 表示可以计算哪些汇总统计的字符串数组。. Default: `[
  'Mean',
  'Median',
  'Min',
  'Max',
  'Range',
  'Interquartile Range',
  'Standard Deviation',
  'Variance',
  'Correlation',
  'Correlation Matrix',
  'Skewness',
  'Excess Kurtosis',
  'First Quartile',
  'Third Quartile',
  'Quantile',
  'Five-Number Summary'
]`.
* __style__ | `object`: 主容器的CSS内联样式. Default: `{}`.
* __tables__ | `array`: 表示可以从数据中创建哪些表的字符串数组。. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: 对象和键的数组，表示任何要添加的自定义标签。. Default: `[]`.
* __tests__ | `array`: 表示要包括哪些假设检验的字符串数组。. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-square Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: 表示是否显示变量转换工具的布尔值。. Default: `true`.
* __onTutorialCompletion__ | `function`: 当用户完成data explorer教程时调用的函数。. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: 当用户启动数据资源管理器教程时调用的函数。. Default: `onTutorialStart() {}`.


## 例子

In creating a data explorer, one needs a *.json dataset. This step may be accomplished by including the following in the header of a *.isle file:

```js
require:
    dataName: "./dataName.json"
```

Consider a dataset called "heartdisease" with the following variables:
* __Gender__: _Categorical_
* __Drugs__: _Categorical_
* __Complications__: _Categorical_
* __Cost__: _Quantitative_
* __Age__: _Quantitative_
* __Interventions__: _Quantitative_
* __ERVisit__: _Quantitative_
* __Comorbidities__: _Quantitative_
* __Duration__: _Quantitative_

We will include the explorer with the following code:

```jsx live
<DataExplorer 
    id="heartdisease"
    data={heartdisease} 
    categorical={[ 'Gender', 'Drugs', 'Complications' ]}
    quantitative={[ 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
    tests={[]}
/>
```



