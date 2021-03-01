---
id: text-input
title: Text Input
sidebar_label: Text Input
---

Компонент ввода текста. Может использоваться как часть ISLE приборной панели или автономно. В последнем случае, вы хотите обрабатывать изменения через атрибут `onChange` или привязывать значение к глобальной переменной через атрибут `bind`.

## Варианты

* __bind__ | `string`: имя глобальной переменной для присваиваемого числа. Default: `none`.
* __defaultValue__ | `string`: undefined. Default: `''`.
* __value__ | `string`: текстовое значение (для контролируемого компонента). Default: `none`.
* __legend__ | `(string|node)`: undefined. Default: `''`.
* __inline__ | `boolean`: Показывает, отображается ли вход в строке. Default: `false`.
* __onBlur__ | `function`: функция обратного вызова вызывается при потере фокуса текстовой области. Default: `onBlur() {}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onKeyDown__ | `function`: функция обратного вызова для вызова при нажатии любой клавиши. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: функция обратного вызова, вызываемая при вводе любой клавиши. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: функция обратного вызова, вызываемая при отпускании ключа. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: undefined. Default: `none`.
* __width__ | `number`: undefined. Default: `80`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Примеры

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

