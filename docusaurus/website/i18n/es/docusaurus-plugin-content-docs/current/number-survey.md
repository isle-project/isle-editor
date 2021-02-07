---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

Un componente de encuesta en el que el instructor puede recopilar datos numéricos de encuesta de los estudiantes en tiempo real.

## Options

* __question__ | `(string|node)`: la pregunta que se mostrará. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controla si el mismo usuario (o sesión si es anónimo) puede enviar múltiples respuestas). Default: `false`.
* __anonymous__ | `boolean`: Permite a los estudiantes presentar datos de forma anónima. Tenga en cuenta que si esta opción se establece en "true", entonces los instructores no podrán ver la identificación del estudiante que se presenta. Default: `false`.
* __step__ | `(number|string)`: Un valor "cadena" o "numérico" que indica el paso de las flechas que se ven al pasar el cursor por encima del cuadro de entrada. Si es "cualquiera", el paso se establecerá en "1".. Default: `'any'`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onSubmit__ | `function`: La función de devolución de llamada se invoca una vez que los estudiantes envían una respuesta. Default: `onSubmit() {}`.


## Examples

```jsx live
<NumberSurvey
    allowMultipleAnswers={true}
    anonymous="false"
    id="generic_mean_question"
    question="Submit a number"
    defaultValue={0}
    step="any"
/>
```

