---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Una pregunta que pide al usuario que suba una imagen.

## Opciones

* __question__ | `(string|node)`: texto de la pregunta. Default: `''`.
* __hintPlacement__ | `string`: la colocación de las pistas (ya sea "arriba", "izquierda", "derecha" o "abajo"). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: consejos que proporcionan orientación sobre cómo responder a la pregunta. Default: `[]`.
* __feedback__ | `boolean`: controla si se muestran los botones de retroalimentación. Default: `true`.
* __chat__ | `boolean`: controla si el elemento debe tener un chat integrado. Default: `false`.
* __disableSubmitNotification__ | `boolean`: controla si se debe mostrar una notificación después de enviar una imagen. Default: `false`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __sketchpad__ | `object`: propiedades a pasar al <Sketchpad /> componente; para renderizar el sketchpad, pasar al menos un objeto vacío `{}`. Default: `none`.
* __solution__ | `string`: URL de la imagen de la solución modelo. Default: `none`.
* __until__ | `Date`: tiempo hasta que los estudiantes puedan presentar sus respuestas. Default: `none`.
* __points__ | `number`: número máximo de puntos otorgados en la calificación. Default: `10`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.
* __onSubmit__ | `function`: llamada de retorno invocada cuando se presenta la respuesta; tiene como único parámetro un "booleano" que indica si los elementos fueron colocados en el orden correcto. Default: `onSubmit() {}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Sketchpad', value: 'witchSketchpad' },
        { label: 'Submit Plot', value: 'submitPlot' },
        { label: 'Solution', value: 'solution' },,
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ImageQuestion question="You may upload an image." feedback={false}  />
```
</TabItem>

<TabItem value="witchSketchpad">

```jsx live
<ImageQuestion question="Please enter your signature." feedback={false} sketchpad={{ canvasHeight: 300}} />
```

</TabItem>

<TabItem value="submitPlot">

```jsx live
<div>
  <ScatterPlot  data={heartdisease} xval="Age" yval="Cost" />
  <ImageQuestion question="Please adjust the range of values to show, change the axis labels and title of the plot, and submit your result." />
</div>
```
</TabItem>

<TabItem value="solution">

```jsx live
<ImageQuestion solution="https://bit.ly/3utaXOb" question="Please enter the Greek letter 'Gamma'." feedback={false} sketchpad={{ canvasHeight: 300}} />
```
</TabItem>

</Tabs>
