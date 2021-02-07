---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

Появление компонента приведет к тому, что все его дети станут видимыми по прошествии определенного времени.

## Options

* __active__ | `boolean`: контролирует, должен ли счетчик быть активным. Default: `false`.
* __delay__ | `number`: количество миллисекунд до появления компонента. Default: `1000`.


## Examples

```jsx live
<Unveil duration={5000} >
    <span> I will appear</span>
</Unveil>
```



