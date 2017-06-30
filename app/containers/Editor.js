// MODULES //

import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import SplitPane from 'react-split-pane';
import yaml from 'js-yaml';	
import Panel from 'components/Panel';
import Header from 'components/Header';
import Editor from 'components/Editor';
import Preview from 'components/Preview';
import { convertMarkdown, toggleScrolling, toggleToolbar, updatePreamble } from 'actions';
const debug = require( 'debug' )( 'isle-editor' );


// APP //

class App extends Component {

	constructor( props ) {
		super( props );

		this.lastPreamble = null;

		this.onChange = ( value ) => {
			debug( 'Editor text changed...' );
			const handleChange = ( value ) => {
				debug( 'Should handle change...' );
				const preamble = value.match( /---([\S\s]*)---/ )[ 1 ];
				let preambleHasChanged = this.checkPreambleChange( preamble );
				if ( preambleHasChanged ) {
					this.props.updatePreamble( yaml.load( preamble ) );
				}
				this.props.convertMarkdown( value );
			};

			if ( this.debouncedChange ) {
				this.debouncedChange( value );
			} else {
				this.debouncedChange = debounce( handleChange, 1000 );
				this.debouncedChange( value );
			}

		};
	}

	checkPreambleChange( preamble ) {
		if ( preamble !== this.lastPreamble ) {
			this.lastPreamble = preamble;
			return true;
		} else {
			debug( 'No changes in preamble...' );
			return false;
		}
	}

	componentDidMount() {
		const editor = this.refs.editor;
		const preview = this.refs.preview;
		this.onEditorScroll = this.sync( editor, preview );
		this.onPreviewScroll = this.sync( preview, editor );
	}

	sync( main, other ) {
		return ( scrollTop, scrollHeight, offsetHeight ) => {
			const percentage = ( scrollTop * 100 ) / ( scrollHeight - offsetHeight );
			main.setScrollTop( percentage );
			other.setScrollTop( percentage );
		};
	}

	render() {
		let { fileName, filePath, markdown, hideToolbar, preamble } = this.props;
		return (
			<div>
				{ !hideToolbar ? <Header fileName={fileName} /> : null }
				<SplitPane
					className="splitpane"
					split="vertical"
					primary="second"
					defaultSize={ parseInt( localStorage.getItem( 'splitPos' ), 10 ) }
					onChange={ size => localStorage.setItem( 'splitPos', size ) }
					style={{
						'position': 'absolute',
						'top': !hideToolbar ? 88 : 0,
						'bottom': '0'
					}}
				>
					<Panel ref="editor" onScroll={this.onEditorScroll}>
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
					<Panel ref="preview" onScroll={this.onPreviewScroll}>
						<Preview code={markdown} filePath={filePath} preamble={preamble} />
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
			</div>
		);
	}
}


// EXPORTS //

export default connect( mapStateToProps, {
	convertMarkdown,
	toggleScrolling,
	toggleToolbar,
	updatePreamble
})( App );

function mapStateToProps({ markdown }) {
	return markdown;
}
