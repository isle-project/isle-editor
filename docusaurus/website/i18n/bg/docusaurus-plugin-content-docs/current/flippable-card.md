---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

Компонент ISLE, който позволява визуализиране на две страни.

## Опции

* __button__ | `string`: етикет на бутона. Default: `none`.
* __draggable__ | `boolean`: контролира дали картата може да се плъзга. Default: `false`.
* __flipSpeedBackToFront__ | `number`: скоростта, с която картата преминава от фонов към преден план, в секунди. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: скоростта, с която картата преминава от преден към заден план, в секунди. Default: `1`.
* __oneTime__ | `boolean`: указва дали процесът на обръщане може да се изпълни само веднъж. Default: `false`.
* __perspective__ | `number`: Стойност на CSS свойството за придаване на перспектива на 3D позициониран елемент. Default: `1000`.
* __size__ | `number`: размер на картата (задава нейната `широчина` и `височина`). Default: `250`.
* __disabled__ | `boolean`: контролира дали картата с възможност за обръщане е деактивирана. Default: `false`.
* __value__ | `boolean`: състояние на обръщане на картата (за контролиран компонент). Default: `none`.
* __defaultValue__ | `boolean`: първоначално състояние на обръщане на картата. Default: `false`.
* __containerStyle__ | `object`: CSS стил на контейнера. Default: `{}`.
* __frontStyle__ | `object`: CSS стил на предната карта. Default: `{}`.
* __backStyle__ | `object`: CSS стил на задната карта. Default: `{}`.
* __onChange__ | `function`: обратна връзка, задействана след обръщането на картата; получава текущото състояние на обръщане като единствен аргумент. Default: `onChange() {}`.


## Примери

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
<FlippableCard containerStyle={{ float: 'none' }} size={200}>
  <img src="https://bit.ly/2YU5EbU" />
  <img src="https://bit.ly/3aGv9mp" />
</FlippableCard>
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<FlippableCard 
  containerStyle={{ float: 'none' }} 
  frontStyle={{ fontSize: 50, textAlign: 'center' }} 
  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} 
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
  containerStyle={{ float: 'none' }} 
  frontStyle={{ fontSize: 50, textAlign: 'center' }} 
  backStyle={{ fontSize: 50, textAlign: 'center', background: 'purple', color: 'white' }} 
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
