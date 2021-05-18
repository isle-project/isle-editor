---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

Komponent wejścia głosowego.

## Opcje

* __autorecord__ | `boolean`: kontroluje, czy automatycznie rozpoczynać nagrywanie. Default: `false`.
* __defaultValue__ | `string`: Domyślna wartość tekstowa. Default: `''`.
* __grammars__ | `array`: lista gramatyki mowy (bez wsparcia). Default: `[]`.
* __legend__ | `(string|node)`: legenda wyświetlana przed polem wprowadzania danych. Default: `''`.
* __mode__ | `string`: ustawić na `pełne` wyświetlanie pola wprowadzania tekstu obok mikrofonu, `status` wyświetlanie tylko paska stanu z transkrybowanymi tekstami, `mikrofon` wyświetlanie tylko przycisku do przełączania nagrywania, lub `nie`gdy wejście głosowe powinno być niewidoczne i czysto kontrolowane za pomocą klawiszy skrótów / poleceń głosowych. Default: `'full'`.
* __maxAlternatives__ | `number`: maksymalna liczba alternatywnych rozwiązań na jeden wynik rozpoznawania mowy. Default: `1`.
* __onChange__ | `function`: funkcja callback wywoływana przy aktualizacji wartości wprowadzania tekstu. Default: `onChange() {}`.
* __onClick__ | `function`: funkcja callback wywoływana po kliknięciu na przycisk mikrofonu. Default: `onClick() {}`.
* __onFinalText__ | `function`: funkcja callback wywoływana po otrzymaniu tekstu końcowego. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: funkcja callback wywoływana przy rozpoczęciu nagrywania. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: funkcja callback wywoływana po zatrzymaniu nagrywania. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: funkcja wywołania zwrotnego z segmentami tekstowymi. Default: `onSegment() {}`.
* __onSubmit__ | `function`: funkcja callback podczas wysyłania wartości wprowadzania tekstu poprzez naciśnięcie "Enter". Default: `onSubmit() {}`.
* __placeholder__ | `string`: miejsce na wprowadzenie tekstu. Default: `none`.
* __remote__ | `object`: obiekt z "startem", "zatrzymaniem", "przełączaniem" i powiązanymi klawiszami funkcyjnymi. Default: `none`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __timeout__ | `number`: liczba milisekund, po upływie których można przerwać nagrywanie. Default: `none`.
* __stopTooltip__ | `string`: komunikat z etykietą narzędzia wyświetlany podczas nagrywania. Default: `none`.
* __startTooltip__ | `string`: komunikat z etykietą narzędzia wyświetlany podczas nie nagrywania. Default: `none`.
* __tooltipPlacement__ | `string`: kierunek końcówki narzędzia. Default: `'left'`.
* __width__ | `number`: szerokość wejścia głosowego (w px). Default: `500`.
* __height__ | `number`: wysokość wejścia głosowego (w px). Default: `36`.


## Przykłady

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



