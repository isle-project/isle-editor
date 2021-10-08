---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

Piešimo bloknotas, skirtas užsirašyti paskaitų skaidres ar tuščius puslapius.

## Parinktys

* __autoSave__ | `boolean`: kontroliuoja, ar redaktorius turi išsaugoti esamą tekstą vietinėje naršyklės saugykloje tam tikru laiko intervalu.. Default: `true`.
* __feedbackButtons__ | `boolean`: kontroliuoja, ar kiekvienoje skaidrėje rodyti grįžtamojo ryšio mygtukus.. Default: `false`.
* __intervalTime__ | `number`: laikas tarp automatinių išsaugojimų. Default: `10000`.
* __hideInputButtons__ | `boolean`: kontroliuoja, ar paslėpti piešimo ir teksto įvesties mygtukus.. Default: `false`.
* __hideNavigationButtons__ | `boolean`: kontroliuoja, ar slėpti naršymo tarp puslapių mygtukus.. Default: `false`.
* __hideSaveButtons__ | `boolean`: kontroliuoja, ar paslėpti išsaugojimo mygtukus.. Default: `false`.
* __hideTransmitButtons__ | `boolean`: kontroliuoja, ar slėpti naudotojo veiksmų perdavimo mygtukus.. Default: `false`.
* __brushSize__ | `number`: teptuko, kuriuo bus piešiama, dydis. Default: `4`.
* __color__ | `string`: teptuko ir tekstų spalva. Default: `'#444444'`.
* __canvasWidth__ | `number`: drobės elemento plotis (px). Default: `1200`.
* __canvasHeight__ | `number`: drobės elemento aukštis (px). Default: `700`.
* __fullscreen__ | `boolean`: kontroliuoja, ar automatiškai keisti drobės dydį pagal naršyklės lango plotį ir aukštį.. Default: `false`.
* __fill__ | `string`: jei `horizontal`, braižant PDF užpildoma visa turima horizontali erdvė; jei `vertical`, naudojama visa vertikali erdvė, kad būtų išvengta y ašies perpildymo.. Default: `'vertical'`.
* __disabled__ | `boolean`: ar komponentą paversti tik skaitymui skirtu komponentu ir uždrausti piešimą eskizų lentelėje.. Default: `false`.
* __fontFamily__ | `string`: šrifto šeima. Default: `'Arial'`.
* __fontSize__ | `number`: šrifto dydis. Default: `24`.
* __nodes__ | `object`: komponentai, kurie turi būti atvaizduojami nurodytų skaidrių viršuje; `raktai` turi atitikti puslapių numerius, `vertės` - komponentus.. Default: `{}`.
* __noPages__ | `number`: pradinis puslapių skaičius. Default: `1`.
* __pdf__ | `string`: Nuoroda į PDF failą, skirtą puslapių fonams.. Default: `none`.
* __showTutorial__ | `boolean`: paleidimo metu rodyti eskizų sąsiuvinio vadovėlį. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: kontroliuoja, ar pradėti slėpti mygtukus, kai įrankių juostos plotis nepakankamas (priešingu atveju bus pradėta kurti nauja eilutė).. Default: `false`.
* __transmitOwner__ | `boolean`: ar savininko veiksmai turėtų būti perduodami kitiems naudotojams realiuoju laiku.. Default: `true`.
* __groupMode__ | `boolean`: kontroliuoja, ar visi naudotojo veiksmai perduodami visiems kitiems.. Default: `false`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onChange__ | `function`: atgalinis iškvietimas, inicijuojamas kiekvieną kartą, kai nubrėžiamas naujas linijos elementas.. Default: `onChange() {}`.


## Pavyzdžiai

```jsx live
<Sketchpad canvasWidth={750} />
```

