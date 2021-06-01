---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Knappar för att samla in användarfeedback.

## Alternativ

* __confusedMsg__ | `string`: Meddelande som ska visas i verktygstipsen för den förvirrade knappen.. Default: `none`.
* __feedbackMsg__ | `string`: Meddelande som ska visas i tooltip för knappen för detaljerad feedback.. Default: `none`.
* __understoodMsg__ | `string`: Meddelande som ska visas i verktygstipsen för den förstådda knappen.. Default: `none`.
* __customFeedback__ | `boolean`: kontrollerar om komponenten accepterar anpassad feedback. Default: `true`.
* __vertical__ | `boolean`: Knapparna visas vertikalt om de är inställda på `true`.. Default: `false`.
* __className__ | `string`: klassens namn. Default: `''`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.


## Exempel

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
