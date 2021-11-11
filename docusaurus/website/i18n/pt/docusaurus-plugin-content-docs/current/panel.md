---
id: panel 
title: Panel
sidebar_label: Panel
---

Componente do cartão.

## Opções

* __className__ | `string`: Nome da classe CSS. Default: `''`.
* __header__ | `(string|node)`: título do painel. Default: `none`.
* __headerTag__ | `string`: etiqueta utilizada para o cabeçalho do painel. Default: `'h3'`.
* __footer__ | `(string|node)`: rodapé do painel. Default: `none`.
* __minimizable__ | `boolean`: se o painel pode ser minimizado. Default: `false`.
* __defaultMinimized__ | `boolean`: controla se o painel deve ser minimizado por padrão (aplicável somente quando "minimizável" estiver definido como "verdadeiro"). Default: `false`.
* __fullscreen__ | `boolean`: se o painel pode ser feito em tela cheia (somente para instrutores). Default: `false`.
* __hideTooltip__ | `string`: ponta de ferramenta exibida sobre o botão de ocultar. Default: `none`.
* __trapFocus__ | `boolean`: se o foco do usuário no painel deve ser aprisionado. Default: `false`.
* __bodyStyle__ | `object`: Estilos de CSS em linha para o corpo. Default: `{}`.
* __footerStyle__ | `object`: Estilos em linha de CSS para rodapé. Default: `{}`.
* __bodyClassName__ | `string`: undefined. Default: `''`.
* __footerClassName__ | `string`: undefined. Default: `''`.
* __style__ | `object`: Estilos em linha de CSS para contêineres. Default: `{}`.
* __onHide__ | `function`: chamada de retorno invocada quando o botão de fechamento é clicado. Default: `none`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Header', value: 'withHeader' },
        { label: 'Header and Footer', value: 'headerAndFooter' },
        { label: 'With CSS', value: 'withCSS' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Panel>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Panel>
```

</TabItem>

<TabItem value="withHeader">

```jsx live
<Panel header="Panel with Header">

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Panel>
```

</TabItem>

<TabItem value="headerAndFooter">

```jsx live
<Panel 
    header="Header" 
    footer={<h4>Footer</h4>}
>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Panel>
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Panel style={{ color: 'salmon', background: 'darkblue' }}>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Panel>
```

</TabItem>

</Tabs>
