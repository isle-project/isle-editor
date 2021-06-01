---
id: select-input
title: Select Input
sidebar_label: Select Input
---

Избор на входен компонент. Може да се използва като част от табло за управление ISLE или самостоятелно. В последния случай искате да обработвате промените чрез атрибута `onChange` или да обвържете стойността с глобална променлива чрез атрибута `bind`.

## Опции

* __bind__ | `string`: име на глобалната променлива, към която ще бъде присвоено числото. Default: `''`.
* __clearable__ | `boolean`: булева стойност, показваща дали може да се изтрие направеният(ите) избор(и). Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: стойност по подразбиране на входа при стартиране. Default: `none`.
* __disabled__ | `boolean`: контролира дали входът е активен или не. Default: `false`.
* __inline__ | `boolean`: указва дали входът да се показва inline. Default: `false`.
* __legend__ | `(string|node)`: текст, показван до входа. Default: `''`.
* __menuPlacement__ | `string`: разположение на менюто спрямо контролния елемент (`автоматично`, `отгоре` или `отдолу`). Default: `'auto'`.
* __multi__ | `boolean`: контролира дали може да се изберат няколко отговора.. Default: `false`.
* __onChange__ | `function`: функция за обратна връзка, която да се извика при направен избор. Default: `onChange() {}`.
* __options__ | `array`: масив, указващ наличните възможности за избор на потребителя. Default: `[]`.
* __placeholder__ | `string`: стойност, която да се показва, преди да се направи първоначален избор. Default: `none`.
* __tooltip__ | `string`: текст, показван при преминаване с мишката над легендата. Default: `none`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.


## Примери

```jsx live
<SelectInput
    legend="Choose the test direction"
    defaultValue="two-sided"
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```

