--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Um painel de controle para combinar o manuseio de múltiplos campos de entrada de crianças.

## Opções

* __autoStart__ | `boolean`: se definida como "verdadeira", a função "Gerar" é executada na inicialização com os valores de entrada padrão. Default: `true`.
* __autoUpdate__ | `boolean`: controla se a função "Gerar" deve ser invocada automaticamente quando um dos campos de entrada de crianças muda. Default: `false`.
* __description__ | `(string|node)`: descrição do painel de instrumentos. Default: `''`.
* __disabled__ | `boolean`: controla se o painel de instrumentos deve ser desativado. Default: `false`.
* __label__ | `string`: etiqueta do botão. Default: `none`.
* __maxWidth__ | `number`: largura máxima do painel de instrumentos. Default: `600`.
* __className__ | `string`: nome da classe. Default: `''`.
* __bodyClassName__ | `string`: undefined. Default: `'d-grid gap-3'`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onGenerate__ | `function`: função invocada quando o botão é clicado ou um dos valores de entrada do painel muda (se `autoUpdate` estiver definido como `verdadeiro'). A função é chamada com os valores dos campos de entrada, na ordem em que eles são colocados no painel. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: título do cartão. Default: `''`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Multiple Inputs', value: 'multipleInputs' }
    ]}
>

<TabItem value="minimal"> 

```jsx live
<Dashboard title="Alerter" onGenerate={( x ) => { alert( x ); }} autoStart={false} >
    <SliderInput
        legend="Input value"
    />
</Dashboard>
```

</TabItem>

<TabItem value="multipleInputs" > 

```jsx live
<Dashboard 
    title="Multiply three numbers."
    style={{ width: 600, boxShadow: '0 0 24px black' }}
    onGenerate={( x, y, z ) => { alert( x*y*z ); }} 
    autoStart={false} 
>
    <SliderInput
        legend="First Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
    <SliderInput
        legend="Second Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
    <SliderInput
        legend="Third Input Value"
        rangeInputStyle = {{ width: 360 }}
    />
    <hr />
</Dashboard>
```

</TabItem>

</Tabs>
