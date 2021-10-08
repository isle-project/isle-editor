---
id: pages 
title: Pages
sidebar_label: Pages
---

Компонент за страниране на ISLE, който позволява на потребителя да преминава през поредица от страници.

## Опции

* __activePage__ | `number`: активна страница. Default: `1`.
* __disabled__ | `boolean`: контролира дали навигационната лента е активна или не. Default: `false`.
* __title__ | `(string|node)`: изведено заглавие на контейнера за страници. Default: `''`.
* __pagination__ | `string`: дали да се показва странирането в `top`, `bottom` или `both`. Default: `'top'`.
* __size__ | `string`: размер на бутоните за страниране (или `default`, `lg`, или `sm`). Default: `'default'`.
* __height__ | `(number|string)`: максималната височина на контейнера. Ако вградената страница е по-висока, се добавя вертикална лента за превъртане. Default: `none`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onSelect__ | `function`: Функция, която се извиква при промяна на активната промяна. Получава новия индекс на активната страница като единствен параметър. Default: `onSelect() {}`.


## Примери

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

