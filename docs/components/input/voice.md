# Voice Input

A voice input component.

#### Example:

``` js
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/voice-input/)

#### Options:

* __autorecord__ | `boolean`: controls whether to automatically start recording. Default: `false`.
* __defaultValue__ | `string`: default text value. Default: `''`.
* __grammars__ | `array`: speech grammar list (unsupported). Default: `[]`.
* __language__ | `string`: language identifier. Default: `'en-US'`.
* __legend__ | `string`: legend displayed in front of input field. Default: `''`.
* __mode__ | `string`: set to `full` to display a text input field alongside the microphone, `status` to only display a statusbar with the transcribed texts, `microphone` to show just a button to toggle recording, or `none` when the voice input should be invisible and purely controlled via hotkeys / voice commands. Default: `'full'`.
* __onChange__ | `function`: callback function invoked when text input value is updated. Default: `onChange() {}`.
* __onClick__ | `function`: callback function invoked when clicking on the microphone button. Default: `onClick() {}`.
* __onFinalText__ | `function`: callback function invoked once final text is received. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: callback function invoked when recording is started. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: callback function invoked once recording is stopped. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: callback function invoked with text segments. Default: `onSegment() {}`.
* __onSubmit__ | `function`: callback function when submitting text input value by hitting "Enter". Default: `onSubmit() {}`.
* __placeholder__ | `string`: text input placeholder. Default: `'Enter text'`.
* __remote__ | `object`: object with `start`, `stop`, and `toggle` and associated hotkeys. Default: `none`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __timeout__ | `number`: number of milliseconds after which to timeout the recording. Default: `none`.
* __stopTooltip__ | `string`: tooltip message desplayed while recording. Default: `'Click to stop recording'`.
* __startTooltip__ | `string`: tooltip message desplayed while not recording. Default: `'Click to start recording'`.
* __width__ | `number`: voice input width (in px). Default: `500`.
* __height__ | `number`: voice input height (in px). Default: `36`.
