--- 
id: dashboard 
title: Dashboard
sidebar_label: Dashboard 
---

Um painel de controle para combinar o manuseio de múltiplos campos de entrada de crianças.

## Opções

* __autoStart__ | `boolean`: se definida como "verdadeira", a função "Gerar" é executada na inicialização com os valores de entrada padrão. Default: `true`.
* __autoUpdate__ | `boolean`: controla se a função "Gerar" deve ser invocada automaticamente quando um dos campos de entrada de crianças muda. Default: `false`.
* __description__ | `string`: descrição do painel de instrumentos. Default: `''`.
* __disabled__ | `boolean`: controla se o painel de instrumentos deve ser desativado. Default: `false`.
* __label__ | `string`: etiqueta do botão. Default: `none`.
* __maxWidth__ | `number`: largura máxima do painel de instrumentos. Default: `600`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onGenerate__ | `function`: função invocada quando o botão é clicado ou um dos valores de entrada do painel muda (se `autoUpdate` estiver definido como `verdadeiro'). A função é chamada com os valores dos campos de entrada, na ordem em que eles são colocados no painel. Default: `onGenerate() {}`.
* __title__ | `(string|node)`: título do cartão. Default: `''`.


## Exemplos

```jsx live
<Dashboard title="Alerter" onGenerate={(x)=>{ alert(x) }}>
    <SliderInput
        legend="Input value"
    />
</Dashboard>
```

