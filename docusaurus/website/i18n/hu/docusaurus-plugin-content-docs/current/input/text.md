---
id: text-input
title: Text Input
sidebar_label: Text Input
---

Szövegbeviteli komponens. Használható egy ISLE műszerfal részeként vagy önállóan. Az utóbbi esetben a változásokat az `onChange` attribútummal kell kezelni, vagy az értéket a `bind` attribútummal egy globális változóhoz kell kötni.

## Opciók

* __bind__ | `string`: a globális változó neve, amelyhez a számot hozzárendelni kell. Default: `none`.
* __defaultValue__ | `string`: érték, amely a bemenet alapértelmezett értékét jelzi az indításkor. Default: `''`.
* __value__ | `string`: szöveges érték (ellenőrzött komponens esetén). Default: `none`.
* __legend__ | `(string|node)`: string, amely a számbemenet mellett megjelenő szöveget jelzi. Default: `''`.
* __inline__ | `boolean`: Jelzi, hogy a bemenet soron belül jelenik-e meg. Default: `false`.
* __onBlur__ | `function`: callback függvény, amely akkor hívódik, amikor a szövegterület elveszíti a fókuszt. Default: `onBlur() {}`.
* __onChange__ | `function`: függvény, amelyet akkor kell meghívni, ha egy szövegérték megváltozik. Default: `onChange() {}`.
* __onKeyDown__ | `function`: bármely billentyű lenyomásakor meghívandó callback függvény. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: bármely billentyű beütésekor meghívandó callback függvény. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: a billentyű felengedésekor meghívandó callback függvény. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: a kezdeti választás előtt megjelenítendő értéket jelző karakterlánc. Default: `none`.
* __width__ | `number`: a bemenet szélességét pixelben jelző szám. Default: `80`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

