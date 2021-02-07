---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Een interactieve R-Shell die gebruikt kan worden om R-commando's in de cloud uit te voeren met behulp van [OpenCPU](https://www.opencpu.org/).

## Options

* __code__ | `string`: Te evalueren R-code. Default: `''`.
* __solution__ | `string`: voor programmeervragen, R-code `string` die de officiële oplossing voor het probleem vertegenwoordigt.. Default: `''`.
* __hints__ | `array<(string|node)>`: voor programmeervragen, een reeks hints die een leidraad bieden voor de aanpak van het probleem. Default: `[]`.
* __addPreceding__ | `boolean`: indien ingesteld op true, zal de commandoregel alle code van de huidige component en alle vorige die in de les voorkomen, evalueren.. Default: `false`.
* __libraries__ | `array`: R-bibliotheken die automatisch moeten worden geladen wanneer de invoer `code` wordt uitgevoerd. Default: `[]`.
* __precompute__ | `boolean`: controleert of de standaardcode moet worden uitgevoerd zodra het component is gemonteerd. Default: `false`.
* __prependCode__ | `(string|array)`: R-code `string` (of `array` van R-codeblokken) die bij de evaluatie moet worden voorgeprogrammeerd op de code die is opgeslagen in `code`.. Default: `''`.
* __chat__ | `boolean`: bepaalt of de groeps-chatfunctie moet worden ingeschakeld. Default: `false`.
* __disabled__ | `boolean`: bepaalt of alle gebruikersinvoer moet worden uitgeschakeld en of de code moet worden geblokkeerd.. Default: `false`.
* __lines__ | `number`: aantal weer te geven regels. Default: `5`.
* __resettable__ | `boolean`: regelt of er een resetknop moet worden weergegeven voor het herstellen van de standaardcode-invoer. Default: `false`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onChange__ | `function`: terugbellen wordt aangeroepen wanneer de invoer van het tekstveld verandert. Default: `onChange() {}`.
* __onEvaluate__ | `function`: terugbellen wordt aangeroepen wanneer op de `Evaluate`-knop wordt geklikt. Default: `onEvaluate(){}`.
* __onResult__ | `function`: callback aangeroepen wanneer het resultaat van een code-uitvoering uit de cloud wordt verkregen. Het resultaat `string` wordt als enige argument doorgegeven aan de callback-functie. Default: `onResult() {}`.


## Examples

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
/>
```

