---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

Een schetsblok voor het maken van aantekeningen op collegeplaten of lege pagina's.

## Opties

* __autoSave__ | `boolean`: bepaalt of de redacteur de huidige tekst in een bepaald tijdsinterval moet opslaan in de lokale opslag van de browser. Default: `true`.
* __feedbackButtons__ | `boolean`: bepaalt of er op elke dia een feedbackknop moet worden weergegeven. Default: `false`.
* __intervalTime__ | `number`: tijd tussen de automatische besparingen. Default: `10000`.
* __hideInputButtons__ | `boolean`: bepaalt of de teken- en tekstinvoertoetsen moeten worden verborgen. Default: `false`.
* __hideNavigationButtons__ | `boolean`: bepaalt of de knoppen voor het navigeren tussen de pagina's moeten worden verborgen. Default: `false`.
* __hideSaveButtons__ | `boolean`: bepaalt of de knoppen voor het opslaan van de gegevens moeten worden verborgen. Default: `false`.
* __hideTransmitButtons__ | `boolean`: bepaalt of de knoppen voor het verzenden van gebruikersacties moeten worden verborgen. Default: `false`.
* __brushSize__ | `number`: grootte van het penseel om te schilderen met. Default: `4`.
* __color__ | `string`: kleur van het penseel en de teksten. Default: `'#444444'`.
* __canvasWidth__ | `number`: breedte van het doekelement (in px). Default: `1200`.
* __canvasHeight__ | `number`: hoogte van het doekelement (in px). Default: `700`.
* __fullscreen__ | `boolean`: regelt of het canvas automatisch wordt aangepast aan de breedte en hoogte van het browservenster. Default: `false`.
* __fill__ | `string`: als `horizontaal`, vul alle beschikbare horizontale ruimte op bij het tekenen van een PDF; als `verticaal`, wordt alle verticale ruimte gebruikt om y-asoverloop te voorkomen. Default: `'vertical'`.
* __disabled__ | `boolean`: het onderdeel alleen-lezen en het tekenen op het schetsblok verbieden. Default: `false`.
* __fontFamily__ | `string`: lettertypefamilie. Default: `'Arial'`.
* __fontSize__ | `number`: lettertypegrootte. Default: `24`.
* __nodes__ | `object`: componenten die moeten worden weergegeven op de top van de opgegeven dia's; `sleutels` moeten overeenkomen met de paginanummers, `waarden` met de componenten. Default: `{}`.
* __noPages__ | `number`: eerste aantal pagina's. Default: `1`.
* __pdf__ | `string`: link naar PDF-bestand voor ingebakken pagina's. Default: `none`.
* __showTutorial__ | `boolean`: handleiding voor het schetsblok tonen bij het opstarten. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: bepaalt of de knoppen moeten worden verborgen als de breedte van de werkbalk niet voldoende is (anders wordt er een nieuwe regel gestart). Default: `false`.
* __transmitOwner__ | `boolean`: de vraag of de acties van de eigenaar in real time naar andere gebruikers moeten worden doorgestuurd. Default: `true`.
* __groupMode__ | `boolean`: controleert of alle handelingen van de gebruiker aan iedereen worden doorgegeven. Default: `false`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onChange__ | `function`: callback aangeroepen wanneer een nieuw lijnelement wordt getekend. Default: `onChange() {}`.


## Voorbeelden

```jsx live
<Sketchpad canvasWidth={750} />
```

