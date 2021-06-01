---
id: runner 
title: Runner
sidebar_label: Runner
---

Palaidēja komponents izpildīs norādīto funkciju vienreiz vai noteiktā intervālā.

## Iespējas

* __active__ | `boolean`: kontrolē, vai skrējējam jābūt aktīvam. Pēc aktivizēšanas funkcija `onEvaluate` tiek izsaukta dotajā intervālā (vai vienu reizi).. Default: `true`.
* __interval__ | `number`: milisekunžu skaits starp `onEvaluate` izsaukumiem. Ja intervāls nav iestatīts, funkcija tiek izsaukta tikai vienu reizi.. Default: `none`.
* __onEvaluate__ | `function`: izsaucamā funkcija. Default: `onEvaluate() {}`.


## Piemēri

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



