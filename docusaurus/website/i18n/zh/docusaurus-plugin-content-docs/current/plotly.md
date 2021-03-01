---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

剧情化的可视化。

## 选项

* __data__ | `array (required)`: 数据阵列. Default: `none`.
* __draggable__ | `boolean`: 控制情节是否可以拖动. Default: `false`.
* __editable__ | `boolean`: 控制所创建的图形的标签是否可编辑。. Default: `false`.
* __id__ | `string`: 部件标识符. Default: `none`.
* __layout__ | `object`: Plotly布局对象. Default: `{}`.
* __config__ | `object`: Plotly配置选项(见：https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: 控制是否显示改变图例的按钮. Default: `true`.
* __meta__ | `object`: 绘制元信息. Default: `none`.
* __revision__ | `number`: 当提供时，当修订值递增时，使绘图更新。. Default: `none`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onAfterPlot__ | `function`: 每次绘制图表时都会调用回调函数。. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: 当任何元素被点击时调用回调函数。. Default: `onClick() {}`.
* __onInitialized__ | `function`: plot初始化后调用回调；调用时使用 figure（对象有三个键，分别对应输入道具：`data`、`layout`和`frames`）和DOM节点`graphDiv`。. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: 点击图例项目时调用回调函数。. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: 当双击图例项目时调用回调函数。. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: 当中继被触发时调用回调函数。. Default: `onRelayout() {}`.
* __onSelected__ | `function`: 当元素被选中时调用的回调函数. Default: `onSelected() {}`.
* __onShare__ | `function`: 点击 "分享 "按钮时调用的回调函数。. Default: `none`.
* __removeButtons__ | `boolean`: 控制是否删除所有按钮（除了全屏按钮外，如果启用）。. Default: `false`.
* __toggleFullscreen__ | `boolean`: 控制是否允许在全屏模式下显示图形。. Default: `true`.


## 例子

```jsx live
<Plotly
    data={[{
        values: [ 24, 7, 0.5 ],
        labels: [ 'English', 'Spanish', 'Other' ],
        type: 'pie'
            }]}
    layout={{ width: 300 }}
/>
```

