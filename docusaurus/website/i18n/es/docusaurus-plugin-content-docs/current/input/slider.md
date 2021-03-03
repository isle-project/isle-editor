---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

Un componente de entrada deslizante. Puede ser usado como parte de un tablero de ISLE o independiente. En este último caso, quieres manejar los cambios a través del atributo "onChange" o vincular el valor a una variable global a través del atributo "bind".

## Opciones

* __defaultValue__ | `number`: El valor inicial del deslizador. Default: `10`.
* __disabled__ | `boolean`: controla si la entrada del deslizador está activa o no. Si se establece en true, el deslizador estará presente en la pantalla, aunque en gris.. Default: `false`.
* __inline__ | `boolean`: controla si se coloca el deslizador en línea con el texto o fuera de él. Default: `false`.
* __legend__ | `(string|node)`: leyenda de la entrada. Default: `none`.
* __max__ | `number`: El valor máximo del deslizador. Default: `100`.
* __maxLabel__ | `string`: que se mostrará a la derecha del deslizador en lugar del valor máximo. Default: `none`.
* __min__ | `number`: El valor mínimo del deslizador. Default: `0`.
* __minLabel__ | `string`: etiqueta que se mostrará a la izquierda del deslizador en lugar del valor mínimo. Default: `none`.
* __onChange__ | `function`: llamada de retorno invocada con el nuevo valor cuando el valor del deslizador cambia. Default: `onChange() {}`.
* __precision__ | `number`: redondeo de la entrada. El valor se redondeará para no tener más dígitos significativos que la precisión. Por ejemplo, si se desea utilizar sólo números enteros, se usará una precisión de 10, mientras que si se desea redondear al lugar de las centenas, se usará una precisión de 0,001. Default: `10`.
* __step__ | `(number|string)`: tamaño del paso del deslizador. Default: `1`.
* __hideTooltip__ | `boolean`: controla si ocultar la información de la herramienta. Default: `false`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __numberInputStyle__ | `object`: Estilos en línea de CSS para el componente de entrada de números. Default: `{}`.
* __rangeInputStyle__ | `object`: Estilo en línea de CSS para el componente de entrada de rango. Default: `{}`.


## Ejemplos


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Mathematical Symbols via LaTeX', value: 'mathematicalSymbols' },
        { label: 'Custom Style', value: 'customStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SliderInput
    legend="Success Probability"
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```

</TabItem>

<TabItem value="mathematicalSymbols">

```jsx live
<SliderInput
    legend={<span>$\sigma$ (standard deviation)</span>}
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```

</TabItem>

<TabItem value="customStyle">

```jsx live
<SliderInput
    legend="Success Probability"
    style={{ padding: 30, fontSize: 25, background: 'tan', fontFamily: 'Georgia'}}
    rangeInputStyle ={{ minWidth: 500}}
    numberInputStyle = {{ background: 'white', boxShadow: '2px 2px 0px black'}}
    defaultValue={0.5}
    min={0}
    max={200}
    step={0.01}
/>
```

</TabItem>

</Tabs>
