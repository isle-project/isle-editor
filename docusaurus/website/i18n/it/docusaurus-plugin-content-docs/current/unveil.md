---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

Il componente appear farà sì che tutti i suoi figli diventino visibili dopo un determinato periodo di tempo.

## Opzioni

* __active__ | `boolean`: controlla se il contatore deve essere attivo. Default: `false`.
* __delay__ | `number`: numero di millisecondi prima della comparsa del componente. Default: `1000`.


## Esempi

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



