---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Tlačidlo, ktoré sa zobrazí na konci hodiny a na ktoré môžu študenti kliknúť. V predvolenom nastavení sa na ich e-mailovú adresu odošle správa potvrdzujúca ukončenie lekcie.

## Možnosti

* __coverage__ | `array<string>`: zoznam identifikátorov, ktoré sa majú predložiť a zahrnúť do dokumentu s odpoveďou. Default: `none`.
* __label__ | `string`: označenie tlačidla odoslania. Default: `none`.
* __message__ | `string`: správa pre potvrdzujúci e-mail. Default: `''`.
* __requireLogin__ | `boolean`: kontroluje, či má byť používateľ prihlásený, aby bolo tlačidlo aktívne (pre anonymných používateľov sa neposiela žiadne e-mailové potvrdenie).. Default: `true`.
* __sendConfirmationEmail__ | `boolean`: kontroluje, či sa má po odoslaní lekcie odoslať potvrdzujúci e-mail.. Default: `true`.
* __className__ | `string`: názov triedy. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onClick__ | `function`: spätné volanie vyvolané po kliknutí na tlačidlo odoslania. Default: `onClick() {}`.


## Príklady

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
