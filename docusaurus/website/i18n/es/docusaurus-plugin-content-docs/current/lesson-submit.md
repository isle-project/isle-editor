---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Un botón que se muestra al final de una lección para que los estudiantes hagan clic en él. Por defecto, se envía un mensaje de confirmación de la finalización de la lección a su dirección de correo electrónico.

## Options

* __label__ | `string`: etiqueta del botón de envío. Default: `none`.
* __message__ | `string`: mensaje para el correo electrónico de confirmación. Default: `''`.
* __requireLogin__ | `boolean`: controla si se requiere que el usuario se registre para que el botón esté activo (para los usuarios anónimos, no se envía una confirmación por correo electrónico). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: controla si se debe enviar un correo electrónico de confirmación al enviar la lección. Default: `true`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onClick__ | `function`: llamada de retorno invocada al hacer clic en el botón de presentación. Default: `onClick() {}`.


## Examples

```jsx live
<LessonSubmit />
```

