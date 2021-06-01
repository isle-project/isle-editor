---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Komponenta textové oblasti. Používá se jako samostatná komponenta, změny by měly být zpracovávány pomocí atributu `onChange`.

## Možnosti

* __defaultValue__ | `string`: výchozí hodnota textové oblasti. Default: `''`.
* __value__ | `string`: textová hodnota (pro řízenou složku). Default: `none`.
* __disabled__ | `boolean`: určuje, zda má být textová oblast vypnutá.. Default: `false`.
* __legend__ | `(string|node)`: text legendy. Default: `''`.
* __onBlur__ | `function`: funkce zpětného volání vyvolaná při ztrátě fokusu textové oblasti. Default: `onBlur() {}`.
* __onChange__ | `function`: funkce zpětného volání vyvolaná s novým textem při změně textu oblasti. Default: `onChange() {}`.
* __placeholder__ | `string`: zástupný text. Default: `none`.
* __resizable__ | `string`: určuje, zda má být velikost textové oblasti měnitelná (může být `obě`, `horizontální`, `vertikální` nebo `žádná`).. Default: `'none'`.
* __rows__ | `number`: počet řádků. Default: `5`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.


## Příklady

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
