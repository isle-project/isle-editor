---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Przyciski do zbierania informacji zwrotnych od użytkowników.

## Opcje

* __confusedMsg__ | `string`: komunikat, który ma być wyświetlany w tooltipie dla dezorientowanego przycisku. Default: `none`.
* __feedbackMsg__ | `string`: komunikat, który ma być wyświetlany w tooltipie dla szczegółowej informacji zwrotnej. Default: `none`.
* __understoodMsg__ | `string`: komunikat, który ma być wyświetlany w tooltipie dla zrozumiałego przycisku. Default: `none`.
* __customFeedback__ | `boolean`: kontroluje, czy komponent akceptuje niestandardowe informacje zwrotne. Default: `true`.
* __vertical__ | `boolean`: przyciski są wyświetlane pionowo, jeśli ustawiono je na `prawdziwe`. Default: `false`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Przykłady

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
