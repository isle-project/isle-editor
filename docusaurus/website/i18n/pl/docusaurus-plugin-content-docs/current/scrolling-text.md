---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Dynamiczny element tła, który przechodzi cyklicznie przez listę tekstów w określonym odstępie czasu.

## Opcje

* __text__ | `(string|array<string>)`: tekst lub lista tekstów do wyświetlenia. Default: `[]`.
* __loop__ | `boolean`: wskazuje, czy proces powinien być wyświetlany w nieskończoność. Default: `false`.
* __direction__ | `string`: kierunek przepływu tekstu (`lewy`, `prawy`, `w górę`, `w dół`, `śledzenie`, `ogniskowanie`, lub `wirowanie`). Default: `'right'`.
* __hold__ | `number`: czas, przez jaki tekst pozostaje nieruchomy (w sekundach). Default: `5`.
* __wait__ | `number`: czas do nadejścia nowego tekstu (w sekundach). Default: `3`.
* __inTime__ | `number`: czas efektu wejścia (w sekundach). Default: `1`.
* __outTime__ | `number`: czas efektu wyjścia (w sekundach). Default: `1`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS tekstu. Default: `{}`.


## Przykłady


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'List of Texts', value: 'list' },
        { label: 'Background Image', value: 'backgroundImage' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScrollingText
    text="This is a text re-appearing every five seconds"
    style={{ fontSize: 44, color: 'blue' }}
    wait={5}
    hold={2}
    loop
/>
```

</TabItem>

<TabItem value="list">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

<TabItem value="backgroundImage">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

</Tabs>
