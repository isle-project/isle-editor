---
id: text-area
title: Text Area
sidebar_label: Text Area
---

O componentă de zonă de text. Utilizată ca o componentă de sine stătătoare, modificările trebuie gestionate prin atributul `onChange`.

## Opțiuni

* __defaultValue__ | `string`: valoarea implicită a zonei de text. Default: `''`.
* __value__ | `string`: valoarea textului (pentru componenta controlată). Default: `none`.
* __disabled__ | `boolean`: controlează dacă zona de text trebuie dezactivată sau nu. Default: `false`.
* __legend__ | `(string|node)`: textul legendei. Default: `''`.
* __onBlur__ | `function`: funcția de callback invocată atunci când zona de text își pierde focalizarea. Default: `onBlur() {}`.
* __onChange__ | `function`: funcția callback invocată cu noul text atunci când se modifică textul zonei. Default: `onChange() {}`.
* __placeholder__ | `string`: text de tip placeholder. Default: `none`.
* __resizable__ | `string`: controlează dacă zona de text trebuie să fie redimensionabilă (poate fi `both`, `horizontal`, `vertical` sau `none`). Default: `'none'`.
* __rows__ | `number`: numărul de rânduri. Default: `5`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple

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
