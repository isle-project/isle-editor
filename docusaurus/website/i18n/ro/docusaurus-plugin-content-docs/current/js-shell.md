---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Un shell Javascript interactiv care poate fi utilizat pentru a executa comenzi JavaScript. Shell-ul conține o consolă care afișează mesaje de eroare, avertismente etc.

## Opțiuni

* __code__ | `string`: Codul JavaScript care urmează să fie evaluat. Default: `''`.
* __solution__ | `string`: pentru întrebări de programare, codul `string` reprezentând soluția oficială a problemei.. Default: `''`.
* __hints__ | `array<(string|node)>`: pentru întrebările de programare, o serie de sugestii care oferă îndrumări privind modul de abordare a problemei. Default: `[]`.
* __precompute__ | `boolean`: controlează dacă codul implicit trebuie executat după ce componenta a fost montată.. Default: `false`.
* __chat__ | `boolean`: controlează dacă trebuie activată sau nu funcționalitatea chat-ului de grup. Default: `false`.
* __check__ | `string`: cod JavaScript adăugat pentru a verifica `code` care urmează să fie evaluat. Default: `none`.
* __disabled__ | `boolean`: controlează dacă se dezactivează toate intrările utilizatorului și dacă blocul de cod este static.. Default: `false`.
* __lines__ | `number`: numărul de linii de afișat. Default: `5`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onChange__ | `function`: callback invocat ori de câte ori se modifică datele introduse în câmpul de text. Default: `onChange() {}`.
* __onEvaluate__ | `function`: callback invocat ori de câte ori se face clic pe butonul `Evaluate`.. Default: `onEvaluate() {}`.
* __vars__ | `object`: obiect de domeniu de aplicare cu variabile care trebuie să fie puse la dispoziție pentru `code` evaluat. Default: `none`.


## Exemple

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




