---
id: pages 
title: Pages
sidebar_label: Pages
---

Komponent paginacyjny ISLE, który pozwala użytkownikowi na przejście przez sekwencję stron.

## Opcje

* __activePage__ | `number`: strona aktywna. Default: `1`.
* __disabled__ | `boolean`: kontroluje, czy pasek nawigacyjny jest aktywny, czy nie. Default: `false`.
* __title__ | `(string|node)`: wyświetlany tytuł strony pojemnika. Default: `''`.
* __pagination__ | `string`: czy pokazywać paginację albo na `top`, `bottom`, albo na `both`. Default: `'top'`.
* __size__ | `string`: rozmiar przycisków paginacji (albo `default`, `lg`, albo `sm`). Default: `'default'`.
* __height__ | `(number|string)`: maksymalna wysokość kontenera. Jeśli osadzona strona jest wyższa, dodawany jest pionowy pasek przewijania. Default: `none`.
* __voiceID__ | `string`: identyfikator kontroli głosowej. Default: `none`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onSelect__ | `function`: Funkcja wywoływana po zmianie aktywnej zmiany. Otrzymuje nowy aktywny indeks strony jako jedyny parametr. Default: `onSelect() {}`.


## Przykłady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Pagination', value: 'customPagination' },
        { label: 'With CSS', value: 'withCSS' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Pages title="Pages" >
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

<TabItem value="customPagination" >

```jsx live
<Pages title="Questions" pagination="both" size="sm" >
    <div>
        <NumberQuestion
            question="What is the number PI (at least up to three digits after the decimal point)?"
            solution={Math.PI}
            digits={3}
        />
    </div>
    <div>
        <FreeTextQuestion 
            question="Is this question displayed on the second page?"
            solution="Yes" 
        />
    </div>
</Pages>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<Pages 
    activePage={2}
    style={{ background: 'lightblue', height: 420, outline: '4px solid black' }} 
    title="Styled Pages"
>
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

</Tabs>

