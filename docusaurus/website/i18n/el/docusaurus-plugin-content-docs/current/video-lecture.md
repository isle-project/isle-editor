---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

Ένα στοιχείο διάλεξης βίντεο που προβάλλει βίντεο διανθισμένα με διαδραστικά στοιχεία.

## Επιλογές

* __controls__ | `boolean`: υποδεικνύει αν θα εμφανίζονται τα στοιχεία ελέγχου των συσκευών αναπαραγωγής βίντεο. Default: `true`.
* __instructorView__ | `boolean`: ελέγχει αν θα συμπεριληφθεί η προβολή του εκπαιδευτή. Default: `true`.
* __linkToDashboard__ | `boolean`: ελέγχει αν θα εμφανίζεται ένας σύνδεσμος προς το ταμπλό μετά την ολοκλήρωση της διάλεξης βίντεο. Default: `false`.
* __steps__ | `array (required)`: συστοιχία URLs βίντεο και στοιχείων που θα εμφανίζονται ενδιάμεσα. Default: `none`.
* __videoWidth__ | `(string|number)`: πλάτος βίντεο. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: ύψος βίντεο. Default: `'98vh'`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.


## Παραδείγματα

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

