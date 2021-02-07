---
id: slider 
title: Slider
sidebar_label: Slider
---

Element, który wyświetla swoje dzieci w pokazie slajdów lub na karuzeli.

## Options

* __title__ | `string`: tytuł pokazu slajdów / karuzeli, która ma być wyświetlana u góry. Default: `''`.
* __dots__ | `boolean`: Kropki na dole wyświetlacza pozwalają na szybką nawigację do dowolnego slajdu. Default: `true`.
* __fade__ | `boolean`: kontroluje, czy do przechodzenia między slajdami stosuje się blaknięcie. Default: `false`.
* __draggable__ | `boolean`: kontroluje, czy użytkownicy mogą przeciągać slajdy, aby nawigować między nimi. Default: `false`.
* __pagination__ | `string`: czy pokazywać paginację albo na "górze", "dole", albo na "obu".. Default: `'bottom'`.
* __goto__ | `number`: Jeśli właściwość zostanie zmieniona, komponent przeskakuje na slajd z wybranym indeksem. Default: `0`.
* __infinite__ | `boolean`: kontroluje, czy pokaz slajdów owija się wokół jego zawartości. Default: `false`.
* __interval__ | `number`: ustawia przedział czasowy dla automatycznej zmiany slajdów. Default: `none`.
* __swipe__ | `boolean`: umożliwia zachowanie typu "przeciągnij i przesuń. Default: `false`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onClick__ | `function`: wywołanie zwrotne po kliknięciu na następny/poprzedni przycisk. Default: `onClick() {}`.


## Examples

```jsx live
<Slider title="Questions to explore:" >
    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>
    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>
    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>
    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>
</Slider>
```

