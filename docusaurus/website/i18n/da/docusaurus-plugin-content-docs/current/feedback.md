---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Knapper til at indsamle brugerfeedback.

## Indstillinger

* __confusedMsg__ | `string`: besked, der skal vises i tooltip for forvirret knap. Default: `none`.
* __feedbackMsg__ | `string`: besked, der skal vises i tooltip for knappen for detaljeret feedback. Default: `none`.
* __understoodMsg__ | `string`: besked, der skal vises i tooltip for den forstås knap. Default: `none`.
* __customFeedback__ | `boolean`: styrer, om komponenten accepterer brugerdefineret feedback. Default: `true`.
* __vertical__ | `boolean`: knapperne vises lodret, hvis de er indstillet til `true`.. Default: `false`.
* __className__ | `string`: klassens navn. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.


## Eksempler

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
