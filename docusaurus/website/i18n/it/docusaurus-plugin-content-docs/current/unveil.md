---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

Il componente appear farà sì che tutti i suoi figli diventino visibili dopo un determinato periodo di tempo.

## Options

* __active__ | `boolean`: controlla se il contatore deve essere attivo. Default: `false`.
* __delay__ | `number`: numero di millisecondi prima della comparsa del componente. Default: `1000`.


## Examples

```jsx live
<Unveil duration={5000} >
    <span> I will appear</span>
</Unveil>
```



