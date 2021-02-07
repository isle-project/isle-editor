---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Componente que permite a un grupo de personas votar sobre el peso y la importancia de determinadas opciones.

## Options

* __allowMultipleAnswers__ | `boolean`: controla si se desea permitir que los estudiantes respondan a la encuesta varias veces. Default: `false`.
* __anonymous__ | `boolean`: controla si las respuestas de los estudiantes son anónimas. Default: `false`.
* __colors__ | `array`: una gama de colores para los componentes del gráfico circular. Si no se define, se utilizará una escala de colores personalizada. Default: `none`.
* __disabled__ | `boolean`: controla si el estudio está desactivado. Default: `false`.
* __group__ | `string`: encabezado de la pantalla de grupo. Default: `'group results'`.
* __groupHeight__ | `number`: proporciones altura de entrada para la visualización del grupo (en px). Default: `100`.
* __legends__ | `array`: etiquetas de leyenda que describen las opciones a ser pesadas. Default: `[]`.
* __margin__ | `string`: margen de entrada de la proporción (en px). Default: `'40px'`.
* __onSubmit__ | `function`: La función de devolución de llamada se invoca una vez que los estudiantes envían una respuesta. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: proporciones altura de entrada para cada estudiante (en px). Default: `200`.
* __precision__ | `number`: la precisión de los valores de proporción mostrados. Default: `2`.
* __question__ | `(string|node)`: la pregunta que se mostrará. Default: `''`.
* __step__ | `number`: el paso de las flechas que se ven al pasar el cursor por encima del cuadro de entrada. Default: `0.25`.


## Examples

```jsx live
<ProportionsSurvey 
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```



