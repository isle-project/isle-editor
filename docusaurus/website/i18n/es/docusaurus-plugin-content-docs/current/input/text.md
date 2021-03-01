---
id: text-input
title: Text Input
sidebar_label: Text Input
---

Un componente de entrada de texto. Puede ser usado como parte de un tablero de ISLE o independiente. En este último caso, usted quiere manejar los cambios a través del atributo "onChange" o vincular el valor a una variable global a través del atributo "bind".

## Opciones

* __bind__ | `string`: nombre de la variable global para el número que se asignará a. Default: `none`.
* __defaultValue__ | `string`: undefined. Default: `''`.
* __value__ | `string`: valor de texto (para el componente controlado). Default: `none`.
* __legend__ | `(string|node)`: undefined. Default: `''`.
* __inline__ | `boolean`: Indica si la entrada se muestra en línea. Default: `false`.
* __onBlur__ | `function`: La función de devolución de llamada que se invoca cuando el área de texto pierde el enfoque. Default: `onBlur() {}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onKeyDown__ | `function`: función de llamada de retorno que se invoca cuando se presiona cualquier tecla. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: función de llamada de retorno que se invocará cuando se introduzca cualquier tecla. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: función de llamada de retorno que se invocará cuando se libere la tecla. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: undefined. Default: `none`.
* __width__ | `number`: undefined. Default: `80`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Ejemplos

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

