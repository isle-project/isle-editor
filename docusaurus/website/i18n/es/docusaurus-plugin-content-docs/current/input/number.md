---
id: number-input
title: Number Input
sidebar_label: Number Input
---

Un componente de entrada de números. Puede ser usado como parte de un tablero de ISLE o independiente. En este último caso, quieres manejar los cambios a través del atributo "onChange" o vincular el valor a una variable global a través del atributo "bind".

## Opciones

* __bind__ | `string`: nombre de la variable global para el número que se asignará a. Default: `''`.
* __defaultValue__ | `number`: valor que indica el valor por defecto de la entrada en el arranque. Default: `0`.
* __disabled__ | `boolean`: booleana que indica si la entrada está activa o no. Default: `false`.
* __inline__ | `boolean`: indica si la entrada se muestra en línea. Default: `false`.
* __legend__ | `(string|node)`: cadena que indica el texto que se muestra junto a la entrada del número. Default: `none`.
* __max__ | `number`: número que indica el valor máximo que se puede insertar. Default: `null`.
* __min__ | `number`: número que indica el valor más pequeño posible que se puede insertar. Default: `null`.
* __numbersOnly__ | `boolean`: controla si sólo se aceptan números. Default: `true`.
* __placeholder__ | `string`: undefined. Default: `'0'`.
* __onBlur__ | `function`: función de devolución de llamada que se invocará cuando se utilice un método de desenfoque. Default: `onBlur() {}`.
* __onChange__ | `function`: función de devolución de llamada que se invocará cuando se cambie la entrada de números. Default: `onChange() {}`.
* __onKeyDown__ | `function`: función de llamada de retorno que se invoca cuando se presiona cualquier tecla. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: función de llamada de retorno que se invocará cuando se introduzca cualquier tecla. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: función de llamada de retorno que se invocará cuando se libere la tecla. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: número que indica los cambios de incremento cuando se utilizan las flechas de incremento. Default: `1`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __inputStyle__ | `object`: Estilos en línea de CSS para el elemento de entrada. Default: `{}`.
* __value__ | `number`: valor numérico (para el componente controlado). Default: `none`.
* __tooltip__ | `string`: Cadena de la punta de la herramienta (si no se establece, la punta de la herramienta se genera automáticamente). Default: `none`.
* __tooltipPlacement__ | `string`: dirección de la punta de la herramienta. Default: `'left'`.


## Ejemplos

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

