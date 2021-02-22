---
id: runner 
title: Runner
sidebar_label: Runner
---

O componente do rotor executará uma função fornecida uma vez ou em um determinado intervalo.

## Opções

* __active__ | `boolean`: controla se o corredor deve estar ativo. Ao ser ativada, a função "Avaliar" é chamada no intervalo determinado (ou uma vez).. Default: `true`.
* __interval__ | `number`: número de milissegundos entre as invocações de `onEvaluate'. Se nenhum intervalo for definido, a função só é invocada uma vez.. Default: `none`.
* __onEvaluate__ | `function`: função a ser invocada. Default: `onEvaluate() {}`.


## Exemplos

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



