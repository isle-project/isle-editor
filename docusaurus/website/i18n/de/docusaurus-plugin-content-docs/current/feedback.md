---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Schaltflächen zum Sammeln von Benutzer-Feedback.

## Options

* __confusedMsg__ | `string`: Meldung, die im Tooltip für die verwirrte Schaltfläche angezeigt werden soll. Default: `none`.
* __feedbackMsg__ | `string`: Meldung, die im Tooltip für die Schaltfläche für detailliertes Feedback angezeigt werden soll. Default: `none`.
* __understoodMsg__ | `string`: Meldung, die im Tooltip für die verstandene Schaltfläche angezeigt werden soll. Default: `none`.
* __customFeedback__ | `boolean`: steuert, ob die Komponente benutzerdefinierte Rückmeldungen annimmt. Default: `true`.
* __vertical__ | `boolean`: Schaltflächen werden vertikal angezeigt, wenn auf `true` gesetzt. Default: `false`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.


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
