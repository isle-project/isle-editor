---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Компонент за въвеждане на квадратче за отметка. Може да се използва като част от табло за управление на ISLE или самостоятелно. В последния случай искате да обработвате промените чрез атрибута `onChange` или да обвържете стойността с глобална променлива чрез атрибута `bind`.

## Опции

* __bind__ | `string`: име на глобалната променлива, към която ще бъде присвоена стойността на полето за отметка. Default: `''`.
* __defaultValue__ | `boolean`: булева стойност, указваща стойността по подразбиране на квадратчето за отметка. Default: `false`.
* __value__ | `boolean`: стойност на полето за отметка (за контролиран компонент). Default: `none`.
* __disabled__ | `boolean`: показва дали входът е активен или не. Default: `false`.
* __inline__ | `boolean`: указва дали квадратчето за отметка се показва inline. Default: `false`.
* __onChange__ | `function`: функция за обратно извикване, която да се задейства при щракване върху квадратчето за отметка. Функцията се извиква с текущата стойност на полето за отметка. Default: `onChange() {}`.
* __legend__ | `(string|node)`: текст, показван до квадратчето за отметка. Default: `''`.
* __tooltip__ | `string`: текст, който се показва при преминаване над квадратчето за отметка. Default: `''`.
* __tooltipPlacement__ | `string`: позиция на подсказката на бутона. Default: `'right'`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.


## Примери

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
