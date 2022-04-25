---
id: file-question 
title: File Question
sidebar_label: File Question
---

Et spørgsmål, der beder brugeren om at uploade en fil.

## Indstillinger

* __question__ | `(string|node)`: det spørgsmål, der vises øverst i filspørgsmålskomponenten. Default: `''`.
* __hintPlacement__ | `string`: placeringen af vejledningerne (enten "top", "venstre", "højre" eller "nederst"). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: tips, der giver vejledning om, hvordan spørgsmålet skal besvares. Default: `[]`.
* __feedback__ | `boolean`: styrer, om der skal vises feedback-knapper. Default: `true`.
* __chat__ | `boolean`: kontrollerer, om elementet skal have en integreret chat. Default: `false`.
* __accept__ | `string`: kommasepareret liste over [unikke filidentifikatorer] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers), der accepteres af komponenten (f.eks. "image/*", ".pdf" eller "audio/*"). Default: `'*/*'`.
* __until__ | `Date`: den tid, der skal gå, før de studerende kan afgive svar. Default: `none`.
* __points__ | `number`: det maksimale antal point, der kan tildeles ved bedømmelsen. Default: `10`.
* __className__ | `string`: klassens navn. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onChange__ | `function`: callback, der skal påkaldes ved modtagelse af en fil. Default: `onChange() {}`.


## Eksempler

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
