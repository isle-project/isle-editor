---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Mape, kas parādās stundas beigās un uz kuras skolēni var noklikšķināt. Pēc noklusējuma uz skolēnu e-pasta adresi tiek nosūtīts ziņojums, kas apstiprina stundas pabeigšanu.

## Iespējas

* __coverage__ | `array<string>`: to identifikatoru saraksts, kas jāiesniedz un jāiekļauj atbildes dokumentā.. Default: `none`.
* __label__ | `string`: iesniegt pogas etiķete. Default: `none`.
* __message__ | `string`: apstiprinājuma e-pasta ziņa. Default: `''`.
* __requireLogin__ | `boolean`: kontrolē, vai lietotājam jābūt pierakstītam, lai poga būtu aktīva (anonīmiem lietotājiem apstiprinājums pa e-pastu netiek nosūtīts).. Default: `true`.
* __sendConfirmationEmail__ | `boolean`: kontrolē, vai pēc stundas iesniegšanas sūtīt apstiprinājuma e-pastu.. Default: `true`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onClick__ | `function`: atsauces zvans, kas tiek izsaukts, noklikšķinot uz iesniegšanas pogas.. Default: `onClick() {}`.


## Piemēri

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
