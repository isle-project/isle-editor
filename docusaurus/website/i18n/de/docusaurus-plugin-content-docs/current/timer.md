---
id: timer 
title: Timer
sidebar_label: Timer
---

Zeigt einen Timer an, der einen vordefinierten Callback auslöst, wenn die Zeit abgelaufen ist. Ein Beispiel für einen Anwendungsfall ist die Zeitmessung von Quizzen.

## Options

* __id__ | `string`: die eindeutige `String`-ID für den Timer. Wenn eine ID gesetzt ist, ist die Timer-Komponente über Seitenaktualisierungen hinweg beständig. Default: `none`.
* __active__ | `boolean (required)`: Flagge, die umgeschaltet werden kann, um den Timer zu starten oder zu pausieren. Default: `none`.
* __belowZero__ | `boolean`: steuert, ob der Timer weiterzählt, nachdem die Dauer erschöpft ist. Default: `false`.
* __duration__ | `number (required)`: Dauer in Sekunden für den Timer. Default: `none`.
* __invisible__ | `boolean`: steuert, ob der Timer ausgeblendet werden soll. Default: `false`.
* __legend__ | `string`: Text, der vor dem Timer angezeigt wird. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onTimeUp__ | `function`: Callback, der aufgerufen wird, wenn der Timer abläuft. Default: `onTimeUp() {}`.


## Examples

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

