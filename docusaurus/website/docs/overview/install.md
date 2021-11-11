---
id: install
title: Installation
sidebar_label: Installation
---

You may either download prebuilt binaries of the ISLE editor or built it yourself from the source code. The latter is only recommended in case you would like to contribute to the development of ISLE or be able to pull in the latest features.

## Binaries

Current version: _v0.76.10_.

[Download the isle-editor for Windows (.exe)][windows]

[Download the isle-editor for macOS (.dmg)][macOS]

[Download the isle-editor for Linux (.AppImage)][linux-appimage] (alternative: [.deb][linux-deb])

## Build from Source

### Prerequisites

Developing and running the ISLE Editor has the following prerequisites:

* [git][git]: version control
* [Node.js][node-js]: JavaScript runtime (version `>= 14.0`)

### Download

To acquire the source code, clone the git repository.

``` bash
$ git clone https://github.com/isle-project/isle-editor
```

### Installation

To install development dependencies,

``` bash
$ npm install
```

### Development

To live-edit the ISLE Editor,

``` bash
$ npm run dev
```

Editing source files will result in changes appearing directly without reloading.

### Build

To build the [Electron][electron] application,

``` bash
$ npm run build
```

The bundled version can be started with

``` bash
$ npm start
```

#### Package

To package the editor as a standalone application for the current operating system, run 

``` bash
$ npm run package
```

To bundle for all operating systems, run

``` bash
$ npm run package-all
```

#### Tests

The ISLE editor uses [Jest][jest] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ npm test
```

To only run the tests for a single component or function, use

```bash
$ npm run test -- -t "name-of-spec"
```

[electron]: http://electron.atom.io/
[git]: http://git-scm.com/
[jest]: https://jestjs.io
[node-js]: https://nodejs.org/en/

[macOS]: https://github.com/isle-project/isle-editor/releases/download/v0.76.10/isle-editor-0.76.10.dmg
[linux-appimage]: https://github.com/isle-project/isle-editor/releases/download/v0.76.10/isle-editor-0.76.10-x86_64.AppImage
[linux-deb]: https://github.com/isle-project/isle-editor/releases/download/v0.76.10/isle-editor-0.76.10-amd64.deb
[windows]: https://github.com/isle-project/isle-editor/releases/download/v0.76.10/isle-editor-Setup-0.76.10.exe
