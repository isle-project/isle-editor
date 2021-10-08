---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Interaktivní shell pro Javascript, který lze použít ke spouštění příkazů JavaScriptu. Shell obsahuje konzolu, která zobrazuje chybová hlášení, varování atd.

## Možnosti

* __code__ | `string`: Kód JavaScriptu, který se má vyhodnotit. Default: `''`.
* __solution__ | `string`: pro programátorské otázky kód `řetězec` představující oficiální řešení problému. Default: `''`.
* __hints__ | `array<(string|node)>`: u otázek týkajících se programování řada nápověd, které poskytují návod, jak k problému přistupovat.. Default: `[]`.
* __precompute__ | `boolean`: řídí, zda se má po připojení komponenty spustit výchozí kód.. Default: `false`.
* __chat__ | `boolean`: kontroluje, zda má být povolena funkce skupinového chatu.. Default: `false`.
* __check__ | `string`: připojený kód JavaScriptu pro kontrolu `kódu`, který se má vyhodnotit.. Default: `none`.
* __disabled__ | `boolean`: řídí, zda se mají zakázat všechny uživatelské vstupy a blok kódu má být statický.. Default: `false`.
* __lines__ | `number`: počet řádků, které se mají zobrazit. Default: `5`.
* __className__ | `string`: název třídy. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onChange__ | `function`: zpětné volání vyvolané vždy, když se změní vstupní textové pole.. Default: `onChange() {}`.
* __onEvaluate__ | `function`: zpětné volání vyvolané vždy, když je kliknuto na tlačítko `Vyhodnotit`.. Default: `onEvaluate() {}`.
* __vars__ | `object`: scope objekt s proměnnými, které mají být k dispozici vyhodnocovanému `code`. Default: `none`.


## Příklady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Ten Lines', value: 'mLines' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<JSShell code = {`var a = 2; 
var b = 2;
console.log(a + b);`} />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />
```

</TabItem>

<TabItem value="mLines">

```jsx live
<JSShell lines={10} />
```

</TabItem>

</Tabs>




