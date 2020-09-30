// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { ContextMenu, MenuItem, SubMenu } from 'react-contextmenu';
import objectKeys from '@stdlib/utils/keys';
import { LANGUAGES } from 'constants/deepl';
import GROUPED_SNIPPETS from 'snippets/grouped_snippets.json';
import rendererStore from 'store/electron.js';


// VARIABLES //

const debug = logger( 'isle:editor:context-menu' );
console.log( LANGUAGES );
const LANGUAGE_NAMES = objectKeys( LANGUAGES );
const ISLE_SERVER_TOKEN = rendererStore.get( 'token' );


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
		this.props.onSelectionTranslate( data.language );
	}

	render() {
		return (
			<Fragment>
				<ContextMenu id={this.props.id} >
					<SubMenu title="Main">
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
					{ISLE_SERVER_TOKEN ? <SubMenu title="Translate selection to" >
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
					</SubMenu> : null}
				</ContextMenu>
			</Fragment>
		);
	}
}


// PROPERTIES //

EditorContextMenu.propTypes = {
	onTranslate: PropTypes.func.isRequired,
	onContextMenuClick: PropTypes.func.isRequired
};


// EXPORTS //

export default EditorContextMenu;
