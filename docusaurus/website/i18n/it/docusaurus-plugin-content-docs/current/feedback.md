---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Pulsanti per raccogliere i feedback degli utenti.

## Options

* __confusedMsg__ | `string`: messaggio da visualizzare nel tooltip per il pulsante confuso. Default: `none`.
* __feedbackMsg__ | `string`: messaggio da visualizzare nel tooltip per un feedback dettagliato pulsante di feedback. Default: `none`.
* __understoodMsg__ | `string`: messaggio da visualizzare nel tooltip per la comprensione del pulsante. Default: `none`.
* __customFeedback__ | `boolean`: controlla se il componente accetta il feedback personalizzato. Default: `true`.
* __vertical__ | `boolean`: vengono visualizzati verticalmente se impostati su "true".. Default: `false`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Examples

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
