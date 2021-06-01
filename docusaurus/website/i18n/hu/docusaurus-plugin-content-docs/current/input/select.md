---
id: select-input
title: Select Input
sidebar_label: Select Input
---

A bemeneti komponens kiválasztása. Használható egy ISLE műszerfal részeként vagy önállóan. Az utóbbi esetben a változásokat az `onChange` attribútummal kell kezelni, vagy az értéket a `bind` attribútummal egy globális változóhoz kell kötni.

## Opciók

* __bind__ | `string`: a globális változó neve, amelyhez a számot hozzárendelni kell. Default: `''`.
* __clearable__ | `boolean`: boolean érték, amely azt jelzi, hogy törölhető-e a választás(ok).. Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: a bemenet alapértelmezett értéke indításkor. Default: `none`.
* __disabled__ | `boolean`: szabályozza, hogy a bemenet aktív-e vagy sem. Default: `false`.
* __inline__ | `boolean`: jelzi, hogy a bemenet soron belül jelenik-e meg. Default: `false`.
* __legend__ | `(string|node)`: a bemenet mellett megjelenő szöveg. Default: `''`.
* __menuPlacement__ | `string`: a menü elhelyezése a vezérlőelemhez képest (automatikus, felső vagy alsó elhelyezés).. Default: `'auto'`.
* __multi__ | `boolean`: szabályozza, hogy több választ is ki lehet-e választani. Default: `false`.
* __onChange__ | `function`: callback függvény, amelyet a választáskor kell meghívni.. Default: `onChange() {}`.
* __options__ | `array`: a felhasználó rendelkezésére álló választási lehetőségeket jelző tömb. Default: `[]`.
* __placeholder__ | `string`: a kezdeti választás előtt megjelenítendő érték. Default: `none`.
* __tooltip__ | `string`: a legenda fölött történő lebegéskor megjelenő szöveg. Default: `none`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.


## Példák

```jsx live
<SelectInput
    legend="Choose the test direction"
    defaultValue="two-sided"
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```

