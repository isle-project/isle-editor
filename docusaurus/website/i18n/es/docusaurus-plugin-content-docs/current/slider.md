---
id: slider 
title: Slider
sidebar_label: Slider
---

Un componente que muestra a sus hijos en una presentación de diapositivas o en un carrusel.

## Opciones

* __title__ | `(string|node)`: título de la presentación de diapositivas / carrusel que se mostrará en su parte superior. Default: `none`.
* __dots__ | `boolean`: mostrar puntos en la parte inferior para navegar rápidamente a cualquier diapositiva. Default: `true`.
* __fade__ | `boolean`: controla si el desvanecimiento se utiliza para la transición entre las diapositivas. Default: `false`.
* __draggable__ | `boolean`: controla si los usuarios pueden arrastrar las diapositivas para navegar entre ellas. Default: `false`.
* __pagination__ | `string`: si mostrar la paginación en la "parte superior", "parte inferior", o "ambas". Default: `'bottom'`.
* __goto__ | `number`: Si se cambia la propiedad, el componente salta a la diapositiva con el índice seleccionado. Default: `0`.
* __infinite__ | `boolean`: controla si la presentación de diapositivas envuelve su contenido. Default: `false`.
* __interval__ | `number`: establece un intervalo de tiempo para un cambio de diapositivas automático. Default: `none`.
* __swipe__ | `boolean`: permite el comportamiento de arrastrar y pasar la mano. Default: `false`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onClick__ | `function`: llamada invocada al hacer clic en los botones siguiente/anterior. Default: `onClick() {}`.


## Ejemplos


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


