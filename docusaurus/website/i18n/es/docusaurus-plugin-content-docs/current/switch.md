---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

El componente Switch permite la visualización de un elemento de una lista de varios elementos. Los usuarios pueden recorrer los diferentes hijos de la etiqueta Switch haciendo clic en el que se muestra actualmente.

## Opciones

* __active__ | `boolean`: controla si el interruptor está activo o no. Default: `true`.
* __tooltip__ | `string`: La punta de la herramienta que se muestra al pasar por encima del elemento interruptor. Default: `none`.
* __tooltipPos__ | `string`: colocación de la punta de la herramienta (ya sea `top`, `left`, `right` o `bottom`). Default: `'top'`.
* __className__ | `string`: nombre de la clase para el elemento de vano que lo encierra. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onChange__ | `function`: llamada de retorno invocada cuando se cambian los elementos. Recibe como primer argumento el índice del hijo que se muestra actualmente. Default: `onChange() {}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Tooltip', value: 'withTooltip' },
        { label: 'With Style', value: 'withStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Switch>
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```

</TabItem>

<TabItem value="withTooltip">

```jsx live
<Switch tooltip="Just click and see" tooltipPos="left">
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<Switch  
  style={{ fontSize: 80, fontFamily: 'Open Sans Condensed'}} 
>
    <span>Some Clouds</span>
    <img src="https://bit.ly/3rLGE30" />
    <img src ="https://bit.ly/2OzxEj3" />
</Switch>
```

</TabItem>

</Tabs>
