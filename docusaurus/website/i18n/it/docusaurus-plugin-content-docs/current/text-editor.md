---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Un editor di testo per scrivere note o rapporti. Supporta l'esportazione di note come file HTML o PDF, nonché l'invio automatico al server ISLE.

## Options

* __allowSubmissions__ | `boolean`: controlla se gli studenti possono inviare i loro rapporti al server. Default: `true`.
* __canLoadHTML__ | `boolean`: controlla se visualizzare il pulsante per caricare un file HTML salvato nell'editor. Default: `true`.
* __defaultValue__ | `string`: testo predefinito dell'editor. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __mode__ | `string`: controlla la modalità di modifica del testo (sia `individual` per un documento personale, `group` per un documento per gruppi, `collaborative` per un singolo documento per tutti, o `cohort` per un documento per coorte). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: oggetto per personalizzare il modale per il ripristino del documento (di solito non dovrebbe essere cambiato). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: controlla se inviare e-mail di conferma con l'output PDF/HTML al momento dell'invio. Default: `false`.
* __voiceTimeout__ | `number`: tempo in millisecondi dopo l'inserimento di una porzione di voce registrata. Default: `5000`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.


## Examples

```jsx live
<TextEditor />
```

