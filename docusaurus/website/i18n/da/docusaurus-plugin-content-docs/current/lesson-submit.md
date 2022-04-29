---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

En knap, som eleverne kan klikke på i slutningen af en lektion. Som standard sendes der en meddelelse til deres e-mailadresse, som bekræfter, at lektionen er afsluttet.

## Indstillinger

* __coverage__ | `array<string>`: liste over identifikatorer, der skal indsendes og indgå i svardokumentet. Default: `none`.
* __label__ | `string`: etiketten på knappen "Send. Default: `none`.
* __message__ | `string`: besked til bekræftelses-e-mail. Default: `''`.
* __requireLogin__ | `boolean`: styrer, om brugeren skal være logget ind, for at knappen er aktiv (for anonyme brugere sendes der ingen bekræftelse pr. e-mail). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: styrer, om der skal sendes en bekræftelses-e-mail ved indsendelse af lektioner. Default: `true`.
* __className__ | `string`: klassens navn. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onClick__ | `function`: callback, der påkaldes, når der klikkes på indsendelsesknappen. Default: `onClick() {}`.


## Eksempler

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
