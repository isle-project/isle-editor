// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ContextMenu, MenuItem, SubMenu } from 'react-contextmenu';
import groupBy from '@stdlib/utils/group-by';
import contains from '@stdlib/assert/contains';
import trim from '@stdlib/string/trim';
import Loadable from 'components/loadable';
const AnimationHelp = Loadable( () => import( 'editor-components/animation-help' ) );
import { componentSnippets } from 'snippets';
import COMPONENTS from './components.json';


// VARIABLES //

const snippets = groupBy( componentSnippets, groupIndicator );


// FUNCTIONS //

function groupIndicator( v ) {
	v.name = trim( v.name );
	if ( contains( COMPONENTS.R, v.name ) ) {
		return 'rComponents';
	}
	if ( contains( COMPONENTS.PRESENTATION, v.name ) ) {
		return 'presentation';
	}
	if ( contains( COMPONENTS.PLOTS, v.name ) ) {
		return 'plots';
	}
	if ( contains( COMPONENTS.VICTORY, v.name ) ) {
		return 'victory';
	}
	if ( contains( COMPONENTS.LEARNING, v.name ) ) {
		return 'learning';
	}
	if ( contains( COMPONENTS.SURVEY, v.name ) ) {
		return 'surveys';
	}
	if ( contains( COMPONENTS.INPUT, v.name ) ) {
		return 'inputs';
	}
	if ( contains( COMPONENTS.QUESTION, v.name ) ) {
		return 'questions';
	}
	if ( contains( COMPONENTS.DISPLAY, v.name ) ) {
		return 'displayComponents';
	}
	if ( contains( COMPONENTS.MAIN, v.name ) ) {
		return 'main';
	}
	return 'general';
}


// MAIN //

class EditorContextMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			showAnimationHelp: false
		};
	}

	renderMenuItem = ( obj, idx ) => {
		return ( <MenuItem
			key={idx}
			data={obj}
			onClick={this.handleContextMenuClick}
		>
			{obj.name}
			<div
				className="fa fa-cogs"
				style={{
					float: 'right'
				}}
				onClick={this.handleCustomInsertClick}
			/>
		</MenuItem>
		);
	}

	toggleAnimationHelp = () => {
		this.setState({
			showAnimationHelp: !this.state.showAnimationHelp
		});
	}

	handleContextMenuClick = ( evt, data ) => {
		this.props.onContextMenuClick( this.customClick, data );
		this.customClick = false;
	}

	handleCustomInsertClick = () => {
		this.customClick = true;
		// Propagate to `handleContextMenuClick`...
	}

	render() {
		return (
			<Fragment>
				<ContextMenu id="editorWindow">
					{snippets.main.map( this.renderMenuItem )}
					<SubMenu title="Display">
						{snippets.displayComponents.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Inputs">
						{snippets.inputs.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Questions">
						{snippets.questions.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Surveys">
						{snippets.surveys.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="R Components">
						{snippets.rComponents.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Learning Components">
						{snippets.learning.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="General">
						{snippets.general.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Presentation">
						{snippets.presentation.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Plots">
						{snippets.plots.map( this.renderMenuItem )}
						<SubMenu title="Victory Charts">
							{snippets.victory.map( this.renderMenuItem )}
						</SubMenu>
					</SubMenu>
					<MenuItem onClick={this.toggleAnimationHelp}>Animation Help
					</MenuItem>
				</ContextMenu>
				{ this.state.showAnimationHelp ? <AnimationHelp onHide={this.toggleAnimationHelp} /> : null }
			</Fragment>
		);
	}
}


// PROPERTIES //

EditorContextMenu.propTypes = {
	onContextMenuClick: PropTypes.func.isRequired
};


// EXPORTS //

export default EditorContextMenu;
