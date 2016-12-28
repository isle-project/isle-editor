# Grid

ISLE uses the [react-bootstrap](https://react-bootstrap.github.io) grid system, see the associated [documentation](https://react-bootstrap.github.io/components.html#grid). The only difference is that the `Col` component is exported as `Column` in ISLE.

#### Example

``` js
<Grid>
    <Row>
        <Column sm={6} md={3}>First</Column>
        <Column sm={6} md={3}>Second</Column>
        <Column sm={6} md={3}>Third</Column>
        <Column sm={6} md={3}>Fourth</Column>
    </Row>
</Grid>
```
