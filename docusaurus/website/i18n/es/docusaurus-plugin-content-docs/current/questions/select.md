---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Un componente de pregunta selectiva.

## Opciones

* __question__ | `(string|node)`: pregunta para la cual el estudiante tiene que seleccionar una de las opciones de respuesta disponibles. Default: `''`.
* __options__ | `array (required)`: opciones de respuesta disponibles de las cuales el estudiante puede seleccionar. Default: `none`.
* __solution__ | `number`: índice de elemento de solución en "opciones. Default: `none`.
* __preselected__ | `number`: índice de la opción de respuesta preseleccionada. Default: `0`.
* __inline__ | `boolean`: controla si el componente se renderiza en línea o no. Default: `false`.
* __hintPlacement__ | `string`: la colocación de las pistas (ya sea `top`, `left`, `right` o `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: consejos que proporcionan orientación sobre cómo responder a la pregunta. Default: `[]`.
* __feedback__ | `boolean`: controla si se muestran los botones de retroalimentación. Default: `true`.
* __chat__ | `boolean`: controla si el elemento debe tener un chat integrado. Default: `false`.
* __provideFeedback__ | `boolean`: indica si la retroalimentación, incluyendo la respuesta correcta, debe ser mostrada después de que los estudiantes envíen sus respuestas. Default: `true`.
* __failureMsg__ | `string`: mensaje que se mostrará cuando el estudiante seleccione una respuesta incorrecta. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: mensaje que se mostrará cuando el estudiante seleccione la respuesta correcta. Default: `'That's the correct answer!'`.
* __points__ | `number`: número máximo de puntos otorgados en la calificación. Default: `10`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onChange__ | `function`: llamada de retorno que se activa después de la acción de presentación. Default: `onChange() {}`.
* __onSubmit__ | `function`: llamada de retorno invocada cuando se presenta la respuesta; tiene como primer parámetro un "booleano" que indica si la respuesta fue contestada correctamente (si es aplicable, "nulo" en caso contrario) y la respuesta suministrada como segundo parámetro. Default: `onSubmit() {}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'Submit Function Hints', value: 'submitFunction' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    style={{ background: 'gainsboro', boxShadow: '0 0 10px black'}}
/>
```
</TabItem>

<TabItem value="inline">

```jsx live
The usual t-test is:
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    inline
/> ... so you can us it in the midst of a longer paragraph
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestion
    question="White is "
    solution={1}
    options={[
        'a primary color',
        'not a primary color'
    ]}
    hints={[ "There are 3 primary colors", "Red is a primary color", "and so is yellow" ]}
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<SelectQuestion
    question="Select the primary color"
    solution={2}
    options={[
        'orange',
        'white',
        'red'
    ]}
    onSubmit={(result) => {
        switch ( result ) {
            case 'orange':
                alert( 'No, orange is a mix of yellow and red.' );
            break;
            case 'white':
                alert( 'White does not count as a color.' );
            break;
            case 'red':
                alert( 'That is correct.' );
            break;
        }
    }}
    provideFeedback={false}
/> 
```
</TabItem>

</Tabs>
