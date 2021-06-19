---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Un componente de la pregunta de orden que pide al estudiante traer una colección de elementos en el orden correcto.

## Opciones

* __question__ | `(string|node)`: pregunta para la cual el estudiante tiene que poner las "opciones" disponibles en el orden correcto. Default: `''`.
* __options__ | `array (required)`: una serie de textos que el estudiante tiene que traer en el orden correcto (se asume que es el orden suministrado). Default: `none`.
* __provideFeedback__ | `boolean`: controla si mostrar una notificación que muestre si la respuesta presentada es correcta o no. Default: `true`.
* __hintPlacement__ | `string`: la colocación de las pistas (ya sea `top`, `left`, `right` o `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: consejos que proporcionan orientación sobre cómo responder a la pregunta. Default: `[]`.
* __feedback__ | `boolean`: controla si se muestran los botones de retroalimentación. Default: `true`.
* __chat__ | `boolean`: controla si el elemento debe tener un chat integrado. Default: `false`.
* __failureMsg__ | `string`: mensaje que se mostrará cuando el estudiante envíe una respuesta incorrecta. Default: `none`.
* __successMsg__ | `string`: mensaje que se mostrará cuando el estudiante envíe la respuesta correcta. Default: `none`.
* __disableSubmitNotification__ | `boolean`: controla si se desactivan las notificaciones de presentación. Default: `false`.
* __until__ | `Date`: tiempo hasta que los estudiantes puedan presentar sus respuestas. Default: `none`.
* __points__ | `number`: número máximo de puntos otorgados en la calificación. Default: `10`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onChange__ | `function`: que se activa después de arrastrar un elemento; tiene dos parámetros: un "booleano" que indica si los elementos se colocaron en el orden correcto y un "arreglo" con el orden actual. Default: `onChange() {}`.
* __onSubmit__ | `function`: llamada de retorno invocada cuando se presenta la respuesta; tiene como único parámetro un "booleano" que indica si los elementos fueron colocados en el orden correcto. Default: `onSubmit() {}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Hints', value: 'hints' },
        { label: 'Submit Function', value: 'submitFunction' },
        { label: 'With Points and Feedback Message', value: 'withGradingAndFeedback' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
/>
```
</TabItem>

<TabItem value="hints">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
    hints={[ 'Delta succeeds Gamma in the Greek alphabet' ]}
    hintPlacement="bottom"
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "A",
        "G",
        "V"
    ]}
    onSubmit={() => {
        alert( 'Any JavaScript function could be executed here...' );
    }}
/>
```
</TabItem>

<TabItem value="withGradingAndFeedback">

```jsx live
<OrderQuestion
    question="Arrange the events in historical order"
    options={[
        "Napoleon's coronation as emperor",
        "The Crimean War",
        "Bombing of Hiroshima",
        "Fall of the Berlin Wall",
        "Donald Trump's inauguration",
    ]}
    points={10}
    successMsg = "Great! Looks like you are a history expert"
/>
```
</TabItem>

</Tabs>
