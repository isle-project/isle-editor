---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Un botón que se muestra al final de una lección para que los estudiantes hagan clic en él. Por defecto, se envía un mensaje de confirmación de la finalización de la lección a su dirección de correo electrónico.

## Opciones

* __coverage__ | `array<string>`: lista de identificadores que deben presentarse e incluirse en el documento de respuesta. Default: `none`.
* __label__ | `string`: etiqueta del botón de envío. Default: `none`.
* __message__ | `string`: mensaje para el correo electrónico de confirmación. Default: `''`.
* __requireLogin__ | `boolean`: controla si se requiere que el usuario se registre para que el botón esté activo (para los usuarios anónimos, no se envía una confirmación por correo electrónico). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: controla si se debe enviar un correo electrónico de confirmación al enviar la lección. Default: `true`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onClick__ | `function`: llamada de retorno invocada al hacer clic en el botón de presentación. Default: `onClick() {}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Label', value: 'customLabel' },
        { label: 'Email Feedback', value: 'emailFeedback' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<LessonSubmit />
```

</TabItem>

<TabItem value="customLabel">

```jsx live
<LessonSubmit label="Click to submit" />
```

</TabItem>

<TabItem value="withEmail">

```jsx live
<LessonSubmit 
    style={{ outline: '4px solid black'}}
    message={`
    Hi,
    I am very glad that you solved this lesson. Congratulations! 
    It was a sophisticated one.
    If you want some help how to use ISLE, have a look a 
    [this site](https://isledocs.com/docs/)
    
    Best
    The ISLE team
    `}
    label="Click to submit" />
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<LessonSubmit 
    requireLogin={false}
    onClick={() => {
        alert( 'The Button has been clicked...' );
    }}
    label="Click to submit" />
```
</TabItem>

</Tabs>
