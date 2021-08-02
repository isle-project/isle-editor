---
id: pages 
title: Pages
sidebar_label: Pages
---

Un componente de paginación ISLE que permite al usuario pasar por una secuencia de páginas.

## Opciones

* __activePage__ | `number`: página activa. Default: `1`.
* __disabled__ | `boolean`: controla si la barra de navegación está activa o no. Default: `false`.
* __title__ | `(string|node)`: título mostrado de las páginas contenedor. Default: `''`.
* __pagination__ | `string`: si mostrar la paginación en la `top`, `bottom`, o `both`. Default: `'top'`.
* __size__ | `string`: tamaño de los botones de paginación (ya sea `default`, `lg`, o `sm`). Default: `'default'`.
* __height__ | `(number|string)`: la altura máxima del contenedor. Si una página incrustada es más alta, se añade una barra de desplazamiento vertical. Default: `none`.
* __voiceID__ | `string`: identificador de control de voz. Default: `none`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onSelect__ | `function`: Función invocada cuando se cambia el cambio activo. Recibe el nuevo índice de páginas activas como único parámetro. Default: `onSelect() {}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Pagination', value: 'customPagination' },
        { label: 'With CSS', value: 'withCSS' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Pages title="Pages" >
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

<TabItem value="customPagination" >

```jsx live
<Pages title="Questions" pagination="both" size="sm" >
    <div>
        <NumberQuestion
            question="What is the number PI (at least up to three digits after the decimal point)?"
            solution={Math.PI}
            digits={3}
        />
    </div>
    <div>
        <FreeTextQuestion 
            question="Is this question displayed on the second page?"
            solution="Yes" 
        />
    </div>
</Pages>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<Pages 
    activePage={2}
    style={{ background: 'lightblue', height: 420, outline: '4px solid black' }} 
    title="Styled Pages"
>
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

</Tabs>

