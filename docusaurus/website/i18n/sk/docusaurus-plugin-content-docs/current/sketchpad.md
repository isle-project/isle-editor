---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

Skicár na kreslenie poznámok na diapozitívy prednášok alebo prázdne strany.

## Možnosti

* __autoSave__ | `boolean`: riadi, či má editor v danom časovom intervale uložiť aktuálny text do lokálneho úložiska prehliadača.. Default: `true`.
* __feedbackButtons__ | `boolean`: ovláda, či sa majú na každej snímke zobrazovať tlačidlá spätnej väzby.. Default: `false`.
* __intervalTime__ | `number`: čas medzi automatickým ukladaním. Default: `10000`.
* __hideInputButtons__ | `boolean`: kontroluje, či sa majú skryť tlačidlá na kreslenie a zadávanie textu.. Default: `false`.
* __hideNavigationButtons__ | `boolean`: ovláda, či sa majú skryť tlačidlá na navigáciu medzi stránkami.. Default: `false`.
* __hideSaveButtons__ | `boolean`: kontroluje, či sa majú skryť tlačidlá na uloženie.. Default: `false`.
* __hideTransmitButtons__ | `boolean`: ovláda, či sa majú skryť tlačidlá na prenos akcií používateľa.. Default: `false`.
* __brushSize__ | `number`: veľkosť štetca na maľovanie. Default: `4`.
* __color__ | `string`: farba štetca a textov. Default: `'#444444'`.
* __canvasWidth__ | `number`: šírka prvku plátna (v px). Default: `1200`.
* __canvasHeight__ | `number`: výška prvku plátna (v px). Default: `700`.
* __fullscreen__ | `boolean`: ovláda, či sa má automaticky zmeniť veľkosť plátna na šírku a výšku okna prehliadača.. Default: `false`.
* __fill__ | `string`: ak je `horizontal`, vyplní celý dostupný horizontálny priestor pri kreslení PDF; ak je `vertical`, použije sa celý vertikálny priestor, aby sa zabránilo pretečeniu osi y. Default: `'vertical'`.
* __disabled__ | `boolean`: či má byť komponent len na čítanie a či má byť zakázané kreslenie na skicár. Default: `false`.
* __fontFamily__ | `string`: rodina písma. Default: `'Arial'`.
* __fontSize__ | `number`: veľkosť písma. Default: `24`.
* __nodes__ | `object`: komponenty, ktoré sa majú vykresliť na hornej strane zadaných snímok; `kľúče` by mali zodpovedať číslam strán, `hodnoty` komponentom. Default: `{}`.
* __noPages__ | `number`: počiatočný počet strán. Default: `1`.
* __pdf__ | `string`: odkaz na súbor PDF pre zapekané pozadia stránok. Default: `none`.
* __showTutorial__ | `boolean`: zobraziť tutoriál pre skicár pri spustení. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: ovláda, či sa majú začať skrývať tlačidlá, keď šírka panela nástrojov nie je dostatočná (inak sa začne nový riadok). Default: `false`.
* __transmitOwner__ | `boolean`: či sa majú akcie vlastníka prenášať ostatným používateľom v reálnom čase.. Default: `true`.
* __groupMode__ | `boolean`: kontroluje, či sa všetky akcie používateľa prenášajú všetkým ostatným.. Default: `false`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onChange__ | `function`: spätné volanie vyvolané vždy, keď sa nakreslí nový prvok riadku. Default: `onChange() {}`.


## Príklady

```jsx live
<Sketchpad canvasWidth={750} />
```

