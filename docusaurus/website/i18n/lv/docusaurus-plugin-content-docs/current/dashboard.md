--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Vadības panelis, lai apvienotu vairāku bērnu ievades lauku apstrādi.

## Iespējas

* __autoStart__ | `boolean`: ja iestatīts uz `true`, funkcija `onGenerate` tiek izpildīta palaišanas laikā ar noklusējuma ievades vērtībām.. Default: `true`.
* __autoUpdate__ | `boolean`: nosaka, vai `onGenerate` funkcija jāizsauc automātiski, kad mainās kāds no pakārtotajiem ievades laukiem.. Default: `false`.
* __description__ | `(string|node)`: Vadības paneļa apraksts. Default: `''`.
* __disabled__ | `boolean`: kontrolē, vai instrumentu panelis ir atspējots.. Default: `false`.
* __label__ | `string`: pogas etiķete. Default: `none`.
* __maxWidth__ | `number`: maksimālais instrumentu paneļa platums. Default: `600`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __bodyClassName__ | `string`: undefined. Default: `'d-grid gap-3'`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onGenerate__ | `function`: funkcija, kas tiek izsaukta, kad tiek noklikšķināts uz pogas vai mainās kāda no paneļa ievades vērtībām (ja `autoUpdate` ir iestatīts uz `true`). Funkcija tiek izsaukta ar ievades lauku vērtībām tādā secībā, kādā tās ir izvietotas vadības panelī.. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: kartes nosaukums. Default: `''`.


## Piemēri

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Multiple Inputs', value: 'multipleInputs' }
    ]}
>

<TabItem value="minimal"> 

```jsx live
<Dashboard title="Alerter" onGenerate={( x ) => { alert( x ); }} autoStart={false} >
    <SliderInput
        legend="Input value"
    />
</Dashboard>
```

</TabItem>

<TabItem value="multipleInputs" > 

```jsx live
<Dashboard 
    title="Multiply three numbers."
    style={{ width: 600, boxShadow: '0 0 24px black' }}
    onGenerate={( x, y, z ) => { alert( x*y*z ); }} 
    autoStart={false} 
>
    <SliderInput
        legend="First Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
    <SliderInput
        legend="Second Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
    <SliderInput
        legend="Third Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
</Dashboard>
```

</TabItem>

</Tabs>
