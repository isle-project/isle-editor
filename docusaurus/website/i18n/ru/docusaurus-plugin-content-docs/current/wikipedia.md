---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

Компонент **Wikipedia** сканирует **Wikipedia** и возвращает статью - если что-то действительное найдено под введенным поисковым термином.

## Варианты

* __defaultEntry__ | `string`: стандартная настройка отображения. Default: `none`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Entry', value: 'withEntry' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Wikipedia />
```

</TabItem>

<TabItem value="withEntry">

```jsx live
<Wikipedia defaultEntry="Angela Merkel" />
```

</TabItem>

</Tabs>
