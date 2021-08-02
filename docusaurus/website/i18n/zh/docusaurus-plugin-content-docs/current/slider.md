---
id: slider 
title: Slider
sidebar_label: Slider
---

一个在幻灯片或旋转木马中显示其子女的组件。

## 选项

* __title__ | `(string|node)`: 幻灯片/旋转木马的标题要显示在其顶部。. Default: `none`.
* __dots__ | `boolean`: 在底部显示圆点，以便快速导航到任何幻灯片。. Default: `true`.
* __fade__ | `boolean`: 控制是否在幻灯片之间使用渐变。. Default: `false`.
* __draggable__ | `boolean`: 控制用户是否可以拖动幻灯片在它们之间导航。. Default: `false`.
* __pagination__ | `string`: 是否在 `top`, `bottom` 或 `both` 显示分页。. Default: `'bottom'`.
* __goto__ | `number`: 如果属性被改变，组件将跳转到所选索引的幻灯片上。. Default: `0`.
* __infinite__ | `boolean`: 控制幻灯片是否环绕其内容。. Default: `false`.
* __interval__ | `number`: 设置自动换片的时间间隔。. Default: `none`.
* __swipe__ | `boolean`: 启用拖动/滑动行为。. Default: `false`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onClick__ | `function`: 点击下一个/上一个按钮时调用的回调。. Default: `onClick() {}`.


## 例子


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Customize Pagination', value: 'pagination' },
        { label: 'Slideshow', value: 'slideshow' },
        { label: 'Custom Styling', value: 'customStyling' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Slider title="Questions to explore:" >
    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>
    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>
    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>
    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>
</Slider>
```

</TabItem>

<TabItem value="pagination">

```jsx live
<Slider title="Questions to explore:" pagination="both" dots={false} >
    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>
    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>
    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>
    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>
</Slider>
```

:::tip
Use pagination buttons both at the top and bottom when the height of the content exceeds the browser window and requires scrolling.
:::

</TabItem>

<TabItem value="slideshow">

```jsx live
<Slider style={{ height: 400, background: 'black' }} infinite interval={2000} >
    <img src="https://bit.ly/3aM4OU7" alt="Untersberg Mountain Salzburg (by Giuseppe Milo, CC BY 3.0)" />
    <img src="https://bit.ly/3rCm0Cu" alt="British Landscape (by Phil Riley, Pixabay License)" />
    <img src="https://bit.ly/3cUkibu" alt="Mountains Landscape Sunset Dusk (Pixabay License)" />
    <img src="https://bit.ly/2Z4fqbj" alt="Landscape with Trees (CC0 - Public Domain)" /> 
</Slider>
```

</TabItem>

<TabItem value="customStyling">

```jsx live
<Slider style={{ textShadow: '0 2px 12px black', textAlign: 'center', fontSize: 90 }} infinite interval={1000} >
    <div>FIVE</div>
    <div>FOUR</div>
    <div>THREE</div>
    <div>TWO</div>
    <div>ONE</div>
    <div>ZERO</div>
</Slider>
```

</TabItem>

</Tabs>


