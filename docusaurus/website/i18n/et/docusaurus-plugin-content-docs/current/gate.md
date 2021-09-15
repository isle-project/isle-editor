---
id: gate 
title: Gate
sidebar_label: Gate
---

ISLE komponent, mis võimaldab kuvada oma lapsi ainult reserveeritud publikule.

## Valikud

* __user__ | `boolean`: kui on määratud, kuvatakse kasutajatele piiritletud sisu.. Default: `false`.
* __notUser__ | `boolean`: kui see on määratud, ei kuvata kasutajatele **ei** piiritletud sisu.. Default: `false`.
* __enrolled__ | `boolean`: kui on määratud, siis kuvatakse kursusele registreerunud õpilastele piiritletud sisu.. Default: `false`.
* __notEnrolled__ | `boolean`: kui see on määratud, siis ei kuvata kursusele registreerunud õpilastele **ei** piiritletud sisu.. Default: `false`.
* __owner__ | `boolean`: kui see on määratud, kuvatakse kursuse omanikule (tavaliselt juhendajale) piiritletud sisu.. Default: `false`.
* __notOwner__ | `boolean`: kui see on määratud, siis ei kuvata kursuse omanikule (tavaliselt juhendajale) **ei**.. Default: `false`.
* __after__ | `Date`: aeg, mille möödudes peaks värava sisu muutuma nähtavaks.. Default: `none`.
* __until__ | `Date`: aeg, kuni värava sisu peaks jääma nähtavaks. Default: `none`.
* __banner__ | `node`: kohandatud sõnum, mis kuvatakse külastajatele, kelle jaoks värava lapsed ei ole nähtavad, vaikimisi sõnumi asemel.. Default: `none`.
* __disabled__ | `boolean`: kui värav on välja lülitatud, siis kuvatakse bännerit igal juhul.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: kontrollib, kas värava sisu näidatakse esitlusrežiimis, kui värav on nähtav `owner` jaoks.. Default: `false`.
* __check__ | `function`: callback-funktsioon, mis tagastab "boolean", mis näitab, kas värav peaks kuvama lapse komponente; funktsioon käivitub iga kord, kui sessiooni toimingud saabuvad.. Default: `none`.


## Näited

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



