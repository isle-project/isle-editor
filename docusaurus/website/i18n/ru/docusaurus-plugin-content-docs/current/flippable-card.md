---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

ISLE компонент, позволяющий осуществлять двухсторонний рендеринг.

## Варианты

* __button__ | `string`: наклейка на кнопку. Default: `none`.
* __draggable__ | `boolean`: контролирует, можно ли перетаскивать карту. Default: `false`.
* __flipSpeedBackToFront__ | `number`: скорость, с которой карта поворачивается с фона на передний план, в секундах.. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: Скорость, с которой карта поворачивается с переднего плана на задний план, в секундах.. Default: `1`.
* __oneTime__ | `boolean`: указывает, может ли процесс переворачивания быть выполнен только один раз.. Default: `false`.
* __perspective__ | `number`: Значение свойства CSS для придания 3-позиционному элементу перспективы. Default: `1000`.
* __size__ | `number`: undefined. Default: `250`.
* __disabled__ | `boolean`: контролирует, отключена ли перекидная карта. Default: `false`.
* __value__ | `boolean`: состояние переворота карты (для контролируемого компонента). Default: `none`.
* __defaultValue__ | `boolean`: начальное состояние карты. Default: `false`.
* __containerStyle__ | `object`: CSS-стиль контейнера. Default: `{}`.
* __frontStyle__ | `object`: CSS-стиль лицевой карты. Default: `{}`.
* __backStyle__ | `object`: CSS-стиль задней карты. Default: `{}`.
* __onChange__ | `function`: вызов обратного вызова после перевернутой карты; получает текущий статус перевернутой карты в качестве единственного аргумента. Default: `onChange() {}`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Slow Motion', value: 'slowMo' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<FlippableCard containerStyle={{float: 'none'}} size={200}>
    <div>
        <img src="https://bit.ly/2YU5EbU" />
    </div>
    <div>
       <img src="https://bit.ly/3aGv9mp" />
    </div>
</FlippableCard>
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<FlippableCard 
  containerStyle={{float: 'none'}} 
  frontStyle={{fontSize: 50, textAlign: 'center'}} 
  backStyle={{fontSize: 50, textAlign: 'center', background: 'purple', color: 'white'}} 
  >
    <div>
      FRONT
    </div>
    <div>
      BACK
    </div>
</FlippableCard>
```

</TabItem>

<TabItem value="slowMo">

```jsx live
<FlippableCard 
  flipSpeedBackToFront={7} 
  flipSpeedFrontToBack={7}   
  containerStyle={{float: 'none'}} 
  frontStyle={{fontSize: 50, textAlign: 'center'}} 
  backStyle={{fontSize: 50, textAlign: 'center', background: 'purple', color: 'white'}} 
  >
    <div>
      FRONT
    </div>
    <div>
      BACK
    </div>
</FlippableCard>
```

</TabItem>

</Tabs>
