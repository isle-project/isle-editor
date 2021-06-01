---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Gombok a felhasználói visszajelzések gyűjtéséhez.

## Opciók

* __confusedMsg__ | `string`: a zavaros gomb tooltipjében megjelenítendő üzenet. Default: `none`.
* __feedbackMsg__ | `string`: a részletes visszajelzés gomb tooltipjében megjelenítendő üzenet. Default: `none`.
* __understoodMsg__ | `string`: a megértett gomb tooltipjében megjelenítendő üzenet. Default: `none`.
* __customFeedback__ | `boolean`: szabályozza, hogy a komponens elfogadja-e az egyéni visszajelzést. Default: `true`.
* __vertical__ | `boolean`: a gombok függőlegesen jelennek meg, ha "igaz"-ra van állítva.. Default: `false`.
* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

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
