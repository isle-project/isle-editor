---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

En skitseblok til at tage noter på lysbilleder eller tomme sider.

## Indstillinger

* __autoSave__ | `boolean`: styrer, om editoren skal gemme den aktuelle tekst til browserens lokale lager med et givet tidsinterval. Default: `true`.
* __feedbackButtons__ | `boolean`: styrer, om der skal vises feedback-knapper på hvert dias. Default: `false`.
* __intervalTime__ | `number`: tid mellem automatiske gemmer. Default: `10000`.
* __hideInputButtons__ | `boolean`: styrer, om tegnings- og tekstindtastningsknapperne skal skjules. Default: `false`.
* __hideNavigationButtons__ | `boolean`: styrer, om knapperne til at navigere mellem sider skal skjules. Default: `false`.
* __hideSaveButtons__ | `boolean`: styrer, om knapperne til at gemme skal skjules. Default: `false`.
* __hideTransmitButtons__ | `boolean`: styrer, om der skal skjules knapper til overførsel af brugerhandlinger. Default: `false`.
* __brushSize__ | `number`: størrelsen af den pensel, der skal males med. Default: `4`.
* __color__ | `string`: farve på pensel og tekster. Default: `'#444444'`.
* __canvasWidth__ | `number`: bredden af lærredselementet (i px). Default: `1200`.
* __canvasHeight__ | `number`: højden af lærredselementet (i px). Default: `700`.
* __fullscreen__ | `boolean`: styrer, om lærredet automatisk skal tilpasses til browservinduets bredde og højde. Default: `false`.
* __fill__ | `string`: hvis `horizontal`, fyldes al tilgængelig horisontal plads op, når der tegnes en PDF; hvis `vertical`, bruges al vertikal plads for at forhindre overløb af y-aksen. Default: `'vertical'`.
* __disabled__ | `boolean`: om komponenten skal gøres skrivebeskyttet og forbyde tegning på skitseblok. Default: `false`.
* __fontFamily__ | `string`: skrifttypefamilie. Default: `'Arial'`.
* __fontSize__ | `number`: skriftstørrelse. Default: `24`.
* __nodes__ | `object`: komponenter, der skal gengives oven på de angivne dias; `nøgler` skal svare til sidetal, `værdier` til komponenterne. Default: `{}`.
* __noPages__ | `number`: oprindeligt antal sider. Default: `1`.
* __pdf__ | `string`: link til PDF-fil til indbagte sidebaggrunde. Default: `none`.
* __showTutorial__ | `boolean`: vise vejledning til skitseblok ved opstart. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: styrer, om knapperne skal begynde at blive skjult, når værktøjslinjen ikke er tilstrækkelig bred (ellers startes en ny linje). Default: `false`.
* __transmitOwner__ | `boolean`: om ejerens handlinger skal overføres til andre brugere i realtid. Default: `true`.
* __groupMode__ | `boolean`: styrer, om alle brugerens handlinger overføres til alle andre. Default: `false`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onChange__ | `function`: callback, der påkaldes, når der tegnes et nyt linjeelement. Default: `onChange() {}`.


## Eksempler

```jsx live
<Sketchpad canvasWidth={750} />
```

