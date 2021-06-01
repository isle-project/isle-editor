---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Painikkeet käyttäjäpalautteen keräämistä varten.

## Vaihtoehdot

* __confusedMsg__ | `string`: sekavan painikkeen työkaluvihjeessä näytettävä viesti. Default: `none`.
* __feedbackMsg__ | `string`: yksityiskohtaisen palautteen painikkeen tooltipissä näytettävä viesti. Default: `none`.
* __understoodMsg__ | `string`: ymmärretyn painikkeen työkaluvihjeessä näytettävä viesti. Default: `none`.
* __customFeedback__ | `boolean`: ohjaa, hyväksyykö komponentti mukautetun palautteen. Default: `true`.
* __vertical__ | `boolean`: painikkeet näytetään pystysuorassa, jos arvoksi on asetettu `true`.. Default: `false`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.


## Esimerkkejä

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
