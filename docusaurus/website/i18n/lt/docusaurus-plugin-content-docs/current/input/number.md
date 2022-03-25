---
id: number-input
title: Number Input
sidebar_label: Number Input
---

Skaičių įvesties komponentas. Gali būti naudojamas kaip ISLE prietaisų skydelio dalis arba atskirai. Pastaruoju atveju norite apdoroti pakeitimus naudodami atributą `onChange` arba susieti reikšmę su pasauliniu kintamuoju naudodami atributą `bind`.

## Parinktys

* __bind__ | `string`: pasaulinio kintamojo, kuriam priskiriamas skaičius, pavadinimas. Default: `''`.
* __defaultValue__ | `number`: reikšmė, nurodanti numatytąją įvesties reikšmę paleidimo metu.. Default: `0`.
* __disabled__ | `boolean`: loginis rodiklis, nurodantis, ar įvestis aktyvi, ar ne.. Default: `false`.
* __inline__ | `boolean`: nurodo, ar įvestis bus rodoma eilutėje.. Default: `false`.
* __legend__ | `(string|node)`: eilutė, nurodanti tekstą, rodomą šalia skaičiaus įvesties.. Default: `none`.
* __max__ | `number`: skaičius, nurodantis didžiausią galimą įterpti vertę.. Default: `null`.
* __min__ | `number`: skaičius, nurodantis mažiausią galimą įterpti vertę.. Default: `null`.
* __numbersOnly__ | `boolean`: kontroliuoja, ar priimami tik skaičiai.. Default: `true`.
* __placeholder__ | `string`: undefined. Default: `'0'`.
* __onBlur__ | `function`: grįžtamojo ryšio funkcija, kurią reikia iškviesti, kai naudojamas suliejimo metodas. Default: `onBlur() {}`.
* __onChange__ | `function`: grįžtamojo ryšio funkcija, kuri bus iškviečiama, kai bus pakeistas įvestas skaičius.. Default: `onChange() {}`.
* __onKeyDown__ | `function`: grįžtamojo ryšio funkcija, kuri bus iškviečiama, kai bus paspaustas bet kuris klavišas.. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: grįžtamojo ryšio funkcija, kuri bus iškviečiama įvedus bet kurį klavišą.. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: grįžtamojo ryšio funkcija, kuri bus inicijuojama atleidus klavišą.. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: skaičius, nurodantis laipsniškus pokyčius, kai naudojamos didinimo rodyklės.. Default: `1`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __inputStyle__ | `object`: Įvesties elemento CSS įvesties stilius. Default: `{}`.
* __value__ | `number`: skaičiaus reikšmė (kontroliuojamam komponentui). Default: `none`.
* __tooltip__ | `string`: įrankių užuominos eilutė (jei nenustatyta, įrankių užuomina generuojama automatiškai). Default: `none`.
* __tooltipPlacement__ | `string`: įrankių užuominos kryptis. Default: `'left'`.


## Pavyzdžiai

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

