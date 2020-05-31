// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { ContextMenu, MenuItem, SubMenu } from 'react-contextmenu';
import groupBy from '@stdlib/utils/group-by';
import contains from '@stdlib/assert/contains';
import trim from '@stdlib/string/trim';
import Loadable from 'internal-components/loadable';
const AnimationHelp = Loadable( () => import( 'editor-components/editor/animation-help' ) );
const MarkdownHelp = Loadable( () => import( 'editor-components/editor/markdown-help' ) );
import { componentSnippets } from 'snippets';
import COMPONENTS from './components.json';


// VARIABLES //

const debug = logger( 'isle:editor:context-menu' );
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
		if ( contains( v.name, 'Distribution' ) ) {
			return 'learningDistribution';
		}
		return 'learning';
	}
	if ( contains( COMPONENTS.PROGRAMMATIC, v.name ) ) {
		return 'programmatic';
	}
	if ( contains( COMPONENTS.SERVICES, v.name ) ) {
		return 'services';
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
			showAnimationHelp: false,
			showMarkdownHelp: false
		};
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

	toggleAnimationHelp = () => {
		this.setState({
			showAnimationHelp: !this.state.showAnimationHelp
		});
	}

	toggleMarkdownHelp = () => {
		this.setState({
			showMarkdownHelp: !this.state.showMarkdownHelp
		});
	}

	handleContextMenuClick = ( evt, data ) => {
		this.props.onContextMenuClick( this.customClick, data );
		this.customClick = false;
	}

	handleCustomInsertClick = () => {
		debug( 'Clicked top open configuration menu...' );
		this.customClick = true;
		// Propagate to `handleContextMenuClick`...
	}

	render() {
		return (
			<Fragment>
				<ContextMenu id="editor-context-menu" >
					<SubMenu title="Main">
						{snippets.main.map( this.renderMenuItem )}
					</SubMenu>
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
					<SubMenu title="Programmatic Components">
						{snippets.programmatic.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Learning Components">
						{snippets.learning.map( this.renderMenuItem )}
						<SubMenu title="Distributions">
							{snippets.learningDistribution.map( this.renderMenuItem )}
						</SubMenu>
					</SubMenu>
					<SubMenu title="General">
						{snippets.general.map( this.renderMenuItem )}
					</SubMenu>
					<SubMenu title="Services">
						{snippets.services.map( this.renderMenuItem )}
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
					<MenuItem
						onClick={this.toggleAnimationHelp}>Animation Help
					</MenuItem>
					<MenuItem
						onClick={this.toggleMarkdownHelp}>Markdown Help
					</MenuItem>
				</ContextMenu>
				{ this.state.showAnimationHelp ? <AnimationHelp onHide={this.toggleAnimationHelp} /> : null }
				{ this.state.showMarkdownHelp ? <MarkdownHelp onHide={this.toggleMarkdownHelp} /> : null }
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
