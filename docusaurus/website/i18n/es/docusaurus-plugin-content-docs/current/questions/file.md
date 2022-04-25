---
id: file-question 
title: File Question
sidebar_label: File Question
---

Una pregunta que pide al usuario que cargue un archivo.

## Opciones

* __question__ | `(string|node)`: la pregunta que aparece en la parte superior del componente de la pregunta del archivo. Default: `''`.
* __hintPlacement__ | `string`: colocación de las pistas (arriba, izquierda, derecha o abajo). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: pistas que orientan sobre cómo responder a la pregunta. Default: `[]`.
* __feedback__ | `boolean`: controla si se muestran los botones de retroalimentación. Default: `true`.
* __chat__ | `boolean`: controla si el elemento debe tener un chat integrado. Default: `false`.
* __accept__ | `string`: lista separada por comas de [identificadores únicos de archivo](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) que son aceptados por el componente (por ejemplo, "image/*", '.pdf' o "audio/*"). Default: `'*/*'`.
* __until__ | `Date`: tiempo hasta que los estudiantes puedan presentar sus respuestas. Default: `none`.
* __points__ | `number`: número máximo de puntos otorgados en la calificación. Default: `10`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos CSS en línea. Default: `{}`.
* __onChange__ | `function`: llamada de retorno para invocar al recibir un archivo. Default: `onChange() {}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Only PDFs', value: 'onlyPDF' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<FileQuestion question="You may upload a file." feedback={false}  />
```
</TabItem>

<TabItem value="onlyPDF">

```jsx live
<FileQuestion question="Please upload a PDF file." feedback={false} accept=".pdf" />
```

</TabItem>

</Tabs>
