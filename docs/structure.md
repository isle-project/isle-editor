## Structure of an ISLE Lesson

### Preamble

Any ISLE lesson should start with a preamble holding meta-information on the lesson as well as all state variables that can be manipulated and consumed from the elements in the lesson. This preamble has to be written in [YAML](https://en.wikipedia.org/wiki/YAML). When one creates a new file using the ISLE editor, a basic preamble will all necessary fields will be inserted. It suffices to simply edit the content of this preamble to get started.

### Global State

Inside the preamble, the `state` field is an object of all global variables that the learning components inside the lesson should have access to. It is possible to define arrays, numbers, strings inside the `state`. Properties of the store object can be accessed in the code of ISLE components using `this.state.<name of state variable>`. ISLE components can change their appearance depending on the global state or on the other hand change state variables themselves, which enables one to author complex and interactive lessons that react to user inputs. To change the value
of a state variable, use `this.setState({ <name of state variable>: <new value> })`.
