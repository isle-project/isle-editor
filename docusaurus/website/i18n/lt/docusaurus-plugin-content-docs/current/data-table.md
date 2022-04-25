---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Komponentas, atvaizduojantis duomenis lentelių pavidalu. Sukurtas ant [react-table](https://react-table.js.org/).

## Parinktys

* __data__ | `(array|object) (required)`: Peržiūrimas duomenų objektas arba masyvas. Jei tai objektas, raktai atitinka stulpelių reikšmes, o iš masyvo tikimasi gauti objektų masyvą, kuriame kiekvienam stulpeliui atitinka pavadintas laukas.. Default: `none`.
* __dataInfo__ | `object`: objektas, kuriame yra `info` eilutės masyvas, apibūdinantis duomenų rinkinį, duomenų rinkinio `pavadinimas`, `kintamųjų` objektas, kurio raktai atitinka kintamųjų pavadinimus, o reikšmės - kintamųjų aprašymus, ir `showOnStartup` loginis veiksnys, kontroliuojantis, ar paleidimo metu turi būti rodomas informacinis modalinis langas.. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: kontroliuoja, ar stulpeliai, kuriems nėra `info`, turi mygtuką, kurį paspaudus iškviečiama `onColumnDelete` grįžtamojo ryšio funkcija.. Default: `false`.
* __undeletableVars__ | `array<string>`: stulpelių, kurių negalima ištrinti, kintamųjų vardų masyvas. Default: `[]`.
* __filterable__ | `boolean`: kontroliuoja, ar stulpelius galima filtruoti.. Default: `true`.
* __editable__ | `array`: redaguojamų stulpelių pavadinimų masyvas. Default: `[]`.
* __getTrProps__ | `function`: atšaukimo funkcija, vykdoma kiekvienai eilutei, kad būtų pritaikytas jos stilius (perduota lentelės būsena, eilutės informacija,
stulpelis ir lentelės egzempliorius). Default: `none`.
* __onColumnDrag__ | `function`: funkcija, iškviečiama, kai stulpelis vilkiamas į kitą padėtį. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: funkcija, iškviečiama su stulpelio pavadinimu, kai paspaudžiamas atitinkamas stulpelio šalinimo mygtukas.. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: funkcija, iškviečiama pakeitus stulpelio pavadinimą (iškviečiama, kai pirmasis argumentas yra senasis pavadinimas, o antrasis - naujasis pavadinimas).. Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: funkcija, nurodanti veiksmą, kurį reikia atlikti iš duomenų pašalintoms eilutėms (numatytoji reikšmė - tuščia funkcija).. Default: `onClickRemove() {}`.
* __onEdit__ | `function`: funkcija, iškviečiama su atnaujintu duomenų rinkiniu po to, kai naudotojas pakeitė langelio reikšmę (taikoma tik tada, kai lentelė yra `redaguojama`).. Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: funkcija, iškviečiama, kai naudotojas baigia duomenų lentelės vadovėlį.. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: filtrų masyvas. Default: `[]`.
* __onFilteredChange__ | `function`: funkcija, iškviečiama su dabartiniais filtrais po to, kai duomenis filtravo naudotojas. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: nurodo, ar rodyti pašalintinų eilučių žymimuosius langelius.. Default: `false`.
* __showIdColumn__ | `boolean`: kontroliuoja, ar rodyti ID stulpelį.. Default: `true`.
* __disableDownload__ | `boolean`: ar paslėpti mygtuką, skirtą duomenims atsisiųsti CSV arba JSON failo pavidalu.. Default: `false`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __style__ | `object`: Objektas, leidžiantis naudoti pasirinktinį css stilių. Numatytoji reikšmė - tuščias objektas. Default: `{}`.


## Pavyzdžiai

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

