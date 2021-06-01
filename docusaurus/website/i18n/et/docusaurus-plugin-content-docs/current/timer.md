---
id: timer 
title: Timer
sidebar_label: Timer
---

Kuvab taimer, mis käivitab ettemääratud tagasilöögi, kui aeg on möödas. Näide kasutusjuhtumiks on viktoriinide ajastamine.

## Valikud

* __id__ | `string`: unikaalne "string"-tunnus taimerile. Kui ID on määratud, on taimerikomponent püsiv ka pärast lehekülje uuendamist.. Default: `none`.
* __active__ | `boolean (required)`: lipp, mida saab lülitada, et käivitada või peatada taimer.. Default: `none`.
* __belowZero__ | `boolean`: kontrollib, kas taimer jätkab loendamist pärast kestuse ammendumist. Default: `false`.
* __duration__ | `number (required)`: ajaja kestus sekundites. Default: `none`.
* __invisible__ | `boolean`: kontrollib, kas taimer peaks olema peidetud. Default: `false`.
* __legend__ | `string`: tekst, mis kuvatakse taimeri ees. Default: `''`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onTimeUp__ | `function`: tagasikutsumine, mis käivitub, kui taimer lõpeb. Default: `onTimeUp() {}`.


## Näited

```jsx live
<Timer 
    id='test-quiz'
    active={true} 
    duration={50} 
    onTimeUp={() => {
      alert( 'done' );
    }}
/>
```

