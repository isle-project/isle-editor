---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Edytor tekstowy do pisania notatek lub raportów. Obsługuje eksport notatek w postaci plików HTML lub PDF, a także automatyczne przesyłanie ich na serwer ISLE.

## Options

* __allowSubmissions__ | `boolean`: kontroluje, czy studenci mogą przesyłać swoje raporty na serwer. Default: `true`.
* __canLoadHTML__ | `boolean`: określa, czy ma być wyświetlony przycisk do wczytania zapisanego pliku HTML do edytora. Default: `true`.
* __defaultValue__ | `string`: domyślny tekst edytora. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __mode__ | `string`: kontroluje tryb edycji tekstu (albo `individual` dla dokumentu osobistego, `group` dla dokumentu dla grup, `collaborative` dla pojedynczego dokumentu dla wszystkich, lub `cohort` dla dokumentu dla kohorty). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: obiekt do dostosowania modalu do resetowania dokumentu (zazwyczaj nie powinien być zmieniany). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: kontroluje, czy wysyłać emaile z potwierdzeniem w formacie PDF/HTML przy wysyłce. Default: `false`.
* __voiceTimeout__ | `number`: czas w milisekundach po włożeniu fragmentu nagranego wejścia głosowego. Default: `5000`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Examples

```jsx live
<TextEditor />
```

