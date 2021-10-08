---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Интерактивна обвивка за Javascript, която може да се използва за изпълнение на команди на JavaScript. Тя съдържа конзола, която показва съобщения за грешки, предупреждения и др.

## Опции

* __code__ | `string`: Код на JavaScript, който трябва да бъде оценен. Default: `''`.
* __solution__ | `string`: за въпроси по програмиране - код `string`, представляващ официалното решение на проблема. Default: `''`.
* __hints__ | `array<(string|node)>`: за въпроси, свързани с програмирането, набор от подсказки, които дават насоки как да се подходи към проблема.. Default: `[]`.
* __precompute__ | `boolean`: контролира дали кодът по подразбиране трябва да се изпълни, след като компонентът е монтиран. Default: `false`.
* __chat__ | `boolean`: контролира дали функционалността на груповия чат трябва да бъде активирана. Default: `false`.
* __check__ | `string`: добавен JavaScript код за проверка на `кода`, който трябва да бъде оценен. Default: `none`.
* __disabled__ | `boolean`: контролира дали да се забранят всички потребителски входове и блокът с код да бъде статичен. Default: `false`.
* __lines__ | `number`: брой редове за показване. Default: `5`.
* __className__ | `string`: име на класа. Default: `''`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onChange__ | `function`: обратна връзка, задействана при всяка промяна на входа на текстовото поле. Default: `onChange() {}`.
* __onEvaluate__ | `function`: обратна връзка, която се задейства при натискане на бутона `Evaluate`.. Default: `onEvaluate() {}`.
* __vars__ | `object`: обект от обхвата с променливи, които трябва да бъдат достъпни за оценявания `code`. Default: `none`.


## Примери

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




