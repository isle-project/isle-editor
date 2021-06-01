---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

ISLE komponents, kas ļauj atveidot divas divas puses.

## Iespējas

* __button__ | `string`: pogas etiķete. Default: `none`.
* __draggable__ | `boolean`: kontrolē, vai karti var vilkt. Default: `false`.
* __flipSpeedBackToFront__ | `number`: ātrums sekundēs, ar kādu karte no fona pāriet uz jauno fonu.. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: ātrums sekundēs, ar kādu karte pāriet no priekšplāna uz fonu.. Default: `1`.
* __oneTime__ | `boolean`: norāda, vai apgriešanas procesu var izpildīt tikai vienu reizi.. Default: `false`.
* __perspective__ | `number`: CSS īpašību vērtība, lai piešķirtu 3D pozicionētam elementam perspektīvu. Default: `1000`.
* __size__ | `number`: kartes izmērs (nosaka tās `platumu` un `augstumu`).. Default: `250`.
* __disabled__ | `boolean`: kontrolē, vai pārliekamā karte ir atspējota.. Default: `false`.
* __value__ | `boolean`: kartes flip stāvoklis (kontrolējamam komponentam). Default: `none`.
* __defaultValue__ | `boolean`: kartes sākotnējais apgriešanas stāvoklis. Default: `false`.
* __containerStyle__ | `object`: konteinera CSS stils. Default: `{}`.
* __frontStyle__ | `object`: Priekšējās kartes CSS stils. Default: `{}`.
* __backStyle__ | `object`: CSS stils aizmugures kartē. Default: `{}`.
* __onChange__ | `function`: atgriezeniskais zvans, kas tiek izsaukts, tiklīdz karte ir apgriezta; kā vienīgo argumentu saņem pašreizējo apgrieztās kartes statusu.. Default: `onChange() {}`.


## Piemēri

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
