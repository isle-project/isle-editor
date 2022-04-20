---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

O componentă care redă datele într-un afișaj tabelar. Construită pe baza [react-table](https://react-table.js.org/).

## Opțiuni

* __data__ | `(array|object) (required)`: Un obiect sau o matrice de date care trebuie vizualizat. Dacă este un obiect, cheile corespund valorilor coloanelor, în timp ce pentru un tablou se așteaptă un tablou de obiecte cu un câmp numit corespunzător fiecărei coloane.. Default: `none`.
* __dataInfo__ | `object`: obiect cu `info` șir de caractere `info` care descrie setul de date, `name` al setului de date, un `object` de `variables` cu chei corespunzătoare numelor variabilelor și valori pentru descrierile variabilelor, și un boolean `showOnStartup` care controlează dacă se afișează modalitatea de informații la pornire. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: controlează dacă coloanele pentru care nu există `info` au un buton care, atunci când este apăsat, apelează funcția de apelare `onColumnDelete`.. Default: `false`.
* __undeletableVars__ | `array<string>`: matrice de nume de variabile ale coloanelor care nu pot fi șterse. Default: `[]`.
* __filterable__ | `boolean`: controlează dacă coloanele sunt filtrabile sau nu. Default: `true`.
* __editable__ | `array`: matrice de nume pentru coloanele care trebuie să fie editabile. Default: `[]`.
* __getTrProps__ | `function`: funcție de callback executată pentru fiecare rând pentru a personaliza stilul acestuia (starea tabelului transmisă, informații despre rând,
coloana și instanța tabelului). Default: `none`.
* __onColumnDrag__ | `function`: funcție invocată atunci când o coloană a fost trasă într-o poziție diferită. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: funcție invocată cu numele unei coloane atunci când se face clic pe butonul de ștergere respectiv pentru o coloană. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: funcție invocată atunci când o coloană a fost redenumită (apelată cu vechiul nume ca prim argument și noul nume ca al doilea argument). Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: funcție care specifică o acțiune care trebuie întreprinsă pentru rândurile eliminate din date (valoarea implicită este o funcție goală). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: funcție invocată cu setul de date actualizat după ce valoarea unei celule a fost modificată de către utilizator (se aplică numai atunci când tabelul este `editabil`). Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: funcție invocată atunci când utilizatorul a completat tutorialul pentru tabelul de date. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: matrice de filtre. Default: `[]`.
* __onFilteredChange__ | `function`: funcție invocată cu filtrele curente după ce datele au fost filtrate de utilizator. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: indică dacă se afișează căsuțe de selectare pentru rândurile care urmează să fie eliminate. Default: `false`.
* __showIdColumn__ | `boolean`: controlează dacă se afișează sau nu o coloană ID. Default: `true`.
* __disableDownload__ | `boolean`: dacă se ascunde butonul de descărcare a datelor sub formă de fișier CSV sau JSON. Default: `false`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Un obiect care permite o stilizare css personalizată. Valoarea implicită este un obiect gol. Default: `{}`.


## Exemple

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

