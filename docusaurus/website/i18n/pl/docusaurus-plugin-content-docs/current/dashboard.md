--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Tablica rozdzielcza do łączenia obsługi wielu pól wejściowych dla dzieci.

## Opcje

* __autoStart__ | `boolean`: jeśli jest ustawiona na `true`, funkcja `onGenerate` jest wykonywana przy uruchamianiu z domyślnymi wartościami wejściowymi. Default: `true`.
* __autoUpdate__ | `boolean`: kontroluje, czy funkcja `onGenerate` powinna być wywoływana automatycznie, gdy zmienia się jedno z pól wejściowych dziecka. Default: `false`.
* __description__ | `(string|node)`: opis tablicy rozdzielczej. Default: `''`.
* __disabled__ | `boolean`: kontroluje, czy tablica rozdzielcza jest wyłączona. Default: `false`.
* __label__ | `string`: etykieta z guzikiem. Default: `none`.
* __maxWidth__ | `number`: maksymalna szerokość tablicy rozdzielczej. Default: `600`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __bodyClassName__ | `string`: undefined. Default: `'d-grid gap-3'`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onGenerate__ | `function`: funkcja wywoływana po kliknięciu przycisku lub zmianie jednej z wartości wejściowych tablicy rozdzielczej (jeśli `autoUpdate` jest ustawione na `prawdziwe`). Funkcja jest wywoływana z wartościami pól wejściowych, w kolejności w jakiej są one umieszczone w desce rozdzielczej. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: tytuł karty. Default: `''`.


## Przykłady

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
