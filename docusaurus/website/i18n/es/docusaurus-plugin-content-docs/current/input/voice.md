---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

Un componente de entrada de voz.

## Opciones

* __autorecord__ | `boolean`: controla si se inicia automáticamente la grabación. Default: `false`.
* __defaultValue__ | `string`: valor de texto por defecto. Default: `''`.
* __grammars__ | `array`: lista de gramática del habla (sin apoyo). Default: `[]`.
* __legend__ | `(string|node)`: leyenda mostrada delante del campo de entrada. Default: `''`.
* __mode__ | `string`: se establece en "full" para mostrar un campo de entrada de texto junto al micrófono, "status" para mostrar sólo una barra de estado con los textos transcritos, "micrófono" para mostrar sólo un botón para conmutar la grabación, o "ninguno" cuando la entrada de voz debe ser invisible y controlada puramente a través de teclas de acceso directo / comandos de voz. Default: `'full'`.
* __maxAlternatives__ | `number`: número máximo de alternativas proporcionadas por resultado de reconocimiento de voz. Default: `1`.
* __onChange__ | `function`: La función de devolución de llamada que se invoca cuando se actualiza el valor de entrada de texto. Default: `onChange() {}`.
* __onClick__ | `function`: función de llamada de retorno invocada al hacer clic en el botón del micrófono. Default: `onClick() {}`.
* __onFinalText__ | `function`: función de devolución de llamada invocada una vez que se recibe el texto final. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: función de devolución de llamada invocada cuando se inicia la grabación. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: función de devolución de llamada invocada una vez que la grabación se ha detenido. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: función de llamada de retorno invocada con segmentos de texto. Default: `onSegment() {}`.
* __onSubmit__ | `function`: función de devolución de llamada al presentar el valor de entrada de texto pulsando "Enter". Default: `onSubmit() {}`.
* __placeholder__ | `string`: marcador de posición de entrada de texto. Default: `none`.
* __remote__ | `object`: objeto con "start", "stop", y "toggle" y las teclas de acceso directo asociadas. Default: `none`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __timeout__ | `number`: número de milisegundos después de los cuales se puede cronometrar la grabación. Default: `none`.
* __stopTooltip__ | `string`: mensaje de información de herramientas que se muestra durante la grabación. Default: `none`.
* __startTooltip__ | `string`: mensaje de información de herramientas mostrado mientras no se está grabando. Default: `none`.
* __tooltipPlacement__ | `string`: dirección de la punta de la herramienta. Default: `'left'`.
* __width__ | `number`: ancho de entrada de voz (en px). Default: `500`.
* __height__ | `number`: altura de la entrada de voz (en px). Default: `36`.


## Ejemplos

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



