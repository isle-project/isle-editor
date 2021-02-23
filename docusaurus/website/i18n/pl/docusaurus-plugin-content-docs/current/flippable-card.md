---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

Komponent ISLE, który umożliwia renderowanie dwóch stron.

## Opcje

* __button__ | `string`: etykieta z guzikiem. Default: `none`.
* __draggable__ | `boolean`: kontroluje, czy karta może być przeciągana dookoła. Default: `false`.
* __flipSpeedBackToFront__ | `number`: szybkość, z jaką karta obraca się z tła na pierwszy plan, w sekundach. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: {number} prędkość, z jaką karta obraca się z pierwszego planu na tło, w sekundach. Default: `1`.
* __oneTime__ | `boolean`: wskazuje, czy proces przerzucania może zostać wykonany tylko raz. Default: `false`.
* __perspective__ | `number`: Wartość właściwości CSS, aby nadać perspektywę elementowi 3d pozycji. Default: `1000`.
* __size__ | `number`: undefined. Default: `250`.
* __disabled__ | `boolean`: kontroluje, czy odwracana karta jest wyłączona. Default: `false`.
* __value__ | `boolean`: stan przerzucania karty (dla elementu kontrolowanego). Default: `none`.
* __defaultValue__ | `boolean`: początkowy stan przerzucania karty. Default: `false`.
* __containerStyle__ | `object`: Styl CSS kontenera. Default: `{}`.
* __frontStyle__ | `object`: Styl CSS dla frontu karty. Default: `{}`.
* __backStyle__ | `object`: Styl CSS tylnej karty. Default: `{}`.
* __onChange__ | `function`: wywołanie zwrotne po odwróceniu karty; otrzymuje aktualny odwrócony status jako jedyny argument. Default: `onChange() {}`.


## Przykłady

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
