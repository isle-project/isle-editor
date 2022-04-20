---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Una pregunta con una respuesta que consiste en múltiples cuadros de selección.

## Opciones

* __question__ | `(string|node)`: pregunta que se mostrará en la parte superior de la matriz de preguntas seleccionadas. Default: `''`.
* __rows__ | `array`: etiquetas de fila. Default: `[]`.
* __cols__ | `array`: etiquetas de columna. Default: `[]`.
* __options__ | `object`: con pares clave-valor con claves que tienen la forma "fila:col", por ejemplo "0:0", "0:1", "1:0", etc., y sus valores correspondientes son arreglos de las posibles opciones de respuesta para las preguntas individuales seleccionadas. Default: `{}`.
* __solution__ | `object`: Objeto de solución con pares clave-valor con claves que tienen la forma "fila:col", por ejemplo "0:0", "0:1", "1:0", etc., y sus valores correspondientes son el índice del elemento de respuesta correcta de la respectiva matriz de "opciones". Default: `{}`.
* __hints__ | `array<(string|node)>`: consejos que proporcionan orientación sobre cómo responder a la pregunta. Default: `[]`.
* __hintPlacement__ | `string`: la colocación de las pistas (ya sea `top`, `left`, `right` o `bottom`). Default: `'bottom'`.
* __feedback__ | `boolean`: controla si se muestran los botones de retroalimentación. Default: `true`.
* __provideFeedback__ | `string`: si proporcionar "ninguna" retroalimentación en absoluto, retroalimentación "individual" en las respuestas presentadas, o retroalimentación "general" para todas las preguntas. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: si se permite la presentación de propuestas sin que se haga una selección en cada casilla de selección. Default: `false`.
* __nTries__ | `number`: después de cuántos intentos no se aceptan más respuestas (si "ProvideFeedback" no es "ninguno"). Default: `3`.
* __failureMsg__ | `string`: El texto de la notificación que se muestra al presentar las respuestas incorrectas. Default: `none`.
* __successMsg__ | `string`: El texto de la notificación que se muestra al presentar las respuestas correctas. Default: `none`.
* __cellLabels__ | `object`: etiquetas para las celdas definidas por el objeto con claves que tienen el formato `row:col`. Default: `{}`.
* __chat__ | `boolean`: controla si el elemento debe tener un chat integrado. Default: `false`.
* __panelProps__ | `object`: propiedades adicionales que se pasan al componente exterior <Panel /> . Default: `{}`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onChange__ | `function`: función callback invocada al cambiar las respuestas. Default: `onChange() {}`.
* __onSubmit__ | `function`: La función de devolución de llamada invocada en el momento de la presentación con las respuestas como primer parámetro y un booleano que indica la corrección como segundo parámetro. Default: `onSubmit() {}`.


## Ejemplos


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Feedback Messages', value: 'feedbackMessages' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestionMatrix
  question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
    hints={[
        'His father Johann Sebastian was a famous composer too',
        'He was famous for his FAUST - so definitely an author',
        'Poussin was an 18th century painter',
        'Courbet was a realistic painter'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestionMatrix
    style={{ 
        fontFamily: 'Georgia',
        fontSize: 22, 
        textShadow: '0 0  10px white',
        background: 'rgb(251,213,112)',
        background: 'radial-gradient(circle, yellow 0%, orange 30%, green 100%)'
    }}
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>


<TabItem value="feedbackMessages">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    failureMsg="Sorry, that was wrong." 
    successMsg ="Wow! Congratulations, you are a specialist!"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```

</TabItem>

</Tabs>

