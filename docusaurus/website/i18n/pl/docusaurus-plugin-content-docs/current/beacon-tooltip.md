---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Komponent umieszczający latarnię nawigacyjną na lekcji, albo samodzielnie, albo dołączony do `celu`. Po najechaniu lub kliknięciu na latarnię nawigacyjną, wyświetlana jest etykieta z narzędziami.

## Opcje

* __title__ | `(string|node)`: tytuł, który ma być wyświetlany w górnej części etykiety narzędzia. Default: `none`.
* __content__ | `(string|node)`: zawartość etykiety narzędzia. Default: `'`content` comes here...'`.
* __event__ | `string`: jeśli jest ustawione na `kliknięcie`, etykieta narzędzi jest przełączana po kliknięciu na sygnalizator; jeśli jest ustawione na `przechylenie`, etykieta narzędzi jest aktywowana przez najechanie kursorem myszy. Default: `'click'`.
* __placement__ | `string`: umieszczenie końcówki narzędzia względem "celu" (`top`, `top-start`, `top-end`, `bottom`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`, `auto`, lub `center`). Default: `'left'`.
* __target__ | `string`: selektor klasy lub ID elementu do dołączenia etykiety narzędzia do. Default: `''`.
* __offset__ | `number`: odległość pomiędzy końcówką narzędzia a "celem" w pikselach. Default: `15`.
* __onChange__ | `function`: wywołanie zwrotne po zmianie stanu etykiety narzędzia. Otrzymuje dwa argumenty: `aktion` (`otwarcie` lub `zamknięcie`) oraz przekazane `propy`. Default: `onChange() {}`.


## Przykłady

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



