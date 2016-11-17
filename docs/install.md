# Installation

{% set softwareVersion = "v0.16.0" %}

## Binaries

Current version: _{{softwareVersion}}_.

| OS      | x64 | ia32 |
| ------- | --- | --- |
| Linux   | [Download][linux-x64] | [Download][linux-ia32] |
| OS X    | [Download][darwin-x64] |  |
| Windows | [Download][win32-x64] | [Download][win32-ia32] |

## Build from Source

### Prerequisites

Developing and running the ISLE Editor has the following prerequisites:

* [git][git]: version control
* [Node.js][node-js]: JavaScript runtime (version `>= 0.10`)


### Download

To acquire the source code, clone the git repository.

``` bash
$ git clone https://github.com/planeshifter/isle-editor
```

### Installation

To install development dependencies,

``` bash
$ npm install
```

### Development

To live-edit the ISLE Editor,

``` bash
$ npm start
$ open http://localhost:3000
```

Editing source files will result in changes appearing directly without reloading.

### Build

To build and package the [Electron][electron] application,

``` bash
$ npm run build
```

[electron]: http://electron.atom.io/
[git]: http://git-scm.com/
[node-js]: https://nodejs.org/en/
[darwin-x64]: https://github.com/Planeshifter/isle-editor/releases/download/{{softwareVersion}}/ISLE.Editor-darwin-x64.zip
[linux-x64]: https://github.com/Planeshifter/isle-editor/releases/download/{{softwareVersion}}/ISLE.Editor-linux-x64.zip
[linux-ia32]: https://github.com/Planeshifter/isle-editor/releases/download/{{softwareVersion}}/ISLE.Editor-linux-ia32.zip
[win32-ia32]: https://github.com/Planeshifter/isle-editor/releases/download/{{softwareVersion}}/ISLE.Editor-win32-ia32.zip
[win32-x64]: https://github.com/Planeshifter/isle-editor/releases/download/{{softwareVersion}}/ISLE.Editor-win32-x64.zip
