---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Un componente de preguntas numéricas.

## Opciones

* __question__ | `(string|node)`: pregunta de número. Default: `''`.
* __hintPlacement__ | `string`: la colocación de las pistas (ya sea `top`, `left`, `right` o `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: consejos que proporcionan orientación sobre cómo responder a la pregunta. Default: `[]`.
* __feedback__ | `boolean`: controla si se muestran los botones de retroalimentación. Default: `true`.
* __solution__ | `(number|array<number>)`: una respuesta numérica al problema (o múltiples respuestas correctas si se suministra un array). Default: `none`.
* __digits__ | `number`: número de dígitos para los que la respuesta proporcionada por el estudiante debe coincidir con la solución para ser considerada correcta. Establecer a 0 para que coincida como un número entero. Si se establece en null se buscará una coincidencia exacta. Default: `3`.
* __max__ | `number`: máximo valor de entrada permitido. Default: `null`.
* __min__ | `number`: valor mínimo de entrada permitido. Default: `null`.
* __defaultValue__ | `number`: valor preseleccionado de entrada de números. Default: `none`.
* __provideFeedback__ | `boolean`: indica si la retroalimentación, incluyendo la respuesta correcta, debe ser mostrada después de que los estudiantes envíen sus respuestas. Default: `true`.
* __submitAfterFeedback__ | `boolean`: controla si se puede volver a presentar la solicitud incluso después de que se haya revelado la solución. Default: `false`.
* __nTries__ | `number`: después de cuántos intentos se debe suministrar la retroalimentación (si "suministrarRetroalimentación" es "verdadero"). Default: `1`.
* __disableSubmitNotification__ | `boolean`: controla si se desactivan las notificaciones de presentación. Default: `false`.
* __chat__ | `boolean`: controla si el elemento debe tener un chat integrado. Default: `false`.
* __until__ | `Date`: tiempo hasta que los estudiantes puedan presentar sus respuestas. Default: `none`.
* __points__ | `number`: número máximo de puntos otorgados en la calificación. Default: `10`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onChange__ | `function`: llamada de retorno que se dispara después de que el valor del campo numérico cambia; recibe el valor actual como único argumento. Default: `onChange() {}`.
* __onSubmit__ | `function`: llamada de retorno invocada cuando se presenta la respuesta; tiene como primer parámetro un "booleano" que indica si la respuesta fue contestada correctamente (si es aplicable, "nulo" en caso contrario) y la respuesta suministrada como segundo parámetro. Default: `onSubmit() {}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'markdownStyling' },
        { label: 'With CSS', value: 'withCSS' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<NumberQuestion
    question="What is the number Pi? (include at least three digits after the decimal point)"
    solution={3.142}
/>
```
</TabItem>

<TabItem value="markdownStyling">

```jsx live
<NumberQuestion
    question={<span>What is the number $\pi$? (include at least _three_ digits after the decimal point)</span>}
    solution={3.142}
/>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<NumberQuestion
    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}
    solution={3.142}
/>
```
</TabItem>

</Tabs>
