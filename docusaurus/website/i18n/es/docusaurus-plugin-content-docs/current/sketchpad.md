---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

Un bloc de dibujo para tomar notas de las diapositivas de la conferencia o de las páginas vacías.

## Opciones

* __autoSave__ | `boolean`: controla si el editor debe guardar el texto actual en el almacenamiento local del navegador en un intervalo de tiempo determinado. Default: `true`.
* __feedbackButtons__ | `boolean`: controla si se muestran los botones de retroalimentación en cada diapositiva. Default: `false`.
* __intervalTime__ | `number`: el tiempo entre los ahorros automáticos. Default: `10000`.
* __hideInputButtons__ | `boolean`: controla si ocultar los botones de dibujo y de introducción de texto. Default: `false`.
* __hideNavigationButtons__ | `boolean`: controla si ocultar los botones para navegar entre las páginas. Default: `false`.
* __hideSaveButtons__ | `boolean`: controla si ocultar los botones de guardar. Default: `false`.
* __hideTransmitButtons__ | `boolean`: controla si se deben ocultar los botones para transmitir las acciones del usuario. Default: `false`.
* __brushSize__ | `number`: el tamaño del pincel para pintar con. Default: `4`.
* __color__ | `string`: el color del pincel y los textos. Default: `'#444444'`.
* __canvasWidth__ | `number`: ancho del elemento de la tela (en px). Default: `1200`.
* __canvasHeight__ | `number`: altura del elemento de la tela (en px). Default: `700`.
* __fullscreen__ | `boolean`: controla si se debe cambiar automáticamente el tamaño del lienzo al ancho y alto de la ventana del navegador. Default: `false`.
* __fill__ | `string`: si es "horizontal", rellena todo el espacio horizontal disponible al dibujar un PDF; si es "vertical", todo el espacio vertical se utiliza para evitar el desbordamiento del eje Y. Default: `'vertical'`.
* __disabled__ | `boolean`: si hacer el componente de sólo lectura y prohibir el dibujo en el bloc de dibujo. Default: `false`.
* __fontFamily__ | `string`: familia de fuentes. Default: `'Arial'`.
* __fontSize__ | `number`: El tamaño de la letra. Default: `24`.
* __nodes__ | `object`: los componentes que deben ser mostrados en la parte superior de las diapositivas especificadas; las "teclas" deben corresponder a los números de página, los "valores" a los componentes. Default: `{}`.
* __noPages__ | `number`: número inicial de páginas. Default: `1`.
* __pdf__ | `string`: enlace al archivo PDF para fondos de páginas horneadas. Default: `none`.
* __showTutorial__ | `boolean`: mostrar el tutorial para el sketchpad al inicio. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: controla si se debe empezar a ocultar los botones cuando el ancho de la barra de herramientas no es suficiente (de lo contrario, se iniciará una nueva línea). Default: `false`.
* __transmitOwner__ | `boolean`: si las acciones de los propietarios deben ser transmitidas a otros usuarios en tiempo real. Default: `true`.
* __groupMode__ | `boolean`: controla si todas las acciones del usuario se transmiten a todos los demás. Default: `false`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onChange__ | `function`: llamada de retorno cada vez que se dibuja un nuevo elemento de línea. Default: `onChange() {}`.


## Ejemplos

```jsx live
<Sketchpad canvasWidth={750} />
```

