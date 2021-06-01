---
id: text-input
title: Text Input
sidebar_label: Text Input
---

O componentă de introducere de text. Poate fi utilizată ca parte a unui tablou de bord ISLE sau de sine stătător. În acest din urmă caz, doriți să gestionați modificările prin atributul `onChange` sau să legați valoarea de o variabilă globală prin atributul `bind`.

## Opțiuni

* __bind__ | `string`: numele variabilei globale pentru numărul care urmează să fie atribuit. Default: `none`.
* __defaultValue__ | `string`: valoare care indică valoarea implicită a intrării la început. Default: `''`.
* __value__ | `string`: valoarea textului (pentru componenta controlată). Default: `none`.
* __legend__ | `(string|node)`: șir de caractere care indică textul afișat lângă numărul de intrare. Default: `''`.
* __inline__ | `boolean`: Indică dacă intrarea este afișată în linie. Default: `false`.
* __onBlur__ | `function`: funcția de callback invocată atunci când zona de text își pierde focalizarea. Default: `onBlur() {}`.
* __onChange__ | `function`: funcția care trebuie apelată atunci când se modifică o valoare de text. Default: `onChange() {}`.
* __onKeyDown__ | `function`: funcția de callback care trebuie invocată atunci când este apăsată orice tastă. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: funcția de callback care trebuie invocată la introducerea oricărei taste. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: funcția de apelare care trebuie invocată atunci când se eliberează tastatura. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: șir de caractere care indică valoarea care urmează să fie afișată înainte de efectuarea unei alegeri inițiale. Default: `none`.
* __width__ | `number`: număr care indică lățimea intrării în pixeli. Default: `80`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

