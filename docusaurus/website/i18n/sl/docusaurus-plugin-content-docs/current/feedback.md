---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Gumbi za zbiranje povratnih informacij uporabnikov.

## Možnosti

* __confusedMsg__ | `string`: sporočilo, ki se prikaže v opombi za zmeden gumb. Default: `none`.
* __feedbackMsg__ | `string`: sporočilo, ki se prikaže v namigu za gumb za podrobne povratne informacije. Default: `none`.
* __understoodMsg__ | `string`: sporočilo, ki se prikaže v opombi za razumljeni gumb. Default: `none`.
* __customFeedback__ | `boolean`: nadzoruje, ali komponenta sprejema povratne informacije po meri.. Default: `true`.
* __vertical__ | `boolean`: gumbi se prikažejo navpično, če je nastavljeno na `true`.. Default: `false`.
* __className__ | `string`: ime razreda. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri

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
