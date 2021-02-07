---
id: expire 
title: Expire
sidebar_label: Expire
---

Истечение компонента приведет к тому, что все его дети станут невидимыми через определенное время.

## Options

* __active__ | `boolean`: контролирует, должен ли счетчик быть активным. Default: `false`.
* __delay__ | `number`: количество миллисекунд до исчезновения компонента. Default: `1000`.


## Examples

```jsx live
<Expire>
    <span> I will disappear </span>
</Expire>
```



