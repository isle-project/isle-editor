---
id: expire 
title: Expire
sidebar_label: Expire
---

expire コンポーネントは、指定された時間が経過すると、そのすべての子要素が非表示になります。

## Options

* __active__ | `boolean`: カウンタをアクティブにするかどうかを制御します。. Default: `false`.
* __delay__ | `number`: コンポーネントが消えるまでのミリ秒数. Default: `1000`.


## Examples

```jsx live
<Expire>
    <span> I will disappear </span>
</Expire>
```



