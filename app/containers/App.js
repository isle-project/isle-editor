// MODULES //

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import SplitPane from 'react-split-pane';
import Panel from './../components/node_modules/Panel';
import Header from './../components/node_modules/Header';
import Editor from './../components/node_modules/Editor';
import Preview from './../components/node_modules/Preview';
import { convertMarkdown, toggleScrolling } from './../actions';
import moment from 'moment';


// VARIABLES //

const preamble = `---
title: "Lesson"
author: John Doe
date: ${moment().format( 'MMM Do, YYYY' )}
store:
---`;


class App extends React.Component {

	constructor( props ) {
		super( props );

		this.onChange = ( value ) => {
			if ( this.debouncedChange ) {
				this.debouncedChange( value );
			} else {
				this.debouncedChange = debounce( this.props.convertMarkdown, 10 );
				this.debouncedChange( value );
			}
		};
	}

	componentDidMount() {

	}

	render() {
		let { fileName, markdown } = this.props;
		if ( !markdown ) {
			markdown = preamble;
		}
		return (
			<section>
				<Header fileName={fileName} />
				<SplitPane split="vertical" defaultSize="50%" primary="second">
					<Panel ref="editor">
						<Editor
							ref="code"
							value={markdown}
							onChange={this.onChange}
							name="ace_editor"
							fontSize={14}
							setOptions={{
								highlightActiveLine: true,
								showGutter: true,
								showPrintMargin: false,
							}}
						/>
					</Panel>
					<Panel ref="preview">
						<Preview code={markdown} />
					</Panel>
				</SplitPane>
				{
					( () => {
						if ( process.env.NODE_ENV !== 'production' ) {
							const DevTools = require( './DevTools' ); // eslint-disable-line global-require
							return <DevTools />;
						}
					})()
				}
			</section>
		);
	}
}


// EXPORTS //

export default connect( mapStateToProps, {
	convertMarkdown,
	toggleScrolling
})( App );

function mapStateToProps({ markdown }) {
	return markdown;
}
