---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

ISLE-komponentti, joka sallii kahden puolen renderöinnin.

## Vaihtoehdot

* __button__ | `string`: painikkeen etiketti. Default: `none`.
* __draggable__ | `boolean`: ohjaa, voiko korttia vetää ympäriinsä. Default: `false`.
* __flipSpeedBackToFront__ | `number`: nopeus, jolla kortti vaihtuu taustasta etualalle, sekunteina.. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: nopeus, jolla kortti vaihtuu etualalta taustalle, sekunteina.. Default: `1`.
* __oneTime__ | `boolean`: ilmoittaa, voidaanko kääntämisprosessi suorittaa vain kerran.. Default: `false`.
* __perspective__ | `number`: CSS-ominaisuuden arvo antaa 3d-sijoitetulle elementille perspektiivin. Default: `1000`.
* __size__ | `number`: kortin koko (asettaa kortin "leveyden" ja "korkeuden").. Default: `250`.
* __disabled__ | `boolean`: valvoo, onko käännettävä kortti pois käytöstä. Default: `false`.
* __value__ | `boolean`: Kortin flip-tila (valvottavan komponentin osalta). Default: `none`.
* __defaultValue__ | `boolean`: kortin alkuperäinen kääntötila. Default: `false`.
* __containerStyle__ | `object`: Säiliön CSS-tyyli. Default: `{}`.
* __frontStyle__ | `object`: Etukortin CSS-tyyli. Default: `{}`.
* __backStyle__ | `object`: Takakortin CSS-tyyli. Default: `{}`.
* __onChange__ | `function`: callback, jota kutsutaan, kun kortti on käännetty; saa ainoana argumenttinaan nykyisen käännetyn tilan.. Default: `onChange() {}`.


## Esimerkkejä

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
