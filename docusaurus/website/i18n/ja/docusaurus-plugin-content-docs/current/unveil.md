---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

appearコンポーネントは、指定された時間後にそのすべての子が表示されるようになります。

## オプション

* __active__ | `boolean`: カウンタをアクティブにするかどうかを制御します。. Default: `false`.
* __delay__ | `number`: コンポーネントが表示されるまでのミリ秒数. Default: `1000`.


## 例としては、以下のようなものがあります。

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



