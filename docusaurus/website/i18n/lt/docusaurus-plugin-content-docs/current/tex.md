---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

`TeX` yra ISLE elementas, kurį galima naudoti LaTeX lygtims rodyti. Komponentas naudoja [KaTeX](https://github.com/Khan/KaTeX), kad vaizdas būtų atvaizduojamas itin greitai.

## Parinktys

* __raw__ | `(string|number) (required)`: Atvaizduojama pažodinė LaTeX `eilutė`. Taip pat priima `numbers`. Default: `none`.
* __displayMode__ | `boolean`: `boolean`, nurodantis, ar lygtį rodyti eilutėje, ar ekrano režimu. Default: `false`.
* __numbered__ | `boolean`: kontroliuoja, ar rodyti lygties numerį, jei lygtis rodoma rodymo režimu.. Default: `false`.
* __style__ | `object`: `objektas` su CSS raktų-verčių poromis, kurios bus taikomos lygties konteineriui. Default: `{}`.
* __tag__ | `string`: Dešinėje pusėje rodomi pasirinktiniai ženklai, skirti lygtims rodyti. Numatytoji reikšmė - lygties numeris pamokoje.. Default: `none`.
* __elems__ | `object`: `objektas`, kurio `raktai` žymi LaTeX simbolius, o atitinkamos reikšmės yra konfigūracijos `objektai`, kad jie būtų interaktyvūs. Nustačius `tooltip` parinktį, užvedus pelės žymeklį ant LaTeX simbolių, bus rodoma įrankių užuomina. Nustačius savybę `variable` (kintamasis), bus rodomas įvesties slankiklis, kuriuo galima keisti atitinkamą būsenos kintamąjį; šiuo atveju palaikomos papildomos savybės `legend`, `min`, `max` ir `step`.. Default: `{}`.
* __popoverPlacement__ | `string`: iššokančio skydelio padėtis nurodytoms `elems` (`top`, `right`, `bottom`, `bottom` arba `left`). Default: `'bottom'`.
* __onPopover__ | `function`: grįžtamojo ryšio `funkcija`, kai įjungiamas arba išjungiamas iššokantis valdymo langelis; vienintelis argumentas - rodymo būsena.. Default: `onPopover() {}`.
* __onClick__ | `function`: grįžtamojo ryšio `funkcija`, iškviečiama kiekvieną kartą, kai naudotojas paspaudžia lygtį.. Default: `none`.


## Pavyzdžiai

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



