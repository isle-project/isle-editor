---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Een interactieve R-Shell die gebruikt kan worden om R-commando's in de cloud uit te voeren met behulp van [OpenCPU](https://www.opencpu.org/).

## Opties

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


## Voorbeelden

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Precompute & Disabled', value: 'precompute' },
        { label: 'Hints & Solution', value: 'hintsAndSolution' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Add Preceding Code', value: 'addPreceding' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
/>
```

</TabItem>

<TabItem value="precompute" >

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
    precompute
    disabled
    lines={2}
/>
```

</TabItem>

<TabItem value="hintsAndSolution" >

```jsx live
**(a)** Use the lm() function to regress `Price` on: `EngineSize`, `Origin`, `MPG.highway`, `MPG.city` and `Horsepower`.

<RShell 
    id="prob1a"
    code="" 
    solution={`cars.lm <- lm(Price ~ EngineSize + Origin + MPG.highway + MPG.city + Horsepower,
data = Cars93)
summary(cars.lm)`} 
    lines={5} 
    hints={["Use the model formula syntax to specify your regression equation. Type ?formula if you don't remember how formulas work.","You can use the summary() function to retrieve a detailed regression output for a lm object"]}
/>
```

</TabItem>

<TabItem value="usingLibraries" >

<RShell libraries={['dplyr']} code={'starwars %>% filter(species == "Droid")'} lines={2} />

</TabItem>

<TabItem value="addPreceding" >

<RShell code="library(dplyr)" lines={2} disabled />

<RShell code={'starwars %>% filter(species == "Droid")'} addPreceding lines={2} />

</TabItem>

</Tabs>
