---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

A lecke végén megjelenő gomb, amelyre a tanulók kattinthatnak. Alapértelmezés szerint a lecke befejezését megerősítő üzenet kerül elküldésre az e-mail címükre.

## Opciók

* __coverage__ | `array<string>`: a benyújtandó és a válaszdokumentumban szereplő azonosítók jegyzéke. Default: `none`.
* __label__ | `string`: az elküldés gomb címkéje. Default: `none`.
* __message__ | `string`: üzenet a visszaigazoló e-mailhez. Default: `''`.
* __requireLogin__ | `boolean`: szabályozza, hogy a felhasználónak be kell-e jelentkeznie ahhoz, hogy a gomb aktív legyen (névtelen felhasználók esetében nem küldünk e-mail visszaigazolást).. Default: `true`.
* __sendConfirmationEmail__ | `boolean`: szabályozza, hogy küldjön-e visszaigazoló e-mailt a lecke beküldésekor. Default: `true`.
* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onClick__ | `function`: a benyújtás gombra való kattintáskor előhívott callback. Default: `onClick() {}`.


## Példák

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
