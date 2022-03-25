---
id: range-question
title: Range Question
sidebar_label: Range Question
---

Un componente de preguntas de rango que pide a los estudiantes que proporcionen un punto final inferior y superior.

## Opciones

* __question__ | `(string|node)`: La pregunta que se muestra. Default: `''`.
* __solution__ | `array<number>`: una matriz de dos elementos que contiene los puntos finales del rango correcto. Default: `none`.
* __hintPlacement__ | `string`: la colocación de las pistas (ya sea `top`, `left`, `right` o `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: consejos que proporcionan orientación sobre cómo responder a la pregunta. Default: `[]`.
* __labels__ | `array`: matriz de dos elementos de etiquetas personalizadas distintas de "inferior" y "superior". Default: `none`.
* __feedback__ | `boolean`: controla si se muestran los botones de retroalimentación. Default: `true`.
* __chat__ | `boolean`: controla si el elemento debe tener un chat integrado. Default: `false`.
* __digits__ | `number`: número de dígitos que deben coincidir entre la solución y la respuesta proporcionada por el usuario. Si no se da o se establece como nulo, el componente comprueba la estricta igualdad. Si se establece en 0, comprueba si hay igualdad de números enteros. Default: `3`.
* __max__ | `number`: valor máximo de entrada. Default: `null`.
* __min__ | `number`: valor mínimo de entrada. Default: `null`.
* __provideFeedback__ | `boolean`: indica si la retroalimentación, incluyendo la respuesta correcta, debe ser mostrada después de que los estudiantes envíen sus respuestas. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: controla si uno puede presentar múltiples respuestas. Default: `false`.
* __until__ | `Date`: tiempo hasta que los estudiantes puedan presentar sus respuestas. Default: `none`.
* __points__ | `number`: número máximo de puntos otorgados en la calificación. Default: `10`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onChangeLower__ | `function`: La devolución de llamada se activa después de que el usuario cambie el límite inferior. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: La devolución de llamada se activa después de que el usuario cambie el límite superior. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: llamada de retorno invocada cuando se presenta la respuesta; tiene como primer parámetro un "booleano" que indica si la respuesta fue contestada correctamente (si es aplicable, "nulo" en caso contrario) y la respuesta suministrada como segundo parámetro. Default: `onSubmit() {}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Points and Feedback', value: 'withPoints' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<RangeQuestion
    style={{ fontSize: 17, }}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withHints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<RangeQuestion
    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withPoints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
    points={20}
    onSubmit={(res) => {
     if (res === true) {
      alert('Great, you have received 20 points');
     }
     else alert('sorry, this answer was wrong');
    }}
/>
```

</TabItem>

</Tabs>
