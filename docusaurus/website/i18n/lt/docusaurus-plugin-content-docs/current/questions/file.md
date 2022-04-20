---
id: file-question 
title: File Question
sidebar_label: File Question
---

Klausimas, kuriame naudotojo prašoma įkelti failą.

## Parinktys

* __question__ | `(string|node)`: klausimas, rodomas rinkmenos klausimo komponento viršuje.. Default: `''`.
* __hintPlacement__ | `string`: užuominų vieta (`viršuje`, `kairėje`, `dešinėje`, `dešinėje` arba `apačioje`).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: užuominos, kuriose pateikiamos rekomendacijos, kaip atsakyti į klausimą.. Default: `[]`.
* __feedback__ | `boolean`: kontroliuoja, ar rodyti grįžtamojo ryšio mygtukus.. Default: `true`.
* __chat__ | `boolean`: kontroliuoja, ar elementas turi turėti integruotą pokalbių. Default: `false`.
* __accept__ | `string`: [unikalių failo identifikatorių](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers), kuriuos priima komponentas, sąrašas, atskirtas kableliais (pvz., "image/*", ".pdf" arba "audio/*").. Default: `'*/*'`.
* __until__ | `Date`: laikas, per kurį mokiniams turėtų būti leista pateikti atsakymus.. Default: `none`.
* __points__ | `number`: maksimalus balų skaičius, suteikiamas vertinant. Default: `10`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onChange__ | `function`: grįžtamasis ryšys, kurį reikia iškviesti gavus failą. Default: `onChange() {}`.


## Pavyzdžiai

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
