---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

Zīmēšanas blociņš piezīmju pierakstam uz lekciju slaidiem vai tukšām lapām.

## Iespējas

* __autoSave__ | `boolean`: kontrolē, vai redaktoram noteiktā laika intervālā saglabāt pašreizējo tekstu pārlūkprogrammas lokālajā atmiņā.. Default: `true`.
* __feedbackButtons__ | `boolean`: kontrolē, vai katrā slaidā tiek rādītas atgriezeniskās saites pogas.. Default: `false`.
* __intervalTime__ | `number`: laiks starp automātiskajiem saglabāšanas. Default: `10000`.
* __hideInputButtons__ | `boolean`: kontrolē, vai slēpt zīmēšanas un teksta ievades pogas.. Default: `false`.
* __hideNavigationButtons__ | `boolean`: kontrolē, vai slēpt pogas navigācijai starp lapām.. Default: `false`.
* __hideSaveButtons__ | `boolean`: kontrolē, vai slēpt saglabāšanas pogas.. Default: `false`.
* __hideTransmitButtons__ | `boolean`: kontrolē, vai slēpt pogas lietotāja darbību pārsūtīšanai.. Default: `false`.
* __brushSize__ | `number`: otu lielums, ar kuru krāsot.. Default: `4`.
* __color__ | `string`: otu un tekstu krāsa. Default: `'#444444'`.
* __canvasWidth__ | `number`: audekla elementa platums (px). Default: `1200`.
* __canvasHeight__ | `number`: audekla elementa augstums (px). Default: `700`.
* __fullscreen__ | `boolean`: nosaka, vai automātiski mainīt audekla lielumu atbilstoši pārlūkprogrammas loga platumam un augstumam.. Default: `false`.
* __fill__ | `string`: ja `horizontal`, aizpildīt visu pieejamo horizontālo telpu, zīmējot PDF; ja `vertical`, izmantot visu vertikālo telpu, lai novērstu y ass pārpildīšanos.. Default: `'vertical'`.
* __disabled__ | `boolean`: vai komponentei ir jābūt tikai lasāmai un aizliegts zīmēt uz skiclapas.. Default: `false`.
* __fontFamily__ | `string`: fontu ģimene. Default: `'Arial'`.
* __fontSize__ | `number`: fonta lielums. Default: `24`.
* __nodes__ | `object`: komponenti, kas tiks atveidoti uz norādīto slaidu virspuses; `atslēgām` jāatbilst lappušu numuriem, `vērtībām` - komponentiem.. Default: `{}`.
* __noPages__ | `number`: sākotnējais lappušu skaits. Default: `1`.
* __pdf__ | `string`: saite uz PDF failu, kurā ir iestrādāti lapu foni.. Default: `none`.
* __showTutorial__ | `boolean`: parādīt pamācību sketchpad palaišanas laikā. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: kontrolē, vai sākt slēpt pogas, ja rīkjoslas platums nav pietiekams (pretējā gadījumā tiks sākta jauna rinda).. Default: `false`.
* __transmitOwner__ | `boolean`: vai īpašnieka darbības jāpārraida citiem lietotājiem reāllaikā.. Default: `true`.
* __groupMode__ | `boolean`: kontrolē, vai visas lietotāja darbības tiek pārsūtītas visiem pārējiem.. Default: `false`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onChange__ | `function`: atsauces zvans, kas tiek izsaukts ikreiz, kad tiek zīmēts jauns līnijas elements.. Default: `onChange() {}`.


## Piemēri

```jsx live
<Sketchpad canvasWidth={750} />
```

