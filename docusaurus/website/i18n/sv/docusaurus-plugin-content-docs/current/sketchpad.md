---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

Ett skissblock för anteckningar på föreläsningsbilder eller tomma sidor.

## Alternativ

* __autoSave__ | `boolean`: kontrollerar om redigeraren ska spara den aktuella texten till webbläsarens lokala lagring med ett visst tidsintervall.. Default: `true`.
* __feedbackButtons__ | `boolean`: kontrollerar om återkopplingsknapparna ska visas på varje bild. Default: `false`.
* __intervalTime__ | `number`: tid mellan automatiska sparningar. Default: `10000`.
* __hideInputButtons__ | `boolean`: kontrollerar om knapparna för ritning och textinmatning ska döljas. Default: `false`.
* __hideNavigationButtons__ | `boolean`: kontrollerar om knapparna för att navigera mellan sidor ska döljas. Default: `false`.
* __hideSaveButtons__ | `boolean`: kontrollerar om spar-knapparna ska döljas. Default: `false`.
* __hideTransmitButtons__ | `boolean`: kontrollerar om knappar för överföring av användaråtgärder ska döljas. Default: `false`.
* __brushSize__ | `number`: storlek på penseln att måla med. Default: `4`.
* __color__ | `string`: Färg på penseln och texterna. Default: `'#444444'`.
* __canvasWidth__ | `number`: bredden på canvaselementet (i px). Default: `1200`.
* __canvasHeight__ | `number`: höjden på canvaselementet (i px). Default: `700`.
* __fullscreen__ | `boolean`: kontrollerar om du vill ändra storlek på canvas automatiskt till webbläsarfönstrets bredd och höjd. Default: `false`.
* __fill__ | `string`: om `horizontal`, fylls allt tillgängligt horisontellt utrymme när en PDF ritas; om `vertical`, används allt vertikalt utrymme för att förhindra att y-axeln svämmar över.. Default: `'vertical'`.
* __disabled__ | `boolean`: om komponenten ska vara skrivskyddad och om det ska vara förbjudet att rita på skissblocket. Default: `false`.
* __fontFamily__ | `string`: Typsnittsfamilj. Default: `'Arial'`.
* __fontSize__ | `number`: Typsnittsstorlek. Default: `24`.
* __nodes__ | `object`: Komponenter som ska återges ovanpå angivna diabilder; "nycklar" ska motsvara sidnummer, "värden" ska motsvara komponenterna.. Default: `{}`.
* __noPages__ | `number`: första antalet sidor. Default: `1`.
* __pdf__ | `string`: länk till PDF-fil för inbakade sidbakgrunder. Default: `none`.
* __showTutorial__ | `boolean`: visa handledning för skissblocket vid uppstart. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: kontrollerar om knapparna ska börja döljas när verktygsfältets bredd inte är tillräcklig (annars startas en ny rad).. Default: `false`.
* __transmitOwner__ | `boolean`: Om ägarens åtgärder ska överföras till andra användare i realtid.. Default: `true`.
* __groupMode__ | `boolean`: kontrollerar om alla användares åtgärder överförs till alla andra. Default: `false`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onChange__ | `function`: callback som aktiveras när ett nytt linjeelement ritas.. Default: `onChange() {}`.


## Exempel

```jsx live
<Sketchpad canvasWidth={750} />
```

