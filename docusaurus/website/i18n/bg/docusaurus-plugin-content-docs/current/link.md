---
id: link
title: Link
sidebar_label: Link
---

Компонент за показване на връзка.

## Опции

* __href__ | `string (required)`: URL адрес на уебсайта, към който да се свърже. Default: `none`.
* __target__ | `string`: определя къде се отваря връзката: задава се `_blank` за нов прозорец, `_self` за собствена рамка, `_parent` за родител, `_top` за цялото тяло на прозореца или името на рамката. Default: `'_blank'`.
* __windowFeatures__ | `string`: списък с функции на прозореца, разделени със запетая, за отваряне на връзката в нов прозорец (вж.: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features). Default: `none`.
* __openWindow__ | `boolean`: undefined. Default: `false`.
* __className__ | `string`: име на класа. Default: `''`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.


## Примери

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'New Page', value: 'newPage' },
        { label: 'Image Link', value: 'imageLink' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

</TabItem>

<TabItem value="newPage">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">New Wikipedia Page</Link>
```
</TabItem>

<TabItem value="imageLink">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">
<img src= "https://bit.ly/3aM4OU7" /></Link>
```

</TabItem>

</Tabs>
