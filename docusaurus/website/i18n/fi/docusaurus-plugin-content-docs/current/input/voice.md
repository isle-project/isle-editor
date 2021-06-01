---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

Puheentulokomponentti.

## Vaihtoehdot

* __autorecord__ | `boolean`: säätää, aloitetaanko tallennus automaattisesti. Default: `false`.
* __defaultValue__ | `string`: oletustekstiarvo. Default: `''`.
* __grammars__ | `array`: puhekielioppiluettelo (ei tuettu). Default: `[]`.
* __legend__ | `(string|node)`: syöttökentän edessä näkyvä legenda. Default: `''`.
* __mode__ | `string`: aseta arvoksi `full` näyttääksesi tekstinsyöttökentän mikrofonin rinnalla, `status` näyttääksesi vain tilarivin, jossa on transkriptoidut tekstit, `microphone` näyttääksesi vain painikkeen nauhoituksen vaihtamiseksi, tai `none`, kun äänensyötön pitäisi olla näkymätön ja sitä pitäisi ohjata pelkästään pikanäppäimillä / äänikomennoilla.. Default: `'full'`.
* __maxAlternatives__ | `number`: puheentunnistustulosta kohti annettavien vaihtoehtojen enimmäismäärä. Default: `1`.
* __onChange__ | `function`: callback-funktio, jota kutsutaan, kun tekstinsyötön arvo päivitetään. Default: `onChange() {}`.
* __onClick__ | `function`: takaisinkutsufunktio, joka käynnistetään, kun mikrofonipainiketta napsautetaan.. Default: `onClick() {}`.
* __onFinalText__ | `function`: Callback-funktio, joka käynnistyy, kun lopullinen teksti on vastaanotettu.. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: callback-funktio, joka käynnistetään tallennuksen alkaessa. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: callback-toiminto, joka käynnistyy, kun tallennus on pysäytetty. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: callback-toiminto, jota kutsutaan tekstisegmenttien kanssa. Default: `onSegment() {}`.
* __onSubmit__ | `function`: callback-funktio, kun lähetät tekstinsyöttöarvon painamalla "Enter"-näppäintä.. Default: `onSubmit() {}`.
* __placeholder__ | `string`: tekstinsyötön paikanhaltija. Default: `none`.
* __remote__ | `object`: objekti, jossa on `start`, `stop` ja `toggle` ja niihin liittyvät pikanäppäimet.. Default: `none`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __timeout__ | `number`: millisekuntien määrä, jonka jälkeen tallennus keskeytetään.. Default: `none`.
* __stopTooltip__ | `string`: tallennuksen aikana näytettävä tooltip-viesti. Default: `none`.
* __startTooltip__ | `string`: tooltip-viesti näytetään, kun ei tallenneta. Default: `none`.
* __tooltipPlacement__ | `string`: työkaluvihjeen suunta. Default: `'left'`.
* __width__ | `number`: äänensyötön leveys (px). Default: `500`.
* __height__ | `number`: äänensyötön korkeus (px). Default: `36`.


## Esimerkkejä

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



