# Installation

## Binaries

| OS      | x64 | ia32 |
| ------- | --- | --- |
| Linux   | [Download][] | [Download][] |
| OS X    | [Download][] | [Download][]  |
| Windows | [Download][] | [Download][] |

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
