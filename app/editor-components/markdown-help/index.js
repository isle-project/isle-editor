// MODULES //

import React, { Component } from 'react';
import ReactDraggable from 'react-draggable';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Panel from '@isle-project/components/panel';
import './markdown_help.css';


// MAIN //

/**
* An ISLE component that shows information about Markdown syntax.
*/
class MarkdownHelp extends Component {
	render() {
		const leftColumn = <Col sm={5}>
			<Card body>
				<Card.Title>Headers</Card.Title>
				<pre className="cancel">
					# This is a large header<br />
					## Medium header<br />
					### Small header
				</pre>
			</Card>
			<Card body>
				<Card.Title>Emphasis</Card.Title>
				<pre className="cancel">
					<i>*This will be italic*</i><br />
					<b>**This will be bold**</b><br />
					<i>*We <b>**can**</b> combine them*</i><br />
					<u>++Underlined++</u><br />
					<s>~~strikethrough~~</s><br />
				</pre>
			</Card>
			<Card body>
				<Card.Title>Quotes</Card.Title>
				<pre className="cancel">
					George Box said:<br />
					&gt; All models are wrong.<br />
					&gt; But some are useful.
				</pre>
			</Card>
		</Col>;
		const rightColumn = <Col sm={7}>
			<h5>Lists</h5>
			<Row>
				<Col sm={6} >
					<h6>Unordered</h6>
					<Card body>
						<pre className="cancel">
						* Item 1<br />
						* Item 2<br />
						&nbsp; &nbsp; * Item 2a<br />
						&nbsp; &nbsp; * Item 2b
						</pre>
					</Card>
				</Col>
				<Col sm={6} >
					<h6>Ordered</h6>
					<Card body>
						<pre className="cancel">
						1. Item 1<br />
						2. Item 2<br />
						3. Item 3<br />
						&nbsp; &nbsp;3a. Item 3a<br />
						&nbsp; &nbsp;3b. Item 3b
						</pre>
					</Card>
				</Col>
			</Row>
			<Card body>
				<Card.Title>Links</Card.Title>
				<pre className="cancel">[Google](https://google.com)</pre>
			</Card>
			<Card body>
				<Card.Title>Tables</Card.Title>
				<pre className="cancel">
				| Column 1 | Column 2 | Column 3 |<br />
				| -------- | -------- | -------- |<br />
				| Gertrude | Cox      | Female   |<br />
				| Karl     | Pearson  | Male     |
				</pre>
			</Card>
		</Col>;
		return (
			<ReactDraggable cancel=".cancel" >
				<Panel
					header="Markdown Cheatsheet"
					className="markdown-helper"
					onHide={this.props.onHide}
				>
					<Container>
						<Row>
							{leftColumn}
							{rightColumn}
						</Row>
					</Container>
				</Panel>
			</ReactDraggable>
		);
	}
}


// EXPORTS //

export default MarkdownHelp;

