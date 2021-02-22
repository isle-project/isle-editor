---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Knoppen voor het verzamelen van gebruikersfeedback.

## Opties

* __confusedMsg__ | `string`: bericht dat moet worden weergegeven in tooltip voor verwarde knop. Default: `none`.
* __feedbackMsg__ | `string`: bericht dat moet worden weergegeven in tooltip voor een gedetailleerde feedbackknop. Default: `none`.
* __understoodMsg__ | `string`: bericht dat moet worden weergegeven in tooltip voor begrepen knop. Default: `none`.
* __customFeedback__ | `boolean`: controleert of de component aangepaste feedback accepteert. Default: `true`.
* __vertical__ | `boolean`: knoppen worden verticaal weergegeven indien ingesteld op `true`.. Default: `false`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Voorbeelden

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
