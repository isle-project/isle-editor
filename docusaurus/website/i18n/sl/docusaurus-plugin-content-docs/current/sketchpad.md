---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

Risalna skica za zapisovanje diapozitivov na predavanjih ali praznih straneh.

## Možnosti

* __autoSave__ | `boolean`: nadzoruje, ali naj urejevalnik v danem časovnem intervalu shrani trenutno besedilo v lokalni pomnilnik brskalnika.. Default: `true`.
* __feedbackButtons__ | `boolean`: nadzoruje, ali se na vsaki diapozitivni plošči prikažejo gumbi za povratne informacije.. Default: `false`.
* __intervalTime__ | `number`: čas med samodejnim shranjevanjem. Default: `10000`.
* __hideInputButtons__ | `boolean`: nadzoruje, ali se skrijeta gumba za risanje in vnos besedila.. Default: `false`.
* __hideNavigationButtons__ | `boolean`: nadzira, ali se skrijejo gumbi za premikanje med stranmi.. Default: `false`.
* __hideSaveButtons__ | `boolean`: nadzoruje, ali se skrijejo gumbi za shranjevanje.. Default: `false`.
* __hideTransmitButtons__ | `boolean`: nadzoruje, ali se skrijejo gumbi za prenos uporabniških dejanj.. Default: `false`.
* __brushSize__ | `number`: velikost čopiča za barvanje. Default: `4`.
* __color__ | `string`: barva čopiča in besedil. Default: `'#444444'`.
* __canvasWidth__ | `number`: širina elementa platna (v px). Default: `1200`.
* __canvasHeight__ | `number`: višina elementa platna (v px). Default: `700`.
* __fullscreen__ | `boolean`: nadzoruje, ali se velikost platna samodejno spremeni glede na širino in višino okna brskalnika.. Default: `false`.
* __fill__ | `string`: če je `horizontal`, se pri risanju PDF zapolni ves razpoložljivi vodoravni prostor; če je `vertical`, se uporabi ves navpični prostor, da se prepreči prelivanje osi y. Default: `'vertical'`.
* __disabled__ | `boolean`: ali naj bo komponenta samo za branje in prepovedano risanje na skicirki. Default: `false`.
* __fontFamily__ | `string`: družina pisav. Default: `'Arial'`.
* __fontSize__ | `number`: velikost pisave. Default: `24`.
* __nodes__ | `object`: komponente, ki se prikažejo na vrhu določenih diapozitivov; `ključi` morajo ustrezati številkam strani, `vrednosti` pa komponentam. Default: `{}`.
* __noPages__ | `number`: začetno število strani. Default: `1`.
* __pdf__ | `string`: povezava do datoteke PDF za zapečena ozadja strani. Default: `none`.
* __showTutorial__ | `boolean`: ob zagonu prikažite vadnico za skicirko. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: nadzoruje, ali se gumbi začnejo skrivati, če širina orodne vrstice ni zadostna (v nasprotnem primeru se začne nova vrstica).. Default: `false`.
* __transmitOwner__ | `boolean`: ali naj se dejanja lastnika posredujejo drugim uporabnikom v realnem času.. Default: `true`.
* __groupMode__ | `boolean`: nadzoruje, ali se vsa uporabnikova dejanja posredujejo vsem drugim.. Default: `false`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onChange__ | `function`: povratni klic, ki se sproži, ko je narisan nov element črte.. Default: `onChange() {}`.


## Primeri

```jsx live
<Sketchpad canvasWidth={750} />
```

