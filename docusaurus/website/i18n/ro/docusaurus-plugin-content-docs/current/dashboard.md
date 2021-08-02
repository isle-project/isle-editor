--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Un tablou de bord pentru combinarea manipulării mai multor câmpuri de intrare pentru copii.

## Opțiuni

* __autoStart__ | `boolean`: dacă este setată la `true`, funcția `onGenerate` este executată la pornire cu valorile de intrare implicite.. Default: `true`.
* __autoUpdate__ | `boolean`: controlează dacă funcția `onGenerate` trebuie să fie invocată automat atunci când unul dintre câmpurile de intrare copil se modifică.. Default: `false`.
* __description__ | `(string|node)`: descrierea tabloului de bord. Default: `''`.
* __disabled__ | `boolean`: controlează dacă tabloul de bord trebuie dezactivat. Default: `false`.
* __label__ | `string`: eticheta butonului. Default: `none`.
* __maxWidth__ | `number`: lățimea maximă a tabloului de bord. Default: `600`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onGenerate__ | `function`: invocată atunci când se face clic pe buton sau când se modifică una dintre valorile de intrare din tabloul de bord (dacă `autoUpdate` este setat la `true`). Funcția este apelată cu valorile câmpurilor de intrare, în ordinea în care acestea sunt plasate în tabloul de bord. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: titlul cardului. Default: `''`.


## Exemple

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
