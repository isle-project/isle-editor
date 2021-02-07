---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Dynamiczny element tła, który przechodzi cyklicznie przez listę tekstów w określonym odstępie czasu.

## Options

* __list__ | `array<string>`: lista tekstów do wyświetlenia. Default: `[]`.
* __loop__ | `boolean`: wskazuje, czy proces powinien być wyświetlany w nieskończoność. Default: `false`.
* __direction__ | `string`: kierunek przepływu tekstu (`lewy`, `prawy`, `w górę`, `w dół`, `śledzenie`, `ogniskowanie`, lub `wirowanie`). Default: `'right'`.
* __still__ | `number`: czas, przez jaki tekst pozostaje nieruchomy (w sekundach). Default: `3`.
* __interval__ | `number`: odstęp czasu pomiędzy połączeniami (w sekundach). Default: `15`.
* __inTime__ | `number`: czas efektu wejścia (w sekundach). Default: `0.6`.
* __outTime__ | `number`: czas efektu wyjścia (w sekundach). Default: `1`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS tekstu. Default: `{}`.


## Examples

```jsx live
<ScrollingText
    list={[ 'Heading' ]}
    style={{ fontSize: 44, color: 'red' }}
    interval={5}
    inTime={1.2}
    outTime={1.2}
    still={2}
/>
```



