---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Ett interaktivt R Shell som kan användas för att utföra R-kommandon i molnet med hjälp av [OpenCPU] (https://www.opencpu.org/).

## Alternativ

* __code__ | `string`: R-kod som ska utvärderas. Default: `''`.
* __solution__ | `string`: För programmeringsfrågor, R-kod "sträng" som representerar den officiella lösningen på problemet.. Default: `''`.
* __hints__ | `array<(string|node)>`: För programmeringsfrågor, en rad tips som ger vägledning om hur man ska närma sig problemet.. Default: `[]`.
* __addPreceding__ | `boolean`: Om den är inställd på true kommer skalet att utvärdera all kod från den aktuella komponenten och alla tidigare komponenter som förekommer i lektionen.. Default: `false`.
* __libraries__ | `array`: R-bibliotek som ska laddas automatiskt när inmatningskoden körs.. Default: `[]`.
* __precompute__ | `boolean`: kontrollerar om standardkoden ska exekveras när komponenten har monterats. Default: `false`.
* __prependCode__ | `(string|array)`: R-kodsträng (eller ett array av R-kodblock) som ska läggas till den kod som lagras i `code` vid utvärderingen.. Default: `''`.
* __chat__ | `boolean`: kontrollerar om gruppchattfunktionen ska vara aktiverad. Default: `false`.
* __disabled__ | `boolean`: kontrollerar om alla användarinmatningar ska inaktiveras och om kodblocket ska vara statiskt. Default: `false`.
* __lines__ | `number`: antal rader som ska visas. Default: `5`.
* __resettable__ | `boolean`: Kontrollerar om en återställningsknapp ska visas för att återställa standardkodinmatningen.. Default: `false`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onChange__ | `function`: callback som aktiveras när inmatningen i textfältet ändras. Default: `onChange() {}`.
* __onEvaluate__ | `function`: callback som aktiveras när knappen "Utvärdera" klickas.. Default: `onEvaluate(){}`.
* __onResult__ | `function`: callback som anropas när resultatet av en kodutförande erhålls från molnet. Resultatet `string` skickas som enda argument till callback-funktionen.. Default: `onResult() {}`.


## Exempel

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
