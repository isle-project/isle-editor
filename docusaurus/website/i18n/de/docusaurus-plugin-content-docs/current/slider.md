---
id: slider 
title: Slider
sidebar_label: Slider
---

Eine Komponente, die ihre Kinder in einer Diashow oder einem Karussell anzeigt.

## Options

* __title__ | `string`: Titel für die Diashow / das Karussell, der im oberen Bereich angezeigt werden soll. Default: `''`.
* __dots__ | `boolean`: Anzeigepunkte am unteren Rand zum schnellen Navigieren zu jeder Folie. Default: `true`.
* __fade__ | `boolean`: steuert, ob die Überblendung für den Übergang zwischen den Dias verwendet wird. Default: `false`.
* __draggable__ | `boolean`: steuert, ob Benutzer die Folien ziehen können, um zwischen ihnen zu navigieren. Default: `false`.
* __pagination__ | `string`: ob die Paginierung entweder "oben", "unten" oder "beides" angezeigt werden soll. Default: `'bottom'`.
* __goto__ | `number`: Wenn die Eigenschaft geändert wird, springt die Komponente auf die Folie mit dem ausgewählten Index. Default: `0`.
* __infinite__ | `boolean`: steuert, ob die Diashow um ihren Inhalt herumgeht. Default: `false`.
* __interval__ | `number`: legt ein Zeitintervall für einen automatischen Diawechsel fest. Default: `none`.
* __swipe__ | `boolean`: aktiviert das Ziehen/Wischen-Verhalten. Default: `false`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onClick__ | `function`: Callback, der beim Klicken auf die Schaltflächen next/previous aufgerufen wird. Default: `onClick() {}`.


## Examples

```jsx live
<Slider title="Questions to explore:" >
    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>
    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>
    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>
    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>
</Slider>
```

