---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Un componente de área de texto. Usado como un componente independiente, los cambios deben ser manejados a través del atributo "onChange".

## Opciones

* __defaultValue__ | `string`: valor por defecto del área de texto. Default: `''`.
* __value__ | `string`: valor de texto (para el componente controlado). Default: `none`.
* __disabled__ | `boolean`: controla si el área de texto debe ser desactivada. Default: `false`.
* __legend__ | `(string|node)`: texto de la leyenda. Default: `''`.
* __onBlur__ | `function`: La función de devolución de llamada que se invoca cuando el área de texto pierde el enfoque. Default: `onBlur() {}`.
* __onChange__ | `function`: función de llamada de retorno invocada con el nuevo texto cuando el texto del área cambia. Default: `onChange() {}`.
* __placeholder__ | `string`: texto de marcador de posición. Default: `none`.
* __resizable__ | `string`: controla si el área de texto será redimensionable (puede ser "ambos", "horizontal", "vertical" o "ninguno"). Default: `'none'`.
* __rows__ | `number`: número de filas. Default: `5`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Ejemplos

```jsx live
<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
/>
```



