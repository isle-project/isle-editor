---
id: multi-card 
title: MultiCard
sidebar_label: MultiCard
---

ISLE компонент, позволяющий создавать и управлять несколькими переворачиваемыми картами (например, в игре на память).

## Options

* __animation__ | `object`: если установлено, компонент использует входную анимацию; объект содержит имя (например, `anim-scale-up`) и длительность (например, `1.7s` = 1.7 секунды). Default: `{}`.
* __memory__ | `boolean`: включить ли режим игры в память, в котором должны совпадать пары поставляемых значений.. Default: `none`.
* __onChange__ | `function`: функция, которая получает матрицу перевернутых карт.. Default: `onChange() {}`.
* __onMemoryComplete__ | `function`: вызов обратного вызова, если игра на память завершена.. Default: `onMemoryComplete() {}`.
* __oneTime__ | `boolean`: указывает, может ли процесс переворачивания быть выполнен только один раз.. Default: `false`.
* __values__ | `array<object>`: значения для соответствующих карт, вводите в массив, в котором есть поля ввода для значения `front` и `back`. Такое значение может быть не только строкой, но и полноценной составляющей ISLE. Default: `[]`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __containerStyle__ | `object`: CSS-стиль контейнеров для карт. Default: `{}`.
* __frontStyle__ | `object`: CSS-стиль лицевой стороны карт. Default: `{}`.
* __backStyle__ | `object`: CSS-стиль задней части карт. Default: `{}`.


## Examples

```jsx live
<MultiCards
    onChange={(data) => {
        console.log(data);
    }}
    containerStyle={{
        width: 250,
        height: 250,
        marginBottom: 10
    }}
    frontStyle={{
        color:'gainsboro',
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',
        backgroundSize: '100% auto'
    }}
    backStyle={{
        color: 'blue',
        fontSize: 20,
        fontWeight: 800,
        fontFamily: 'Oswald',
        textAlign: 'left',
        paddingLeft: '10px',
        background: 'ghostwhite',
        boxShadow: '1px 1px 10px black',
    }}
    values={[
        { front: "number 1", back: 'back side of #1'},
        { front: "number 2", back: 'back side of #2'},
        { front: "number 3", back: 'back side of #3'},
        { front: "number 4", back: 'back side of #4'}
    ]}
/>
``` 



