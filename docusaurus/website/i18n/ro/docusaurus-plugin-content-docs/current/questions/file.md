---
id: file-question 
title: File Question
sidebar_label: File Question
---

O întrebare care solicită utilizatorului să încarce un fișier.

## Opțiuni

* __question__ | `(string|node)`: întrebarea afișată în partea de sus a componentei de întrebare din dosar. Default: `''`.
* __hintPlacement__ | `string`: plasarea indicilor (fie `top`, `left`, `right`, sau `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: indicii care oferă îndrumări privind modul de răspuns la întrebare. Default: `[]`.
* __feedback__ | `boolean`: controlează dacă se afișează butoanele de feedback. Default: `true`.
* __chat__ | `boolean`: controlează dacă elementul trebuie să aibă un chat integrat. Default: `false`.
* __accept__ | `string`: listă de [identificatori unici de fișiere](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers), separați prin virgulă, care sunt acceptați de componentă (de exemplu, "imagine/*", ".pdf" sau "audio/*"). Default: `'*/*'`.
* __until__ | `Date`: timpul până la care elevii ar trebui să fie lăsați să trimită răspunsurile. Default: `none`.
* __points__ | `number`: numărul maxim de puncte acordate în cadrul clasificării. Default: `10`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onChange__ | `function`: callback de invocat la primirea unui fișier. Default: `onChange() {}`.


## Exemple

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
