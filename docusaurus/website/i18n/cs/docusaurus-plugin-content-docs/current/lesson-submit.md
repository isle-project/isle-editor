---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Tlačítko, které se zobrazí na konci lekce a na které mohou studenti kliknout. Ve výchozím nastavení je na jejich e-mailovou adresu odeslána zpráva potvrzující dokončení lekce.

## Možnosti

* __coverage__ | `array<string>`: seznam identifikátorů, které mají být předloženy a zahrnuty do dokumentu s odpovědí.. Default: `none`.
* __label__ | `string`: popisek tlačítka odeslat. Default: `none`.
* __message__ | `string`: zpráva pro potvrzovací e-mail. Default: `''`.
* __requireLogin__ | `boolean`: určuje, zda má být uživatel přihlášen, aby bylo tlačítko aktivní (pro anonymní uživatele se nezasílá žádné potvrzení e-mailem).. Default: `true`.
* __sendConfirmationEmail__ | `boolean`: kontroluje, zda se má po odeslání lekce odeslat potvrzovací e-mail.. Default: `true`.
* __className__ | `string`: název třídy. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onClick__ | `function`: zpětné volání vyvolané při kliknutí na tlačítko odeslání.. Default: `onClick() {}`.


## Příklady

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
