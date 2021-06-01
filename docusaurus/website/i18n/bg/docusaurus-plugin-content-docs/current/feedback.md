---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Бутони за събиране на обратна връзка от потребителите.

## Опции

* __confusedMsg__ | `string`: съобщение, което да се показва в подсказката за объркан бутон. Default: `none`.
* __feedbackMsg__ | `string`: съобщение, което да се показва в подсказката на бутона за подробна обратна връзка. Default: `none`.
* __understoodMsg__ | `string`: съобщение, което да се показва в подсказката за разбрания бутон. Default: `none`.
* __customFeedback__ | `boolean`: контролира дали компонентът приема персонализирана обратна връзка. Default: `true`.
* __vertical__ | `boolean`: бутоните се показват вертикално, ако е зададено `true`.. Default: `false`.
* __className__ | `string`: име на класа. Default: `''`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.


## Примери

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
