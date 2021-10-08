---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

Piirustuslehtiö luentokalvoille tai tyhjille sivuille tehtäviin muistiinpanoihin.

## Vaihtoehdot

* __autoSave__ | `boolean`: ohjaa, pitäisikö editorin tallentaa nykyinen teksti selaimen paikalliseen tallennustilaan tietyllä aikaväliajalla.. Default: `true`.
* __feedbackButtons__ | `boolean`: ohjaa, näytetäänkö palautepainikkeet jokaisessa diassa. Default: `false`.
* __intervalTime__ | `number`: automaattisten tallennusten välinen aika. Default: `10000`.
* __hideInputButtons__ | `boolean`: ohjaa, piilotetaanko piirto- ja tekstinsyöttöpainikkeet. Default: `false`.
* __hideNavigationButtons__ | `boolean`: ohjaa, piilotetaanko painikkeet sivujen välistä navigointia varten.. Default: `false`.
* __hideSaveButtons__ | `boolean`: valvoo, piilotetaanko tallennuspainikkeet. Default: `false`.
* __hideTransmitButtons__ | `boolean`: ohjaa, piilotetaanko painikkeet käyttäjän toimintojen välittämistä varten.. Default: `false`.
* __brushSize__ | `number`: siveltimen koko, jolla maalataan. Default: `4`.
* __color__ | `string`: siveltimen ja tekstien väri. Default: `'#444444'`.
* __canvasWidth__ | `number`: canvas-elementin leveys (px). Default: `1200`.
* __canvasHeight__ | `number`: canvas-elementin korkeus (px). Default: `700`.
* __fullscreen__ | `boolean`: määrittää, muutetaanko kanvaasin koko automaattisesti selainikkunan leveyteen ja korkeuteen.. Default: `false`.
* __fill__ | `string`: jos `horizontal`, täytetään kaikki käytettävissä oleva vaakasuora tila PDF:ää piirrettäessä; jos `vertical`, kaikki pystysuora tila käytetään y-akselin ylivuodon estämiseksi.. Default: `'vertical'`.
* __disabled__ | `boolean`: tehdäänkö komponentista vain lukuoikeus ja kielletäänkö piirtäminen luonnosalustalla.. Default: `false`.
* __fontFamily__ | `string`: fonttiperhe. Default: `'Arial'`.
* __fontSize__ | `number`: fonttikoko. Default: `24`.
* __nodes__ | `object`: komponentit, jotka renderöidään määritettyjen diojen päälle; `avaimet` vastaavat sivunumeroita, `arvot` komponentteja.. Default: `{}`.
* __noPages__ | `number`: alkuperäinen sivumäärä. Default: `1`.
* __pdf__ | `string`: linkki PDF-tiedostoon sisäänrakennettuja sivutaustoja varten. Default: `none`.
* __showTutorial__ | `boolean`: näytä luonnosalustan opetusohjelma käynnistyksen yhteydessä. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: ohjaa, aloitetaanko painikkeiden piilottaminen, kun työkalurivin leveys ei riitä (muuten aloitetaan uusi rivi).. Default: `false`.
* __transmitOwner__ | `boolean`: välitetäänkö omistajan toimet muille käyttäjille reaaliaikaisesti.. Default: `true`.
* __groupMode__ | `boolean`: valvoo, välitetäänkö kaikki käyttäjän toimet kaikille muille.. Default: `false`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onChange__ | `function`: callback, joka käynnistyy aina kun uusi viivaelementti piirretään.. Default: `onChange() {}`.


## Esimerkkejä

```jsx live
<Sketchpad canvasWidth={750} />
```

