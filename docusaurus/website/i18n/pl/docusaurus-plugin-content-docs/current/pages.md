---
id: pages 
title: Pages
sidebar_label: Pages
---

Komponent paginacyjny ISLE, który pozwala użytkownikowi na przejście przez sekwencję stron.

## Options

* __activePage__ | `number`: strona aktywna. Default: `1`.
* __disabled__ | `boolean`: kontroluje, czy pasek nawigacyjny jest aktywny, czy nie. Default: `false`.
* __title__ | `string`: wyświetlany tytuł strony pojemnika. Default: `''`.
* __pagination__ | `string`: czy pokazywać paginację albo na "górze", "dole", albo na "obu".. Default: `'top'`.
* __size__ | `string`: rozmiar przycisków paginacyjnych (`domyślny`, `lg`, `duży`, `sm`, `mały`, `xs`, lub `xmały`). Default: `'default'`.
* __height__ | `(number|string)`: maksymalna wysokość kontenera. Jeśli osadzona strona jest wyższa, dodawany jest pionowy pasek przewijania. Default: `none`.
* __voiceID__ | `string`: identyfikator kontroli głosowej. Default: `none`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onSelect__ | `function`: Funkcja wywoływana po zmianie aktywnej zmiany. Otrzymuje nowy aktywny indeks strony jako jedyny parametr. Default: `onSelect() {}`.


## Examples

```jsx live
<Pages title="Pages">
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
        <RShell />
    </div>
</Pages>
``` 



