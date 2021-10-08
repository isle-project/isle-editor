---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

Um bloco de esboços para anotações em slides de palestras ou páginas vazias.

## Opções

* __autoSave__ | `boolean`: controla se o editor deve salvar o texto atual para o armazenamento local do navegador em um determinado intervalo de tempo. Default: `true`.
* __feedbackButtons__ | `boolean`: controla se devem ser exibidos botões de feedback em cada slide. Default: `false`.
* __intervalTime__ | `number`: tempo entre o auto economiza. Default: `10000`.
* __hideInputButtons__ | `boolean`: controla se deve ocultar os botões de desenho e entrada de texto. Default: `false`.
* __hideNavigationButtons__ | `boolean`: controla se deve ocultar botões para navegar entre páginas. Default: `false`.
* __hideSaveButtons__ | `boolean`: controla se devem ser ocultados os botões de salvamento. Default: `false`.
* __hideTransmitButtons__ | `boolean`: controla se deve ocultar botões para transmitir ações do usuário. Default: `false`.
* __brushSize__ | `number`: tamanho do pincel para pintar com. Default: `4`.
* __color__ | `string`: cor do pincel e dos textos. Default: `'#444444'`.
* __canvasWidth__ | `number`: largura do elemento de lona (em px). Default: `1200`.
* __canvasHeight__ | `number`: altura do elemento de lona (em px). Default: `700`.
* __fullscreen__ | `boolean`: controla se a tela deve ser redimensionada automaticamente para a largura e altura da janela do navegador. Default: `false`.
* __fill__ | `string`: se `horizontal`, preencher todo o espaço horizontal disponível ao desenhar um PDF; se `vertical`, todo o espaço vertical é utilizado para evitar o transbordamento do eixo y. Default: `'vertical'`.
* __disabled__ | `boolean`: se o componente só leitura e proibir o desenho no bloco de rascunho. Default: `false`.
* __fontFamily__ | `string`: família de fontes. Default: `'Arial'`.
* __fontSize__ | `number`: tamanho da fonte. Default: `24`.
* __nodes__ | `object`: componentes a serem renderizados em cima dos slides especificados; "chaves" devem corresponder aos números de página, "valores" aos componentes. Default: `{}`.
* __noPages__ | `number`: número inicial de páginas. Default: `1`.
* __pdf__ | `string`: link para arquivo PDF para fundo de página cozida. Default: `none`.
* __showTutorial__ | `boolean`: mostrar tutorial para o sketchpad na inicialização. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: controla se deve começar a esconder botões quando a largura da barra de ferramentas não é suficiente (caso contrário, uma nova linha será iniciada). Default: `false`.
* __transmitOwner__ | `boolean`: se as ações do proprietário devem ser transmitidas a outros usuários em tempo real. Default: `true`.
* __groupMode__ | `boolean`: controla se todas as ações do usuário são transmitidas a todos os outros. Default: `false`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onChange__ | `function`: chamada de retorno invocada sempre que um novo elemento de linha é desenhado. Default: `onChange() {}`.


## Exemplos

```jsx live
<Sketchpad canvasWidth={750} />
```

