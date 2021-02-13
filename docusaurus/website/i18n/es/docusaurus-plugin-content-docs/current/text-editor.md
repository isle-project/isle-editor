---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Un editor de texto para escribir notas o informes. Soporta la exportación de notas como archivos HTML o PDF, así como el envío automático al servidor de ISLE.

## Options

* __allowSubmissions__ | `boolean`: controla si los estudiantes pueden enviar sus informes al servidor. Default: `true`.
* __canLoadHTML__ | `boolean`: controla si se muestra el botón para cargar un archivo HTML guardado en el editor. Default: `true`.
* __defaultValue__ | `string`: texto por defecto del editor. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __mode__ | `string`: controla el modo de edición de texto (ya sea `individual` para un documento personal, `grupo` para un documento por grupos, `colaborativo` para un documento único para todos, o `cohorte` para un documento por cohorte). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: objeto para personalizar el modal para restablecer el documento (normalmente no debería cambiarse). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: controla si se envían correos electrónicos de confirmación con salida PDF/HTML al ser presentados. Default: `false`.
* __voiceTimeout__ | `number`: tiempo en milisegundos después de que se inserte un trozo de voz grabada. Default: `5000`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Examples

```jsx live
<TextEditor />
```

