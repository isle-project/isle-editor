---
id: slider 
title: Slider
sidebar_label: Slider
---

一个在幻灯片或旋转木马中显示其子女的组件。

## Options

* __title__ | `string`: 幻灯片/旋转木马的标题要显示在其顶部。. Default: `''`.
* __dots__ | `boolean`: 在底部显示圆点，以便快速导航到任何幻灯片。. Default: `true`.
* __fade__ | `boolean`: 控制是否在幻灯片之间使用渐变。. Default: `false`.
* __draggable__ | `boolean`: 控制用户是否可以拖动幻灯片在它们之间导航。. Default: `false`.
* __pagination__ | `string`: 是否在 "顶部"、"底部 "或 "两者 "显示分页。. Default: `'bottom'`.
* __goto__ | `number`: 如果属性被改变，组件将跳转到所选索引的幻灯片上。. Default: `0`.
* __infinite__ | `boolean`: 控制幻灯片是否环绕其内容。. Default: `false`.
* __interval__ | `number`: 设置自动换片的时间间隔。. Default: `none`.
* __swipe__ | `boolean`: 启用拖动/滑动行为。. Default: `false`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onClick__ | `function`: 点击下一个/上一个按钮时调用的回调。. Default: `onClick() {}`.


## Examples

```jsx live
<Slider title="Questions to explore:" >
    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>
    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>
    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>
    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>
</Slider>
```

