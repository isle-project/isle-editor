---
id: text-input
title: Text Input
sidebar_label: Text Input
---

Teksto įvesties komponentas. Gali būti naudojamas kaip ISLE prietaisų skydelio dalis arba atskirai. Pastaruoju atveju norite apdoroti pakeitimus naudodami atributą `onChange` arba susieti reikšmę su pasauliniu kintamuoju naudodami atributą `bind`.

## Parinktys

* __bind__ | `string`: pasaulinio kintamojo, kuriam priskiriamas skaičius, pavadinimas. Default: `none`.
* __defaultValue__ | `string`: reikšmė, rodanti numatytąją įvesties reikšmę pradžioje. Default: `''`.
* __value__ | `string`: teksto reikšmė (valdomam komponentui). Default: `none`.
* __legend__ | `(string|node)`: eilutė, nurodanti tekstą, rodomą šalia skaičiaus įvesties.. Default: `''`.
* __inline__ | `boolean`: Nurodo, ar įvestis rodoma eilutėje. Default: `false`.
* __onBlur__ | `function`: grįžtamojo ryšio funkcija, iškviečiama, kai teksto sritis praranda fokusą.. Default: `onBlur() {}`.
* __onChange__ | `function`: funkcija, iškviečiama pakeitus teksto reikšmę.. Default: `onChange() {}`.
* __onKeyDown__ | `function`: grįžtamojo ryšio funkcija, kuri bus iškviečiama, kai bus paspaustas bet kuris klavišas.. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: grįžtamojo ryšio funkcija, kuri bus iškviečiama įvedus bet kurį klavišą.. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: grįžtamojo ryšio funkcija, kuri bus inicijuojama atleidus klavišą.. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: eilutė, nurodanti vertę, kuri bus rodoma prieš atliekant pradinį pasirinkimą.. Default: `none`.
* __width__ | `number`: skaičius, nurodantis įvesties plotį pikseliais.. Default: `80`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.


## Pavyzdžiai

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

