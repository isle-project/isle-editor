---
id: runner 
title: Runner
sidebar_label: Runner
---

Componenta runner va executa o funcție furnizată fie o dată, fie la un anumit interval de timp.

## Opțiuni

* __active__ | `boolean`: controlează dacă alergătorul trebuie să fie activ. La activare, funcția `onEvaluate` este apelată în intervalul dat (sau o dată).. Default: `true`.
* __interval__ | `number`: numărul de milisecunde între apelurile lui `onEvaluate`. Dacă nu se stabilește niciun interval, funcția este invocată o singură dată.. Default: `none`.
* __onEvaluate__ | `function`: funcția care urmează să fie invocată. Default: `onEvaluate() {}`.


## Exemple

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



