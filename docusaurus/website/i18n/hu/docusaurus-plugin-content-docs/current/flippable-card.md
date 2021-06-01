---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

Egy ISLE komponens, amely lehetővé teszi két kétoldalas renderelést.

## Opciók

* __button__ | `string`: gomb címkéje. Default: `none`.
* __draggable__ | `boolean`: szabályozza, hogy a kártya húzható-e. Default: `false`.
* __flipSpeedBackToFront__ | `number`: az a sebesség, amellyel a kártya a háttérből az előtérbe kerül, másodpercben kifejezve.. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: az a sebesség, amellyel a kártya az új területről a háttérre vált, másodpercekben kifejezve.. Default: `1`.
* __oneTime__ | `boolean`: jelzi, hogy a flip folyamat csak egyszer hajtható-e végre.. Default: `false`.
* __perspective__ | `number`: CSS tulajdonság értéke, hogy 3d-s pozíciójú elemnek perspektívát adjon. Default: `1000`.
* __size__ | `number`: a kártya mérete (beállítja a `szélességet` és `magasságot`). Default: `250`.
* __disabled__ | `boolean`: szabályozza, hogy a lapozható kártya ki van-e kapcsolva. Default: `false`.
* __value__ | `boolean`: a kártya flip állapota (ellenőrzött komponens esetén). Default: `none`.
* __defaultValue__ | `boolean`: a kártya kezdeti flip állapota. Default: `false`.
* __containerStyle__ | `object`: A konténer CSS stílusa. Default: `{}`.
* __frontStyle__ | `object`: Az előlap CSS stílusa. Default: `{}`.
* __backStyle__ | `object`: A hátsó kártya CSS stílusa. Default: `{}`.
* __onChange__ | `function`: callback, amely a kártya felfordítása után hívódik; egyetlen argumentumként az aktuális felfordított állapotot kapja meg.. Default: `onChange() {}`.


## Példák

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
