---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Mygtuką, kuris bus rodomas pamokos pabaigoje ir kurį mokiniai galės spustelėti. Pagal numatytuosius nustatymus į jų el. pašto adresą išsiunčiamas pranešimas, patvirtinantis pamokos užbaigimą.

## Parinktys

* __coverage__ | `array<string>`: pateiktinų ir į atsakymo dokumentą įtrauktinų identifikatorių sąrašas. Default: `none`.
* __label__ | `string`: pateikimo mygtuko etiketė. Default: `none`.
* __message__ | `string`: žinutė patvirtinimo el. paštui. Default: `''`.
* __requireLogin__ | `boolean`: kontroliuoja, ar reikia, kad naudotojas būtų prisijungęs, kad mygtukas būtų aktyvus (anoniminiams naudotojams patvirtinimas el. paštu nesiunčiamas).. Default: `true`.
* __sendConfirmationEmail__ | `boolean`: kontroliuoja, ar pateikus pamoką siųsti patvirtinimo el. laišką.. Default: `true`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onClick__ | `function`: grįžtamasis ryšys, inicijuojamas paspaudus pateikimo mygtuką.. Default: `onClick() {}`.


## Pavyzdžiai

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
