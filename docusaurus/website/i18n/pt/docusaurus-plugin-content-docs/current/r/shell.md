---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Uma Shell R interativa que pode ser usada para executar comandos R na nuvem usando [OpenCPU](https://www.opencpu.org/).

## Opções

* __code__ | `string`: Código R a ser avaliado. Default: `''`.
* __solution__ | `string`: para questões de programação, o código R 'string' representa a solução oficial para o problema. Default: `''`.
* __hints__ | `array<(string|node)>`: para questões de programação, uma série de dicas que fornecem orientações sobre como abordar o problema. Default: `[]`.
* __addPreceding__ | `boolean`: se definido como verdadeiro, a casca avaliará todo o código do componente atual e todos os anteriores que ocorrerem na lição. Default: `false`.
* __libraries__ | `array`: R bibliotecas que devem ser carregadas automaticamente quando o `código` de entrada é executado. Default: `[]`.
* __precompute__ | `boolean`: controla se o código padrão deve ser executado uma vez que o componente tenha sido montado. Default: `false`.
* __prependCode__ | `(string|array)`: R código `tring` (ou `array` de blocos de código R) a ser prepenso ao código armazenado no `código` ao avaliar. Default: `''`.
* __chat__ | `boolean`: controla se a funcionalidade de bate-papo em grupo deve ser habilitada. Default: `false`.
* __disabled__ | `boolean`: controla se todas as entradas do usuário devem ser desativadas e se o código bloqueia a estática. Default: `false`.
* __lines__ | `number`: número de linhas a exibir. Default: `5`.
* __resettable__ | `boolean`: controla se deve ser exibido um botão de reset para restaurar a entrada de código padrão. Default: `false`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onChange__ | `function`: chamada de retorno invocada sempre que a entrada do campo de texto muda. Default: `onChange() {}`.
* __onEvaluate__ | `function`: chamada de retorno invocada sempre que o botão "Avaliar" é clicado. Default: `onEvaluate(){}`.
* __onResult__ | `function`: chamada de retorno invocada sempre que o resultado da execução de um código é obtido a partir da nuvem. O resultado `string` é passado como o único argumento para a função de callback. Default: `onResult() {}`.


## Exemplos

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
/>
```

