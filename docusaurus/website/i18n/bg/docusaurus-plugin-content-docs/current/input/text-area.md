---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Компонент на текстова област. Използва се като самостоятелен компонент, като промените трябва да се обработват чрез атрибута `onChange`.

## Опции

* __defaultValue__ | `string`: стойност по подразбиране на текстовата област. Default: `''`.
* __value__ | `string`: текстова стойност (за контролиран компонент). Default: `none`.
* __disabled__ | `boolean`: контролира дали текстовата област да бъде деактивирана. Default: `false`.
* __legend__ | `(string|node)`: текст на легендата. Default: `''`.
* __onBlur__ | `function`: функция за обратна връзка, която се задейства, когато текстовата област изгуби фокус. Default: `onBlur() {}`.
* __onChange__ | `function`: функция за обратна връзка, която се извиква с новия текст при промяна на текста на областта. Default: `onChange() {}`.
* __placeholder__ | `string`: заместващ текст. Default: `none`.
* __resizable__ | `string`: контролира дали текстовата област може да променя размера си (може да бъде `и двете`, `хоризонтално`, `вертикално` или `няма`). Default: `'none'`.
* __rows__ | `number`: брой редове. Default: `5`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.


## Примери

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Style', value: 'customStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
/>
```

</TabItem>

<TabItem value="customStyle">

<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
    style={{
        fontSize: 33,
        fontFamily: 'Georgia', 
        boxShadow: '0 0 4px black',
        background: 'rgb(238,174,202)', 
        background: 'radial-gradient(circle, rgba(255, 255, 0, 0.3) 44%, white 100%)' 
    }}
/>

</TabItem>

</Tabs>
