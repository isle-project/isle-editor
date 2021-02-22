---
id: r-output
title: R Output
sidebar_label: R Output
---

Componente para render R output dentro de uma lição de ISLE.

## Opções

* __code__ | `string`: Código R usado para avaliar. Default: `''`.
* __libraries__ | `array`: R bibliotecas que devem ser carregadas automaticamente quando o `código` de entrada é executado. Default: `[]`.
* __prependCode__ | `(string|array)`: Código R (ou `arranjo` de blocos de código) a ser preparado para o código armazenado no `código` ao avaliar. Default: `''`.
* __onPlots__ | `function`: chamada de retorno invocada com quaisquer parcelas geradas. Default: `onPlots() {}`.
* __onResult__ | `function`: chamada de retorno invocada com "erro" ("nulo" se a operação foi bem sucedida) e "resultado" segurando a saída R. Default: `onResult() {}`.


## Exemplos

```jsx live
<ROutput code="runif(10)" />
```

