---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

En ISLE-komponent, der giver mulighed for at gengive to to sider.

## Indstillinger

* __button__ | `string`: knapmærke. Default: `none`.
* __draggable__ | `boolean`: kontrollerer, om kortet kan trækkes rundt. Default: `false`.
* __flipSpeedBackToFront__ | `number`: den hastighed, hvormed kortet skifter fra baggrund til forgrund, i sekunder. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: den hastighed, hvormed kortet skifter fra forgrund til baggrund, i sekunder. Default: `1`.
* __oneTime__ | `boolean`: angiver, om flip-processen kun kan udføres én gang. Default: `false`.
* __perspective__ | `number`: CSS-egenskabsværdi for at give et 3d-placeret element et perspektiv. Default: `1000`.
* __size__ | `number`: kortets størrelse (indstiller dets `width` og `height`). Default: `250`.
* __disabled__ | `boolean`: kontrollerer, om det vendbare kort er deaktiveret. Default: `false`.
* __value__ | `boolean`: kortets fliptilstand (for kontrolleret komponent). Default: `none`.
* __defaultValue__ | `boolean`: kortets oprindelige fliptilstand. Default: `false`.
* __containerStyle__ | `object`: CSS-stil for containeren. Default: `{}`.
* __frontStyle__ | `object`: CSS-stil for forsiden af kortet. Default: `{}`.
* __backStyle__ | `object`: CSS-stil for bagsidekortet. Default: `{}`.
* __onChange__ | `function`: callback, der påkaldes, når kortet er vendt; modtager den aktuelle vendte status som det eneste argument. Default: `onChange() {}`.


## Eksempler

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
