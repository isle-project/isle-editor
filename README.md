# ISLE Editor

[Documentation][docs] | [Video Tutorials][videos]

#### Dependencies

[![Dependencies][dependencies-image]][dependencies-url] 
[![DevDependencies][dev-dependencies-image]][dev-dependencies-url]
[![DOI](https://zenodo.org/badge/61614893.svg)](https://zenodo.org/badge/latestdoi/61614893)

#### Tests

[![Build Status](https://travis-ci.org/Planeshifter/isle-editor.svg?branch=master)](https://travis-ci.org/Planeshifter/isle-editor)
[![codecov](https://codecov.io/gh/Planeshifter/isle-editor/branch/master/graph/badge.svg)](https://codecov.io/gh/Planeshifter/isle-editor)

## Introduction

A desktop-application that can be used to author and preview *interactive statistics learning environment* (ISLE) lessons before they are deployed online.

## Installation

### Binaries

Current version: v0.17.2.

| OS      | x64 | ia32 |
| ------- | --- | --- |
| Linux   | [Download][linux-x64] | [Download][linux-ia32] |
| OS X    | [Download][darwin-x64] |  |
| Windows | [Download][win32-x64] | [Download][win32-ia32] |

### Build from Source

#### Prerequisites

Developing and running the ISLE Editor has the following prerequisites:

* [git][git]: version control
* [Node.js][node-js]: JavaScript runtime (version `>= 0.10`)


#### Download

To acquire the source code, clone the git repository.

``` bash
$ git clone https://github.com/planeshifter/isle-editor
```

#### Installation

To install development dependencies,

``` bash
$ npm install
```

#### Development

To live-edit the ISLE Editor,

``` bash
$ npm start
$ open http://localhost:3000
```

Editing source files will result in changes appearing directly without reloading.

#### Build

To build and package the [Electron][electron] application,

``` bash
$ npm run build
```

## License

See [LICENSE][license].

## Icon Credits

The following icons are used under a Creative Commons CCBY license.

- "Confused" by Greg Pabst
- "Lightbulb" by Jeremy J Bristol
- "Microphone" by Aleksandr Vector
- "Positive Feedback Loop" by Richard Slater

[electron]: http://electron.atom.io/
[git]: http://git-scm.com/
[license]: https://raw.githubusercontent.com/Planeshifter/isle-editor/master/LICENSE.md
[node-js]: https://nodejs.org/en/
[darwin-x64]: https://github.com/Planeshifter/isle-editor/releases/download/v0.17.2/ISLE.Editor-darwin-x64.zip
[linux-x64]: https://github.com/Planeshifter/isle-editor/releases/download/v0.17.2/ISLE.Editor-linux-x64.zip
[linux-ia32]: https://github.com/Planeshifter/isle-editor/releases/download/v0.17.2/ISLE.Editor-linux-ia32.zip
[win32-ia32]: https://github.com/Planeshifter/isle-editor/releases/download/v0.17.2/ISLE.Editor-win32-ia32.zip
[win32-x64]: https://github.com/Planeshifter/isle-editor/releases/download/v0.17.2/ISLE.Editor-win32-x64.zip

[dependencies-image]: https://img.shields.io/david/planeshifter/isle-editor/master.svg
[dependencies-url]: https://david-dm.org/planeshifter/isle-editor/master

[dev-dependencies-image]: https://img.shields.io/david/dev/planeshifter/isle-editor/master.svg
[dev-dependencies-url]: https://david-dm.org/planeshifter/isle-editor/master#info=devDependencies

[docs]: http://isledocs.com/
[videos]: https://www.youtube.com/watch?v=yCgEw_8qFuI&list=PLJ0sgUfBmqefPfeLzoqwXVqf78aDL9kpG
