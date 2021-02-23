---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

Появление компонента приведет к тому, что все его дети станут видимыми по прошествии определенного времени.

## Варианты

* __active__ | `boolean`: контролирует, должен ли счетчик быть активным. Default: `false`.
* __delay__ | `number`: количество миллисекунд до появления компонента. Default: `1000`.


## Примеры

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



