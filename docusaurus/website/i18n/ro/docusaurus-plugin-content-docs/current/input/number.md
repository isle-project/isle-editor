---
id: number-input
title: Number Input
sidebar_label: Number Input
---

O componentă de intrare a numerelor. Poate fi utilizată ca parte a unui tablou de bord ISLE sau de sine stătător. În acest din urmă caz, doriți să gestionați modificările prin atributul `onChange` sau să legați valoarea de o variabilă globală prin atributul `bind`.

## Opțiuni

* __bind__ | `string`: numele variabilei globale pentru numărul care urmează a fi atribuit. Default: `''`.
* __defaultValue__ | `number`: valoare care indică valoarea implicită a intrării la pornire. Default: `0`.
* __disabled__ | `boolean`: boolean care indică dacă intrarea este activă sau nu. Default: `false`.
* __inline__ | `boolean`: indică dacă datele de intrare sunt afișate în linie. Default: `false`.
* __legend__ | `(string|node)`: șir de caractere care indică textul afișat lângă numărul de intrare. Default: `none`.
* __max__ | `number`: număr care indică valoarea maximă care poate fi introdusă. Default: `null`.
* __min__ | `number`: număr care indică cea mai mică valoare posibilă care poate fi introdusă. Default: `null`.
* __numbersOnly__ | `boolean`: controlează dacă sunt acceptate numai numere. Default: `true`.
* __placeholder__ | `string`: șir de caractere care indică textul afișat atunci când intrarea este goală (necesită ca `defaultValue` să fie setat la `null` sau `undefined`). Default: `'0'`.
* __onBlur__ | `function`: funcția de rechemare care trebuie invocată atunci când se utilizează o metodă de estompare. Default: `onBlur() {}`.
* __onChange__ | `function`: funcția de callback care trebuie invocată atunci când se modifică numărul introdus. Default: `onChange() {}`.
* __onKeyDown__ | `function`: funcția de callback care trebuie invocată atunci când este apăsată orice tastă. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: funcția de callback care trebuie invocată la introducerea oricărei taste. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: funcția de apelare care trebuie invocată atunci când se eliberează tastatura. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: numărul care indică modificările incrementale atunci când se utilizează săgețile de incrementare. Default: `1`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __inputStyle__ | `object`: Stiluri CSS inline pentru elementul de intrare. Default: `{}`.
* __value__ | `number`: valoarea numerică (pentru componenta controlată). Default: `none`.
* __tooltip__ | `string`: șir de caractere pentru tooltip (dacă nu este setat, tooltip-ul este generat automat). Default: `none`.
* __tooltipPlacement__ | `string`: direcția indicatorului de instrumente. Default: `'left'`.


## Exemple

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

