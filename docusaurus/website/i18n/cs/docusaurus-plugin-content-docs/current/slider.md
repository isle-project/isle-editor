---
id: slider 
title: Slider
sidebar_label: Slider
---

Komponenta, která zobrazuje své potomky v prezentaci nebo kolotoči.

## Možnosti

* __title__ | `(string|node)`: název pro prezentaci / kolotoč, který se zobrazí v jeho horní části.. Default: `none`.
* __dots__ | `boolean`: zobrazení bodů v dolní části pro rychlou navigaci na libovolný snímek.. Default: `true`.
* __fade__ | `boolean`: řídí, zda se pro přechod mezi snímky použije fading.. Default: `false`.
* __draggable__ | `boolean`: řídí, zda mohou uživatelé přetahovat snímky a pohybovat se mezi nimi.. Default: `false`.
* __pagination__ | `string`: zda se má stránkování zobrazovat buď na `top`, `bottom`, nebo `both`.. Default: `'bottom'`.
* __goto__ | `number`: Pokud je vlastnost změněna, komponenta přejde na snímek s vybraným indexem.. Default: `0`.
* __infinite__ | `boolean`: řídí, zda se má prezentace obtékat kolem svého obsahu.. Default: `false`.
* __interval__ | `number`: nastaví časový interval pro automatickou výměnu sklíček.. Default: `none`.
* __swipe__ | `boolean`: umožňuje chování při přetahování/otírání. Default: `false`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onClick__ | `function`: zpětné volání vyvolané při kliknutí na tlačítka další/předchozí.. Default: `onClick() {}`.


## Příklady


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


