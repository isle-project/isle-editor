---
id: multi-cards
title: Multi Cards
sidebar_label: Multi Cards
---

Komponent ISLE, który pozwala na tworzenie i kontrolowanie wielu przerzucalnych kart (np. w grze "Pamięć").

## Options

* __animation__ | `object`: jeśli jest ustawiony, komponent używa animacji wejściowej; obiekt zawiera nazwę (jak `skalowanie zwierząt`) i czas trwania (jak `1,7s` = 1,7 sekundy). Default: `{}`.
* __memory__ | `boolean`: czy włączyć tryb gry pamięciowej, w której trzeba dopasować pary podanych wartości. Default: `none`.
* __onChange__ | `function`: funkcja, która otrzymuje matrycę z odwracanych kart. Default: `onChange() {}`.
* __onMemoryComplete__ | `function`: wywołanie zwrotne wywoływane, gdy gra pamięciowa jest zakończona. Default: `onMemoryComplete() {}`.
* __oneTime__ | `boolean`: wskazuje, czy proces przerzucania może zostać wykonany tylko raz. Default: `false`.
* __values__ | `array<object>`: wartości dla poszczególnych kart, wprowadzane w tablicy, która posiada pola wejściowe dla wartości `z przodu` i `z tyłu`. Taką wartością może być łańcuch, ale także pełnoprawny komponent ISLE.. Default: `[]`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __containerStyle__ | `object`: Styl CSS pojemników na karty. Default: `{}`.
* __frontStyle__ | `object`: Styl CSS frontu karty. Default: `{}`.
* __backStyle__ | `object`: Styl CSS tylnej strony kart. Default: `{}`.


## Examples

```jsx live
<MultiCards
    onChange={(data) => {
        console.log(data);
    }}
    containerStyle={{
        width: 250,
        height: 250,
        marginBottom: 10
    }}
    frontStyle={{
        color:'gainsboro',
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',
        backgroundSize: '100% auto'
    }}
    backStyle={{
        color: 'blue',
        fontSize: 20,
        fontWeight: 800,
        fontFamily: 'Oswald',
        textAlign: 'left',
        paddingLeft: '10px',
        background: 'ghostwhite',
        boxShadow: '1px 1px 10px black',
    }}
    values={[
        { front: "number 1", back: 'back side of #1'},
        { front: "number 2", back: 'back side of #2'},
        { front: "number 3", back: 'back side of #3'},
        { front: "number 4", back: 'back side of #4'}
    ]}
/>
``` 



