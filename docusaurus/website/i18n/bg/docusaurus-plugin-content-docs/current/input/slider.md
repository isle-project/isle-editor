---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

Компонент за въвеждане на плъзгач. Може да се използва като част от табло за управление на ISLE или самостоятелно. В последния случай искате да обработвате промените чрез атрибута `onChange` или да свържете стойността с глобална променлива чрез атрибута `bind`.

## Опции

* __defaultValue__ | `number`: Началната стойност на плъзгача. Default: `10`.
* __disabled__ | `boolean`: контролира дали входът на плъзгача е активен или не. Ако се зададе стойност true, плъзгачът ще присъства на екрана, макар и в сиво.. Default: `false`.
* __inline__ | `boolean`: контролира дали плъзгачът да се постави в една линия с текста или извън него.. Default: `false`.
* __legend__ | `(string|node)`: надпис на входа. Default: `none`.
* __max__ | `number`: Максималната стойност на плъзгача. Default: `100`.
* __maxLabel__ | `string`: етикетът да се показва вдясно от плъзгача вместо максималната стойност. Default: `none`.
* __min__ | `number`: Минималната стойност на плъзгача. Default: `0`.
* __minLabel__ | `string`: етикетът да се показва вляво от плъзгача вместо минималната стойност. Default: `none`.
* __onChange__ | `function`: обратна връзка, извикана с новата стойност, когато стойността на плъзгача се промени. Default: `onChange() {}`.
* __precision__ | `number`: закръгляне на входа. Стойността ще бъде закръглена така, че да няма повече значещи цифри от точността. Например, ако желаете да използвате само цели числа, ще се използва точност 10, докато ако желаете да закръгляте до стотици, ще използвате точност 0,001.. Default: `10`.
* __step__ | `(number|string)`: размер на стъпката на плъзгача. Default: `1`.
* __hideTooltip__ | `boolean`: контролира дали да се скрие подсказката за инструменти. Default: `false`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __numberInputStyle__ | `object`: CSS вградени стилове за компонент за въвеждане на числа. Default: `{}`.
* __rangeInputStyle__ | `object`: CSS вграден стил за компонента за въвеждане на диапазон. Default: `{}`.


## Примери

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Mathematical Symbols via LaTeX', value: 'mathematicalSymbols' },
        { label: 'Custom Style', value: 'customStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SliderInput
    legend="Success Probability"
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```

</TabItem>

<TabItem value="mathematicalSymbols">

```jsx live
<SliderInput
    legend={<span>$\sigma$ (standard deviation)</span>}
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```

</TabItem>

<TabItem value="customStyle">

```jsx live
<SliderInput
    legend="Success Probability"
    style={{ padding: 30, fontSize: 25, background: 'tan', fontFamily: 'Georgia'}}
    rangeInputStyle ={{ minWidth: 500}}
    numberInputStyle = {{ background: 'white', boxShadow: '2px 2px 0px black'}}
    defaultValue={0.5}
    min={0}
    max={200}
    step={0.01}
/>
```

</TabItem>

</Tabs>
