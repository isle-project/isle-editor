---
id: expire 
title: Expire
sidebar_label: Expire
---

expire コンポーネントは、指定された時間が経過すると、そのすべての子要素が非表示になります。

## オプション

* __active__ | `boolean`: カウンタをアクティブにするかどうかを制御します。. Default: `false`.
* __delay__ | `number`: コンポーネントが消えるまでのミリ秒数. Default: `1000`.


## 例としては、以下のようなものがあります。

```jsx live
<Expire>
    <span> I will disappear </span>
</Expire>
```



