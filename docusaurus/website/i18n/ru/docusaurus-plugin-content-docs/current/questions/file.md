---
id: file-question 
title: File Question
sidebar_label: File Question
---

Вопрос, который просит пользователя загрузить файл.

## Варианты

* __question__ | `(string|node)`: вопрос, отображаемый в верхней части компонента вопроса файла. Default: `''`.
* __hintPlacement__ | `string`: расположение подсказок (либо `верх`, `лево`, `право` или `низ`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: подсказки, содержащие указания, как ответить на вопрос. Default: `[]`.
* __feedback__ | `boolean`: контролирует, отображать ли кнопки обратной связи. Default: `true`.
* __chat__ | `boolean`: undefined. Default: `false`.
* __accept__ | `string`: разделенный запятыми список [уникальных идентификаторов файлов](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers), которые принимаются компонентом (например, 'image/*', '.pdf' или 'audio/*'). Default: `'*/*'`.
* __until__ | `Date`: время, в течение которого студенты должны иметь возможность представить ответы. Default: `none`.
* __points__ | `number`: максимальное количество баллов, присуждаемых при выставлении оценок. Default: `10`.
* __className__ | `string`: имя класса. Default: `''`.
* __style__ | `object`: Встраиваемые стили CSS. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.


## Примеры

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
