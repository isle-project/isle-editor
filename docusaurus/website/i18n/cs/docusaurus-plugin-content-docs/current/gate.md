---
id: gate 
title: Gate
sidebar_label: Gate
---

Komponenta ISLE, která umožňuje zobrazit své potomky pouze vyhrazenému publiku.

## Možnosti

* __user__ | `boolean`: po nastavení se uživatelům zobrazí obsah s bránou.. Default: `false`.
* __notUser__ | `boolean`: když je nastaveno, že se uživatelům **nezobrazuje** obsah s bránou.. Default: `false`.
* __enrolled__ | `boolean`: když je nastaveno, že se studentům zapsaným do kurzu zobrazí obsah s bránou.. Default: `false`.
* __notEnrolled__ | `boolean`: když je nastaveno, že se studentům zapsaným do kurzu **nezobrazuje** obsah s bránou.. Default: `false`.
* __owner__ | `boolean`: po nastavení se obsah s bránou zobrazí vlastníkovi kurzu (obvykle instruktorovi).. Default: `false`.
* __notOwner__ | `boolean`: po nastavení se obsah kurzu **nezobrazuje** vlastníkovi kurzu (obvykle instruktorovi).. Default: `false`.
* __after__ | `Date`: doba, po které by měl být obsah brány viditelný.. Default: `none`.
* __until__ | `Date`: doba, po kterou by obsah brány měl zůstat viditelný.. Default: `none`.
* __banner__ | `node`: vlastní zpráva, která se zobrazí návštěvníkům, pro které nejsou děti brány viditelné, místo výchozí zprávy.. Default: `none`.
* __disabled__ | `boolean`: pokud je brána zakázána, banner se zobrazí bez ohledu na to, co se stane.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: řídí, zda se má obsah brány zobrazit v režimu prezentace, když je brána viditelná pro `vlastníka`.. Default: `false`.
* __check__ | `function`: funkce zpětného volání vracející hodnotu `boolean` určující, zda má brána zobrazit podřízené komponenty; funkce je vyvolána vždy, když přijdou akce relace.. Default: `none`.


## Příklady

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



