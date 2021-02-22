---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

Un componente de ISLE para preguntas donde las respuestas de los estudiantes deben ser suministradas en forma de texto libre. Lo que diferencia este componente de la **Pregunta de Texto Libre** es el hecho de que los datos agregados del grupo se muestran a todos en tiempo real.

## Opciones

* __question__ | `(string|node)`: la pregunta que hay que hacer a los estudiantes. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controla si se desea permitir que los estudiantes respondan a la encuesta varias veces. Default: `false`.
* __anonymous__ | `boolean`: controla si las respuestas de los estudiantes se recogen de forma anónima. Default: `false`.
* __rows__ | `number`: número de filas de texto en el campo de entrada. Default: `4`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onSubmit__ | `function`: La función de devolución de llamada se llama cuando se presenta una respuesta. Default: `onSubmit() {}`.


## Ejemplos

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

