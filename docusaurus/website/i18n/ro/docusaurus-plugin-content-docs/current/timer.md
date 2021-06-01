---
id: timer 
title: Timer
sidebar_label: Timer
---

Afișează un cronometru care va declanșa o reacție predefinită la expirarea timpului. Un exemplu de utilizare este cronometrarea testelor.

## Opțiuni

* __id__ | `string`: ID-ul unic `string` pentru cronometru. Dacă este setat un ID, componenta cronometru este persistentă în timpul reîmprospătării paginii.. Default: `none`.
* __active__ | `boolean (required)`: indicator care poate fi activat pentru a porni sau a întrerupe cronometrul. Default: `none`.
* __belowZero__ | `boolean`: controlează dacă cronometrul continuă să numere după ce durata este epuizată. Default: `false`.
* __duration__ | `number (required)`: durata în secunde pentru temporizator. Default: `none`.
* __invisible__ | `boolean`: controlează dacă temporizatorul trebuie să fie ascuns. Default: `false`.
* __legend__ | `string`: textul afișat în fața cronometrului. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onTimeUp__ | `function`: callback invocat atunci când temporizatorul se termină. Default: `onTimeUp() {}`.


## Exemple

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

