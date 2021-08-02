---
id: slider 
title: Slider
sidebar_label: Slider
---

Komponentas, kuris rodo savo vaikus skaidrių rodymo arba karuselės pavidalu.

## Parinktys

* __title__ | `(string|node)`: skaidrių rodymo / karuselės pavadinimas, kuris bus rodomas jos viršuje.. Default: `none`.
* __dots__ | `boolean`: rodyti taškus apačioje, kad būtų galima greitai pereiti prie bet kurios skaidrės.. Default: `true`.
* __fade__ | `boolean`: kontroliuoja, ar perėjimui tarp skaidrių bus naudojamas išblukimas.. Default: `false`.
* __draggable__ | `boolean`: kontroliuoja, ar naudotojai gali vilkti skaidres ir naršyti tarp jų.. Default: `false`.
* __pagination__ | `string`: ar puslapius rodyti `top`, `bottom`, ar `dviejose`.. Default: `'bottom'`.
* __goto__ | `number`: Jei savybė pakeista, komponentas pereina į skaidrę su pasirinktu indeksu. Default: `0`.
* __infinite__ | `boolean`: kontroliuoja, ar skaidrių rodymas apjuosia jo turinį.. Default: `false`.
* __interval__ | `number`: nustato automatinio skaidrių keitimo laiko intervalą.. Default: `none`.
* __swipe__ | `boolean`: įgalina vilkimo / braukimo elgesį. Default: `false`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onClick__ | `function`: grįžtamasis ryšys, inicijuojamas paspaudus mygtukus next/previous.. Default: `onClick() {}`.


## Pavyzdžiai


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


