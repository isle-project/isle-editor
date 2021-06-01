---
id: select-input
title: Select Input
sidebar_label: Select Input
---

O componentă de intrare selectată. Poate fi utilizată ca parte a unui tablou de bord ISLE sau de sine stătător. În acest din urmă caz, doriți să gestionați modificările prin atributul `onChange` sau să legați valoarea de o variabilă globală prin atributul `bind`.

## Opțiuni

* __bind__ | `string`: numele variabilei globale pentru numărul care urmează să fie atribuit. Default: `''`.
* __clearable__ | `boolean`: valoare booleană care indică dacă se poate șterge opțiunea (opțiunile) făcută (făcute). Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: valoarea implicită a intrării la pornire. Default: `none`.
* __disabled__ | `boolean`: controlează dacă intrarea este activă sau nu. Default: `false`.
* __inline__ | `boolean`: indică dacă datele de intrare sunt afișate în linie. Default: `false`.
* __legend__ | `(string|node)`: textul afișat lângă intrarea. Default: `''`.
* __menuPlacement__ | `string`: plasarea meniului în raport cu controlul (fie `auto`, `top`, sau `bottom`). Default: `'auto'`.
* __multi__ | `boolean`: controlează dacă se pot selecta mai multe răspunsuri. Default: `false`.
* __onChange__ | `function`: funcția de callback care trebuie invocată atunci când se face o alegere. Default: `onChange() {}`.
* __options__ | `array`: matrice de indicare a opțiunilor disponibile pentru utilizator. Default: `[]`.
* __placeholder__ | `string`: valoarea care urmează să fie afișată înainte de a se face o alegere inițială. Default: `none`.
* __tooltip__ | `string`: text afișat la trecerea peste legendă. Default: `none`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple

```jsx live
<SelectInput
    legend="Choose the test direction"
    defaultValue="two-sided"
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```

