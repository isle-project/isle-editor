---
id: timer 
title: Timer
sidebar_label: Timer
---

Tiek parādīts taimeris, kas pēc laika beigām aktivizēs iepriekš noteiktu atpakaļsaukumu. Lietošanas piemērs ir viktorīnu laika noteikšana.

## Iespējas

* __id__ | `string`: taimera unikālais `virknes` ID. Ja ir iestatīts ID, taimera komponents ir noturīgs lapas atsvaidzināšanas laikā.. Default: `none`.
* __active__ | `boolean (required)`: karodziņš, ko var pārslēgt, lai palaistu vai apturētu taimeri.. Default: `none`.
* __belowZero__ | `boolean`: kontrolē, vai taimeris turpina skaitīt pēc tam, kad ilgums ir beidzies.. Default: `false`.
* __duration__ | `number (required)`: taimera ilgums sekundēs. Default: `none`.
* __invisible__ | `boolean`: kontrolē, vai taimeris ir jāslēpj.. Default: `false`.
* __legend__ | `string`: teksts, kas parādās taimera priekšā.. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onTimeUp__ | `function`: atgriezeniskais zvans, kas tiek izsaukts, kad beidzas taimeris.. Default: `onTimeUp() {}`.


## Piemēri

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

