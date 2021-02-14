---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

Une composante iFrame.

## Options

* __src__ | `string (required)`: URL source. Default: `none`.
* __fullscreen__ | `boolean`: contrôle si l'iFrame doit être affichée en mode plein écran. Default: `false`.
* __title__ | `string`: Titre de l'iFrame. Default: `'An iFrame'`.
* __width__ | `number`: Largeur de l'iFrame (en px). Default: `900`.
* __height__ | `number`: Hauteur de l'iFrame (en px). Default: `600`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Controlled Size', value: 'controlledSize' },
        { label: 'Custom CSS', value: 'withCSS' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<IFrame src="https://wikipedia.org" />
```

</TabItem>

<TabItem value="controlledSize" >

```jsx live
<IFrame src="https://wikipedia.org" 
  width={600} 
  height={400} 
/>
```
</TabItem>

<TabItem value="withCSS" >

```jsx live
<IFrame src="https://wikipedia.org" 
    width={600} 
    height={600} 
    style={{ outline: '10px solid black' }}
/>
```
</TabItem>

</Tabs>


