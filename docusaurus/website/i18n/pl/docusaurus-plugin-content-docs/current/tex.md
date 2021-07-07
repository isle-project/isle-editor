---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

`TeX` to element ISLE, który może być użyty do wyświetlania równań LaTeX.

## Opcje

* __raw__ | `(string|number) (required)`: Dosłowne LaTeX-owe "sznurki" do oddania. Przyjmuje też `numery`. Default: `none`.
* __displayMode__ | `boolean`: `boolean` wskazujący, czy równanie ma być wyświetlane w linii, czy w trybie wyświetlania. Default: `false`.
* __numbered__ | `boolean`: kontroluje, czy ma być wyświetlany numer równania dla równań trybu wyświetlania. Default: `false`.
* __style__ | `object`: `obiekt` z parami klucz-wartość CSS, które mają być zastosowane do kontenera równań. Default: `{}`.
* __tag__ | `string`: Niestandardowe znaki wyświetlane dla równań wyświetlanych po prawej stronie. Domyślny numer równania wewnątrz lekcji. Default: `none`.
* __elems__ | `object`: `obiekt` z `kluczami` oznaczającymi znaki LaTeXa i odpowiadającymi im wartościami będącymi konfiguracją `obiektów` aby uczynić je interaktywnymi. Ustawienie opcji `podpowiedzi narzędzia` spowoduje wyświetlenie podpowiedzi po najechaniu kursorem na znaki LaTeXa. Ustawienie właściwości `zmienna` spowoduje wyświetlenie suwaka wejściowego do zmiany odpowiedniej zmiennej stanu; w tym przypadku obsługiwane są dodatkowe właściwości `legend`, `min`, `max` i `step`. Default: `{}`.
* __popoverPlacement__ | `string`: pozycja popover dla określonych `elemów` (albo `top`, `right`, `bottom`, albo `left`). Default: `'bottom'`.
* __onPopover__ | `function`: callback `funkcja` przy włączonym lub wyłączonym popoverze sterowania; otrzymuje status wyświetlania jako boolean jako jedyny argument. Default: `onPopover() {}`.
* __onClick__ | `function`: callback `funkcja` wywoływana za każdym razem, gdy użytkownik kliknie na równanie. Default: `none`.


## Przykłady

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



