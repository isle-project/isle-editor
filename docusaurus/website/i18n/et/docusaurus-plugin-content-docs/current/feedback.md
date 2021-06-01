---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Nupud kasutajate tagasiside kogumiseks.

## Valikud

* __confusedMsg__ | `string`: segadusse sattunud nupu tööriistakriipsu kuvatav sõnum. Default: `none`.
* __feedbackMsg__ | `string`: üksikasjaliku tagasiside nupu tööriistavihikusse kuvatav sõnum. Default: `none`.
* __understoodMsg__ | `string`: sõnum, mis kuvatakse nupu tooltip'is, mida mõistetakse. Default: `none`.
* __customFeedback__ | `boolean`: kontrollib, kas komponent aktsepteerib kohandatud tagasisidet. Default: `true`.
* __vertical__ | `boolean`: nupud kuvatakse vertikaalselt, kui seadistuseks on `true`.. Default: `false`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.


## Näited

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
