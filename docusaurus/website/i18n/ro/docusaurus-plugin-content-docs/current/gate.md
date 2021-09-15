---
id: gate 
title: Gate
sidebar_label: Gate
---

O componentă ISLE care permite afișarea copiilor săi numai pentru publicul rezervat.

## Opțiuni

* __user__ | `boolean`: atunci când este setat, conținutul cu porți este afișat utilizatorilor. Default: `false`.
* __notUser__ | `boolean`: atunci când este setat, conținutul închis nu este **nu** afișat utilizatorilor. Default: `false`.
* __enrolled__ | `boolean`: atunci când este setat, conținutul cu porți este afișat studenților înscriși la curs. Default: `false`.
* __notEnrolled__ | `boolean`: atunci când este setat, conținutul de tip gated nu este **nu** afișat studenților înscriși la curs. Default: `false`.
* __owner__ | `boolean`: atunci când este setat, conținutul închis este afișat proprietarului cursului (de obicei, instructorul). Default: `false`.
* __notOwner__ | `boolean`: atunci când este setat, conținutul închis nu este **nu** afișat proprietarului cursului (de obicei, instructorul). Default: `false`.
* __after__ | `Date`: timpul după care conținutul porții trebuie să devină vizibil. Default: `none`.
* __until__ | `Date`: timpul până când conținutul porții trebuie să rămână vizibil. Default: `none`.
* __banner__ | `node`: un mesaj personalizat care este afișat vizitatorilor pentru care copiii porții nu sunt vizibili, în locul celui implicit. Default: `none`.
* __disabled__ | `boolean`: în cazul în care o poartă este dezactivată, bannerul va fi afișat indiferent ce se întâmplă. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: controlează dacă se afișează conținutul porții în modul de prezentare atunci când poarta este vizibilă pentru "proprietar".. Default: `false`.
* __check__ | `function`: funcție de callback care returnează un `boolean` indicând dacă poarta trebuie să afișeze componentele copil; funcția este invocată ori de câte ori sosesc acțiuni de sesiune. Default: `none`.


## Exemple

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



