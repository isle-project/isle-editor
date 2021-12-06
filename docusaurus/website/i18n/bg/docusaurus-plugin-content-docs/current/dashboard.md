--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Табло за управление за комбиниране на обработката на няколко полета за въвеждане на деца.

## Опции

* __autoStart__ | `boolean`: ако е зададена стойност `true`, функцията `onGenerate` се изпълнява при стартиране със стойностите по подразбиране. Default: `true`.
* __autoUpdate__ | `boolean`: контролира дали функцията `onGenerate` да се извиква автоматично, когато едно от полетата за въвеждане на детето се промени.. Default: `false`.
* __description__ | `(string|node)`: описание на таблото за управление. Default: `''`.
* __disabled__ | `boolean`: контролира дали таблото за управление да бъде деактивирано. Default: `false`.
* __label__ | `string`: етикет на бутона. Default: `none`.
* __maxWidth__ | `number`: максимална ширина на таблото за управление. Default: `600`.
* __className__ | `string`: име на класа. Default: `''`.
* __bodyClassName__ | `string`: име на класа за тялото на картата. Default: `'d-grid gap-3'`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onGenerate__ | `function`: функция, която се извиква, когато се щракне върху бутона или се промени една от входните стойности на таблото за управление (ако `autoUpdate` е зададено на `true`). Функцията се извиква със стойностите на входните полета в реда, в който те са поставени в таблото за управление. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: заглавие на картата. Default: `''`.


## Примери

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
