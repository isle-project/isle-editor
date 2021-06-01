---
id: text-input
title: Text Input
sidebar_label: Text Input
---

Komponenta za vnos besedila. Uporablja se lahko kot del nadzorne plošče ISLE ali samostojno. V slednjem primeru želite obdelati spremembe s pomočjo atributa `onChange` ali vezati vrednost na globalno spremenljivko s pomočjo atributa `bind`.

## Možnosti

* __bind__ | `string`: ime globalne spremenljivke, v katero se pripiše številka.. Default: `none`.
* __defaultValue__ | `string`: vrednost, ki označuje privzeto vrednost vnosa na začetku. Default: `''`.
* __value__ | `string`: vrednost besedila (za nadzorovano komponento). Default: `none`.
* __legend__ | `(string|node)`: niz, ki označuje besedilo, prikazano ob vnosu števila.. Default: `''`.
* __inline__ | `boolean`: Označuje, ali je vnos prikazan v vrstici.. Default: `false`.
* __onBlur__ | `function`: povratna funkcija, ki se sproži, ko območje besedila izgubi fokus.. Default: `onBlur() {}`.
* __onChange__ | `function`: funkcija, ki se kliče ob spremembi vrednosti besedila. Default: `onChange() {}`.
* __onKeyDown__ | `function`: funkcija povratne zveze, ki se sproži, ko je pritisnjena katera koli tipka.. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: povratna funkcija, ki se sproži ob vnosu katere koli tipke. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: povratna funkcija, ki se sproži, ko je tipka sproščena.. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: niz, ki označuje vrednost, ki se prikaže pred začetno izbiro.. Default: `none`.
* __width__ | `number`: število, ki označuje širino vnosa v pikslih. Default: `80`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.


## Primeri

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

