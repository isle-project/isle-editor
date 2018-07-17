# Recorder

An ISLE component for recording audio, screen and video.

#### Example:

``` js
<Recorder 
    audio
    screen
    downloadable
/>
``` 

[Open interactive preview](https://isle.heinz.cmu.edu/components/recorder/)

#### Options:

* __audio__: a `boolean` indicating that the recording stores audio date
* __autostart__: a `boolean` indicating that the recording will start immediately. Default: `false`
* __camera__: a `boolean` invoked every time the user input an answer. Default: `null`.
* __downloadable__': a `boolean` which allows the user to download the recording, by making a `download` button appear
* __screen__: a `boolean` indicating that the scree content is recorded. Default: `false`.
* __video__: a `boolean` indicating that the camera is recorded. Default: `false`.

