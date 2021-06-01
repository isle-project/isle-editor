---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Tlačidlá na zhromažďovanie spätnej väzby od používateľov.

## Možnosti

* __confusedMsg__ | `string`: správa, ktorá sa má zobraziť v tipe pre zmätočné tlačidlo. Default: `none`.
* __feedbackMsg__ | `string`: správa, ktorá sa má zobraziť v tipe pre tlačidlo podrobnej spätnej väzby. Default: `none`.
* __understoodMsg__ | `string`: správa, ktorá sa má zobraziť v tipe pre pochopené tlačidlo. Default: `none`.
* __customFeedback__ | `boolean`: kontroluje, či komponent akceptuje vlastnú spätnú väzbu.. Default: `true`.
* __vertical__ | `boolean`: tlačidlá sa zobrazujú vertikálne, ak je nastavená hodnota `true`. Default: `false`.
* __className__ | `string`: názov triedy. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.


## Príklady

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
