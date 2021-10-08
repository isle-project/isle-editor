---
id: video-player
title: Video Player
sidebar_label: Video Player
---

Ένα στοιχείο για την αναπαραγωγή αρχείων πολυμέσων και περιεχομένου από το YouTube, το SoundCloud και το Vimeo.

## Επιλογές

* __url__ | `string`: URL του βίντεο. Default: `''`.
* __controls__ | `boolean`: υποδεικνύει αν θα εμφανιστούν τα στοιχεία ελέγχου του προγράμματος αναπαραγωγής βίντεο. Default: `false`.
* __playing__ | `boolean`: υποδεικνύει αν θα ξεκινήσει αυτόματα η αναπαραγωγή του βίντεο. Default: `false`.
* __volume__ | `number`: ένταση του ήχου του παίκτη. Default: `0.8`.
* __center__ | `boolean`: ελέγχει αν θα κεντραριστεί το πρόγραμμα αναπαραγωγής βίντεο. Default: `true`.
* __height__ | `(string|number)`: ύψος του παίκτη. Default: `360`.
* __width__ | `(string|number)`: πλάτος του παίκτη. Default: `640`.
* __loop__ | `boolean`: ελέγχει αν θα ξεκινήσει εκ νέου το βίντεο μετά την αναπαραγωγή του. Default: `false`.
* __startTime__ | `number`: αριθμός των δευτερολέπτων στα οποία θα ξεκινήσει το βίντεο, ή κλάσμα εάν η τιμή είναι μεταξύ 0 και 1. Default: `none`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.
* __onEnded__ | `function`: callback που καλείται μόλις τελειώσει το βίντεο. Default: `onEnded() {}`.
* __onPause__ | `function`: callback που καλείται όταν το βίντεο σταματάει. Default: `onPause() {}`.
* __onPlay__ | `function`: callback που καλείται όταν το βίντεο ξεκινά ή συνεχίζει την αναπαραγωγή μετά από παύση. Default: `onPlay() {}`.
* __onStart__ | `function`: callback που καλείται μόλις το βίντεο σταματήσει. Default: `onStart() {}`.
* __onSeek__ | `function`: callback όταν τα μέσα ενημέρωσης επιδιώκουν να κληθούν με την παράμετρο `seconds`. Default: `onSeek() {}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Autoplay', value: 'Autoplay' },
        { label: 'Start Time', value: 'startTime' },
        { label: 'Controlled Size', value: 'controlledSize' },
        { label: 'With Callback on Pause', value: 'withCallback' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<VideoPlayer
    url="https://www.youtube.com/watch?v=UzxYlbK2c7E"
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<VideoPlayer
    url="https://youtu.be/Lkj8b25ppZo"
    playing
    controls
/>
```
</TabItem>

<TabItem value="startTime">

```jsx live
<VideoPlayer
    url="https://youtu.be/Lkj8b25ppZo"
    controls
    startTime={28}
/>
```
</TabItem>


<TabItem value="controlledSize">

```jsx live
<VideoPlayer
    url="https://youtu.be/Lkj8b25ppZo"
    controls
    width={520}
    height={290}
    style={{ outline: '10px solid orange', boxShadow: '0 6px 12px black'}}
/>
```
</TabItem>


<TabItem value="withCallback">

```jsx live
<VideoPlayer
    url="https://youtu.be/Lkj8b25ppZo"
    controls
    onPause={ function(){ alert('Do it again') }}
/>
```
</TabItem>

</Tabs>



