---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Komponent obszaru tekstowego. Używany jako samodzielny komponent, zmiany powinny być obsługiwane za pomocą atrybutu `onChange`.

## Opcje

* __defaultValue__ | `string`: wartość domyślna obszaru tekstowego. Default: `''`.
* __value__ | `string`: wartość tekstowa (dla składnika kontrolowanego). Default: `none`.
* __disabled__ | `boolean`: kontroluje, czy pole tekstowe jest wyłączone. Default: `false`.
* __legend__ | `(string|node)`: tekst legendy. Default: `''`.
* __onBlur__ | `function`: funkcja callback wywoływana w przypadku utraty ostrości obszaru tekstowego. Default: `onBlur() {}`.
* __onChange__ | `function`: funkcja callback wywoływana z nowym tekstem, gdy tekst obszaru ulegnie zmianie. Default: `onChange() {}`.
* __placeholder__ | `string`: tekst dla posiadacza miejsca zamieszkania. Default: `none`.
* __resizable__ | `string`: kontroluje, czy obszar tekstowy jest zmienny (może być zarówno "obu", "poziomy", "pionowy" lub "żaden"). Default: `'none'`.
* __rows__ | `number`: liczba rzędów. Default: `5`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Przykłady

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Style', value: 'customStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
/>
```

</TabItem>

<TabItem value="customStyle">

<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
    style={{
        fontSize: 33,
        fontFamily: 'Georgia', 
        boxShadow: '0 0 4px black',
        background: 'rgb(238,174,202)', 
        background: 'radial-gradient(circle, rgba(255, 255, 0, 0.3) 44%, white 100%)' 
    }}
/>

</TabItem>

</Tabs>
