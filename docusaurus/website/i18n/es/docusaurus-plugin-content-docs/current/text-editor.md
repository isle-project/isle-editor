---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Un editor de texto para escribir notas o informes. Soporta la exportación de notas como archivos HTML o PDF, así como el envío automático al servidor de ISLE.

## Opciones

* __allowSubmissions__ | `boolean`: controla si los estudiantes pueden enviar sus informes al servidor. Default: `true`.
* __canLoadHTML__ | `boolean`: controla si se muestra el botón para cargar un archivo HTML guardado en el editor. Default: `true`.
* __defaultValue__ | `string`: texto por defecto del editor. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: controla si el editor debe incluir una vista del historial. Default: `true`.
* __mode__ | `string`: controla el modo de edición de texto (ya sea `individual` para un documento personal, `grupo` para un documento por grupos, `colaborativo` para un documento único para todos, o `cohorte` para un documento por cohorte). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: objeto para personalizar el modal para restablecer el documento (normalmente no debería cambiarse). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: controla si se envían correos electrónicos de confirmación con salida PDF/HTML al ser presentados. Default: `false`.
* __voiceTimeout__ | `number`: tiempo en milisegundos después de que se inserte un trozo de voz grabada. Default: `5000`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Default Value', value: 'defaultValue' },
        { label: 'Mode', value: 'mode' },
        { label: 'With Style', value: 'withStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<TextEditor  />
```

</TabItem>

<TabItem value="defaultValue">

```jsx live
<TextEditor defaultValue={`# Welcome!

This is a text that uses **markdown**

## Second Heading Level

[Wikipedia Link](https://https://www.wikipedia.org/).
`} />
```

</TabItem>

<TabItem value="mode">

```jsx live
<TextEditor defaultValue="This is reserved for an individual. But you can also allow groups, students cohorts, or everybody to join in and work collaboratively (setting the mode option will only have an effect in a live lesson, not this preview)." 
mode="individual" />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<TextEditor  
  defaultValue="[Generate CSS-Gradients Online!](https://cssgradient.io/)"
  style={{ 
    background: 'green',
    background: 'radial-gradient(circle, rgba(251,213,112,0.7315301120448179) 0%,rgba(83,199,14,0.4514180672268907) 100%)' 
  }}
/>
```

</TabItem>

</Tabs>
