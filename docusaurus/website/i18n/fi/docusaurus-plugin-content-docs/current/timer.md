---
id: timer 
title: Timer
sidebar_label: Timer
---

Näyttää ajastimen, joka käynnistää ennalta määritetyn takaisinsoiton, kun aika on kulunut. Esimerkkikäyttötapaus on tietokilpailujen ajoitus.

## Vaihtoehdot

* __id__ | `string`: ajastimen yksilöllinen `merkkijono` ID. Jos ID on asetettu, ajastinkomponentti on pysyvä sivun päivitysten aikana.. Default: `none`.
* __active__ | `boolean (required)`: lippu, jota voidaan vaihtaa ajastimen käynnistämiseksi tai keskeyttämiseksi.. Default: `none`.
* __belowZero__ | `boolean`: valvoo, jatkaako ajastin laskentaa sen jälkeen, kun kesto on kulunut loppuun.. Default: `false`.
* __duration__ | `number (required)`: ajastimen kesto sekunteina. Default: `none`.
* __invisible__ | `boolean`: ohjaa, pitäisikö ajastin piilottaa. Default: `false`.
* __legend__ | `string`: ajastimen edessä näkyvä teksti. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onTimeUp__ | `function`: callback, joka käynnistyy ajastimen päättyessä.. Default: `onTimeUp() {}`.


## Esimerkkejä

```jsx live
<Timer 
    id='test-quiz'
    active={true} 
    duration={50} 
    onTimeUp={() => {
      alert( 'done' );
    }}
/>
```

