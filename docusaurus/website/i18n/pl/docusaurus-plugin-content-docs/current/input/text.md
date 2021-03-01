---
id: text-input
title: Text Input
sidebar_label: Text Input
---

Komponent do wprowadzania tekstu. Może być używany jako część deski rozdzielczej ISLE lub autonomiczny. W tym ostatnim przypadku, chcesz obsługiwać zmiany poprzez atrybut `onChange` lub powiązać wartość ze zmienną globalną poprzez atrybut `bind`.

## Opcje

* __bind__ | `string`: nazwa zmiennej globalnej dla numeru, który ma być przypisany do. Default: `none`.
* __defaultValue__ | `string`: wartość wskazująca domyślną wartość wejścia przy starcie. Default: `''`.
* __value__ | `string`: wartość tekstowa (dla składnika kontrolowanego). Default: `none`.
* __legend__ | `(string|node)`: łańcuch wskazujący tekst wyświetlany obok wprowadzanej liczby. Default: `''`.
* __inline__ | `boolean`: Wskazuje, czy wejście jest wyświetlane w linii. Default: `false`.
* __onBlur__ | `function`: funkcja callback wywoływana w przypadku utraty ostrości obszaru tekstowego. Default: `onBlur() {}`.
* __onChange__ | `function`: funkcja, która ma być wywoływana przy zmianie wartości tekstu. Default: `onChange() {}`.
* __onKeyDown__ | `function`: funkcja callback, którą można wywołać po naciśnięciu dowolnego klawisza. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: funkcja wywołania zwrotnego, którą należy wywołać po wprowadzeniu dowolnego klawisza. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: funkcja wywołania zwrotnego, która jest wywoływana po zwolnieniu klawisza. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: łańcuch wskazujący wartość, która ma być wyświetlana przed dokonaniem wstępnego wyboru. Default: `none`.
* __width__ | `number`: undefined. Default: `80`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Przykłady

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

