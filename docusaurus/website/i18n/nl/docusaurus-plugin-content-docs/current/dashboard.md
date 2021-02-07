--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Een dashboard voor het combineren van de afhandeling van meerdere kinderinvoervelden.

## Options

* __autoStart__ | `boolean`: indien ingesteld op `true`, wordt de functie `onGenerate` bij het opstarten uitgevoerd met de standaard invoerwaarden. Default: `true`.
* __autoUpdate__ | `boolean`: bepaalt of de `onGenerate` functie automatisch moet worden aangeroepen als een van de invoervelden van het kind verandert. Default: `false`.
* __description__ | `string`: dashboardbeschrijving. Default: `''`.
* __disabled__ | `boolean`: controleert of het dashboard moet worden uitgeschakeld. Default: `false`.
* __label__ | `string`: knoplabel. Default: `none`.
* __maxWidth__ | `number`: maximale breedte van het dashboard. Default: `600`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onGenerate__ | `function`: functie aangeroepen wanneer op de knop wordt geklikt of wanneer een van de invoerwaarden van het dashboard verandert (als `autoUpdate` is ingesteld op `true`). De functie wordt aangeroepen met de waarden van de invoervelden, in de volgorde waarin ze in het dashboard zijn geplaatst.. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: kaarttitel. Default: `''`.


## Examples

```jsx live
<Dashboard title="Alerter" onGenerate={(x)=>{ alert(x) }}>
    <SliderInput
        legend="Input value"
    />
</Dashboard>
```

