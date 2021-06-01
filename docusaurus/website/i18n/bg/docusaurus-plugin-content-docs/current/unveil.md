---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

Компонентът appear ще накара всички негови деца да станат видими след определен период от време.

## Опции

* __active__ | `boolean`: контролира дали броячът да бъде активен. Default: `false`.
* __delay__ | `number`: брой милисекунди преди появата на компонента. Default: `1000`.


## Примери

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



