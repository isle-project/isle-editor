---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Una pregunta con una respuesta que consiste en múltiples cuadros de selección.

## Options

* __question__ | `(string|node)`: pregunta que se mostrará en la parte superior de la matriz de preguntas seleccionadas. Default: `''`.
* __rows__ | `array`: etiquetas de fila. Default: `[]`.
* __cols__ | `array`: etiquetas de columna. Default: `[]`.
* __options__ | `object`: con pares clave-valor con claves que tienen la forma "fila:col", por ejemplo "0:0", "0:1", "1:0", etc., y sus valores correspondientes son arreglos de las posibles opciones de respuesta para las preguntas individuales seleccionadas.. Default: `{}`.
* __solution__ | `object`: Objeto de solución con pares clave-valor con claves que tienen la forma "fila:col", por ejemplo "0:0", "0:1", "1:0", etc., y sus valores correspondientes son el índice del elemento de respuesta correcta de la respectiva matriz de "opciones".. Default: `{}`.
* __hints__ | `array<(string|node)>`: consejos que proporcionan orientación sobre cómo responder a la pregunta. Default: `[]`.
* __hintPlacement__ | `string`: la colocación de las pistas (ya sea "arriba", "izquierda", "derecha" o "abajo"). Default: `'bottom'`.
* __feedback__ | `boolean`: controla si se muestran los botones de retroalimentación. Default: `true`.
* __provideFeedback__ | `string`: si proporcionar "ninguna" retroalimentación en absoluto, retroalimentación "individual" en las respuestas presentadas, o retroalimentación "general" para todas las preguntas.. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: si se permite la presentación de propuestas sin que se haga una selección en cada casilla de selección. Default: `false`.
* __nTries__ | `number`: después de cuántos intentos no se aceptan más respuestas (si "ProvideFeedback" no es "ninguno"). Default: `1`.
* __failureMsg__ | `string`: El texto de la notificación que se muestra al presentar las respuestas incorrectas. Default: `none`.
* __successMsg__ | `string`: El texto de la notificación que se muestra al presentar las respuestas correctas. Default: `none`.
* __cellLabels__ | `object`: etiquetas para las celdas definidas por el objeto con claves que tienen el formato `row:col`.. Default: `{}`.
* __chat__ | `boolean`: controla si el elemento debe tener un chat integrado. Default: `false`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onSubmit__ | `function`: La función de devolución de llamada invocada en el momento de la presentación con las respuestas como primer parámetro y un booleano que indica la corrección como segundo parámetro. Default: `onSubmit() {}`.


## Examples

```jsx live
<SelectQuestionMatrix
    rows={[ 'First Row' ]} 
    cols={[ 'First Column', 'Second Column' ]} 
    options={{ '0:0': [ 'Incorrect', 'Correct' ], '0:1':  [ 'Incorrect', 'Incorrect', 'Correct' ] }} 
    solution={{ '0:0': 1, '0:1': 2 }}
/>
```
