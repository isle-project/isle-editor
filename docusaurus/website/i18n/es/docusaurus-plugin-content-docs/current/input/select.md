---
id: select-input
title: Select Input
sidebar_label: Select Input
---

Un componente de entrada seleccionado. Puede ser usado como parte de un tablero de ISLE o independiente. En este último caso, usted quiere manejar los cambios a través del atributo "onChange" o vincular el valor a una variable global a través del atributo "bind".

## Opciones

* __bind__ | `string`: nombre de la variable global para el número que se asignará a. Default: `''`.
* __clearable__ | `boolean`: valor booleano que indica si se puede despejar la elección o elecciones realizadas. Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: valor por defecto de la entrada al inicio. Default: `none`.
* __disabled__ | `boolean`: controla si la entrada está activa o no. Default: `false`.
* __inline__ | `boolean`: indica si la entrada se muestra en línea. Default: `false`.
* __legend__ | `(string|node)`: El texto que se muestra junto a la entrada. Default: `''`.
* __menuPlacement__ | `string`: colocación del menú en relación con el control (ya sea "auto", `top` o `bottom`). Default: `'auto'`.
* __multi__ | `boolean`: controla si uno puede seleccionar varias respuestas. Default: `false`.
* __onChange__ | `function`: función de llamada de retorno que se invocará cuando se haga una elección. Default: `onChange() {}`.
* __options__ | `array`: de indicar las opciones disponibles para el usuario. Default: `[]`.
* __placeholder__ | `string`: valor que se mostrará antes de hacer una elección inicial. Default: `none`.
* __tooltip__ | `string`: El texto que se muestra al pasar el cursor sobre la leyenda. Default: `none`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Ejemplos

```jsx live
<SelectInput
    legend="Choose the test direction"
    defaultValue="two-sided"
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```

