---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

Hangbeviteli komponens.

## Opciók

* __autorecord__ | `boolean`: szabályozza, hogy automatikusan elinduljon-e a felvétel. Default: `false`.
* __defaultValue__ | `string`: alapértelmezett szöveges érték. Default: `''`.
* __grammars__ | `array`: beszéd nyelvtani lista (nem támogatott). Default: `[]`.
* __legend__ | `(string|node)`: a beviteli mező előtt megjelenő legenda. Default: `''`.
* __mode__ | `string`: állítsa be a "teljes" értéket, hogy a mikrofon mellett egy szöveges beviteli mezőt is megjelenítsen, a "státusz" értéket, hogy csak egy állapotsort jelenítsen meg az átírt szövegekkel, a "mikrofon" értéket, hogy csak egy gombot jelenítsen meg a felvétel átkapcsolására, vagy a "semmi" értéket, ha a hangbevitel láthatatlan és kizárólag gyorsbillentyűkkel / hangparancsokkal vezérelhető.. Default: `'full'`.
* __maxAlternatives__ | `number`: a beszédfelismerési eredményenként megadott alternatívák maximális száma. Default: `1`.
* __onChange__ | `function`: callback függvény, amelyet a szöveges bemeneti érték frissítésekor hívnak meg. Default: `onChange() {}`.
* __onClick__ | `function`: a mikrofon gombra kattintáskor meghívott callback függvény. Default: `onClick() {}`.
* __onFinalText__ | `function`: callback funkció, amely a végső szöveg beérkezése után hívódik meg. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: callback függvény, amelyet a felvétel indításakor hívnak meg. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: callback funkció, amely a felvétel leállítása után hívódik. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: szöveges szegmensekkel hívott callback funkció. Default: `onSegment() {}`.
* __onSubmit__ | `function`: callback funkció, amikor a szöveges bemeneti értéket az "Enter" gomb megnyomásával elküldi.. Default: `onSubmit() {}`.
* __placeholder__ | `string`: szöveges beviteli helyőrző. Default: `none`.
* __remote__ | `object`: objektum a "start", "stop", és "kapcsoló" és a hozzájuk tartozó gyorsbillentyűkkel.. Default: `none`.
* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __timeout__ | `number`: a milliszekundumok száma, amely után a felvétel időzítése megtörténjen. Default: `none`.
* __stopTooltip__ | `string`: felvétel közben megjelenő tooltip üzenet. Default: `none`.
* __startTooltip__ | `string`: tooltip üzenet jelenik meg, amikor nincs felvétel. Default: `none`.
* __tooltipPlacement__ | `string`: a tooltip iránya. Default: `'left'`.
* __width__ | `number`: hang bemeneti szélesség (px-ben). Default: `500`.
* __height__ | `number`: hangbevitel magassága (px-ben). Default: `36`.


## Példák

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



