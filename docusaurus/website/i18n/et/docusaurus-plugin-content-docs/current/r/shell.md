---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Interaktiivne R Shell, mida saab kasutada R käskude täitmiseks pilves, kasutades [OpenCPU](https://www.opencpu.org/).

## Valikud

* __code__ | `string`: Hinnatav R-kood. Default: `''`.
* __solution__ | `string`: programmeerimisküsimuste puhul R-kood "string", mis kujutab endast probleemi ametlikku lahendust.. Default: `''`.
* __hints__ | `array<(string|node)>`: programmeerimisküsimuste puhul mitmesuguseid vihjeid, mis annavad juhiseid probleemi käsitlemiseks. Default: `[]`.
* __addPreceding__ | `boolean`: kui see on määratud true, siis hindab kest kogu koodi praegusest komponendist ja kõigist eelnevatest, mis esinevad õppetunnis.. Default: `false`.
* __libraries__ | `array`: R-raamatukogud, mis peaksid automaatselt laadima, kui sisendkood käivitatakse.. Default: `[]`.
* __precompute__ | `boolean`: kontrollib, kas vaikimisi kood tuleb käivitada, kui komponent on paigaldatud.. Default: `false`.
* __prependCode__ | `(string|array)`: R-koodi "string" (või R-koodiplokkide "rida"), mis lisatakse koodis "code" salvestatud koodile, kui seda hinnatakse.. Default: `''`.
* __chat__ | `boolean`: kontrollib, kas grupivestluse funktsioon peaks olema lubatud. Default: `false`.
* __disabled__ | `boolean`: kontrollib, kas keelata kõik kasutaja sisendid ja muuta koodiblokk staatiliseks.. Default: `false`.
* __lines__ | `number`: kuvatavate ridade arv. Default: `5`.
* __resettable__ | `boolean`: kontrollib, kas kuvada nullinuppu vaikimisi koodisisestuse taastamiseks.. Default: `false`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onChange__ | `function`: callback, mida kutsutakse esile iga kord, kui tekstivälja sisend muutub. Default: `onChange() {}`.
* __onEvaluate__ | `function`: callback, mis käivitub iga kord, kui nupule `Evaluate` vajutatakse.. Default: `onEvaluate(){}`.
* __onResult__ | `function`: callback, mida kutsutakse üles iga kord, kui pilvest saadakse koodi täitmise tulemus. Tulemus `string` edastatakse callback-funktsioonile ainsa argumendina.. Default: `onResult() {}`.


## Näited

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
