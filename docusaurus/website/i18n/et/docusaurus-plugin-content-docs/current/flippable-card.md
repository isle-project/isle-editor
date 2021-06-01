---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

ISLE komponent, mis võimaldab kahel poolel renderdada.

## Valikud

* __button__ | `string`: nupu silt. Default: `none`.
* __draggable__ | `boolean`: kontrollib, kas kaarti võib lohistada. Default: `false`.
* __flipSpeedBackToFront__ | `number`: kiirus, millega kaart muutub taustast esiplaanile, sekundites.. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: kiirus, millega kaart muutub esiplaanilt taustaks, sekundites.. Default: `1`.
* __oneTime__ | `boolean`: näitab, kas flip-protsessi võib teostada ainult üks kord.. Default: `false`.
* __perspective__ | `number`: CSS-omandi väärtus, et anda 3D-positsiooniga elemendile perspektiivi. Default: `1000`.
* __size__ | `number`: kaardi suurus (määrab selle "laiuse" ja "kõrguse"). Default: `250`.
* __disabled__ | `boolean`: kontrollib, kas pööratav kaart on välja lülitatud. Default: `false`.
* __value__ | `boolean`: kaardi flip state (kontrollitava komponendi puhul). Default: `none`.
* __defaultValue__ | `boolean`: kaardi esialgne volditud olek. Default: `false`.
* __containerStyle__ | `object`: Konteineri CSS stiil. Default: `{}`.
* __frontStyle__ | `object`: Esikaardi CSS-stiil. Default: `{}`.
* __backStyle__ | `object`: Tagakaardi CSS-stiil. Default: `{}`.
* __onChange__ | `function`: callback, mida kutsutakse üles, kui kaart on ümber pööratud; saab ainsa argumendina praeguse ümberpööratud staatuse.. Default: `onChange() {}`.


## Näited

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
