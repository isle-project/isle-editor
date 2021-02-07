---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Die Switch-Komponente ermöglicht die Anzeige eines Elements aus einer Liste mit mehreren Elementen. Benutzer können die verschiedenen Kinder des Switch-Tags durchlaufen, indem sie auf das aktuell angezeigte klicken.

## Options

* __active__ | `boolean`: steuert, ob der Schalter aktiv ist oder nicht. Default: `true`.
* __tooltip__ | `string`: Tooltip, der angezeigt wird, wenn der Mauszeiger über dem Schalterelement steht. Default: `none`.
* __tooltipPos__ | `string`: Platzierung des Tooltips (entweder `oben`, `left`, `right` oder `unten`). Default: `'top'`.
* __className__ | `string`: Klassenname für das umschließende span-Element. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onChange__ | `function`: Callback, der aufgerufen wird, wenn Elemente umgeschaltet werden. Erhält als erstes Argument den Index des aktuell angezeigten Childs. Default: `onChange() {}`.


## Examples

```jsx live
<Switch>
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```



