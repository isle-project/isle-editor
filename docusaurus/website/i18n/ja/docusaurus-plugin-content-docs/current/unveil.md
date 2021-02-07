---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

appearコンポーネントは、指定された時間後にそのすべての子が表示されるようになります。

## Options

* __active__ | `boolean`: カウンタをアクティブにするかどうかを制御します。. Default: `false`.
* __delay__ | `number`: コンポーネントが表示されるまでのミリ秒数. Default: `1000`.


## Examples

```jsx live
<Unveil duration={5000} >
    <span> I will appear</span>
</Unveil>
```



