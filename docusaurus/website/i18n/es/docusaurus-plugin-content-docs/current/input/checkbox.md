---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Un componente de entrada de casilla de verificación. Puede ser usado como parte de un tablero de ISLE o independiente. En este último caso, usted quiere manejar los cambios a través del atributo "onChange" o vincular el valor a una variable global a través del atributo "bind".

## Opciones

* __bind__ | `string`: nombre de la variable global para el valor de la casilla de verificación que se asignará a. Default: `''`.
* __defaultValue__ | `boolean`: valor booleano que indica el valor por defecto de la casilla de verificación. Default: `false`.
* __value__ | `boolean`: valor de la casilla de verificación (para el componente controlado). Default: `none`.
* __disabled__ | `boolean`: indica si la entrada está activa o no. Default: `false`.
* __inline__ | `boolean`: indica si la casilla de verificación se muestra en línea. Default: `false`.
* __onChange__ | `function`: función de devolución de llamada que se invocará cuando se haga clic en la casilla de verificación. La función se llama con el valor actual de la casilla de verificación. Default: `onChange() {}`.
* __legend__ | `(string|node)`: El texto que aparece junto a la casilla de verificación. Default: `''`.
* __tooltip__ | `string`: El texto que se muestra al pasar el cursor por encima de la casilla de verificación. Default: `''`.
* __tooltipPlacement__ | `string`: posición de la punta del botón. Default: `'right'`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>


<TabItem value="minimal">

```jsx live
<CheckboxInput legend="Take the logarithm" />
```
</TabItem>

<TabItem value="inline">

```jsx live
<p>Please click
<CheckboxInput
    inline defaultValue={false}
/>
to confirm that you will follow our netiquette.</p>
```
</TabItem>


<TabItem value="withStyle">

```jsx live
<CheckboxInput
    style={{ fontSize: 30, color: 'blue'}}
    legend="Click to confirm"
    defaultValue={false}
/>
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<CheckboxInput
    legend="Click to confirm..."
    onChange={( value ) => {
        alert( 'New value: '+value );
    }}
/>
```

</TabItem>

</Tabs>
