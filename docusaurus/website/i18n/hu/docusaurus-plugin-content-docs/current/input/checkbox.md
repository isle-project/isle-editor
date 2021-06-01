---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Egy jelölőnégyzet beviteli komponens. Használható egy ISLE műszerfal részeként vagy önállóan. Az utóbbi esetben a változásokat az `onChange` attribútummal kell kezelni, vagy az értéket a `bind` attribútummal egy globális változóhoz kell kötni.

## Opciók

* __bind__ | `string`: a globális változó neve, amelyhez a jelölőnégyzet értékét hozzárendeljük. Default: `''`.
* __defaultValue__ | `boolean`: boolean érték, amely a jelölőnégyzet alapértelmezett értékét jelzi.. Default: `false`.
* __value__ | `boolean`: jelölőnégyzet értéke (ellenőrzött komponens esetén). Default: `none`.
* __disabled__ | `boolean`: jelzi, hogy a bemenet aktív-e vagy sem. Default: `false`.
* __inline__ | `boolean`: jelzi, hogy a jelölőnégyzet soron belül jelenik-e meg. Default: `false`.
* __onChange__ | `function`: callback függvény, amelyet a jelölőnégyzetre való kattintáskor kell meghívni. A függvényt az aktuális jelölőnégyzet értékével hívjuk meg.. Default: `onChange() {}`.
* __legend__ | `(string|node)`: a jelölőnégyzet mellett megjelenő szöveg. Default: `''`.
* __tooltip__ | `string`: a jelölőnégyzet fölött történő lebegéskor megjelenő szöveg. Default: `''`.
* __tooltipPlacement__ | `string`: a gomb tooltip pozíciója. Default: `'right'`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>


<TabItem value="minimal">

```jsx live
<CheckboxInput legend="Take the logarithm" />
```
</TabItem>

<TabItem value="inline">

```jsx live
<p>Please click
<CheckboxInput
    inline defaultValue={false}
/>
to confirm that you will follow our netiquette.</p>
```
</TabItem>


<TabItem value="withStyle">

```jsx live
<CheckboxInput
    style={{ fontSize: 30, color: 'blue'}}
    legend="Click to confirm"
    defaultValue={false}
/>
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<CheckboxInput
    legend="Click to confirm..."
    onChange={( value ) => {
        alert( 'New value: '+value );
    }}
/>
```

</TabItem>

</Tabs>
