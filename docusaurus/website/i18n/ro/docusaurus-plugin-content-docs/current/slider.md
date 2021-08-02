---
id: slider 
title: Slider
sidebar_label: Slider
---

O componentă care își afișează copiii într-o prezentare de diapozitive sau într-un carusel.

## Opțiuni

* __title__ | `(string|node)`: titlul pentru prezentarea de diapozitive / caruselul care va fi afișat în partea de sus a acestuia. Default: `none`.
* __dots__ | `boolean`: puncte de afișare în partea de jos pentru navigarea rapidă la orice diapozitiv. Default: `true`.
* __fade__ | `boolean`: controlează dacă se utilizează fading pentru tranziția între diapozitive. Default: `false`.
* __draggable__ | `boolean`: controlează dacă utilizatorii pot trage diapozitivele pentru a naviga între ele. Default: `false`.
* __pagination__ | `string`: dacă se va afișa paginarea fie în `top`, `bottom`, sau `both`.. Default: `'bottom'`.
* __goto__ | `number`: Dacă proprietatea este modificată, componenta sare la diapozitivul cu indexul selectat.. Default: `0`.
* __infinite__ | `boolean`: controlează dacă prezentarea de diapozitive se înfășoară în jurul conținutului său. Default: `false`.
* __interval__ | `number`: stabilește un interval de timp pentru o schimbare automată a diapozitivelor. Default: `none`.
* __swipe__ | `boolean`: activează comportamentul de glisare/spălare. Default: `false`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onClick__ | `function`: callback invocat atunci când se face clic pe butoanele următor/precedent. Default: `onClick() {}`.


## Exemple


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


