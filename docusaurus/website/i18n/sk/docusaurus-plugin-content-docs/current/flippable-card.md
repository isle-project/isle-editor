---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

Komponent ISLE, ktorý umožňuje vykresliť dve strany.

## Možnosti

* __button__ | `string`: Štítok tlačidla. Default: `none`.
* __draggable__ | `boolean`: kontroluje, či sa karta môže ťahať.. Default: `false`.
* __flipSpeedBackToFront__ | `number`: rýchlosť, akou sa karta zmení z pozadia na popredie, v sekundách. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: rýchlosť, akou sa karta zmení z popredia na pozadie, v sekundách. Default: `1`.
* __oneTime__ | `boolean`: označuje, či sa proces flip môže vykonať len raz. Default: `false`.
* __perspective__ | `number`: Hodnota vlastnosti CSS na poskytnutie perspektívy prvku umiestneného v 3d. Default: `1000`.
* __size__ | `number`: veľkosť karty (nastaví jej `šírku` a `výšku`). Default: `250`.
* __disabled__ | `boolean`: kontroluje, či je otočná karta vypnutá.. Default: `false`.
* __value__ | `boolean`: stav preklopenia karty (pre riadený komponent). Default: `none`.
* __defaultValue__ | `boolean`: počiatočný stav otočenia karty. Default: `false`.
* __containerStyle__ | `object`: CSS štýl kontajnera. Default: `{}`.
* __frontStyle__ | `object`: CSS štýl prednej karty. Default: `{}`.
* __backStyle__ | `object`: CSS štýl zadnej karty. Default: `{}`.
* __onChange__ | `function`: spätné volanie vyvolané po otočení karty; ako jediný argument dostane aktuálny stav otočenia. Default: `onChange() {}`.


## Príklady

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
