---
id: timer 
title: Timer
sidebar_label: Timer
---

Geeft een timer weer die een voorgedefinieerde terugbeltijd activeert als de tijd verstreken is. Een voorbeeld van een use case is de timing van de quizzen.

## Opties

* __id__ | `string`: de unieke `string` ID voor de timer. Als een ID is ingesteld, is de timercomponent blijvend over de pagina ververst. Default: `none`.
* __active__ | `boolean (required)`: vlag die kan worden omgeschakeld om de timer te starten of te pauzeren. Default: `none`.
* __belowZero__ | `boolean`: controleert of de timer doorgaat met tellen nadat de duur is uitgeput. Default: `false`.
* __duration__ | `number (required)`: duur in seconden voor de timer. Default: `none`.
* __invisible__ | `boolean`: bepaalt of de timer moet worden verborgen. Default: `false`.
* __legend__ | `string`: tekst die voor de timer wordt weergegeven. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onTimeUp__ | `function`: terugbellen wordt aangeroepen wanneer de timer afloopt. Default: `onTimeUp() {}`.


## Voorbeelden

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

