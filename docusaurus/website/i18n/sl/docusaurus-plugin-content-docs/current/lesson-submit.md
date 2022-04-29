---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Gumb, ki se prikaže ob koncu učne ure in na katerega lahko učenci kliknejo. Privzeto je na njihov e-poštni naslov poslano sporočilo, ki potrjuje zaključek lekcije.

## Možnosti

* __coverage__ | `array<string>`: seznam identifikatorjev, ki jih je treba predložiti in vključiti v odgovorni dokument. Default: `none`.
* __label__ | `string`: oznaka gumba za oddajo. Default: `none`.
* __message__ | `string`: sporočilo za potrditveno e-pošto. Default: `''`.
* __requireLogin__ | `boolean`: nadzoruje, ali je treba od uporabnika zahtevati prijavo, da je gumb aktiven (za anonimne uporabnike se ne pošlje e-poštna potrditev).. Default: `true`.
* __sendConfirmationEmail__ | `boolean`: nadzoruje, ali naj se ob predložitvi lekcije pošlje potrditveno e-poštno sporočilo.. Default: `true`.
* __className__ | `string`: ime razreda. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onClick__ | `function`: povratni klic, ki se sproži ob kliku na gumb za oddajo.. Default: `onClick() {}`.


## Primeri

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
