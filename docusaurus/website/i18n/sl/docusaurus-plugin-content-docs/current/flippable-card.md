---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

Komponenta ISLE, ki omogoča upodabljanje dveh strani.

## Možnosti

* __button__ | `string`: oznaka gumba. Default: `none`.
* __draggable__ | `boolean`: nadzoruje, ali se lahko kartica povleče.. Default: `false`.
* __flipSpeedBackToFront__ | `number`: hitrost prehoda iz ozadja v ospredje v sekundah.. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: hitrost, s katero kartica preide iz ospredja v ozadje, v sekundah.. Default: `1`.
* __oneTime__ | `boolean`: označuje, ali se lahko postopek flip izvede samo enkrat.. Default: `false`.
* __perspective__ | `number`: Vrednost lastnosti CSS za zagotavljanje perspektive elementa, postavljenega v 3D-pozicijo. Default: `1000`.
* __size__ | `number`: velikost kartice (nastavi njeno `širino` in `višino`). Default: `250`.
* __disabled__ | `boolean`: nadzoruje, ali je kartica z možnostjo obračanja onemogočena.. Default: `false`.
* __value__ | `boolean`: stanje kartice (za nadzorovano komponento). Default: `none`.
* __defaultValue__ | `boolean`: začetno stanje obračanja kartice. Default: `false`.
* __containerStyle__ | `object`: slog CSS vsebnika. Default: `{}`.
* __frontStyle__ | `object`: slog CSS sprednje kartice. Default: `{}`.
* __backStyle__ | `object`: CSS slog zadnje kartice. Default: `{}`.
* __onChange__ | `function`: povratni klic, ki se sproži, ko je karta obrnjena; kot edini argument prejme trenutno stanje obrnjene karte.. Default: `onChange() {}`.


## Primeri

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
