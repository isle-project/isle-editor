---
id: file-question 
title: File Question
sidebar_label: File Question
---

Jautājums, kurā lietotājam tiek prasīts augšupielādēt failu.

## Iespējas

* __question__ | `(string|node)`: jautājums, kas parādās faila jautājuma komponenta augšpusē.. Default: `''`.
* __hintPlacement__ | `string`: mājienu izvietojums (`augšā`, `kreisajā`, `pa labi` vai `apakšā`).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: norādījumi, kā atbildēt uz jautājumu.. Default: `[]`.
* __feedback__ | `boolean`: kontrolē, vai tiek rādītas atgriezeniskās saites pogas.. Default: `true`.
* __chat__ | `boolean`: undefined. Default: `false`.
* __accept__ | `string`: ar komatu atdalīts [unikālo faila identifikatoru](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) saraksts, kurus komponents pieņem (piemēram, "image/*", ".pdf" vai "audio/*").. Default: `'*/*'`.
* __until__ | `Date`: laiks, līdz skolēniem jāļauj iesniegt atbildes. Default: `none`.
* __points__ | `number`: maksimālais punktu skaits, ko piešķir klasifikācijā. Default: `10`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.


## Piemēri

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
