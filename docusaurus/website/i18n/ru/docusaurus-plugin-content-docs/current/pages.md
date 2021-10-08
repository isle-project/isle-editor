---
id: pages 
title: Pages
sidebar_label: Pages
---

Компонент ISLE-пагинации, позволяющий пользователю пройти через последовательность страниц.

## Варианты

* __activePage__ | `number`: активная страница. Default: `1`.
* __disabled__ | `boolean`: управляет тем, активна или нет панель навигации. Default: `false`.
* __title__ | `(string|node)`: отображаемое название контейнера страниц. Default: `''`.
* __pagination__ | `string`: показывать ли пагинацию на `top`, `bottom`, или на `both`. Default: `'top'`.
* __size__ | `string`: размер кнопок нумерации страниц (либо `default`, либо `lg`, либо `sm`). Default: `'default'`.
* __height__ | `(number|string)`: максимальная высота контейнера. Если встроенная страница выше, добавляется вертикальная полоса прокрутки. Default: `none`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onSelect__ | `function`: Функция вызывается при изменении активного изменения. Получает новый индекс активной страницы в качестве единственного параметра. Default: `onSelect() {}`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Pagination', value: 'customPagination' },
        { label: 'With CSS', value: 'withCSS' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Pages title="Pages" >
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

<TabItem value="customPagination" >

```jsx live
<Pages title="Questions" pagination="both" size="sm" >
    <div>
        <NumberQuestion
            question="What is the number PI (at least up to three digits after the decimal point)?"
            solution={Math.PI}
            digits={3}
        />
    </div>
    <div>
        <FreeTextQuestion 
            question="Is this question displayed on the second page?"
            solution="Yes" 
        />
    </div>
</Pages>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<Pages 
    activePage={2}
    style={{ background: 'lightblue', height: 420, outline: '4px solid black' }} 
    title="Styled Pages"
>
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

</Tabs>

