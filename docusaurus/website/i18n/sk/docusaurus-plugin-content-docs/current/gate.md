---
id: gate 
title: Gate
sidebar_label: Gate
---

Komponent ISLE, ktorý umožňuje zobrazovať svoje deti len vyhradenému publiku.

## Možnosti

* __user__ | `boolean`: po nastavení sa používateľom zobrazí obsah s bránou. Default: `false`.
* __notUser__ | `boolean`: keď je nastavený, obsah brány sa používateľom **nezobrazuje**.. Default: `false`.
* __enrolled__ | `boolean`: keď je nastavené, že sa študentom zapísaným v kurze zobrazí obsah s bránou.. Default: `false`.
* __notEnrolled__ | `boolean`: keď je nastavené, že obsah s bránou sa **nezobrazuje** študentom zapísaným do kurzu.. Default: `false`.
* __owner__ | `boolean`: po nastavení sa obsah s bránou zobrazí vlastníkovi kurzu (zvyčajne inštruktorovi).. Default: `false`.
* __notOwner__ | `boolean`: keď je nastavené, že sa obsah brány **nezobrazuje** vlastníkovi kurzu (zvyčajne inštruktorovi).. Default: `false`.
* __after__ | `Date`: čas, po ktorom by mal byť obsah brány viditeľný. Default: `none`.
* __until__ | `Date`: čas, kým obsah brány zostane viditeľný. Default: `none`.
* __banner__ | `node`: vlastná správa, ktorá sa zobrazí návštevníkom, pre ktorých nie sú viditeľné deti brány, namiesto predvolenej správy. Default: `none`.
* __disabled__ | `boolean`: ak je brána vypnutá, banner sa zobrazí bez ohľadu na to, čo sa stane.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: ovláda, či sa má obsah brány zobrazovať v režime prezentácie, keď je brána viditeľná pre `vlastníka`. Default: `false`.
* __check__ | `function`: funkcia spätného volania, ktorá vracia hodnotu `boolean` označujúcu, či má brána zobraziť podriadené komponenty; funkcia sa vyvolá vždy, keď prídu akcie relácie. Default: `none`.


## Príklady

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



