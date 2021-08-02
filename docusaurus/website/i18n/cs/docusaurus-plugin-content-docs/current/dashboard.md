--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Ovládací panel pro kombinaci zpracování více podřízených vstupních polí.

## Možnosti

* __autoStart__ | `boolean`: pokud je nastaveno na `true`, funkce `onGenerate` se při spuštění spustí s výchozími vstupními hodnotami.. Default: `true`.
* __autoUpdate__ | `boolean`: řídí, zda se má funkce `onGenerate` vyvolat automaticky, když se změní jedno z podřízených vstupních polí.. Default: `false`.
* __description__ | `(string|node)`: popis přístrojové desky. Default: `''`.
* __disabled__ | `boolean`: řídí, zda má být přístrojová deska vypnuta. Default: `false`.
* __label__ | `string`: štítek tlačítka. Default: `none`.
* __maxWidth__ | `number`: maximální šířka přístrojové desky. Default: `600`.
* __className__ | `string`: název třídy. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onGenerate__ | `function`: funkce vyvolaná při kliknutí na tlačítko nebo při změně jedné ze vstupních hodnot panelu (pokud je `autoUpdate` nastaveno na `true`). Funkce je volána s hodnotami vstupních polí v pořadí, v jakém jsou umístěny na panelu.. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: název karty. Default: `''`.


## Příklady

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
