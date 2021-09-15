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
* __showOwnerInPresentationMode__ | `boolean`: kontroluje, czy pokazywać zawartość bramki w trybie prezentacji, gdy bramka jest widoczna dla `właściciela`s. Default: `false`.
* __check__ | `function`: funkcja callback zwracająca `boolean` wskazująca, czy bramka powinna wyświetlać elementy dziecięce; funkcja jest wywoływana za każdym razem, gdy przychodzą akcje sesji. Default: `none`.


## Przykłady

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



