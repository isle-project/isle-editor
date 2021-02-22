---
id: timer 
title: Timer
sidebar_label: Timer
---

Muestra un temporizador que activará una llamada predefinida cuando el tiempo se acabe. Un ejemplo de caso de uso es el tiempo de los exámenes.

## Opciones

* __id__ | `string`: la identificación única de la "cuerda" para el temporizador. Si se establece un ID, el componente del temporizador es persistente en las actualizaciones de la página. Default: `none`.
* __active__ | `boolean (required)`: bandera que se puede activar para iniciar o detener el temporizador. Default: `none`.
* __belowZero__ | `boolean`: controla si el temporizador sigue contando después de agotar la duración. Default: `false`.
* __duration__ | `number (required)`: duración en segundos para el temporizador. Default: `none`.
* __invisible__ | `boolean`: controla si el temporizador debe ser ocultado. Default: `false`.
* __legend__ | `string`: El texto que se muestra delante del temporizador. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onTimeUp__ | `function`: llamada de regreso invocada cuando el temporizador se agota. Default: `onTimeUp() {}`.


## Ejemplos

```jsx live
<Timer 
    id='test-quiz'
    active={true} 
    duration={50} 
    onTimeUp={() => {
      alert( 'done' );
    }}
/>
```

