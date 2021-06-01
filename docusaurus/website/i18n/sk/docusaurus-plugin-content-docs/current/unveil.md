---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

Komponent appear spôsobí, že všetky jeho deti budú viditeľné po určitom čase.

## Možnosti

* __active__ | `boolean`: kontroluje, či má byť počítadlo aktívne.. Default: `false`.
* __delay__ | `number`: počet milisekúnd pred zobrazením komponentu. Default: `1000`.


## Príklady

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



