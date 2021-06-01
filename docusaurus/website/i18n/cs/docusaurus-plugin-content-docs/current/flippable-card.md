---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

Komponenta ISLE, která umožňuje vykreslit dvě strany.

## Možnosti

* __button__ | `string`: štítek tlačítka. Default: `none`.
* __draggable__ | `boolean`: určuje, zda lze kartu přetáhnout.. Default: `false`.
* __flipSpeedBackToFront__ | `number`: rychlost přechodu z pozadí do popředí v sekundách.. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: rychlost přechodu z popředí na pozadí v sekundách.. Default: `1`.
* __oneTime__ | `boolean`: označuje, zda může být proces převrácení proveden pouze jednou.. Default: `false`.
* __perspective__ | `number`: Hodnota vlastnosti CSS, která dává prvku umístěnému ve 3D perspektivu. Default: `1000`.
* __size__ | `number`: velikost karty (nastaví její `šířku` a `výšku`).. Default: `250`.
* __disabled__ | `boolean`: určuje, zda je karta s možností převrácení vypnutá.. Default: `false`.
* __value__ | `boolean`: stav překlopení karty (pro řízenou komponentu). Default: `none`.
* __defaultValue__ | `boolean`: počáteční stav překlopení karty. Default: `false`.
* __containerStyle__ | `object`: CSS styl kontejneru. Default: `{}`.
* __frontStyle__ | `object`: CSS styl přední karty. Default: `{}`.
* __backStyle__ | `object`: CSS styl zadní karty. Default: `{}`.
* __onChange__ | `function`: zpětné volání vyvolané po otočení karty; jako jediný argument obdrží aktuální stav otočení.. Default: `onChange() {}`.


## Příklady

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
