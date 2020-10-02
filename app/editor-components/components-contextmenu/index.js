// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import logger from 'debug';
import vex from 'vex-js';
import { ContextMenu, MenuItem, SubMenu } from 'react-contextmenu';
import objectKeys from '@stdlib/utils/keys';
import { LANGUAGES } from 'constants/deepl';
import GROUPED_SNIPPETS from 'snippets/grouped_snippets.json';
import rendererStore from 'store/electron.js';


// VARIABLES //

const debug = logger( 'isle:editor:context-menu' );
const LANGUAGE_NAMES = objectKeys( LANGUAGES );
const ISLE_SERVER_TOKEN = rendererStore.get( 'token' );
const ISLE_SERVER = rendererStore.get( 'server' );


// MAIN //

class EditorContextMenu extends Component {
	constructor( props ) {
		super( props );
	}

	renderMenuItem = ( obj, idx ) => {
		return ( <MenuItem
			key={idx}
			data={obj}
			onClick={this.handleContextMenuClick}
		>
			{obj.name}
			<button
				className="fa fa-cogs"
				title="Open component configurator"
				style={{
					float: 'right',
					border: 'none',
					background: 'none',
					cursor: 'pointer'
				}}
				onClick={this.handleCustomInsertClick}
			/>
		</MenuItem>
		);
	}

	handleContextMenuClick = ( _, data ) => {
		this.props.onContextMenuClick( this.customClick, data );
		this.customClick = false;
	}

	handleCustomInsertClick = () => {
		debug( 'Clicked top open configuration menu...' );
		this.customClick = true;
		// Propagate to `handleContextMenuClick`...
	}

	handleTranslateSelectionClick = ( _, data ) => {
		this.translateSelection( data.language );
	}

	translateSelection = async ( language ) => {
		const editorDiv = document.getElementsByClassName( 'monaco-editor' )[ 0 ];
		editorDiv.style.opacity = 0.4;
		this.props.editor.updateOptions({ readOnly: true });
		const selection = this.props.editor.getSelection();
		const range = new this.monaco.Range( selection.startLineNumber, selection.startColumn, selection.endLineNumber, selection.endColumn );
		const model = this.props.editor.getModel();
		const value = model.getValueInRange( range );
		try {
			const res = await axios.post( ISLE_SERVER+'/translate_lesson', {
				target_lang: language,
				text: value
			}, {
				headers: {
					'Authorization': 'JWT ' + ISLE_SERVER_TOKEN
				}
			});
			editorDiv.style.opacity = 1.0;
			this.props.editor.updateOptions({ readOnly: false });
			const op = {
				range: range,
				text: res.data.text,
				forceMoveMarkers: true
			};
			this.immediateUpdate = true;
			this.props.editor.executeEdits( 'my-source', [ op ] );
		} catch ( err ) {
			this.props.editor.updateOptions({ readOnly: false });
			editorDiv.style.opacity = 1.0;
			vex.dialog.alert( 'Translation failed. Make sure you have access to the translation service through your ISLE server. Error encountered: '+err.message );
		}
	}

	render() {
		return (
			<Fragment>
				<ContextMenu id={this.props.id} >
					<span style={{ marginLeft: 6 }} >Select Component to Insert</span>
					<div className="react-contextmenu-item react-contextmenu-item--divider"></div>
					<SubMenu title="Main" >
						{GROUPED_SNIPPETS.main.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Basic">
						<SubMenu title="Headings">
							{GROUPED_SNIPPETS.basicHeadings.map( this.renderMenuItem )}
						</SubMenu>
						<SubMenu title="Lists">
							{GROUPED_SNIPPETS.basicLists.map( this.renderMenuItem )}
						</SubMenu>
						{GROUPED_SNIPPETS.basic.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Display">
						{GROUPED_SNIPPETS.displayComponents.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Layout">
						{GROUPED_SNIPPETS.layout.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Inputs">
						{GROUPED_SNIPPETS.inputs.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Questions">
						{GROUPED_SNIPPETS.questions.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Surveys">
						{GROUPED_SNIPPETS.surveys.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="R Components">
						{GROUPED_SNIPPETS.rComponents.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Programmatic Components">
						{GROUPED_SNIPPETS.programmatic.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Learning Components">
						{GROUPED_SNIPPETS.learning.map( this.renderMenuItem )}
						<SubMenu title="Distributions">
							{GROUPED_SNIPPETS.learningDistribution.map( this.renderMenuItem )}
						</SubMenu>
					</SubMenu>
					<SubMenu title="General">
						{GROUPED_SNIPPETS.general.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Services">
						{GROUPED_SNIPPETS.services.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Presentation">
						{GROUPED_SNIPPETS.presentation.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Plots">
						{GROUPED_SNIPPETS.plots.map( this.renderMenuItem )}
						<SubMenu title="Victory Charts">
							{GROUPED_SNIPPETS.victory.map( this.renderMenuItem )}
						</SubMenu>
					</SubMenu>
					<div className="react-contextmenu-item react-contextmenu-item--divider"></div>
					<SubMenu title="Translate selection to" disabled={!ISLE_SERVER_TOKEN || !this.props.hasSelection} >
						{LANGUAGE_NAMES.map( ( name, idx ) => {
							return (
								<MenuItem
									key={idx} data={{
										language: LANGUAGES[ name ]
									}}
									onClick={this.handleTranslateSelectionClick}
								>
									{name}
								</MenuItem>
							);
						})}
					</SubMenu>
				</ContextMenu>
			</Fragment>
		);
	}
}


// PROPERTIES //

EditorContextMenu.propTypes = {
	editor: PropTypes.object.isRequired,
	hasSelection: PropTypes.bool.isRequired,
	onContextMenuClick: PropTypes.func.isRequired
};


// EXPORTS //

export default EditorContextMenu;
