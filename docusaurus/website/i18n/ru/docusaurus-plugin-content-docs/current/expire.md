---
id: expire 
title: Expire
sidebar_label: Expire
---

Истечение компонента приведет к тому, что все его дети станут невидимыми через определенное время.

## Варианты

* __active__ | `boolean`: контролирует, должен ли счетчик быть активным. Default: `false`.
* __delay__ | `number`: количество миллисекунд до исчезновения компонента. Default: `1000`.


## Примеры

```jsx live
<Expire>
    <span>When active, I will disappear after one second</span>
</Expire>
```



