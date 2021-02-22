---
id: word-venn-diagram
title: Word Venn Diagram
sidebar_label: Word Venn Diagram
---

一个维恩图，直观地显示了所提供的术语-文档矩阵中文档中的词的共同出现率。

## 选项

* __height__ | `number`: 维恩图的高度，单位为像素. Default: `350`.
* __nTexts__ | `number (required)`: 资料来源数量. Default: `none`.
* __onClick__ | `function`: 当点击 "绘制维恩图 "时要做的事情的回调。. Default: `onClick() {}`.
* __tdm__ | `array (required)`: 代表[术语文件矩阵]的 "数组"(https://en.wikipedia.org/wiki/Document-term_matrix). Default: `none`.
* __vocabulary__ | `array (required)`: `array`按传递的`tdm`数组的顺序排列，以便索引可以与它们的文字相匹配。. Default: `none`.
* __width__ | `number`: 维恩图的宽度，单位为像素. Default: `600`.


## 例子

```jsx live
<LearnWordVennDiagram />
```

