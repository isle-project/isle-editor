---
id: gate 
title: Gate
sidebar_label: Gate
---

Element ISLE, który pozwala na wyświetlanie swoich dzieci tylko zarezerwowanym odbiorcom.

## Opcje

* __user__ | `boolean`: po ustawieniu treści bramkowanej jest wyświetlana dla użytkowników. Default: `false`.
* __notUser__ | `boolean`: po ustawieniu treści bramkowanej jest **nie** wyświetlana dla użytkowników. Default: `false`.
* __enrolled__ | `boolean`: gdy ustawiona zawartość bramek jest wyświetlana studentom zapisanym na kurs. Default: `false`.
* __notEnrolled__ | `boolean`: po ustawieniu treści bramkowanej jest **nie** wyświetlana studentom zapisanym na kurs. Default: `false`.
* __owner__ | `boolean`: po ustawieniu treści bramkowanej jest wyświetlana właścicielowi kursu (zwykle instruktorowi). Default: `false`.
* __notOwner__ | `boolean`: po ustawieniu zawartość bramki jest **nie** wyświetlana właścicielowi kursu (zwykle instruktorowi). Default: `false`.
* __after__ | `Date`: czas, po którym zawartość bramy powinna stać się widoczna. Default: `none`.
* __until__ | `Date`: czas do momentu, w którym zawartość bramy powinna pozostać widoczna. Default: `none`.
* __banner__ | `node`: niestandardowy komunikat, który jest wyświetlany dla gości, dla których dzieci bramy nie są widoczne, zamiast domyślnego. Default: `none`.
* __disabled__ | `boolean`: jeśli brama jest wyłączona, baner będzie wyświetlany niezależnie od tego, co się dzieje. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: kontroluje, czy pokazywać zawartość bramki w trybie prezentacji, gdy bramka jest widoczna dla `właściciela`s. Default: `true`.
* __check__ | `function`: funkcja callback zwracająca `boolean` wskazująca, czy bramka powinna wyświetlać elementy dziecięce; funkcja jest wywoływana za każdym razem, gdy przychodzą akcje sesji. Default: `none`.


## Przykłady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Timed', value: 'timed' },
        { label: 'Hidden', value: 'hidden' },
        { label: 'Custom Banner', value: 'customBanner' },
        { label: 'Custom Check', value: 'customCheck' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Gate enrolled >
    <h1>Content for users enrolled in a cohort of the course</h1>
</Gate>
```

</TabItem>

<TabItem value="timed">

```jsx live
<Gate
    after={date({ year: 2020, month: 9, day: 1, hour: 9, minute: 30, second: 0, utcOffset: 4 })}
    until={date({ year: 2020, month: 12, day: 20, hour: 9, minute: 30, second: 0, utcOffset: 5 })}
>
    # Only visible in Fall 2020 semester
</Gate>
```

</TabItem>

<TabItem value="hidden">

```jsx live
<Gate banner={null} owner >
    <h1>Content for owners without a message for others</h1>
</Gate>
```

</TabItem>

<TabItem value="customBanner">

```jsx live
<Gate owner banner={<h3>Only visible by course owners...</h3>} >
    <h1> User Analytics </h1>
</Gate>
```

</TabItem>

<TabItem value="customCheck">

```jsx live
<Gate check={( ) => {
    return session.user.email === 'admin@cmu.edu';
}} >
    <h1> User Analytics only visible to specified user</h1>
</Gate>
```

</TabItem>

</Tabs>

