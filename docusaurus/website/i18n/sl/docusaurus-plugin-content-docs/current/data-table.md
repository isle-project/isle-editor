---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Komponenta, ki prikazuje podatke v tabelaričnem prikazu. Zgrajena na podlagi [react-table](https://react-table.js.org/).

## Možnosti

* __data__ | `(array|object) (required)`: Podatkovni objekt ali polje, ki ga je treba pregledati. Če gre za objekt, ključi ustrezajo vrednostim stolpcev, pri polju pa se pričakuje polje objektov z imenovanim poljem, ki ustreza vsakemu stolpcu.. Default: `none`.
* __dataInfo__ | `object`: objekt z nizom nizov `info`, ki opisuje podatkovni niz, `naslov` podatkovnega niza, `objekt` `spremenljivk` s ključi, ki ustrezajo imenom spremenljivk, in vrednostmi opisov spremenljivk, ter logičnim ukazom `showOnStartup`, ki določa, ali naj se ob zagonu prikaže modalni prikaz informacij. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: nadzoruje, ali imajo stolpci, za katere ne obstajajo `info`, gumb, ki ob kliku pokliče povratno funkcijo `onColumnDelete`.. Default: `false`.
* __undeletableVars__ | `array<string>`: polje imen spremenljivk stolpcev, ki se ne smejo izbrisati. Default: `[]`.
* __filterable__ | `boolean`: nadzoruje, ali je stolpce mogoče filtrirati.. Default: `true`.
* __editable__ | `array`: niz imen za stolpce, ki jih je mogoče urejati. Default: `[]`.
* __getTrProps__ | `function`: undefined. Default: `none`.
* __onColumnDrag__ | `function`: funkcija, ki se sproži, ko je bil stolpec povlečen v drug položaj.. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: funkcija, ki se sproži z imenom stolpca, ko je kliknjen ustrezen gumb za brisanje stolpca.. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: funkcija, ki se sproži ob preimenovanju stolpca (klicana s starim imenom kot prvim in novim imenom kot drugim argumentom).. Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: funkcija, ki določa ukrep za odstranitev vrstic iz podatkov (privzeto je prazna funkcija).. Default: `onClickRemove() {}`.
* __onEdit__ | `function`: funkcija, ki se sproži s posodobljenim naborom podatkov, potem ko je uporabnik spremenil vrednost celice (velja samo, če je tabela `editable`). Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: funkcija, ki se sproži, ko uporabnik zaključi učno gradivo za podatkovno tabelo.. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: polje filtrov. Default: `[]`.
* __onFilteredChange__ | `function`: funkcija, ki se sproži s trenutnimi filtri, ko uporabnik filtrira podatke.. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: označuje, ali naj se prikažejo potrditvena polja za vrstice, ki jih je treba odstraniti.. Default: `false`.
* __showIdColumn__ | `boolean`: nadzoruje, ali se prikaže stolpec ID.. Default: `true`.
* __disableDownload__ | `boolean`: ali želite skriti gumb za prenos podatkov v obliki datoteke CSV ali JSON.. Default: `false`.
* __className__ | `string`: ime razreda. Default: `''`.
* __style__ | `object`: Objekt, ki omogoča oblikovanje sloga css po meri. Privzeta vrednost je prazen predmet. Default: `{}`.


## Primeri

```jsx live
<DataTable
    showRemove
    onClickRemove={( data ) => { console.log(data); }}
    data={{ 
        firstName: [ 'Hans', 'Lotti', 'Fritz' ], 
        lastName: [ 'Bauer', 'Müller', 'Schultz' ],
        age: [ 37, 55, 62 ]
    }}
    style={{ width: 600 }}
/>
```

