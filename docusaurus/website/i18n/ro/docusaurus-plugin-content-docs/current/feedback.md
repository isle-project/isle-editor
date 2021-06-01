---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Butoane pentru a colecta feedback-ul utilizatorilor.

## Opțiuni

* __confusedMsg__ | `string`: mesajul care urmează să fie afișat în tooltip pentru butonul confuz. Default: `none`.
* __feedbackMsg__ | `string`: mesajul care urmează să fie afișat în tooltip pentru butonul de feedback detaliat. Default: `none`.
* __understoodMsg__ | `string`: mesajul care urmează să fie afișat în tooltip pentru butonul înțeles. Default: `none`.
* __customFeedback__ | `boolean`: controlează dacă componenta acceptă feedback personalizat. Default: `true`.
* __vertical__ | `boolean`: butoanele sunt afișate pe verticală dacă este setat la `true`.. Default: `false`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple

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
