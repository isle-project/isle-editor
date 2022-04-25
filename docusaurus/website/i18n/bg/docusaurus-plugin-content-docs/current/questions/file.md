---
id: file-question 
title: File Question
sidebar_label: File Question
---

Въпрос, който изисква от потребителя да качи файл.

## Опции

* __question__ | `(string|node)`: въпросът, който се показва в горната част на компонента с въпроси към файла. Default: `''`.
* __hintPlacement__ | `string`: разположение на подсказките (или `горе`, `ляво`, `дясно`, или `долу`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: указания за това как да отговорите на въпроса. Default: `[]`.
* __feedback__ | `boolean`: контролира дали да се показват бутони за обратна връзка. Default: `true`.
* __chat__ | `boolean`: контролира дали елементът трябва да има интегриран чат. Default: `false`.
* __accept__ | `string`: списък с [уникални файлови идентификатори](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers), разделени със запетая, които се приемат от компонента (напр. "image/*", ".pdf" или "audio/*"). Default: `'*/*'`.
* __until__ | `Date`: времето, до което учениците трябва да могат да подават отговори. Default: `none`.
* __points__ | `number`: максимален брой точки, присъждани при класирането. Default: `10`.
* __className__ | `string`: име на класа. Default: `''`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onChange__ | `function`: обратна връзка, която се извиква при получаване на файл. Default: `onChange() {}`.


## Примери

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
