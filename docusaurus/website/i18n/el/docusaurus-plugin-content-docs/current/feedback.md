---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Κουμπιά για τη συλλογή ανατροφοδότησης των χρηστών.

## Επιλογές

* __confusedMsg__ | `string`: μήνυμα που θα εμφανίζεται στο tooltip για το κουμπί confused. Default: `none`.
* __feedbackMsg__ | `string`: μήνυμα που θα εμφανίζεται στο tooltip για το κουμπί λεπτομερούς ανατροφοδότησης. Default: `none`.
* __understoodMsg__ | `string`: μήνυμα που θα εμφανίζεται στο tooltip για το κατανοητό κουμπί. Default: `none`.
* __customFeedback__ | `boolean`: ελέγχει αν το στοιχείο δέχεται προσαρμοσμένη ανατροφοδότηση. Default: `true`.
* __vertical__ | `boolean`: τα κουμπιά εμφανίζονται κάθετα αν έχει οριστεί σε `true`. Default: `false`.
* __className__ | `string`: όνομα κλάσης. Default: `''`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.


## Παραδείγματα

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
