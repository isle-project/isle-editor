---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Интерактивная оболочка Javascript, которая может быть использована для выполнения команд JavaScript. Оболочка содержит консоль, которая отображает сообщения об ошибках, предупреждения и т.д.

## Варианты

* __code__ | `string`: JavaScript-код для оценки. Default: `''`.
* __solution__ | `string`: для вопросов программирования, код `string`, представляющий собой официальное решение проблемы. Default: `''`.
* __hints__ | `array<(string|node)>`: для программирования вопросов, массив подсказок, дающих указания, как подойти к проблеме. Default: `[]`.
* __precompute__ | `boolean`: контролирует, должен ли выполняться код по умолчанию после монтирования компонента. Default: `false`.
* __chat__ | `boolean`: контролирует, должна ли быть включена функция группового чата. Default: `false`.
* __check__ | `string`: приложенный код JavaScript для проверки `кода`, который должен быть оценен. Default: `none`.
* __disabled__ | `boolean`: управляет тем, отключать ли все пользовательские входы и делать ли блок кода статическим. Default: `false`.
* __lines__ | `number`: количество строк для отображения. Default: `5`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onChange__ | `function`: обратный вызов при изменении ввода текстового поля. Default: `onChange() {}`.
* __onEvaluate__ | `function`: вызов обратного вызова всякий раз, когда нажимается кнопка `Evaluate`. Default: `onEvaluate() {}`.
* __vars__ | `object`: объект-область с переменными, которые должны быть доступны для оценки `кода`. Default: `none`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Ten Lines', value: 'mLines' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<JSShell code = {`var a = 2; 
var b = 2;
console.log(a + b);`} />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />
```

</TabItem>

<TabItem value="mLines">

```jsx live
<JSShell lines={10} />
```

</TabItem>

</Tabs>




