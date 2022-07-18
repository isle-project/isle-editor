---
id: file-question 
title: File Question
sidebar_label: File Question
---

Pytanie, w którym użytkownik proszony jest o przesłanie pliku.

## Opcje

* __question__ | `(string|node)`: pytanie wyświetlane w górnej części komponentu pytań do pliku. Default: `''`.
* __hintPlacement__ | `string`: umiejscowienie podpowiedzi (albo `top`, `left`, `right`, lub `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: podpowiedzi zawierające wskazówki, jak odpowiedzieć na pytanie. Default: `[]`.
* __feedback__ | `boolean`: kontroluje czy wyświetlać przyciski zwrotne. Default: `true`.
* __chat__ | `boolean`: określa, czy element powinien mieć zintegrowaną czat. Default: `false`.
* __accept__ | `string`: oddzielona przecinkami lista [unikalnych identyfikatorów plików](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers), które są akceptowane przez komponent (np. "image/*", ".pdf" lub "audio/*"). Default: `'*/*'`.
* __until__ | `Date`: czas, w którym uczniowie powinni nadsyłać odpowiedzi. Default: `none`.
* __points__ | `number`: maksymalna liczba punktów przyznawanych w ramach oceniania. Default: `10`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style inline CSS. Default: `{}`.
* __onChange__ | `function`: callback do wywołania po otrzymaniu pliku. Default: `onChange() {}`.


## Przykłady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Only PDFs', value: 'onlyPDF' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<FileQuestion question="You may upload a file." feedback={false}  />
```
</TabItem>

<TabItem value="onlyPDF">

```jsx live
<FileQuestion question="Please upload a PDF file." feedback={false} accept=".pdf" />
```

</TabItem>

</Tabs>
