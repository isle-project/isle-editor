---
id: slider 
title: Slider
sidebar_label: Slider
---

Компонент, который отображает своих детей в слайд-шоу или карусели.

## Options

* __title__ | `string`: название для слайд-шоу / карусели, которые будут отображаться в его верхней части. Default: `''`.
* __dots__ | `boolean`: отображение точек внизу для быстрой навигации к любому слайду. Default: `true`.
* __fade__ | `boolean`: контролирует, используется ли выцветание для перехода между слайдами. Default: `false`.
* __draggable__ | `boolean`: управляет тем, могут ли пользователи перетаскивать слайды для навигации между ними.. Default: `false`.
* __pagination__ | `string`: показывать ли пагинацию на `верху`, `низу`, или на `низу`.... Default: `'bottom'`.
* __goto__ | `number`: При изменении свойства компонент переходит на слайд с выбранным индексом. Default: `0`.
* __infinite__ | `boolean`: контролирует, обёртывается ли слайд-шоу вокруг его содержимого. Default: `false`.
* __interval__ | `number`: устанавливает временной интервал для автоматической смены слайдов. Default: `none`.
* __swipe__ | `boolean`: обеспечивает перетаскивание. Default: `false`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onClick__ | `function`: вызов обратного вызова при нажатии на следующие/предыдущие кнопки. Default: `onClick() {}`.


## Examples

```jsx live
<Slider title="Questions to explore:" >
    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>
    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>
    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>
    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>
</Slider>
```

