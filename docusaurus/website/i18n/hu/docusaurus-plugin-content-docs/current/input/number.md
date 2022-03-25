---
id: number-input
title: Number Input
sidebar_label: Number Input
---

Számbeviteli komponens. Használható egy ISLE műszerfal részeként vagy önállóan. Az utóbbi esetben a változásokat az `onChange` attribútummal kell kezelni, vagy az értéket a `bind` attribútummal egy globális változóhoz kell kötni.

## Opciók

* __bind__ | `string`: a globális változó neve, amelyhez a számot hozzárendelni kell. Default: `''`.
* __defaultValue__ | `number`: érték, amely a bemenet alapértelmezett értékét jelzi indításkor. Default: `0`.
* __disabled__ | `boolean`: boolean, amely jelzi, hogy a bemenet aktív-e vagy sem.. Default: `false`.
* __inline__ | `boolean`: jelzi, hogy a bemenet soron belül jelenik-e meg. Default: `false`.
* __legend__ | `(string|node)`: string, amely a számbemenet mellett megjelenő szöveget jelzi. Default: `none`.
* __max__ | `number`: a beilleszthető maximális értéket jelző szám. Default: `null`.
* __min__ | `number`: a beilleszthető legkisebb lehetséges értéket jelző szám. Default: `null`.
* __numbersOnly__ | `boolean`: szabályozza, hogy csak számok legyenek elfogadva. Default: `true`.
* __placeholder__ | `string`: undefined. Default: `'0'`.
* __onBlur__ | `function`: callback függvény, amelyet egy blur módszer használatakor kell meghívni. Default: `onBlur() {}`.
* __onChange__ | `function`: callback függvény, amelyet a szám bevitelekor kell meghívni.. Default: `onChange() {}`.
* __onKeyDown__ | `function`: bármely billentyű lenyomásakor meghívandó callback függvény. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: bármely billentyű beütésekor meghívandó callback függvény. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: a billentyű felengedésekor meghívandó callback funkció. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: az inkrementális változásokat jelző szám, ha a növekménynyilakat használjuk. Default: `1`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __inputStyle__ | `object`: CSS inline stílusok a beviteli elemhez. Default: `{}`.
* __value__ | `number`: számérték (ellenőrzött komponens esetén). Default: `none`.
* __tooltip__ | `string`: tooltip string (ha nincs beállítva, a tooltip automatikusan generálódik). Default: `none`.
* __tooltipPlacement__ | `string`: a tooltip iránya. Default: `'left'`.


## Példák

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

