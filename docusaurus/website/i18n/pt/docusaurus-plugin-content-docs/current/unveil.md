---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

O componente de aparência fará com que todas as suas crianças se tornem visíveis após um determinado período de tempo.

## Opções

* __active__ | `boolean`: controla se o contador deve estar ativo. Default: `false`.
* __delay__ | `number`: número de milissegundos antes de aparecer o componente. Default: `1000`.


## Exemplos

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



