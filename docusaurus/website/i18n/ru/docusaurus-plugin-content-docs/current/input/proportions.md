---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

Компонент пропорций на входе. Может использоваться как часть ISLE приборной панели или автономно. В последнем случае, вы хотите обрабатывать изменения через атрибут `onChange` или привязывать значение к глобальной переменной через атрибут `bind`.

## Options

* __colors__ | `array<string>`: массив цветов для компонентов круговой диаграммы. Если не определено, будет использована пользовательская цветовая шкала. Default: `none`.
* __disabled__ | `boolean`: управляет тем, отключено ли поле ввода. Default: `false`.
* __height__ | `number`: высота пропорций на входе (в px). Default: `200`.
* __legends__ | `array`: групповые этикетки. Default: `[]`.
* __onChange__ | `function`: функция обратного вызова, которая будет вызвана при выборе. Default: `onChange(){}`.
* __precision__ | `number`: отображаемая точность пропорций. Default: `1`.
* __step__ | `number`: шаг стрелок, который виден при наведении курсора на поле ввода. Default: `0.1`.


## Examples

```jsx live
<ProportionsInput
    user
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```

