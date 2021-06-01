---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Komponenta vykreslující data v tabulkovém zobrazení. Postavena nad [react-table](https://react-table.js.org/).

## Možnosti

* __data__ | `(array|object) (required)`: Datový objekt nebo pole, které se má zobrazit. Pokud se jedná o objekt, klíče odpovídají hodnotám sloupců, zatímco u pole se očekává pole objektů s pojmenovaným polem odpovídajícím každému sloupci.. Default: `none`.
* __dataInfo__ | `object`: objekt s řetězcovým polem `info` popisujícím datovou sadu, `název` datové sady, `objekt` `proměnných` s klíči odpovídajícími názvům proměnných a hodnotami popisů proměnných a boolean `showOnStartup` určující, zda se má při spuštění zobrazit informační modal.. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: řídí, zda sloupce, pro které neexistují žádné `info`, mají tlačítko, které po kliknutí vyvolá zpětné volání funkce `onColumnDelete`.. Default: `false`.
* __undeletableVars__ | `array<string>`: pole názvů proměnných sloupců, které se nesmí smazat.. Default: `[]`.
* __filterable__ | `boolean`: řídí, zda je možné sloupce filtrovat. Default: `true`.
* __editable__ | `array`: pole názvů sloupců, které mají být editovatelné.. Default: `[]`.
* __getTrProps__ | `function`: zpětné volání prováděné pro každý řádek za účelem přizpůsobení jeho stylu (předaný stav tabulky, informace o řádku,
sloupce a instance tabulky). Default: `none`.
* __onColumnDrag__ | `function`: funkce vyvolaná při přetažení sloupce na jinou pozici. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: funkce vyvolaná s názvem sloupce po kliknutí na příslušné tlačítko pro odstranění sloupce.. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: funkce vyvolaná při přejmenování sloupce (volá se se starým názvem jako prvním a novým názvem jako druhým argumentem).. Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: funkce určující akci, která se má provést pro řádky odstraněné z dat (výchozí hodnota je prázdná funkce).. Default: `onClickRemove() {}`.
* __onEdit__ | `function`: funkce vyvolaná s aktualizovanou sadou dat poté, co uživatel změnil hodnotu buňky (platí pouze v případě, že je tabulka `editovatelná`).. Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: funkce vyvolaná po dokončení výukové tabulky s daty. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: pole filtrů. Default: `[]`.
* __onFilteredChange__ | `function`: funkce vyvolaná s aktuálními filtry po filtrování dat uživatelem. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: určuje, zda se mají zobrazovat zaškrtávací políčka pro řádky, které mají být odstraněny.. Default: `false`.
* __showIdColumn__ | `boolean`: řídí, zda se má zobrazit sloupec ID. Default: `true`.
* __disableDownload__ | `boolean`: zda skrýt tlačítko pro stažení dat jako souboru CSV nebo JSON.. Default: `false`.
* __className__ | `string`: název třídy. Default: `''`.
* __style__ | `object`: Objekt umožňující vlastní stylování css. Výchozí hodnota je prázdný objekt. Default: `{}`.


## Příklady

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

