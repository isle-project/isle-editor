---
id: file-question 
title: File Question
sidebar_label: File Question
---

Eine Frage, die den Benutzer auffordert, eine Datei hochzuladen.

## Optionen

* __question__ | `(string|node)`: die oben in der Dateifragekomponente angezeigte Frage. Default: `''`.
* __hintPlacement__ | `string`: Platzierung der Hinweise (entweder `oben`, `links`, `rechts` oder `unten`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: Hinweise, die bei der Beantwortung der Frage helfen. Default: `[]`.
* __feedback__ | `boolean`: steuert, ob Feedback-Schaltflächen angezeigt werden sollen. Default: `true`.
* __chat__ | `boolean`: steuert, ob das Element einen integrierten Chat haben soll. Default: `false`.
* __accept__ | `string`: kommagetrennte Liste von [eindeutigen Dateikennungen](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers), die von der Komponente akzeptiert werden (z. B. "image/*", ".pdf" oder "audio/*"). Default: `'*/*'`.
* __until__ | `Date`: Zeit, bis die Studenten ihre Antworten einreichen können. Default: `none`.
* __points__ | `number`: Höchstpunktzahl für die Benotung. Default: `10`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onChange__ | `function`: Callback, der beim Empfang einer Datei aufgerufen wird. Default: `onChange() {}`.


## Beispiele

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
