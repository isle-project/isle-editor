--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Informacinis skydelis, skirtas sujungti kelių vaikų įvesties laukų tvarkymą.

## Parinktys

* __autoStart__ | `boolean`: jei nustatyta `true`, funkcija `onGenerate` vykdoma paleidimo metu su numatytosiomis įvesties reikšmėmis.. Default: `true`.
* __autoUpdate__ | `boolean`: kontroliuoja, ar funkcija `onGenerate` turi būti automatiškai iškviečiama, kai pasikeičia vienas iš įvesties laukų.. Default: `false`.
* __description__ | `(string|node)`: prietaisų skydelio aprašymas. Default: `''`.
* __disabled__ | `boolean`: kontroliuoja, ar prietaisų skydelis turi būti išjungtas.. Default: `false`.
* __label__ | `string`: mygtuko etiketė. Default: `none`.
* __maxWidth__ | `number`: didžiausias prietaisų skydelio plotis. Default: `600`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __bodyClassName__ | `string`: kortelės korpuso klasės pavadinimas. Default: `'d-grid gap-3'`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onGenerate__ | `function`: funkcija, iškviečiama, kai paspaudžiamas mygtukas arba pasikeičia viena iš prietaisų skydelio įvesties verčių (jei `autoUpdate` nustatyta į `true`). Funkcija iškviečiama su įvesties laukų reikšmėmis tokia tvarka, kokia jos yra prietaisų skydelyje. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: kortelės pavadinimas. Default: `''`.


## Pavyzdžiai

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
