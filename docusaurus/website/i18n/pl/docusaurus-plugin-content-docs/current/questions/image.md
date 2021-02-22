---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Pytanie, które wymaga od użytkownika przesłania obrazu.

## Opcje

* __question__ | `(string|node)`: tekst do pytania. Default: `''`.
* __hintPlacement__ | `string`: umieszczenie podpowiedzi (na górze, na dole, w lewo, w prawo lub na dole).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: podpowiedzi zawierające wskazówki, jak odpowiedzieć na pytanie. Default: `[]`.
* __feedback__ | `boolean`: kontroluje, czy mają być wyświetlane przyciski sprzężenia zwrotnego. Default: `true`.
* __chat__ | `boolean`: kontroluje, czy dany element powinien mieć zintegrowaną rozmowę. Default: `false`.
* __disableSubmitNotification__ | `boolean`: kontroluje, czy po przesłaniu obrazu powinno zostać wyświetlone powiadomienie. Default: `false`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __sketchpad__ | `object`: właściwości, które mają być przekazane do <Sketchpad /> komponentu; aby renderować szkicownik, należy przekazać co najmniej pusty obiekt `{}`.. Default: `none`.
* __solution__ | `string`: URL obrazu rozwiązania modelowego. Default: `none`.
* __until__ | `Date`: czas, w którym studenci powinni mieć możliwość udzielenia odpowiedzi. Default: `none`.
* __points__ | `number`: maksymalna liczba punktów przyznawanych w poszczególnych klasach. Default: `10`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onSubmit__ | `function`: wywołanie zwrotne wywołane podczas udzielania odpowiedzi; ma jako jedyny parametr `boolean` wskazujący, czy elementy zostały umieszczone we właściwej kolejności. Default: `onSubmit() {}`.


## Przykłady
