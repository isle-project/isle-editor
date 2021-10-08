---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Interaktywna powłoka Javascript, której można używać do wykonywania poleceń JavaScript. Powłoka zawiera konsolę, która wyświetla komunikaty o błędach, ostrzeżenia itp.

## Opcje

* __code__ | `string`: Kod JavaScript do oceny. Default: `''`.
* __solution__ | `string`: dla pytań dotyczących programowania, kod `sznurek` reprezentujący oficjalne rozwiązanie problemu. Default: `''`.
* __hints__ | `array<(string|node)>`: w przypadku pytań związanych z programowaniem, szereg wskazówek zawierających wskazówki, jak podejść do problemu. Default: `[]`.
* __precompute__ | `boolean`: kontroluje, czy po zamontowaniu komponentu powinien zostać wykonany kod domyślny. Default: `false`.
* __chat__ | `boolean`: kontroluje, czy funkcja czatu grupowego powinna być włączona. Default: `false`.
* __check__ | `string`: dodał kod JavaScript do sprawdzenia `kodu`, który ma być oceniany. Default: `none`.
* __disabled__ | `boolean`: kontroluje, czy wyłączyć wszystkie wejścia użytkownika i sprawić, by blok kodu był statyczny. Default: `false`.
* __lines__ | `number`: liczba wierszy do wyświetlenia. Default: `5`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onChange__ | `function`: wywołanie zwrotne przy każdej zmianie danych wejściowych pola tekstowego. Default: `onChange() {}`.
* __onEvaluate__ | `function`: wywołanie zwrotne po kliknięciu przycisku "Wycena". Default: `onEvaluate() {}`.
* __vars__ | `object`: obiekt zakresu ze zmiennymi, które powinny być udostępnione do oceny `kodu`. Default: `none`.


## Przykłady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Ten Lines', value: 'mLines' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<JSShell code = {`var a = 2; 
var b = 2;
console.log(a + b);`} />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />
```

</TabItem>

<TabItem value="mLines">

```jsx live
<JSShell lines={10} />
```

</TabItem>

</Tabs>




