---
id: gate 
title: Gate
sidebar_label: Gate
---

Komponenta ISLE, ki omogoča prikaz svojih otrok samo rezerviranemu občinstvu.

## Možnosti

* __user__ | `boolean`: ko je nastavljeno, se uporabnikom prikaže vsebina z ograjami.. Default: `false`.
* __notUser__ | `boolean`: ko je nastavljeno, se vsebina z ograjami **ne prikaže** uporabnikom.. Default: `false`.
* __enrolled__ | `boolean`: ko je nastavljena, se vsebina z ograjami prikaže učencem, vpisanim v tečaj.. Default: `false`.
* __notEnrolled__ | `boolean`: ko je nastavljeno, se vsebina z ograjami **ne prikaže** učencem, ki so vpisani v tečaj.. Default: `false`.
* __owner__ | `boolean`: ko je nastavljena, se vsebina z ograjami prikaže lastniku tečaja (običajno inštruktorju).. Default: `false`.
* __notOwner__ | `boolean`: ko je nastavljena, se vsebina z ograjami **ne** prikaže lastniku tečaja (običajno inštruktorju).. Default: `false`.
* __after__ | `Date`: čas, po katerem mora vsebina vrat postati vidna.. Default: `none`.
* __until__ | `Date`: čas, do katerega mora vsebina vrat ostati vidna.. Default: `none`.
* __banner__ | `node`: sporočilo po meri, ki se namesto privzetega prikaže obiskovalcem, za katere otroci vrat niso vidni.. Default: `none`.
* __disabled__ | `boolean`: če so vrata onemogočena, se banner prikaže ne glede na to.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: nadzoruje, ali naj se vsebina vrat prikaže v predstavitvenem načinu, ko so vrata vidna za `lastnika`.. Default: `false`.
* __check__ | `function`: povratna funkcija, ki vrača `boolean`, ki označuje, ali naj vrata prikažejo otroške komponente; funkcija se sproži, kadarkoli pridejo akcije seje. Default: `none`.


## Primeri

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



