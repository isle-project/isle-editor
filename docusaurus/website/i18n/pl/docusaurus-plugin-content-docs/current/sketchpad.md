---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

Szkicownik do robienia notatek na slajdach wykładowych lub pustych stronach.

## Opcje

* __autoSave__ | `boolean`: kontroluje, czy edytor powinien zapisać bieżący tekst w pamięci lokalnej przeglądarki w danym przedziale czasu. Default: `true`.
* __feedbackButtons__ | `boolean`: kontroluje, czy na każdym slajdzie mają być wyświetlane przyciski sprzężenia zwrotnego. Default: `false`.
* __intervalTime__ | `number`: czas pomiędzy automatycznymi oszczędnościami. Default: `10000`.
* __hideInputButtons__ | `boolean`: kontroluje, czy przyciski do rysowania i wprowadzania tekstu mają być ukryte. Default: `false`.
* __hideNavigationButtons__ | `boolean`: kontroluje, czy należy ukrywać przyciski do poruszania się między stronami. Default: `false`.
* __hideSaveButtons__ | `boolean`: kontroluje, czy należy ukryć przyciski zapisu. Default: `false`.
* __hideTransmitButtons__ | `boolean`: kontroluje, czy należy ukryć przyciski do przekazywania działań użytkownika. Default: `false`.
* __brushSize__ | `number`: rozmiar pędzla do malowania z. Default: `4`.
* __color__ | `string`: kolor pędzla i tekstów. Default: `'#444444'`.
* __canvasWidth__ | `number`: szerokość elementu płótna (w px). Default: `1200`.
* __canvasHeight__ | `number`: wysokość elementu płótna (w px). Default: `700`.
* __fullscreen__ | `boolean`: kontroluje, czy płótno ma być automatycznie zmieniane na szerokość i wysokość okna przeglądarki. Default: `false`.
* __fill__ | `string`: jeśli `poziome`, wypełnij całą dostępną przestrzeń poziomą podczas rysowania pliku PDF; jeśli `pionowe`, cała przestrzeń pionowa jest używana, aby zapobiec przelewaniu się osi y. Default: `'vertical'`.
* __disabled__ | `boolean`: czy zrobić element tylko do odczytu i zabronić rysowania na szkicowniku. Default: `false`.
* __fontFamily__ | `string`: rodzina czcionek. Default: `'Arial'`.
* __fontSize__ | `number`: rozmiar czcionki. Default: `24`.
* __nodes__ | `object`: komponenty, które mają być renderowane na określonych slajdach; `klucze` powinny odpowiadać numerom stron, `wartościom` komponentów. Default: `{}`.
* __noPages__ | `number`: początkowa liczba stron. Default: `1`.
* __pdf__ | `string`: łącze do pliku PDF dla spieczonych teł strony. Default: `none`.
* __showTutorial__ | `boolean`: pokaż samouczek dla szkicownika przy uruchamianiu. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: kontroluje, czy należy zacząć ukrywać przyciski, gdy szerokość paska narzędzi nie jest wystarczająca (w przeciwnym razie zostanie uruchomiona nowa linia). Default: `false`.
* __transmitOwner__ | `boolean`: czy działania właściciela powinny być przekazywane innym użytkownikom w czasie rzeczywistym. Default: `true`.
* __groupMode__ | `boolean`: kontroluje, czy wszystkie działania użytkownika są przekazywane innym osobom. Default: `false`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onChange__ | `function`: wywołanie zwrotne za każdym razem, gdy rysowany jest nowy element linii. Default: `onChange() {}`.


## Przykłady

```jsx live
<Sketchpad canvasWidth={750} />
```

