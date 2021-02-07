---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

Die appear-Komponente bewirkt, dass alle ihre Kinder nach einer bestimmten Zeitspanne sichtbar werden.

## Options

* __active__ | `boolean`: steuert, ob der Zähler aktiv sein soll. Default: `false`.
* __delay__ | `number`: Anzahl der Millisekunden, bevor die Komponente erscheint. Default: `1000`.


## Examples

```jsx live
<Unveil duration={5000} >
    <span> I will appear</span>
</Unveil>
```



