---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

Rajzoló vázlatfüzet az előadás diáira vagy üres oldalakra történő jegyzeteléshez.

## Opciók

* __autoSave__ | `boolean`: szabályozza, hogy a szerkesztő mentse-e az aktuális szöveget a böngésző helyi tárolójába egy adott időközönként. Default: `true`.
* __feedbackButtons__ | `boolean`: szabályozza, hogy megjelenjenek-e visszajelző gombok az egyes diákon. Default: `false`.
* __intervalTime__ | `number`: az automatikus mentések közötti idő. Default: `10000`.
* __hideInputButtons__ | `boolean`: szabályozza, hogy a rajz és szövegbeviteli gombokat elrejtse-e. Default: `false`.
* __hideNavigationButtons__ | `boolean`: szabályozza, hogy elrejtse-e az oldalak közötti navigációhoz használt gombokat. Default: `false`.
* __hideSaveButtons__ | `boolean`: szabályozza, hogy elrejtse-e a mentési gombokat. Default: `false`.
* __hideTransmitButtons__ | `boolean`: szabályozza, hogy a felhasználói műveletek továbbítására szolgáló gombok elrejthetők legyenek-e. Default: `false`.
* __brushSize__ | `number`: az ecset mérete a festéshez. Default: `4`.
* __color__ | `string`: az ecset és a szövegek színe. Default: `'#444444'`.
* __canvasWidth__ | `number`: a vászonelem szélessége (px-ben). Default: `1200`.
* __canvasHeight__ | `number`: a vászonelem magassága (px-ben). Default: `700`.
* __fullscreen__ | `boolean`: szabályozza, hogy a vászon automatikusan átméreteződjön-e a böngészőablak szélességére és magasságára.. Default: `false`.
* __fill__ | `string`: ha "vízszintes", a PDF rajzolásakor az összes rendelkezésre álló vízszintes helyet kitölti; ha "függőleges", az összes függőleges helyet felhasználja az y-tengely túlcsordulásának elkerülése érdekében.. Default: `'vertical'`.
* __disabled__ | `boolean`: hogy a komponens csak olvasható legyen-e, és tilos-e rajzolni a vázlatfüzetre.. Default: `false`.
* __fontFamily__ | `string`: betűtípus család. Default: `'Arial'`.
* __fontSize__ | `number`: betűméret. Default: `24`.
* __nodes__ | `object`: a megadott diák tetején megjelenítendő komponensek; a "kulcsoknak" az oldalszámoknak, az "értékeknek" a komponenseknek kell megfelelniük.. Default: `{}`.
* __noPages__ | `number`: kezdeti oldalszám. Default: `1`.
* __pdf__ | `string`: link a PDF fájlhoz a beégetett oldalháttérhez. Default: `none`.
* __showTutorial__ | `boolean`: a sketchpad bemutatása indításkor. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: szabályozza, hogy a gombok elrejtése elkezdődjön-e, ha az eszköztár szélessége nem elegendő (ellenkező esetben egy új sor fog indulni).. Default: `false`.
* __transmitOwner__ | `boolean`: hogy a tulajdonos műveleteit valós időben továbbítsák-e a többi felhasználónak. Default: `true`.
* __groupMode__ | `boolean`: szabályozza, hogy a felhasználó minden műveletét mindenki másnak is továbbítsa-e. Default: `false`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onChange__ | `function`: callback, amely minden új vonalelem rajzolásakor meghívásra kerül. Default: `onChange() {}`.


## Példák

```jsx live
<Sketchpad canvasWidth={750} />
```

