---
id: file-question 
title: File Question
sidebar_label: File Question
---

Olyan kérdés, amely arra kéri a felhasználót, hogy töltsön fel egy fájlt.

## Opciók

* __question__ | `(string|node)`: a fájl kérdéskomponensének tetején megjelenő kérdés. Default: `''`.
* __hintPlacement__ | `string`: a tippek elhelyezése (vagy "top", "balra", "jobbra", vagy "alul"). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: a kérdés megválaszolására vonatkozó útmutatásokat ad. Default: `[]`.
* __feedback__ | `boolean`: szabályozza, hogy megjelenjenek-e a visszajelző gombok. Default: `true`.
* __chat__ | `boolean`: undefined. Default: `false`.
* __accept__ | `string`: a komponens által elfogadott [egyedi fájlazonosítók](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) vesszővel elválasztott listája (pl. 'image/*', '.pdf' vagy 'audio/*'). Default: `'*/*'`.
* __until__ | `Date`: a tanulóknak a válaszok benyújtásáig rendelkezésre álló idő. Default: `none`.
* __points__ | `number`: az osztályozás során adható maximális pontszám. Default: `10`.
* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.


## Példák

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
