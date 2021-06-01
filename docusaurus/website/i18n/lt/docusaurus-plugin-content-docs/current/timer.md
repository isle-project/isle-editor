---
id: timer 
title: Timer
sidebar_label: Timer
---

Rodo laikmatį, kuris pasibaigus laikui įjungia iš anksto nustatytą grįžtamąjį ryšį. Pavyzdinis naudojimo atvejis - viktorinų laiko nustatymas.

## Parinktys

* __id__ | `string`: unikalus laikmačio `string` ID. Jei nustatomas ID, laikmačio komponentas yra pastovus per puslapio atnaujinimus.. Default: `none`.
* __active__ | `boolean (required)`: vėliavėlė, kurią galima perjungti norint paleisti arba pristabdyti laikmatį.. Default: `none`.
* __belowZero__ | `boolean`: kontroliuoja, ar laikmatis tęsia skaičiavimą pasibaigus trukmei.. Default: `false`.
* __duration__ | `number (required)`: laikmačio trukmė sekundėmis. Default: `none`.
* __invisible__ | `boolean`: kontroliuoja, ar laikmatis turi būti paslėptas.. Default: `false`.
* __legend__ | `string`: priešais laikmatį rodomas tekstas. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onTimeUp__ | `function`: atgalinis skambutis, iškviečiamas, kai baigiasi laikmatis.. Default: `onTimeUp() {}`.


## Pavyzdžiai

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

