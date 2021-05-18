---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Компонент текстовой области. Используется как отдельный компонент, изменения должны обрабатываться через атрибут `onChange`.

## Варианты

* __defaultValue__ | `string`: стандартное значение текстовой области. Default: `''`.
* __value__ | `string`: текстовое значение (для контролируемого компонента). Default: `none`.
* __disabled__ | `boolean`: контролирует, должна ли быть отключена текстовая область. Default: `false`.
* __legend__ | `(string|node)`: текст легенды. Default: `''`.
* __onBlur__ | `function`: функция обратного вызова вызывается при потере фокуса текстовой области. Default: `onBlur() {}`.
* __onChange__ | `function`: функция обратного вызова, вызываемая с новым текстом при изменении текста области. Default: `onChange() {}`.
* __placeholder__ | `string`: текст заполнителя. Default: `none`.
* __resizable__ | `string`: контролирует, должна ли текстовая область быть изменена по размеру (может быть `зубчатой`, `горизонтальной`, `вертикальной` или `нет`). Default: `'none'`.
* __rows__ | `number`: количество рядов. Default: `5`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Примеры

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
