---
id: timer 
title: Timer
sidebar_label: Timer
---

Megjelenít egy időzítőt, amely az idő leteltével egy előre meghatározott visszahívást indít. Egy példa a vetélkedők időzítésére.

## Opciók

* __id__ | `string`: az időzítő egyedi `string` azonosítója. Ha az ID be van állítva, akkor az időzítő komponens az oldalfrissítések során is megmarad.. Default: `none`.
* __active__ | `boolean (required)`: az időzítő indításához vagy szüneteltetéséhez kapcsolható jelző. Default: `none`.
* __belowZero__ | `boolean`: szabályozza, hogy az időzítő folytassa-e a számlálást az időtartam kimerülése után.. Default: `false`.
* __duration__ | `number (required)`: az időzítő időtartama másodpercben. Default: `none`.
* __invisible__ | `boolean`: szabályozza, hogy az időzítő el legyen-e rejtve. Default: `false`.
* __legend__ | `string`: az időzítő előtt megjelenő szöveg. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onTimeUp__ | `function`: visszahívás az időzítő lejártakor. Default: `onTimeUp() {}`.


## Példák

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

