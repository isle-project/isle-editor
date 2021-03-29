---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Интерактивная R-оболочка, которая может использоваться для выполнения R-команд в облаке с помощью [OpenCPU](https://www.opencpu.org/).

## Варианты

* __code__ | `string`: R код для оценки. Default: `''`.
* __solution__ | `string`: для вопросов программирования, R код `стринг`, представляющий собой официальное решение проблемы.. Default: `''`.
* __hints__ | `array<(string|node)>`: для программирования вопросов, массив подсказок, дающих указания, как подойти к проблеме. Default: `[]`.
* __addPreceding__ | `boolean`: если установлено в true, оболочка будет оценивать весь код из текущего компонента и все предыдущие компоненты, встречающиеся в лекции. Default: `false`.
* __libraries__ | `array`: R библиотек, которые должны быть загружены автоматически при выполнении входного `кода`.. Default: `[]`.
* __precompute__ | `boolean`: контролирует, должен ли выполняться код по умолчанию после монтирования компонента. Default: `false`.
* __prependCode__ | `(string|array)`: R код `строки` (или `массива` из блоков кода R), который при оценке будет препарировать к коду, хранящемуся в `коде`.. Default: `''`.
* __chat__ | `boolean`: контролирует, должна ли быть включена функция группового чата. Default: `false`.
* __disabled__ | `boolean`: управляет тем, отключать ли все пользовательские входы и делать ли блок кода статическим. Default: `false`.
* __lines__ | `number`: количество строк для отображения. Default: `5`.
* __resettable__ | `boolean`: управляет отображением кнопки сброса для восстановления ввода кода по умолчанию. Default: `false`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onChange__ | `function`: обратный вызов при изменении ввода текстового поля. Default: `onChange() {}`.
* __onEvaluate__ | `function`: вызов обратного вызова всякий раз, когда нажимается кнопка `Evaluate`.. Default: `onEvaluate(){}`.
* __onResult__ | `function`: обратный вызов при получении результата выполнения кода из облака. Результат `строка` передается в качестве единственного аргумента в функцию обратного вызова. Default: `onResult() {}`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Precompute & Disabled', value: 'precompute' },
        { label: 'Hints & Solution', value: 'hintsAndSolution' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Add Preceding Code', value: 'addPreceding' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
/>
```

</TabItem>

<TabItem value="precompute" >

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
    precompute
    disabled
    lines={2}
/>
```

</TabItem>

<TabItem value="hintsAndSolution" >

```jsx live
**(a)** Use the lm() function to regress `Price` on: `EngineSize`, `Origin`, `MPG.highway`, `MPG.city` and `Horsepower`.

<RShell 
    id="prob1a"
    code="" 
    solution={`cars.lm <- lm(Price ~ EngineSize + Origin + MPG.highway + MPG.city + Horsepower,
data = Cars93)
summary(cars.lm)`} 
    lines={5} 
    hints={["Use the model formula syntax to specify your regression equation. Type ?formula if you don't remember how formulas work.","You can use the summary() function to retrieve a detailed regression output for a lm object"]}
/>
```

</TabItem>

<TabItem value="usingLibraries" >

<RShell libraries={['dplyr']} code={'starwars %>% filter(species == "Droid")'} lines={2} />

</TabItem>

<TabItem value="addPreceding" >

<RShell code="library(dplyr)" lines={2} disabled />

<RShell code={'starwars %>% filter(species == "Droid")'} addPreceding lines={2} />

</TabItem>

</Tabs>
