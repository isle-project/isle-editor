---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Флажок "Входной компонент". Может использоваться как часть ISLE приборной панели или автономно. В последнем случае вы хотите обрабатывать изменения через атрибут `onChange` или привязывать значение к глобальной переменной через атрибут `bind`.

## Варианты

* __bind__ | `string`: имя глобальной переменной для присвоения значения флажка. Default: `''`.
* __defaultValue__ | `boolean`: булевое значение, указывающее значение по умолчанию.. Default: `false`.
* __value__ | `boolean`: значение флажка (для контролируемого компонента). Default: `none`.
* __disabled__ | `boolean`: указывает, активен вход или нет. Default: `false`.
* __inline__ | `boolean`: указывает, отображается ли флажок в строке. Default: `false`.
* __onChange__ | `function`: функция обратного вызова, которая будет вызвана при установленном флажке. Функция вызывается с текущим значением флажка. Default: `onChange() {}`.
* __legend__ | `(string|node)`: текст, отображаемый рядом с флажком. Default: `''`.
* __tooltip__ | `string`: текст, отображаемый при наведении указателя мыши на флажок. Default: `''`.
* __tooltipPlacement__ | `string`: положение всплывающей подсказки. Default: `'right'`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Примеры

```jsx live
<CheckboxInput
    legend="Take the logarithm"
    defaultValue={false}
/>
```

