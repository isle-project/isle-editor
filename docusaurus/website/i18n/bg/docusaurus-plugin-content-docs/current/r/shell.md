---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Интерактивен R Shell, който може да се използва за изпълнение на R команди в облака с помощта на [OpenCPU](https://www.opencpu.org/).

## Опции

* __code__ | `string`: R код, който трябва да бъде оценен. Default: `''`.
* __solution__ | `string`: за въпроси по програмиране - код R `string`, представляващ официалното решение на проблема. Default: `''`.
* __hints__ | `array<(string|node)>`: за въпроси, свързани с програмирането, набор от подсказки, които дават насоки как да се подходи към проблема.. Default: `[]`.
* __addPreceding__ | `boolean`: ако е зададена стойност true, обвивката ще оцени целия код от текущия компонент и всички предишни, които се срещат в урока.. Default: `false`.
* __libraries__ | `array`: R библиотеки, които трябва да се зареждат автоматично при изпълнение на входния `код`. Default: `[]`.
* __precompute__ | `boolean`: контролира дали кодът по подразбиране трябва да се изпълни, след като компонентът е монтиран. Default: `false`.
* __prependCode__ | `(string|array)`: `нишка` от R-код (или `масив` от блокове R-код), която се добавя към кода, съхранен в `code`, при оценяване. Default: `''`.
* __chat__ | `boolean`: контролира дали функционалността на груповия чат трябва да бъде активирана. Default: `false`.
* __disabled__ | `boolean`: контролира дали да се забранят всички потребителски входове и блокът с код да бъде статичен. Default: `false`.
* __lines__ | `number`: брой редове за показване. Default: `5`.
* __resettable__ | `boolean`: контролира дали да се показва бутон за нулиране, за да се възстанови въвеждането на кода по подразбиране.. Default: `false`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onChange__ | `function`: обратна връзка, задействана при всяка промяна на входа на текстовото поле. Default: `onChange() {}`.
* __onEvaluate__ | `function`: обратна връзка, която се задейства при натискане на бутона `Evaluate`.. Default: `onEvaluate(){}`.
* __onResult__ | `function`: обратно извикване, когато резултатът от изпълнението на код се получи от облака. Резултатът `string` се предава като единствен аргумент на функцията за обратно извикване. Default: `onResult() {}`.


## Примери

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
