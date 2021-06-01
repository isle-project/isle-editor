---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Mygtukai naudotojų atsiliepimams rinkti.

## Parinktys

* __confusedMsg__ | `string`: pranešimas, kuris bus rodomas supainioto mygtuko įrankių užuominoje. Default: `none`.
* __feedbackMsg__ | `string`: pranešimas, kuris turi būti rodomas išsamių atsiliepimų mygtuko įrankių užuominose.. Default: `none`.
* __understoodMsg__ | `string`: pranešimas, kuris bus rodomas suprasto mygtuko įrankių užuominoje. Default: `none`.
* __customFeedback__ | `boolean`: kontroliuoja, ar komponentas priima pasirinktinį grįžtamąjį ryšį.. Default: `true`.
* __vertical__ | `boolean`: mygtukai rodomi vertikaliai, jei nustatyta reikšmė `true`.. Default: `false`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

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
