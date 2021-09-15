---
id: gate 
title: Gate
sidebar_label: Gate
---

ISLE komponentas, kuris leidžia rodyti savo antrininkus tik rezervuotai auditorijai.

## Parinktys

* __user__ | `boolean`: nustačius, naudotojams rodomas uždarytas turinys.. Default: `false`.
* __notUser__ | `boolean`: kai nustatyta, uždarytas turinys **nebus** rodomas naudotojams.. Default: `false`.
* __enrolled__ | `boolean`: nustačius, uždaras turinys rodomas į kursą užsiregistravusiems mokiniams.. Default: `false`.
* __notEnrolled__ | `boolean`: nustačius, uždarytas turinys **nebus** rodomas į kursą įtrauktiems studentams.. Default: `false`.
* __owner__ | `boolean`: nustačius, uždarytas turinys rodomas kurso savininkui (paprastai dėstytojui).. Default: `false`.
* __notOwner__ | `boolean`: nustačius, uždarytas turinys **nebus rodomas kurso savininkui (paprastai dėstytojui).. Default: `false`.
* __after__ | `Date`: laikas, po kurio turėtų būti matomas vartų turinys.. Default: `none`.
* __until__ | `Date`: laiką, kol vartų turinys turi likti matomas.. Default: `none`.
* __banner__ | `node`: pasirinktinis pranešimas, kuris rodomas lankytojams, kuriems vartų vaikai nėra matomi, o ne numatytasis.. Default: `none`.
* __disabled__ | `boolean`: jei vartai išjungti, reklaminis skydelis bus rodomas neatsižvelgiant į tai.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: kontroliuoja, ar rodyti vartų turinį pateikimo režimu, kai vartai matomi `savininkui`.. Default: `false`.
* __check__ | `function`: grįžtamojo ryšio funkcija, grąžinanti `boolean`, nurodančią, ar vartai turėtų rodyti vaikų komponentus; funkcija iškviečiama kiekvieną kartą, kai gaunami sesijos veiksmai.. Default: `none`.


## Pavyzdžiai

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



