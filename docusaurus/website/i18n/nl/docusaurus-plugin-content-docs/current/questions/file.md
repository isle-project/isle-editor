---
id: file-question 
title: File Question
sidebar_label: File Question
---

Een vraag waarbij de gebruiker wordt gevraagd een bestand te uploaden.

## Opties

* __question__ | `(string|node)`: de vraag die bovenaan het onderdeel voor bestandsvragen wordt weergegeven. Default: `''`.
* __hintPlacement__ | `string`: plaatsing van de hints (ofwel `top`, `left`, `right`, of `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: aanwijzingen voor het beantwoorden van de vraag. Default: `[]`.
* __feedback__ | `boolean`: bepaalt of feedbackknoppen moeten worden weergegeven. Default: `true`.
* __chat__ | `boolean`: undefined. Default: `false`.
* __accept__ | `string`: door komma's gescheiden lijst van [unieke bestandsidentificatoren](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) die door de component worden geaccepteerd (bv. 'image/*', '.pdf' of 'audio/*'). Default: `'*/*'`.
* __until__ | `Date`: de tijd tot de studenten de antwoorden mogen inleveren. Default: `none`.
* __points__ | `number`: maximum aantal punten toegekend bij de beoordeling. Default: `10`.
* __className__ | `string`: klassenaam. Default: `''`.
* __style__ | `object`: CSS inline stijlen. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.


## Voorbeelden

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
