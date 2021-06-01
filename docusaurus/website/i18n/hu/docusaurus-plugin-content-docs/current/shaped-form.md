---
id: shaped-form 
title: Shaped Form
sidebar_label: Shaped Form
---

Egy komponens, amely lehetővé teszi az alfa csatornás képek által kiváltott alakzatok megjelenítését.

## Opciók

* __type__ | `string`: forma típusa (vagy "oktogon", "háromszög", "trapéz", "párhuzamos", "rombusz", "pentagon", "hatszög", "hepszög", "nemszög", "tízszög", "élszög", `rabbet`, `bal-nyíl`, `jobb-nyíl`, `bal-pont`, `jobb-pont`, `bal-sarkantyú`, `jobb-sarkantyú`, `csillag`, `kereszt`, `üzenet`, `záró` vagy `keret`).. Default: `'star'`.
* __src__ | `string`: a háttérkép URL címe. Default: `none`.
* __style__ | `object`: az objektum stílusa, bármilyen CSS-t tartalmazhat, beleértve az animációkat is.. Default: `{}`.
* __onClick__ | `function`: a képre kattintáskor meghívott eseménykezelő. Default: `none`.


## Példák

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
