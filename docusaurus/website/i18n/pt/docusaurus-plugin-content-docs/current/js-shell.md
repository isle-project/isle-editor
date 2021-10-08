---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Um shell Javascript interativo que pode ser usado para executar comandos JavaScript. O shell contém um console que exibe mensagens de erro, avisos, etc.

## Opções

* __code__ | `string`: Código JavaScript a ser avaliado. Default: `''`.
* __solution__ | `string`: para questões de programação, código 'string' representando a solução oficial para o problema. Default: `''`.
* __hints__ | `array<(string|node)>`: para questões de programação, uma série de dicas que fornecem orientações sobre como abordar o problema. Default: `[]`.
* __precompute__ | `boolean`: controla se o código padrão deve ser executado uma vez que o componente tenha sido montado. Default: `false`.
* __chat__ | `boolean`: controla se a funcionalidade de bate-papo em grupo deve ser habilitada. Default: `false`.
* __check__ | `string`: código JavaScript anexado para verificar o `código` a ser avaliado. Default: `none`.
* __disabled__ | `boolean`: controla se todas as entradas do usuário devem ser desativadas e se o código bloqueia a estática. Default: `false`.
* __lines__ | `number`: número de linhas a exibir. Default: `5`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onChange__ | `function`: chamada de retorno invocada sempre que a entrada do campo de texto muda. Default: `onChange() {}`.
* __onEvaluate__ | `function`: chamada de retorno invocada sempre que o botão "Avaliar" é clicado. Default: `onEvaluate() {}`.
* __vars__ | `object`: objeto de escopo com variáveis que devem ser disponibilizadas para avaliar o `código`. Default: `none`.


## Exemplos

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




