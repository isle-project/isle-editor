---
id: expire 
title: Expire
sidebar_label: Expire
---

Il componente scaduto farà sì che tutti i suoi figli diventino invisibili dopo un determinato periodo di tempo.

## Opzioni

* __active__ | `boolean`: controlla se il contatore deve essere attivo. Default: `false`.
* __delay__ | `number`: numero di millisecondi prima che il componente scompaia. Default: `1000`.


## Esempi

```jsx live
<Expire>
    <span> I will disappear </span>
</Expire>
```



