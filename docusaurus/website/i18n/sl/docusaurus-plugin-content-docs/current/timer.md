---
id: timer 
title: Timer
sidebar_label: Timer
---

Prikaže časovnik, ki bo sprožil vnaprej določen povratni klic, ko bo čas potekel. Primer uporabe je časovni razpored kvizov.

## Možnosti

* __id__ | `string`: edinstveni `string` ID za časovnik. Če je nastavljen ID, je komponenta časovnika trajna med osvežitvami strani.. Default: `none`.
* __active__ | `boolean (required)`: zastavica, s katero lahko preklapljate za zagon ali prekinitev časovnika.. Default: `none`.
* __belowZero__ | `boolean`: nadzoruje, ali časovnik nadaljuje s štetjem po izteku trajanja.. Default: `false`.
* __duration__ | `number (required)`: trajanje časovnika v sekundah. Default: `none`.
* __invisible__ | `boolean`: nadzoruje, ali naj bo časovnik skrit.. Default: `false`.
* __legend__ | `string`: besedilo, ki se prikaže pred časovnikom.. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onTimeUp__ | `function`: povratni klic, ki se sproži, ko poteče časovnik.. Default: `onTimeUp() {}`.


## Primeri

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

