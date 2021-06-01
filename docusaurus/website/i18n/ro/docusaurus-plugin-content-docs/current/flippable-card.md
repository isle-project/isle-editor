---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

O componentă ISLE care permite redarea a două fețe.

## Opțiuni

* __button__ | `string`: eticheta butonului. Default: `none`.
* __draggable__ | `boolean`: controlează dacă cardul poate fi târât în jurul. Default: `false`.
* __flipSpeedBackToFront__ | `number`: viteza cu care cardul trece de la fundal la prim-plan, în secunde.. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: viteza cu care cardul trece de la prim-plan la fundal, în secunde.. Default: `1`.
* __oneTime__ | `boolean`: indică dacă procesul de răsturnare poate fi executat doar o singură dată. Default: `false`.
* __perspective__ | `number`: Valoarea proprietății CSS pentru a da elementului poziționat în 3D o perspectivă. Default: `1000`.
* __size__ | `number`: dimensiunea cardului (stabilește `width` și `height`). Default: `250`.
* __disabled__ | `boolean`: controlează dacă este dezactivat cardul care se poate întoarce.. Default: `false`.
* __value__ | `boolean`: starea de întoarcere a cardului (pentru componenta controlată). Default: `none`.
* __defaultValue__ | `boolean`: starea inițială de răsturnare a cardului. Default: `false`.
* __containerStyle__ | `object`: Stilul CSS al containerului. Default: `{}`.
* __frontStyle__ | `object`: Stilul CSS al cărții de față. Default: `{}`.
* __backStyle__ | `object`: Stilul CSS al cardului din spate. Default: `{}`.
* __onChange__ | `function`: callback invocat odată ce cartea este întoarsă; primește ca unic argument statutul actual al cărții întoarse.. Default: `onChange() {}`.


## Exemple

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
