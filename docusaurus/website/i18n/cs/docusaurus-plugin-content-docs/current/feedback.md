---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Tlačítka pro sběr zpětné vazby od uživatelů.

## Možnosti

* __confusedMsg__ | `string`: zpráva, která se má zobrazit v nápovědě k zmatenému tlačítku. Default: `none`.
* __feedbackMsg__ | `string`: zpráva, která se má zobrazit v nápovědě k tlačítku podrobné zpětné vazby.. Default: `none`.
* __understoodMsg__ | `string`: zpráva, která se má zobrazit v nápovědě k pochopenému tlačítku. Default: `none`.
* __customFeedback__ | `boolean`: řídí, zda komponenta přijímá vlastní zpětnou vazbu. Default: `true`.
* __vertical__ | `boolean`: tlačítka se zobrazují vertikálně, pokud je nastaveno na `true`.. Default: `false`.
* __className__ | `string`: název třídy. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

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
