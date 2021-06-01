---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

En interaktiv R Shell, der kan bruges til at udføre R-kommandoer i skyen ved hjælp af [OpenCPU] (https://www.opencpu.org/).

## Indstillinger

* __code__ | `string`: R-kode, der skal evalueres. Default: `''`.
* __solution__ | `string`: for programmeringsspørgsmål, R-kode `string`, der repræsenterer den officielle løsning på problemet. Default: `''`.
* __hints__ | `array<(string|node)>`: for programmeringsspørgsmål, en række tips, der giver vejledning om, hvordan problemet skal gribes an. Default: `[]`.
* __addPreceding__ | `boolean`: hvis den er sat til true, vil skallen evaluere al kode fra den aktuelle komponent og alle tidligere komponenter, der forekommer i lektionen. Default: `false`.
* __libraries__ | `array`: R-biblioteker, der skal indlæses automatisk, når inputkoden udføres. Default: `[]`.
* __precompute__ | `boolean`: styrer, om standardkoden skal udføres, når komponenten er monteret. Default: `false`.
* __prependCode__ | `(string|array)`: R-kode `string` (eller `array` af R-kodeblokke), der skal tilføjes til den kode, der er gemt i `code`, når den evalueres. Default: `''`.
* __chat__ | `boolean`: kontrollerer, om gruppechatfunktionen skal være aktiveret. Default: `false`.
* __disabled__ | `boolean`: styrer, om alle brugerindtastninger skal deaktiveres, og om kodeblokken skal være statisk. Default: `false`.
* __lines__ | `number`: antal linjer, der skal vises. Default: `5`.
* __resettable__ | `boolean`: styrer, om der skal vises en nulstillingsknap til at genoprette standardkodeindtastningen. Default: `false`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onChange__ | `function`: callback, der påkaldes, når input i tekstfeltet ændres. Default: `onChange() {}`.
* __onEvaluate__ | `function`: callback, der påkaldes, når der klikkes på knappen `Evaluér`.. Default: `onEvaluate(){}`.
* __onResult__ | `function`: callback, der påkaldes, når resultatet af en kodeudførelse hentes fra skyen. Resultatet `string` sendes som det eneste argument til callback-funktionen. Default: `onResult() {}`.


## Eksempler

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
