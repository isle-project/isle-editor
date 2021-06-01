---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

ISLE komponentas, leidžiantis atvaizduoti dvi puses.

## Parinktys

* __button__ | `string`: mygtuko etiketė. Default: `none`.
* __draggable__ | `boolean`: kontroliuoja, ar kortelę galima vilkti.. Default: `false`.
* __flipSpeedBackToFront__ | `number`: greitis, kuriuo kortelė iš fono pereina į pirmą planą, sekundėmis.. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: greitis, per kurį kortelė iš pirmo plano pereina į foną, sekundėmis.. Default: `1`.
* __oneTime__ | `boolean`: nurodo, ar apvertimo procesas gali būti vykdomas tik vieną kartą.. Default: `false`.
* __perspective__ | `number`: CSS savybės reikšmė, suteikianti 3D pozicionuojamam elementui perspektyvą. Default: `1000`.
* __size__ | `number`: kortelės dydis (nustato jos `platumą` ir `aukštį`).. Default: `250`.
* __disabled__ | `boolean`: kontroliuoja, ar atverčiama kortelė yra išjungta.. Default: `false`.
* __value__ | `boolean`: kortelės apvertimo būsena (valdomam komponentui). Default: `none`.
* __defaultValue__ | `boolean`: pradinė kortelės apvertimo būsena. Default: `false`.
* __containerStyle__ | `object`: Konteinerio CSS stilius. Default: `{}`.
* __frontStyle__ | `object`: Priekinės kortelės CSS stilius. Default: `{}`.
* __backStyle__ | `object`: Galinės kortelės CSS stilius. Default: `{}`.
* __onChange__ | `function`: atgalinis skambutis, inicijuojamas, kai kortelė apverčiama; vienintelis argumentas - dabartinė apverstos kortelės būsena.. Default: `onChange() {}`.


## Pavyzdžiai

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
