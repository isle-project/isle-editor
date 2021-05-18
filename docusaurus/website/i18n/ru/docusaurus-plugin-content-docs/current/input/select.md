---
id: select-input
title: Select Input
sidebar_label: Select Input
---

Компонент выбора входа. Может использоваться как часть ISLE приборной панели или автономно. В последнем случае, вы хотите обрабатывать изменения через атрибут `onChange` или привязывать значение к глобальной переменной через атрибут `bind`.

## Варианты

* __bind__ | `string`: имя глобальной переменной для присваиваемого числа. Default: `''`.
* __clearable__ | `boolean`: булевое значение, указывающее, можно ли сделать четкий выбор(ы). Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: значение по умолчанию при вводе в эксплуатацию. Default: `none`.
* __disabled__ | `boolean`: управляет тем, активен вход или нет. Default: `false`.
* __inline__ | `boolean`: указывает, отображается ли вход в строке. Default: `false`.
* __legend__ | `(string|node)`: текст, отображаемый рядом с вводом. Default: `''`.
* __menuPlacement__ | `string`: размещение меню по отношению к элементу управления (либо `авто`, либо `топ`, либо `низу`). Default: `'auto'`.
* __multi__ | `boolean`: управляет возможностью выбора нескольких ответов. Default: `false`.
* __onChange__ | `function`: функция обратного вызова, которая будет вызвана при выборе. Default: `onChange() {}`.
* __options__ | `array`: массив индикации доступных пользователю вариантов. Default: `[]`.
* __placeholder__ | `string`: значение, которое будет отображаться перед тем, как будет сделан первоначальный выбор. Default: `none`.
* __tooltip__ | `string`: текст, отображаемый при наведении курсора на легенду. Default: `none`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Примеры

```jsx live
<SelectInput
    legend="Choose the test direction"
    defaultValue="two-sided"
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```

