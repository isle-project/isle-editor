---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

Joonistusplaat märkmete tegemiseks loengu slaididele või tühjadele lehekülgedele.

## Valikud

* __autoSave__ | `boolean`: kontrollib, kas toimetaja peaks salvestama jooksva teksti brauseri lokaalsesse mällu teatud aja tagant. Default: `true`.
* __feedbackButtons__ | `boolean`: kontrollib, kas igal slaidil kuvatakse tagasiside nuppe. Default: `false`.
* __intervalTime__ | `number`: aeg automaatse salvestamise vahel. Default: `10000`.
* __hideInputButtons__ | `boolean`: kontrollib, kas joonistus- ja tekstisisestusnuppe varjata. Default: `false`.
* __hideNavigationButtons__ | `boolean`: kontrollib, kas lehekülgede vahel navigeerimiseks mõeldud nuppe varjata.. Default: `false`.
* __hideSaveButtons__ | `boolean`: kontrollib, kas salvestusnuppe varjata. Default: `false`.
* __hideTransmitButtons__ | `boolean`: kontrollib, kas kasutaja tegevuste edastamiseks mõeldud nuppe varjata. Default: `false`.
* __brushSize__ | `number`: pintsli suurus, millega maalida. Default: `4`.
* __color__ | `string`: pintsli ja tekstide värvus. Default: `'#444444'`.
* __canvasWidth__ | `number`: lõuendi elemendi laius (px). Default: `1200`.
* __canvasHeight__ | `number`: lõuendi elemendi kõrgus (px). Default: `700`.
* __fullscreen__ | `boolean`: kontrollib, kas lõuendi suurust muudetakse automaatselt vastavalt brauseri akna laiusele ja kõrgusele.. Default: `false`.
* __fill__ | `string`: kui `horisontaalne`, täidab kogu olemasoleva horisontaalse ruumi PDF-i joonistamisel; kui `vertikaalne`, kasutatakse kogu vertikaalset ruumi, et vältida y-telje ülevoolu.. Default: `'vertical'`.
* __disabled__ | `boolean`: kas muuta komponent ainult lugemiseks ja keelata joonistamine visandiplaadile. Default: `false`.
* __fontFamily__ | `string`: kirjatüüpkond. Default: `'Arial'`.
* __fontSize__ | `number`: kirjasuurus. Default: `24`.
* __nodes__ | `object`: komponendid, mis esitatakse määratud slaidide peal; "võtmed" peaksid vastama leheküljenumbritele, "väärtused" komponentidele.. Default: `{}`.
* __noPages__ | `number`: esialgne lehekülgede arv. Default: `1`.
* __pdf__ | `string`: link PDF-failile sisseehitatud lehekülje taustade jaoks. Default: `none`.
* __showTutorial__ | `boolean`: Näita sketchpad'i juhendmaterjali käivitamisel. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: kontrollib, kas nuppe hakatakse varjama, kui tööriistariba laius ei ole piisav (vastasel juhul alustatakse uut rida).. Default: `false`.
* __transmitOwner__ | `boolean`: kas omaniku tegevused tuleks edastada teistele kasutajatele reaalajas. Default: `true`.
* __groupMode__ | `boolean`: kontrollib, kas kõik kasutaja tegevused edastatakse kõigile teistele.. Default: `false`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onChange__ | `function`: callback, mida kutsutakse esile iga kord, kui joonistatakse uus joonelement. Default: `onChange() {}`.


## Näited

```jsx live
<Sketchpad canvasWidth={750} />
```

