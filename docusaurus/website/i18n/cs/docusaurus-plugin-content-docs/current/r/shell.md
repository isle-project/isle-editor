---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Interaktivní R Shell, který lze použít ke spouštění příkazů R v cloudu pomocí [OpenCPU](https://www.opencpu.org/).

## Možnosti

* __code__ | `string`: Kód R, který se má vyhodnotit. Default: `''`.
* __solution__ | `string`: pro programátorské otázky, R kód `string` představující oficiální řešení problému. Default: `''`.
* __hints__ | `array<(string|node)>`: u otázek týkajících se programování řada nápověd, které poskytují návod, jak k problému přistupovat.. Default: `[]`.
* __addPreceding__ | `boolean`: pokud je nastaveno na true, shell vyhodnotí veškerý kód z aktuální komponenty a všech předchozích, které se v lekci vyskytly.. Default: `false`.
* __libraries__ | `array`: Knihovny R, které by se měly automaticky načíst při spuštění vstupního `kódu`.. Default: `[]`.
* __precompute__ | `boolean`: řídí, zda se má po připojení komponenty spustit výchozí kód.. Default: `false`.
* __prependCode__ | `(string|array)`: `řetězec` kódu R (nebo `pásmo` bloků kódu R), který se při vyhodnocování připojí ke kódu uloženému v `code`.. Default: `''`.
* __chat__ | `boolean`: kontroluje, zda má být povolena funkce skupinového chatu.. Default: `false`.
* __disabled__ | `boolean`: řídí, zda se mají zakázat všechny uživatelské vstupy a blok kódu má být statický.. Default: `false`.
* __lines__ | `number`: počet řádků, které se mají zobrazit. Default: `5`.
* __resettable__ | `boolean`: určuje, zda se má zobrazit tlačítko pro obnovení výchozího zadávání kódu.. Default: `false`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onChange__ | `function`: zpětné volání vyvolané vždy, když se změní vstupní textové pole.. Default: `onChange() {}`.
* __onEvaluate__ | `function`: zpětné volání vyvolané vždy, když je kliknuto na tlačítko `Vyhodnotit`.. Default: `onEvaluate(){}`.
* __onResult__ | `function`: zpětné volání vyvolané vždy, když je z cloudu získán výsledek provedení kódu. Výsledek `řetězec` je předáván jako jediný argument zpětné funkce.. Default: `onResult() {}`.


## Příklady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Multiline', value: 'multiline' },
        { label: 'Precompute & Disabled', value: 'precompute' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Add Preceding Code', value: 'addPreceding' },
        { label: 'Hints & Solution', value: 'hintsAndSolution' }
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

<TabItem value="multiline" >

```jsx live
<RShell code={`x <- runif( 100 );
y <- 3.0 * x + rnorm( 100 );
fit <- lm( y ~ x );
summary( fit );
`} resettable />
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

<TabItem value="usingLibraries" >

```jsx live
<RShell libraries={['dplyr']} code={'starwars %>% filter(species == "Droid")'} lines={2} />
```

</TabItem>

<TabItem value="addPreceding" >

```jsx live
<RShell code="library(dplyr)" lines={2} disabled />

<RShell code={'starwars %>% filter(species == "Droid")'} addPreceding lines={2} />
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

</Tabs>
