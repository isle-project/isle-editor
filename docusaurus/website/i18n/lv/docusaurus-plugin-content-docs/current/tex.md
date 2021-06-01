---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

`TeX` ir ISLE elements, ko var izmantot LaTeX vienādojumu attēlošanai. Komponents izmanto [KaTeX](https://github.com/Khan/KaTeX), lai nodrošinātu ārkārtīgi ātru atveidošanu.

## Iespējas

* __raw__ | `(string|number) (required)`: LaTeX `virkne`, kas jāatveido. Pieņem arī `numbers`. Default: `none`.
* __displayMode__ | `boolean`: `boolean`, kas norāda, vai vienādojumu attēlot rindas vai displeja režīmā.. Default: `false`.
* __numbered__ | `boolean`: kontrolē, vai parādīt vienādojuma numuru vienādojumiem displeja režīmā.. Default: `false`.
* __style__ | `object`: `objekts` ar CSS atslēgas-vērtības pāriem, kas jāpiemēro vienādojuma konteineram.. Default: `{}`.
* __tag__ | `string`: Pielāgotās rakstzīmes, kas parādītas vienādojumu attēlošanai labajā pusē. Pēc noklusējuma vienādojuma numurs stundas iekšienē.. Default: `none`.
* __elems__ | `object`: `objekts` ar `atslēgām`, kas apzīmē LaTeX rakstzīmes, un to atbilstošajām vērtībām, kas ir konfigurācijas `objekti`, lai tās būtu interaktīvas. Iestatot opciju `tooltip`, uznirstot virs LaTeX rakstzīmēm, tiks parādīts uzraksts. Nosakot īpašību `mainīgais`, tiks parādīts ievades slīdnis, lai mainītu attiecīgo stāvokļa mainīgo; šajā gadījumā tiek atbalstītas papildu īpašības `legend`, `min`, `max` un `step`.. Default: `{}`.
* __popoverPlacement__ | `string`: uznirstošā loga pozīcija norādītajai `elems` (augšējā, labajā, apakšējā vai kreisajā pusē).. Default: `'top'`.
* __onPopover__ | `function`: atgriezeniskā izsaukuma `funkcija`, kad tiek ieslēgts vai izslēgts uznirstošais logs; kā vienīgo argumentu saņem displeja statusu kā boolean.. Default: `onPopover() {}`.
* __onClick__ | `function`: atgriezeniskā zvana `funkcija`, kas tiek izsaukta ikreiz, kad lietotājs noklikšķina uz vienādojuma.. Default: `none`.


## Piemēri

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



