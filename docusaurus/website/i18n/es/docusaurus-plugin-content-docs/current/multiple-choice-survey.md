---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Un componente de encuesta en el que el instructor puede recoger datos de encuesta de opción múltiple de los estudiantes en tiempo real.

## Options

* __question__ | `(string|node)`: cadena que indica la pregunta que hay que hacer a los estudiantes. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controla si se desea permitir que los estudiantes respondan a la encuesta varias veces. Default: `false`.
* __anonymous__ | `boolean`: controla si las respuestas de los estudiantes son anónimas. Default: `false`.
* __answers__ | `array`: que indica las opciones de respuesta para los estudiantes. Default: `[]`.
* __multipleAnswers__ | `boolean`: indica si los estudiantes pueden seleccionar más de una respuesta. Note que esto difiere de allowMultipleAnswers en que allow hace que los estudiantes puedan enviar la pregunta varias veces. Default: `false`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onSubmit__ | `function`: función que se llamará cuando se presente una respuesta. Default: `onSubmit() {}`.


## Examples

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

