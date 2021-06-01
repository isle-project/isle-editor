---
id: expire 
title: Expire
sidebar_label: Expire
---

Компонентът expire ще накара всички негови деца да станат невидими след определен период от време.

## Опции

* __active__ | `boolean`: контролира дали броячът да бъде активен. Default: `false`.
* __delay__ | `number`: брой милисекунди преди компонентът да изчезне. Default: `1000`.


## Примери

```jsx live
<Expire>
    <span>When active, I will disappear after one second</span>
</Expire>
```



