---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

`TeX` este un element ISLE care poate fi utilizat pentru a afișa ecuații LaTeX.

## Opțiuni

* __raw__ | `(string|number) (required)`: Șirul literal LaTeX `string` de redat. Acceptă, de asemenea, `numbers`.. Default: `none`.
* __displayMode__ | `boolean`: `boolean` care indică dacă se afișează ecuația în linie sau în modul de afișare. Default: `false`.
* __numbered__ | `boolean`: controlează dacă se afișează un număr de ecuație pentru ecuațiile din modul de afișare. Default: `false`.
* __style__ | `object`: `object` cu perechile cheie-valoare CSS care urmează să fie aplicate la containerul de ecuații. Default: `{}`.
* __tag__ | `string`: Caracterele personalizate afișate pentru ecuațiile de afișare în partea dreaptă. Valoarea implicită este numărul ecuației din cadrul lecției.. Default: `none`.
* __elems__ | `object`: `object` cu `keys` care desemnează caractere LaTeX și valorile lor corespunzătoare fiind configurarea `objects` pentru a le face interactive. Setarea unei opțiuni `tooltip` va afișa un tooltip atunci când se trece peste caracterele LaTeX. Setarea unei proprietăți `variable` va afișa un cursor de intrare pentru a modifica variabila de stare respectivă; în acest caz, sunt acceptate proprietățile suplimentare `legend`, `min`, `max` și `step`.. Default: `{}`.
* __popoverPlacement__ | `string`: poziția popoverului pentru `elems` specificate (fie `top`, `right`, `bottom`, sau `left`). Default: `'bottom'`.
* __onPopover__ | `function`: callback `function` atunci când o popoveră de control este activată sau dezactivată; primește ca unic argument starea de afișare sub formă de boolean. Default: `onPopover() {}`.
* __onClick__ | `function`: callback `function` invocat de fiecare dată când un utilizator face clic pe ecuație. Default: `none`.


## Exemple

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



