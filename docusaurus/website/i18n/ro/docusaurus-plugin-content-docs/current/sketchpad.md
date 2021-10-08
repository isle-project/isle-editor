---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

Un caiet de desen pentru a lua notițe pe slide-urile de curs sau pe paginile goale.

## Opțiuni

* __autoSave__ | `boolean`: controlează dacă editorul trebuie să salveze textul curent în memoria locală a browserului la un anumit interval de timp.. Default: `true`.
* __feedbackButtons__ | `boolean`: controlează dacă se afișează butoane de feedback pe fiecare diapozitiv. Default: `false`.
* __intervalTime__ | `number`: timpul dintre salvările automate. Default: `10000`.
* __hideInputButtons__ | `boolean`: controlează dacă se vor ascunde butoanele de desen și de introducere a textului. Default: `false`.
* __hideNavigationButtons__ | `boolean`: controlează dacă se vor ascunde butoanele pentru navigarea între pagini. Default: `false`.
* __hideSaveButtons__ | `boolean`: controlează dacă se vor ascunde butoanele de salvare. Default: `false`.
* __hideTransmitButtons__ | `boolean`: controlează dacă trebuie ascunse butoanele pentru transmiterea acțiunilor utilizatorului. Default: `false`.
* __brushSize__ | `number`: dimensiunea pensulei cu care se pictează. Default: `4`.
* __color__ | `string`: culoarea pensulei și a textelor. Default: `'#444444'`.
* __canvasWidth__ | `number`: lățimea elementului canvas (în px). Default: `1200`.
* __canvasHeight__ | `number`: înălțimea elementului canvas (în px). Default: `700`.
* __fullscreen__ | `boolean`: controlează dacă se redimensionează automat pânza la lățimea și înălțimea ferestrei browserului. Default: `false`.
* __fill__ | `string`: dacă `horizontal`, umple tot spațiul orizontal disponibil atunci când desenează un PDF; dacă `vertical`, tot spațiul vertical este folosit pentru a preveni depășirea axei y.. Default: `'vertical'`.
* __disabled__ | `boolean`: dacă se dorește ca componenta să fie numai pentru citire și să se interzică desenarea pe sketchpad. Default: `false`.
* __fontFamily__ | `string`: familie de fonturi. Default: `'Arial'`.
* __fontSize__ | `number`: dimensiunea fontului. Default: `24`.
* __nodes__ | `object`: componentele care trebuie să fie redate deasupra diapozitivelor specificate; `keys` trebuie să corespundă numerelor de pagină, `values` la componente. Default: `{}`.
* __noPages__ | `number`: numărul inițial de pagini. Default: `1`.
* __pdf__ | `string`: link către fișierul PDF pentru fundalurile de pagină încorporate. Default: `none`.
* __showTutorial__ | `boolean`: afișați tutorialul pentru sketchpad la pornire. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: controlează dacă trebuie să înceapă ascunderea butoanelor atunci când lățimea barei de instrumente nu este suficientă (în caz contrar, va fi inițiată o nouă linie). Default: `false`.
* __transmitOwner__ | `boolean`: dacă acțiunile proprietarului trebuie transmise în timp real altor utilizatori. Default: `true`.
* __groupMode__ | `boolean`: controlează dacă toate acțiunile utilizatorului sunt transmise tuturor celorlalți. Default: `false`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onChange__ | `function`: callback invocat ori de câte ori este desenat un nou element de linie. Default: `onChange() {}`.


## Exemple

```jsx live
<Sketchpad canvasWidth={750} />
```

