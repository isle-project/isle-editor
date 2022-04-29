---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Бутон, който се показва в края на урока и върху който учениците могат да кликнат. По подразбиране на техния имейл адрес се изпраща съобщение, потвърждаващо завършването на урока.

## Опции

* __coverage__ | `array<string>`: списък на идентификаторите, които трябва да бъдат представени и включени в документа за отговор. Default: `none`.
* __label__ | `string`: етикет на бутона за изпращане. Default: `none`.
* __message__ | `string`: съобщение за имейл за потвърждение. Default: `''`.
* __requireLogin__ | `boolean`: контролира дали да се изисква потребителят да е влязъл в системата, за да бъде бутонът активен (за анонимни потребители не се изпраща потвърждение по имейл). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: контролира дали да се изпраща имейл за потвърждение при подаване на урока. Default: `true`.
* __className__ | `string`: име на класа. Default: `''`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onClick__ | `function`: обратна връзка, задействана при щракване върху бутона за подаване. Default: `onClick() {}`.


## Примери

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Label', value: 'customLabel' },
        { label: 'Email Feedback', value: 'emailFeedback' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<LessonSubmit />
```

</TabItem>

<TabItem value="customLabel">

```jsx live
<LessonSubmit label="Click to submit" />
```

</TabItem>

<TabItem value="withEmail">

```jsx live
<LessonSubmit 
    style={{ outline: '4px solid black'}}
    message={`
    Hi,
    I am very glad that you solved this lesson. Congratulations! 
    It was a sophisticated one.
    If you want some help how to use ISLE, have a look a 
    [this site](https://isledocs.com/docs/)
    
    Best
    The ISLE team
    `}
    label="Click to submit" />
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<LessonSubmit 
    requireLogin={false}
    onClick={() => {
        alert( 'The Button has been clicked...' );
    }}
    label="Click to submit" />
```
</TabItem>

</Tabs>
