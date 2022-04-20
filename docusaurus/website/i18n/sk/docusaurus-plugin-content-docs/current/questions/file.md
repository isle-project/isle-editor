---
id: file-question 
title: File Question
sidebar_label: File Question
---

Otázka, ktorá žiada používateľa, aby nahral súbor.

## Možnosti

* __question__ | `(string|node)`: otázka zobrazená v hornej časti súboru otázka. Default: `''`.
* __hintPlacement__ | `string`: umiestnenie nápovedy (buď `hore`, `vľavo`, `vpravo` alebo `spodku`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: nápovedy, ktoré poskytujú návod, ako odpovedať na otázku. Default: `[]`.
* __feedback__ | `boolean`: ovláda, či sa majú zobrazovať tlačidlá spätnej väzby.. Default: `true`.
* __chat__ | `boolean`: kontroluje, či má mať prvok integrovaný chat. Default: `false`.
* __accept__ | `string`: zoznam [jedinečných identifikátorov súborov](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) oddelených čiarkou, ktoré komponent akceptuje (napr. "image/*", ".pdf" alebo "audio/*"). Default: `'*/*'`.
* __until__ | `Date`: čas, dokedy by študenti mali mať možnosť predložiť odpovede.. Default: `none`.
* __points__ | `number`: maximálny počet bodov udelených pri klasifikácii. Default: `10`.
* __className__ | `string`: názov triedy. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onChange__ | `function`: spätné volanie, ktoré sa vyvolá po prijatí súboru. Default: `onChange() {}`.


## Príklady

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
