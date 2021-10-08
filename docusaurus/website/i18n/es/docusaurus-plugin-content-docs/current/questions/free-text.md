---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

Un componente de ISLE para preguntas donde las respuestas de los estudiantes deben ser suministradas en forma de texto libre.

## Opciones

* __question__ | `(string|node)`: la pregunta que aparece en la parte superior del componente de la pregunta de texto libre. Default: `''`.
* __hints__ | `array<(string|node)>`: consejos que proporcionan orientación sobre cómo responder a la pregunta. Default: `[]`.
* __hintPlacement__ | `string`: la colocación de las pistas (ya sea `top`, `left`, `right` o `bottom`). Default: `'top'`.
* __feedback__ | `boolean`: controla si se muestran los botones de retroalimentación. Default: `true`.
* __solution__ | `(string|node)`: una respuesta modelo al problema. Default: `''`.
* __instantSolution__ | `boolean`: si se puede cambiar la visualización de la respuesta del modelo inmediatamente. Default: `false`.
* __rows__ | `number`: número de filas del campo de texto para que los estudiantes escriban sus respuestas. Default: `5`.
* __chat__ | `boolean`: controla si para habilitar el chat en grupo debe para la pregunta. Default: `false`.
* __resizable__ | `boolean`: controla si el área de texto debe ser redimensionada. Default: `false`.
* __placeholder__ | `string`: El texto del marcador de posición que se muestra antes de que el usuario haya introducido cualquier texto. Default: `''`.
* __disableSubmitNotification__ | `boolean`: controla si se desactivan las notificaciones de presentación. Default: `false`.
* __submissionMsg__ | `string`: La notificación que se muestra cuando el aprendiz presenta su respuesta por primera vez. Default: `''`.
* __resubmissionMsg__ | `string`: notificación mostrada para todas las presentaciones después de la primera. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: indica si la retroalimentación, incluyendo la respuesta correcta, debe ser mostrada después de que los estudiantes envíen sus respuestas. Default: `true`.
* __maxlength__ | `number`: número máximo permitido de caracteres. Default: `2500`.
* __until__ | `Date`: tiempo hasta que los estudiantes puedan presentar sus respuestas. Default: `none`.
* __points__ | `number`: número máximo de puntos otorgados en la calificación. Default: `10`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onChange__ | `function`: llamada de retorno invocada cada vez que el valor del área de texto cambia; recibe el texto actual como su único argumento. Default: `onChange() {}`.
* __onSubmit__ | `function`: llamada de retorno invocada cuando el usuario presenta una respuesta; recibe el texto presentado como su único argumento. Default: `onSubmit() {}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Points for Grading', value: 'withPointsForGrading' },
        { label: 'No Feedback', value: 'withoutFeedbackAndNotification' },
        { label: 'Solution', value: 'withSolution' },
        { label: 'Hints', value: 'withHints' },
        { label: 'Placeholder', value: 'placeholderText' },
        { label: 'Due Date', value: 'dueDate' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
/>
```
</TabItem>

<TabItem value="withPointsForGrading" >

```jsx live
<FreeTextQuestion 
    question={<span>Can you please explain Montesquieu's System of *separation of powers*?</span>} 
    rows={3} 
    points={15}
/>
```

</TabItem>

<TabItem value="withoutFeedbackAndNotification" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3}
    disableSubmitNotification 
    feedback={false}
/>
```

</TabItem>

<TabItem value="withSolution" > 

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
/>
```

</TabItem>

<TabItem value="withHints" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
    hints = {["No, it was not Margret Thatcher", "He believed in Aliens by the way", "His first name was Winston - like the guy in 1984"]}
    submissionMsg = "His name was Winston churchill, and it occurred in a speech given by him to the House of Commons of the Parliament of the United Kingdom on 13 May 1940. The speech is sometimes known by that name"
/>
```

</TabItem>

<TabItem value="placeholderText" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={3} 
    solution="Winston Churchill" 
    placeholder="Think of an overweight politician with a big cigar in his mouth."
/>
```

</TabItem>

<TabItem value="dueDate" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
    until={new Date( Date.UTC(2029, 0, 1, 3, 33 ) )}
    placeholder="You can set a date until answers are accepted. In this case it is 2020, 1st of January, 3:30 am UTC time."
/>
```

</TabItem>

</Tabs>
