---
id: shaped-form 
title: Shaped Form
sidebar_label: Shaped Form
---

Компонент, който позволява показването на форми, задействани от изображения с алфа канал.

## Опции

* __type__ | `string`: тип форма (или `октагон`, `триъгълник`, `трапец`, `паралелограм`, `ромб`, `пентагон`, `шестоъгълник`, `седмоъгълник`, `неъгълник`, `декагон`, `конус`, `рабета`, `лява стрелка`, `дясна стрелка`, `лява точка`, `дясна точка`, `ляв шеврон`, `десен шеврон`, `звезда`, `кръст`, `съобщение`, `затвори` или `рамка`). Default: `'star'`.
* __src__ | `string`: URL адреса на фоновото изображение. Default: `none`.
* __style__ | `object`: стила на обекта, може да съдържа всякакви CSS, включително анимации.. Default: `{}`.
* __onClick__ | `function`: обработчик на събития, задействан при кликване върху изображението. Default: `none`.


## Примери

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Size Variation', value: 'sizeVariation' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
<ShapedForm type="star" />
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<div style= {{ background: 'black', color: 'white', height: 280, width: 280}}>
<ShapedForm type="star"  style={{ background: 'red', boxShadow: 'inset 100px 88px 5px yellow'}}/>
</div>
```
</TabItem>

<TabItem value="SizeVariation">

```jsx live
<div style= {{ background: 'darkgray', color: 'black', height: 280, width: '100%'}}>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
<ShapedForm type="cross"  style={{ background: 'gold', width: 85, height: 100, margin: 10, marginTop: 22 }}/>
sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
</div>
```
</TabItem>

</Tabs>
