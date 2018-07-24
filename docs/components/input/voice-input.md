# Voice Input

A voice input component. Usually, this will be used as part of an [ISLE dashboard](dashboard.md), but it can also be used standalone. In this case, you want to handle changes via the `onChange` attribute. 

#### Example:

``` js
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/voice-input/)

#### Options:

* __defaultValue__: The text input is initialized with. Default: `''`.
* __inline__: `boolean` indicating whether the element should be displayed inline. Default: `false`.
* __legend__: `string` to be displayed as the title of te component. Default: `''`.
* __mode__: `string` indicating the display mode. Options are `full` (everything is displayed), `status` (a status bar display where the voice recognition is legible) and `microphone` where only the microphone is visible.
* __onChange__: Callback `function` invoked after each change of the text value. Default: `null`.
* __onFinalText__: Callback `function` invoked after a full sentence is recorded: `null`.
* __onSegment__: Callback `function` invoked after a small text portion has been recorded: `null`.
* __onRecordingStart__: Callback `function` invoked after the start of the recording: `null`.
* __onRecordingStop__: Callback `function` invoked after the recording has been stopped: `null`.
* __onSubmit__: Callback `function` invoked after the user has submitted the text input: `null`.
* __timeout__: `number` of milliseconds (silence) after which the recording is stopped. Default: `500`.
* __width__: width of the text input field in pixels. Default: `80`.
