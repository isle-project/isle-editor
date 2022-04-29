---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Un buton care va fi afișat la sfârșitul unei lecții pentru ca elevii să facă clic pe el. În mod implicit, un mesaj de confirmare a finalizării lecției este trimis la adresa lor de e-mail.

## Opțiuni

* __coverage__ | `array<string>`: lista elementelor de identificare care trebuie prezentate și incluse în documentul de răspuns. Default: `none`.
* __label__ | `string`: eticheta butonului de trimitere. Default: `none`.
* __message__ | `string`: mesaj pentru e-mail de confirmare. Default: `''`.
* __requireLogin__ | `boolean`: controlează dacă este necesar ca utilizatorul să fie autentificat pentru ca butonul să fie activ (pentru utilizatorii anonimi, nu se trimite niciun e-mail de confirmare). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: controlează dacă se trimite un e-mail de confirmare la trimiterea lecției. Default: `true`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onClick__ | `function`: callback invocat atunci când se face clic pe butonul de trimitere. Default: `onClick() {}`.


## Exemple

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
