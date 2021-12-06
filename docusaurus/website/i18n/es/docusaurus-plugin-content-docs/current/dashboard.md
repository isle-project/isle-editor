--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Un tablero para combinar el manejo de múltiples campos de entrada de niños.

## Opciones

* __autoStart__ | `boolean`: si se establece en "true", la función "onGenerate" se ejecuta al inicio con los valores de entrada por defecto. Default: `true`.
* __autoUpdate__ | `boolean`: controla si la función "onGenerate" debe ser invocada automáticamente cuando uno de los campos de entrada del niño cambia. Default: `false`.
* __description__ | `(string|node)`: descripción del tablero de mandos. Default: `''`.
* __disabled__ | `boolean`: controla si el tablero de mandos debe ser desactivado. Default: `false`.
* __label__ | `string`: etiqueta del botón. Default: `none`.
* __maxWidth__ | `number`: anchura máxima del tablero de mandos. Default: `600`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __bodyClassName__ | `string`: nombre de la clase para el cuerpo de la tarjeta. Default: `'d-grid gap-3'`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onGenerate__ | `function`: función que se invoca cuando se hace clic en el botón o cuando uno de los valores de entrada del tablero cambia (si "auto-actualización" se establece como "verdadero"). La función se llama con los valores de los campos de entrada, en el orden en que se colocan en el tablero de mandos. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: título de la tarjeta. Default: `''`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Multiple Inputs', value: 'multipleInputs' }
    ]}
>

<TabItem value="minimal"> 

```jsx live
<Dashboard title="Alerter" onGenerate={( x ) => { alert( x ); }} autoStart={false} >
    <SliderInput
        legend="Input value"
    />
</Dashboard>
```

</TabItem>

<TabItem value="multipleInputs" > 

```jsx live
<Dashboard 
    title="Multiply three numbers."
    style={{ width: 600, boxShadow: '0 0 24px black' }}
    onGenerate={( x, y, z ) => { alert( x*y*z ); }} 
    autoStart={false} 
>
    <SliderInput
        legend="First Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
    <SliderInput
        legend="Second Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
    <SliderInput
        legend="Third Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
</Dashboard>
```

</TabItem>

</Tabs>
