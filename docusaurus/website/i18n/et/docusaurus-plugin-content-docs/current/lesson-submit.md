---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Nupp, mis kuvatakse õppetunni lõpus, et õpilased saaksid sellele vajutada. Vaikimisi saadetakse nende e-posti aadressile sõnum, mis kinnitab õppetunni lõpetamist.

## Valikud

* __coverage__ | `array<string>`: esitatud ja vastusdokumendis sisalduvate identifikaatorite loetelu. Default: `none`.
* __label__ | `string`: nupu esitamise silt. Default: `none`.
* __message__ | `string`: sõnum kinnituse e-kirja jaoks. Default: `''`.
* __requireLogin__ | `boolean`: kontrollib, kas kasutaja peab olema sisse logitud, et nupp oleks aktiivne (anonüümsetele kasutajatele ei saadeta kinnitust e-postiga).. Default: `true`.
* __sendConfirmationEmail__ | `boolean`: kontrollib, kas õppetundide esitamisel saadetakse kinnitav e-kiri. Default: `true`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onClick__ | `function`: callback, mis kutsutakse esile, kui vajutatakse esitamisnupule. Default: `onClick() {}`.


## Näited

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
