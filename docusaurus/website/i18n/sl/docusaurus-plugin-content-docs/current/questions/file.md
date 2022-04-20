---
id: file-question 
title: File Question
sidebar_label: File Question
---

Vprašanje, ki od uporabnika zahteva, da naloži datoteko.

## Možnosti

* __question__ | `(string|node)`: vprašanje, ki je prikazano na vrhu komponente vprašanja o datoteki.. Default: `''`.
* __hintPlacement__ | `string`: umestitev namigov (`zgoraj`, `levo`, `desno` ali `spodaj`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: napotki, kako odgovoriti na vprašanje.. Default: `[]`.
* __feedback__ | `boolean`: nadzoruje, ali se prikažejo gumbi za povratne informacije.. Default: `true`.
* __chat__ | `boolean`: nadzoruje, ali naj ima element integriran klepet.. Default: `false`.
* __accept__ | `string`: z vejico ločen seznam [edinstvenih identifikatorjev datotek](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers), ki jih sprejme komponenta (npr. "image/*", ".pdf" ali "audio/*"). Default: `'*/*'`.
* __until__ | `Date`: čas, do katerega lahko učenci oddajo odgovore.. Default: `none`.
* __points__ | `number`: največje število točk, ki se dodelijo pri razvrščanju. Default: `10`.
* __className__ | `string`: ime razreda. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onChange__ | `function`: povratni klic, ki se sproži ob prejemu datoteke. Default: `onChange() {}`.


## Primeri

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
