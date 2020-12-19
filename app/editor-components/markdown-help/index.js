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
		const { t } = this.props;
		const leftColumn = <Col sm={5}>
			<Card body>
				<Card.Title>{t('headers')}</Card.Title>
				<pre className="cancel">
					# {t('large-header')}<br />
					## {t('medium-header')}<br />
					### {t('small-header')}
				</pre>
			</Card>
			<Card body>
				<Card.Title>{t('emphasis')}</Card.Title>
				<pre className="cancel">
					<i>*{t('markup-italic')}*</i><br />
					<b>**{t('markup-bold')}**</b><br />
					<i>*We <b>**can**</b> combine them*</i><br />
					<u>++{t('markup-underlined')}++</u><br />
					<s>~~{t('markup-strikethrough')}~~</s><br />
				</pre>
			</Card>
			<Card body>
				<Card.Title>{t('quotes')}</Card.Title>
				<pre className="cancel">
			    {t('george-box')}<br />
					&gt; {t('models-wrong')}<br />
					&gt; {t('models-useful')}
				</pre>
			</Card>
		</Col>;
		const rightColumn = <Col sm={7}>
			<h5>{t('lists')}</h5>
			<Row>
				<Col sm={6} >
					<h6>{t('unordered')}</h6>
					<Card body>
						<pre className="cancel">
						* {t('item-1')}<br />
						* {t('item-2')}<br />
						&nbsp; &nbsp; * {t('item-2a')}<br />
						&nbsp; &nbsp; * {t('item-2b')}
						</pre>
					</Card>
				</Col>
				<Col sm={6} >
					<h6>{ t('ordered')}</h6>
					<Card body>
						<pre className="cancel">
						1. {t('item-1')}<br />
						2. {t('item-2')}<br />
						3. {t('item-3')}<br />
						&nbsp; &nbsp;3a. {t('item-3a')}<br />
						&nbsp; &nbsp;3b. {t('item-3b')}
						</pre>
					</Card>
				</Col>
			</Row>
			<Card body>
				<Card.Title>{t('links')}</Card.Title>
				<pre className="cancel">[Google](https://google.com)</pre>
			</Card>
			<Card body>
				<Card.Title>{ t('tables')}</Card.Title>
				<pre className="cancel">
				| {t('column')} 1 | {t('column')} 2 | {t('column')} 3 |<br />
				| -------- | -------- | -------- |<br />
				| Gertrude | Cox      | {t('female')}   |<br />
				| Karl     | Pearson  | {t('male')}     |
				</pre>
			</Card>
		</Col>;
		return (
			<ReactDraggable cancel=".cancel" >
				<Panel
					header={t('markdown-cheatsheet')}
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

export default React.memo( MarkdownHelp );

