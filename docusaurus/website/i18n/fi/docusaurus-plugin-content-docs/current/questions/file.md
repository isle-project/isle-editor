---
id: file-question 
title: File Question
sidebar_label: File Question
---

Kysymys, jossa käyttäjää pyydetään lataamaan tiedosto.

## Vaihtoehdot

* __question__ | `(string|node)`: tiedostokysymyskomponentin yläosassa näkyvä kysymys. Default: `''`.
* __hintPlacement__ | `string`: vihjeiden sijainti (joko "ylhäällä", "vasemmalla", "oikealla" tai "alhaalla").. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: vihjeitä, joissa annetaan ohjeita kysymykseen vastaamiseen.. Default: `[]`.
* __feedback__ | `boolean`: ohjaa, näytetäänkö palautepainikkeet. Default: `true`.
* __chat__ | `boolean`: undefined. Default: `false`.
* __accept__ | `string`: pilkulla erotettu luettelo [yksilöllisistä tiedostotunnisteista](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers), jotka komponentti hyväksyy (esim. "image/*", ".pdf" tai "audio/*").. Default: `'*/*'`.
* __until__ | `Date`: aika, jonka kuluessa opiskelijoiden olisi annettava antaa vastauksensa. Default: `none`.
* __points__ | `number`: luokittelussa annettavien pisteiden enimmäismäärä. Default: `10`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.


## Esimerkkejä

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
