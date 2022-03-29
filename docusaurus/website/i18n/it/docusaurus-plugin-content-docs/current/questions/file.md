---
id: file-question 
title: File Question
sidebar_label: File Question
---

Una domanda che chiede all'utente di caricare un file.

## Opzioni

* __question__ | `(string|node)`: la domanda visualizzata nella parte superiore del componente di domanda del file. Default: `''`.
* __hintPlacement__ | `string`: posizionamento dei suggerimenti (sia `top`, `left`, `right`, o `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: suggerimenti che forniscono una guida su come rispondere alla domanda. Default: `[]`.
* __feedback__ | `boolean`: controlla se visualizzare i pulsanti di feedback. Default: `true`.
* __chat__ | `boolean`: undefined. Default: `false`.
* __accept__ | `string`: elenco separato da virgole di [identificatori unici di file](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) che sono accettati dal componente (per esempio, 'image/*', '.pdf' o 'audio/*'). Default: `'*/*'`.
* __until__ | `Date`: tempo fino a quando gli studenti dovrebbero essere autorizzati a presentare le risposte. Default: `none`.
* __points__ | `number`: numero massimo di punti assegnati nella classificazione. Default: `10`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili CSS in linea. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.


## Esempi

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
