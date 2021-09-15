---
id: gate 
title: Gate
sidebar_label: Gate
---

Un componente ISLE che permette di esporre i propri figli solo a un pubblico riservato.

## Opzioni

* __user__ | `boolean`: quando il contenuto gated viene visualizzato agli utenti. Default: `false`.
* __notUser__ | `boolean`: quando impostato il contenuto gated è **non** visualizzato agli utenti. Default: `false`.
* __enrolled__ | `boolean`: quando viene impostato il contenuto gated viene visualizzato agli studenti iscritti al corso. Default: `false`.
* __notEnrolled__ | `boolean`: quando impostato il contenuto gated è **non** visualizzato agli studenti iscritti al corso. Default: `false`.
* __owner__ | `boolean`: quando si imposta il contenuto gated viene visualizzato al proprietario del corso (di solito l'istruttore). Default: `false`.
* __notOwner__ | `boolean`: quando impostato il contenuto gated è **non** visualizzato al proprietario del corso (di solito l'istruttore). Default: `false`.
* __after__ | `Date`: tempo dopo il quale il contenuto del cancello dovrebbe diventare visibile. Default: `none`.
* __until__ | `Date`: tempo fino a quando il contenuto del cancello non dovrebbe rimanere visibile. Default: `none`.
* __banner__ | `node`: un messaggio personalizzato che viene mostrato ai visitatori per i quali i figli del cancello non sono visibili, invece di quello predefinito. Default: `none`.
* __disabled__ | `boolean`: se un cancello è disattivato, il banner verrà visualizzato a prescindere dal fatto che. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: controlla se mostrare i contenuti del cancello in modalità di presentazione quando il cancello è visibile per i "proprietari". Default: `false`.
* __check__ | `function`: funzione di callback che restituisce un `booleano` che indica se il gate deve visualizzare i componenti figli; la funzione viene invocata ogni volta che arrivano le azioni della sessione. Default: `none`.


## Esempi

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



