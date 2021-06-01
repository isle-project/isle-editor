---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Az adatokat táblázatos formában megjelenítő komponens. A [react-table](https://react-table.js.org/) tetejére épül.

## Opciók

* __data__ | `(array|object) (required)`: A megtekintendő adatobjektum vagy tömb. Ha objektumról van szó, akkor a kulcsok az oszlopértékeknek felelnek meg, míg egy tömb objektumok tömbjét várja el, minden oszlopnak megfelelő névvel ellátott mezővel.. Default: `none`.
* __dataInfo__ | `object`: objektum az adathalmazt leíró `info` string tömböt, az adathalmaz `nevét`, egy `változók` objektumot, amelynek kulcsai a változók nevének, értékei pedig a változók leírásának felelnek meg, és egy `showOnStartup` booleant, amely szabályozza, hogy megjelenjen-e az információs ablak indításkor.. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: szabályozza, hogy az olyan oszlopok, amelyekhez nem létezik `info`, rendelkezzenek-e olyan gombbal, amelyre kattintva az `onColumnDelete` callback függvényt hívja meg.. Default: `false`.
* __undeletableVars__ | `array<string>`: a nem törölhető oszlopok változóinak neveit tartalmazó tömb. Default: `[]`.
* __filterable__ | `boolean`: szabályozza, hogy az oszlopok szűrhetők legyenek-e. Default: `true`.
* __editable__ | `array`: a szerkeszthető oszlopok neveinek tömbje. Default: `[]`.
* __getTrProps__ | `function`: callback függvény, amely minden egyes sorhoz végrehajtódik, hogy testre szabja annak stílusát (átadott táblaállapot, sorinformáció,
oszlop és a táblázat példánya). Default: `none`.
* __onColumnDrag__ | `function`: függvény, amely akkor hívódik meg, ha egy oszlopot más pozícióba húztak át. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: függvény, amely az oszlop nevével hívódik meg, amikor az oszlophoz tartozó törlés gombra kattintanak.. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: függvény, amelyet akkor hívnak meg, ha egy oszlopot átneveztek (a régi névvel mint első és az új névvel mint második argumentummal hívják meg).. Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: függvény, amely meghatározza az adatokból eltávolított sorok esetén végrehajtandó műveletet (alapértelmezés szerint üres függvény). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: függvény, amelyet a frissített adatkészlettel hívnak meg, miután a felhasználó megváltoztatta egy cella értékét (csak akkor alkalmazható, ha a táblázat "szerkeszthető").. Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: függvény, amelyet akkor hívnak meg, amikor a felhasználó befejezte az adattábla bemutatót. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: szűrők tömbje. Default: `[]`.
* __onFilteredChange__ | `function`: függvény, amelyet az aktuális szűrőkkel hívnak meg, miután a felhasználó megszűrte az adatokat. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: jelzi, hogy megjelenítse-e az eltávolítandó sorok jelölőnégyzeteit.. Default: `false`.
* __showIdColumn__ | `boolean`: szabályozza, hogy megjelenjen-e az ID oszlop. Default: `true`.
* __disableDownload__ | `boolean`: az adatok CSV vagy JSON fájlként történő letöltésére szolgáló gomb elrejtése. Default: `false`.
* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: Egy objektum, amely lehetővé teszi az egyéni css-formázást. Alapértelmezés szerint üres objektum. Default: `{}`.


## Példák

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

