--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Приборная панель для объединения работы с несколькими полями ввода дочерних элементов.

## Варианты

* __autoStart__ | `boolean`: если установлено значение `true`, то функция `onGenerate` выполняется при запуске с входными значениями по умолчанию. Default: `true`.
* __autoUpdate__ | `boolean`: управляет тем, должна ли функция `onGenerate` вызываться автоматически при изменении одного из полей дочернего входа. Default: `false`.
* __description__ | `(string|node)`: описание приборной панели. Default: `''`.
* __disabled__ | `boolean`: контролирует, должна ли приборная панель быть отключена. Default: `false`.
* __label__ | `string`: наклейка на кнопку. Default: `none`.
* __maxWidth__ | `number`: максимальная ширина приборной панели. Default: `600`.
* __className__ | `string`: название класса. Default: `''`.
* __bodyClassName__ | `string`: имя класса для корпуса карты. Default: `'d-grid gap-3'`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onGenerate__ | `function`: вызывается при нажатии кнопки или при изменении одного из входных значений приборной панели (если для `autoUpdate` выбрано `true`). Функция вызывается со значениями полей ввода в том порядке, в котором они размещены в приборной панели. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: название карточки. Default: `''`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Multiple Inputs', value: 'multipleInputs' }
    ]}
>

<TabItem value="minimal"> 

```jsx live
<Dashboard title="Alerter" onGenerate={( x ) => { alert( x ); }} autoStart={false} >
    <SliderInput
        legend="Input value"
    />
</Dashboard>
```

</TabItem>

<TabItem value="multipleInputs" > 

```jsx live
<Dashboard 
    title="Multiply three numbers."
    style={{ width: 600, boxShadow: '0 0 24px black' }}
    onGenerate={( x, y, z ) => { alert( x*y*z ); }} 
    autoStart={false} 
>
    <SliderInput
        legend="First Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
    <SliderInput
        legend="Second Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
    <SliderInput
        legend="Third Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
</Dashboard>
```

</TabItem>

</Tabs>
