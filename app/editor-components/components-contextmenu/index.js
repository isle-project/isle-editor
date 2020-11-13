// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { ContextMenu, MenuItem, SubMenu } from 'react-contextmenu';
import objectKeys from '@stdlib/utils/keys';
import lowercase from '@stdlib/string/lowercase';
import replace from '@stdlib/string/replace';
import contains from '@stdlib/assert/contains';
import { LANGUAGES } from 'constants/deepl';
import SearchBar from 'editor-components/searchbar';
import GROUPED_SNIPPETS from 'snippets/grouped_snippets.json';
import electronStore from 'store/electron.js';


// VARIABLES //

const debug = logger( 'isle:editor:context-menu' );
const LANGUAGE_NAMES = objectKeys( LANGUAGES );
const ISLE_SERVER_TOKEN = electronStore.get( 'token' );
const RE_WHITESPACE = require( '@stdlib/regexp/whitespace' );


// MAIN //

class EditorContextMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			searchValue: ''
		};
	}

	createMenuEntries = ( arr, title, ...otherMenuEntries ) => {
		const out = [];
		const { searchValue } = this.state;
		for ( let i = 0; i < arr.length; i++ ) {
			const obj = arr[ i ];
			if ( searchValue && !contains( lowercase( obj.name ), searchValue ) ) {
				continue;
			}
			out.push( this.renderMenuItem( obj, out.length ) );
		}
		if ( !searchValue ) {
			return ( <SubMenu title={title} >
				{out}
				{otherMenuEntries}
			</SubMenu> );
		}
		if ( out.length > 0 ) {
			return ( <Fragment>
				<span style={{ marginLeft: 6, fontSize: 12 }} >{title}</span>
				<div className="react-contextmenu-item react-contextmenu-item--divider"></div>
				{out}
				{otherMenuEntries}
			</Fragment> );
		}
		return otherMenuEntries;
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

	handleHide = () => {
		this.setState({
			searchValue: ''
		});
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
		this.props.onTranslateSelection( data.language );
	}

	render() {
		const main = this.createMenuEntries( GROUPED_SNIPPETS.main, 'Main' );
		const layout = this.createMenuEntries( GROUPED_SNIPPETS.layout, 'Layout' );
		const displayComponents = this.createMenuEntries( GROUPED_SNIPPETS.displayComponents, 'Display' );
		const inputs = this.createMenuEntries( GROUPED_SNIPPETS.inputs, 'Inputs' );
		const questions = this.createMenuEntries( GROUPED_SNIPPETS.questions, 'Questions' );
		const surveys = this.createMenuEntries( GROUPED_SNIPPETS.surveys, 'Surveys' );
		const rComponents = this.createMenuEntries( GROUPED_SNIPPETS.rComponents, 'R Components' );
		const programmatic = this.createMenuEntries( GROUPED_SNIPPETS.programmatic, 'Programmatic Components' );
		const models = this.createMenuEntries( GROUPED_SNIPPETS.models, 'Models' );
		const tables = this.createMenuEntries( GROUPED_SNIPPETS.tables, 'Tables' );
		const tests = this.createMenuEntries( GROUPED_SNIPPETS.tests, 'Tests' );
		const plots = this.createMenuEntries( GROUPED_SNIPPETS.plots, 'Plots', this.createMenuEntries( GROUPED_SNIPPETS.victory, 'Victory Charts' ) );
		const learning = this.createMenuEntries( GROUPED_SNIPPETS.learning, 'Learning Components', this.createMenuEntries( GROUPED_SNIPPETS.learningDistribution, 'Distributions' ) );
		const general = this.createMenuEntries( GROUPED_SNIPPETS.general, 'General', this.createMenuEntries( GROUPED_SNIPPETS.services, 'Services' ) );
		const basic = this.createMenuEntries( GROUPED_SNIPPETS.basic, 'Basic',
			this.createMenuEntries( GROUPED_SNIPPETS.basicHeadings, 'Headings' ),
			this.createMenuEntries( GROUPED_SNIPPETS.basicLists, 'Lists' )
		);
		const presentation = this.createMenuEntries( GROUPED_SNIPPETS.presentation, 'Presentation' );
		const data = this.createMenuEntries( [], 'Data', models, tables, tests );
		return (
			<Fragment>
				<ContextMenu id={this.props.id} onHide={this.handleHide} >
					<span style={{ marginLeft: 6 }} >Select Component to Insert</span>
					<div className="react-contextmenu-item react-contextmenu-item--divider"></div>
					{main}
					{basic}
					{displayComponents}
					{layout}
					{inputs}
					{questions}
					{surveys}
					{rComponents}
					{programmatic}
					{learning}
					{general}
					{presentation}
					{data}
					{plots}
					<div className="react-contextmenu-item react-contextmenu-item--divider"></div>
					<SearchBar
						placeholder="Search for components..."
						onChange={( event ) => {
							this.setState({
								searchValue: replace( lowercase( event.target.value ), RE_WHITESPACE, '' )
							});
						}}
						buttonSize="sm"
						style={{ margin: 0, fontSize: 10 }}
					/>
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
	hasSelection: PropTypes.bool.isRequired,
	onContextMenuClick: PropTypes.func.isRequired,
	onTranslateSelection: PropTypes.func.isRequired
};


// EXPORTS //

export default EditorContextMenu;
