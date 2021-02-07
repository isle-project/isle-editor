---
id: timer 
title: Timer
sidebar_label: Timer
---

Wyświetla timer, który po upłynięciu czasu wyzwoli predefiniowane wywołanie zwrotne. Przykładowym przypadkiem użycia jest czas trwania quizów.

## Options

* __id__ | `string`: unikalny `numer identyfikacyjny strun` dla timera. Jeśli ID jest ustawione, komponent timera jest stale odświeżany nad stroną.. Default: `none`.
* __active__ | `boolean (required)`: flaga, która może być przełączana w celu uruchomienia lub wstrzymania timera. Default: `none`.
* __belowZero__ | `boolean`: kontroluje, czy po wyczerpaniu czasu trwania liczenia licznik kontynuuje liczenie. Default: `false`.
* __duration__ | `number (required)`: czas trwania w sekundach dla timera. Default: `none`.
* __invisible__ | `boolean`: kontroluje, czy zegar powinien być ukryty. Default: `false`.
* __legend__ | `string`: tekst wyświetlany przed zegarem sterującym. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onTimeUp__ | `function`: wywołanie zwrotne, gdy skończy się timer. Default: `onTimeUp() {}`.


## Examples

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

