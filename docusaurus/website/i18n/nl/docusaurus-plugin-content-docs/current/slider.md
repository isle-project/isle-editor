---
id: slider 
title: Slider
sidebar_label: Slider
---

Een onderdeel dat zijn kinderen laat zien in een diashow of carrousel.

## Options

* __title__ | `string`: titel voor de diashow / carrousel die bovenaan wordt getoond. Default: `''`.
* __dots__ | `boolean`: weergavepunten aan de onderkant om snel naar een willekeurige dia te kunnen navigeren. Default: `true`.
* __fade__ | `boolean`: controleert of het verbleken wordt gebruikt voor de overgang tussen de dia's. Default: `false`.
* __draggable__ | `boolean`: bepaalt of gebruikers de dia's kunnen verslepen om tussen de dia's te navigeren. Default: `false`.
* __pagination__ | `string`: om de paginering te laten zien op de `top`, `bodem` of `beide'.. Default: `'bottom'`.
* __goto__ | `number`: Als de eigenschap wordt gewijzigd, springt de component naar de slede met de geselecteerde index. Default: `0`.
* __infinite__ | `boolean`: controleert of de diashow zich om de inhoud heen wikkelt. Default: `false`.
* __interval__ | `number`: stelt een tijdsinterval in voor een automatische diawisseling. Default: `none`.
* __swipe__ | `boolean`: maakt slepen/vegen mogelijk. Default: `false`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onClick__ | `function`: terugroeping aangeroepen bij het klikken op de volgende/vorige knoppen. Default: `onClick() {}`.


## Examples

```jsx live
<Slider title="Questions to explore:" >
    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>
    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>
    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>
    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>
</Slider>
```

