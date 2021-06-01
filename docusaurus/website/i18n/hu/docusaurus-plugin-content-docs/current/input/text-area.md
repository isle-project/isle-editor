---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Szövegterület összetevő. Önálló komponensként használva a változásokat az "onChange" attribútummal kell kezelni.

## Opciók

* __defaultValue__ | `string`: a szövegterület alapértelmezett értéke. Default: `''`.
* __value__ | `string`: szöveges érték (ellenőrzött komponens esetén). Default: `none`.
* __disabled__ | `boolean`: szabályozza, hogy a szövegterületet ki kell-e kapcsolni. Default: `false`.
* __legend__ | `(string|node)`: legendaszöveg. Default: `''`.
* __onBlur__ | `function`: callback függvény, amely akkor hívódik, amikor a szövegterület elveszíti a fókuszt. Default: `onBlur() {}`.
* __onChange__ | `function`: callback függvény, amelyet az új szöveggel hívnak meg, amikor a terület szövege megváltozik. Default: `onChange() {}`.
* __placeholder__ | `string`: helyőrző szöveg. Default: `none`.
* __resizable__ | `string`: szabályozza, hogy a szövegterület átméretezhető legyen-e (lehet "mindkettő", "vízszintes", "függőleges" vagy "semmi").. Default: `'none'`.
* __rows__ | `number`: sorok száma. Default: `5`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

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
