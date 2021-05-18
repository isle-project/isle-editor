---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Botones para recoger la información de los usuarios.

## Opciones

* __confusedMsg__ | `string`: mensaje que se mostrará en el tooltip para el botón de confusión. Default: `none`.
* __feedbackMsg__ | `string`: mensaje que se mostrará en el tooltip para el botón de retroalimentación detallada. Default: `none`.
* __understoodMsg__ | `string`: mensaje que se mostrará en el tooltip para el botón de comprensión. Default: `none`.
* __customFeedback__ | `boolean`: controla si el componente acepta retroalimentación personalizada. Default: `true`.
* __vertical__ | `boolean`: se muestran verticalmente si se ajustan a "verdadero". Default: `false`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Vertical', value: 'Vertical' },
        { label: 'Feedback Everywhere', value: 'feedbackEverywhere' },
        { label: 'Customized Style and Labels', value: 'fullyCustomized' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Panel>
  A panel with user feedback....
  <FeedbackButtons
    id="my_feedback" 
  />
</Panel>
```

</TabItem>

<TabItem value="Vertical">

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    id="my_feedback" 
    vertical
  />
</Panel>
```
</TabItem>

<TabItem value="feedbackEverywhere">

```jsx live
<Panel style={{ width: 680}}>

<VideoPlayer
    url="https://youtu.be/Lkj8b25ppZo"
    controls
/>

  to get some user feedback....
  <FeedbackButtons
    id="my_feedback" 
  />

</Panel>
```
</TabItem>

<TabItem value="fullyCustomized">

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    style={{ boxShadow: '0 0 12px red' }}
    id="my_feedback"  
    feedbackMsg="You can customize the feedback tooltip!"
    understoodMsg="Tell me you got it!" 
    confusedMsg="Click me if your are confused!" 
  />
</Panel>
```
</TabItem>

</Tabs>
