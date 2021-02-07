--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Ein Dashboard für die kombinierte Handhabung mehrerer untergeordneter Eingabefelder.

## Options

* __autoStart__ | `boolean`: wenn auf `true` gesetzt, wird die Funktion `onGenerate` beim Start mit den Standard-Eingabewerten ausgeführt. Default: `true`.
* __autoUpdate__ | `boolean`: steuert, ob die Funktion "onGenerate" automatisch aufgerufen werden soll, wenn sich eines der untergeordneten Eingabefelder ändert. Default: `false`.
* __description__ | `string`: Dashboard-Beschreibung. Default: `''`.
* __disabled__ | `boolean`: steuert, ob das Dashboard deaktiviert werden soll. Default: `false`.
* __label__ | `string`: Tastenbeschriftung. Default: `none`.
* __maxWidth__ | `number`: maximale Breite des Armaturenbretts. Default: `600`.
* __className__ | `string`: Klassenname. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onGenerate__ | `function`: Funktion, die aufgerufen wird, wenn die Schaltfläche angeklickt wird oder sich einer der Dashboard-Eingabewerte ändert (wenn `autoUpdate` auf `true` gesetzt ist). Die Funktion wird mit den Werten der Eingabefelder aufgerufen, in der Reihenfolge, in der sie im Dashboard platziert sind. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: Kartentitel. Default: `''`.


## Examples

```jsx live
<Dashboard title="Alerter" onGenerate={(x)=>{ alert(x) }}>
    <SliderInput
        legend="Input value"
    />
</Dashboard>
```

