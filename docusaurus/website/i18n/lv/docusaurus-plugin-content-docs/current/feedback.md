---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Pogas lietotāju atsauksmju apkopošanai.

## Iespējas

* __confusedMsg__ | `string`: paziņojums, kas tiks parādīts sajauktas pogas uzrakstā.. Default: `none`.
* __feedbackMsg__ | `string`: detalizētas atgriezeniskās saites pogas rīkjoslā rādāmā ziņa.. Default: `none`.
* __understoodMsg__ | `string`: ziņojums, kas tiks parādīts saprastās pogas uzrakstā.. Default: `none`.
* __customFeedback__ | `boolean`: kontrolē, vai komponents pieņem pielāgotu atgriezenisko saiti.. Default: `true`.
* __vertical__ | `boolean`: pogas tiek parādītas vertikāli, ja iestatīts uz `true`.. Default: `false`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.


## Piemēri

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
