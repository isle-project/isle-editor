---
id: r-output
title: R Output
sidebar_label: R Output
---

Компонент для вывода R в ISLE-уроке.

## Options

* __code__ | `string`: R код, используемый для оценки. Default: `''`.
* __libraries__ | `array`: R библиотек, которые должны быть загружены автоматически при выполнении входного `кода`.. Default: `[]`.
* __prependCode__ | `(string|array)`: R код (или `массив` блоков кода), который при оценке должен быть подготовлен к коду, хранящемуся в `коде`.. Default: `''`.
* __onPlots__ | `function`: обратный вызов с любыми сгенерированными графиками. Default: `onPlots() {}`.
* __onResult__ | `function`: вызов обратного вызова с `error` (`нуль`, если операция прошла успешно) и `результат` с удержанием вывода R. Default: `onResult() {}`.


## Examples

```jsx live
<ROutput code="runif(10)" />
```

