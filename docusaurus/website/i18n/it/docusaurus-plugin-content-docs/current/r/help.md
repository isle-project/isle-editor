---
id: r-help
title: R Help
sidebar_label: R Help
---

Fare in modo che le parole tirino su la documentazione R in una finestra modale quando si fa clic su di essa.

## Opzioni

* __func__ | `string`: nome della "funzione R" per la quale aprire la documentazione. Se non fornito, il contenuto del tag `RHelp` si assume che il contenuto del tag `RHelp` sia uguale al nome della funzione. Default: `''`.
* __library__ | `string`: nome del pacchetto R in cui risiede la funzione. Default: `'base'`.
* __visible__ | `boolean`: controlla se la finestra del modale di aiuto deve essere aperta all'avvio. Default: `false`.


## Esempi

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

