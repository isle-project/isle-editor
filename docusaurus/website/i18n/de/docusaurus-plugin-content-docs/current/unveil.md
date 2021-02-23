---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

Die appear-Komponente bewirkt, dass alle ihre Kinder nach einer bestimmten Zeitspanne sichtbar werden.

## Optionen

* __active__ | `boolean`: steuert, ob der Zähler aktiv sein soll. Default: `false`.
* __delay__ | `number`: Anzahl der Millisekunden, bevor die Komponente erscheint. Default: `1000`.


## Beispiele

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



