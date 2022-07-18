---
id: number-input
title: Number Input
sidebar_label: Number Input
---

Компонент за въвеждане на числа. Може да се използва като част от табло за управление ISLE или самостоятелно. В последния случай трябва да обработвате промените чрез атрибута `onChange` или да свържете стойността с глобална променлива чрез атрибута `bind`.

## Опции

* __bind__ | `string`: име на глобалната променлива, към която ще бъде присвоено числото. Default: `''`.
* __defaultValue__ | `number`: стойност, указваща стойността по подразбиране на входа при стартиране. Default: `0`.
* __disabled__ | `boolean`: boolean, показващ дали входът е активен или не. Default: `false`.
* __inline__ | `boolean`: указва дали входът да се показва inline. Default: `false`.
* __legend__ | `(string|node)`: низ, указващ текста, който се показва до въведеното число. Default: `none`.
* __max__ | `number`: число, указващо максималната стойност, която може да бъде вмъкната. Default: `null`.
* __min__ | `number`: число, указващо най-малката възможна стойност, която може да бъде вмъкната. Default: `null`.
* __numbersOnly__ | `boolean`: контролира дали се приемат само числа. Default: `true`.
* __placeholder__ | `string`: низ, указващ текста, който се показва, когато входът е празен (изисква `defaultValue` да е зададен на `null` или `undefined`). Default: `'0'`.
* __onBlur__ | `function`: функция за обратна връзка, която да се извика при използване на метод за размазване. Default: `onBlur() {}`.
* __onChange__ | `function`: функция за обратна връзка, която се извиква при промяна на въведеното число. Default: `onChange() {}`.
* __onKeyDown__ | `function`: функция за обратна връзка, която се извиква при натискане на някой клавиш. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: функция за обратна връзка, която се извиква при въвеждане на някой клавиш. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: функция за обратна връзка, която да се извика при освобождаване на клавиша. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: число, указващо постепенните промени при използване на стрелките за увеличаване. Default: `1`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __inputStyle__ | `object`: CSS инлайн стилове за входния елемент. Default: `{}`.
* __value__ | `number`: числова стойност (за контролиран компонент). Default: `none`.
* __tooltip__ | `string`: низ за подсказка (ако не е зададен, подсказката се генерира автоматично). Default: `none`.
* __tooltipPlacement__ | `string`: посока на подсказката. Default: `'left'`.


## Примери

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

