// MODULES //

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import SplitPane from 'react-split-pane';
import Panel from './../components/Panel';
import Header from './../components/Header';
import Editor from './../components/Editor';
import Preview from './../components/Preview';
import { convertMarkdown, toggleScrolling } from './../actions';


// APP //

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
