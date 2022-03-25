---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

Un componente de ISLE que hace una pregunta en la que el aprendiz tiene que emparejar elementos de dos listas entre sí de manera correcta.

## Opciones

* __question__ | `(string|node)`: pregunta que se mostrará en la parte superior del componente de la pregunta de la lista de coincidencia. Default: `''`.
* __elements__ | `array<{a,b}>`: una "matriz" que contiene los pares correctos mostrados en la parte superior del componente de preguntas de texto libre. Cada elemento de la "matriz" debe ser un "objeto" con propiedades "a" y "b"; suministrar elementos con sólo propiedades "a" o "b" para añadir respuestas de distracción. Default: `[]`.
* __hintPlacement__ | `string`: la colocación de las pistas (ya sea `top`, `left`, `right` o `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: consejos que proporcionan orientación sobre cómo responder a la pregunta. Default: `[]`.
* __provideFeedback__ | `boolean`: indica si la solución debe ser accesible después de que los alumnos presenten sus respuestas. Default: `true`.
* __feedback__ | `boolean`: controla si se muestran los botones de retroalimentación. Default: `true`.
* __chat__ | `boolean`: controla si el elemento debe tener un chat integrado. Default: `false`.
* __colorScale__ | `array`: si se establece, los colores suministrados se utilizan para los azulejos. Default: `none`.
* __shuffle__ | `string`: especifica si se barajan las columnas `left`, `right` o "ambas" cuyos elementos tienen que coincidir; suministre "ninguno" o cualquier otro valor para no barajar los elementos de ninguno de los lados (puede ser útil en caso de que no haya solución). Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: controla si se desactivan las notificaciones de presentación. Default: `false`.
* __submissionMsg__ | `string`: La notificación que se muestra cuando el aprendiz presenta su respuesta por primera vez. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: notificación mostrada para todas las presentaciones después de la primera. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: tiempo hasta que los estudiantes puedan presentar sus respuestas. Default: `none`.
* __points__ | `number`: número máximo de puntos otorgados en la calificación. Default: `10`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: la llamada de retorno invocada cuando los estudiantes presentan una respuesta. Default: `onSubmit() {}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'withMarkdown' },
        { label: 'With Solution & Style', value: 'withFeedback' },
        { label: 'Shuffle Right', value: 'shuffleRight' },
        { label: 'Points for Grading', value: 'grading' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    elements={[
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { a: 'Ar', b: 'Argon' },
        { a: 'Ac' , b: 'Actinium'},
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
    provideFeedback={false}
/>
```
</TabItem>

<TabItem value="withMarkdown">

```jsx live
<MatchListQuestion
    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="withFeedback">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="shuffleRight">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Carl Friedrich', b: 'Gauß' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Francis', b: 'Galton' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'Ronald', b: 'Fisher' }
    ]}
    shuffle="right"
/>
```
</TabItem>

<TabItem value="grading">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Ronald', b: 'Fisher' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Francis', b: 'Galton' },
        { a: 'Carl Friedrich', b: 'Gauß' }
    ]}
    points={20}
/>
```
</TabItem>

</Tabs>
