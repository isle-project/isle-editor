// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import capitalize from '@stdlib/string/capitalize';
import lowercase from '@stdlib/string/lowercase';
import replace from '@stdlib/string/replace';
import contains from '@stdlib/assert/contains';
import { ContextMenu, MenuItem, SubMenu } from '@isle-project/components/internal/contextmenu';
import { LANGUAGES } from '@isle-project/constants/languages';
import Tooltip from '@isle-project/components/tooltip';
import SearchBar from 'editor-components/searchbar';
import GROUPED_SNIPPETS from 'snippets/grouped_snippets.json';
import COMPONENT_DOCS from '@isle-project/components/documentation.json';
import electronStore from 'store/electron.js';
import './contextmenu.css';


// VARIABLES //

const LANGUAGE_NAMES = LANGUAGES.map( x => capitalize( x.label ) );
const ISLE_SERVER_TOKEN = electronStore.get( 'token' );
const RE_WHITESPACE = require( '@stdlib/regexp/whitespace' ).REGEXP;
const BUTTON_STYLE = {
	float: 'right',
	border: 'none',
	background: 'none',
	cursor: 'pointer'
};


// MAIN //

class EditorContextMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			searchValue: '',
			menuContent: null,
			visible: false
		};
	}

	shouldComponentUpdate = ( nextProps, nextState ) => {
		if (
			this.props.onContextMenuClick !== nextProps.onContextMenuClick ||
			this.props.onTranslateSelection !== nextProps.onTranslateSelection ||
			this.state.searchValue !== nextState.searchValue ||
			this.state.menuContent !== nextState.menuContent ||
			this.state.visible !== nextState.visible
		) {
			return true;
		}
		return false;
	}

	createMenuEntries = ( arr, title, ...otherMenuEntries ) => {
		const out = [];
		let { searchValue } = this.state;
		let strippedSearchValue;
		if ( searchValue ) {
			searchValue = lowercase( searchValue );
			strippedSearchValue = replace( lowercase( searchValue ), RE_WHITESPACE, '' );
		}
		for ( let i = 0; i < arr.length; i++ ) {
			const obj = arr[ i ];
			const description = COMPONENT_DOCS[ obj.name ] ? this.props.t( 'ComponentDocs:'+COMPONENT_DOCS[ obj.name ].description ) : '';
			if (
				searchValue &&
				!contains( lowercase( obj.name ), strippedSearchValue ) &&
				!contains( lowercase( description ), searchValue )
			) {
				continue;
			}
			out.push( this.renderMenuItem( obj, out.length ) );
		}
		if ( !searchValue ) {
			return ( <SubMenu key={title} title={title} >
				{out}
				{otherMenuEntries}
			</SubMenu> );
		}
		if ( out.length > 0 ) {
			return ( <div key={title} >
				<span style={{ marginLeft: 6, fontSize: 12 }} >{title}</span>
				<div className="react-contextmenu-item react-contextmenu-item--divider"></div>
				{out}
				{otherMenuEntries}
			</div> );
		}
		return otherMenuEntries;
	}

	renderMenuItem = ( obj ) => {
		const description = COMPONENT_DOCS[ obj.name ] ? this.props.t( 'ComponentDocs:'+COMPONENT_DOCS[ obj.name ].description ) : '';
		return ( <MenuItem
			key={obj.name}
			data={obj}
			onClick={this.handleContextMenuClick}
		>
			<span>{obj.name}</span>
			<Tooltip tooltip={description} placement="top" >
				<sup
					className="fas fa-info-circle"
					title="Description"
					style={{ marginLeft: 2, color: 'rgb(120, 120, 120)' }}
				></sup>
			</Tooltip>
			<button
				className="fa fa-cogs"
				title="Open component wizard"
				style={BUTTON_STYLE}
			/>
		</MenuItem> );
	}

	handleHide = () => {
		this.setState({
			searchValue: '',
			visible: false
		});
		this.props.onHide();
	}

	handleContextMenuClick = ( event, data ) => {
		this.props.onContextMenuClick( event.target.nodeName === 'BUTTON', data );
	}

	handleTranslateSelectionClick = ( _, data ) => {
		this.props.onTranslateSelection( data.language );
	}

	handleSearchValueChange = ( event ) => {
		event.stopPropagation();
		this.setState({
			searchValue: event.target.value
		}, () => {
			this.buildMenu( true );
		});
	}

	clearSearchValue = () => {
		this.setState({
			searchValue: ''
		}, () => {
			this.buildMenu( true );
		});
	}

	buildMenu = ( forceUpdate ) => {
		if ( this.state.menuContent && !forceUpdate ) {
			return this.setState({
				visible: true
			});
		}
		const { t } = this.props;
		let searchStyle = null;
		if ( this.state.searchValue ) {
			searchStyle = {
				maxHeight: '75vh',
				overflowY: 'auto',
				overflowX: 'hidden'
			};
		}
		const main = this.createMenuEntries( GROUPED_SNIPPETS.main, 'Main' );
		const layout = this.createMenuEntries( GROUPED_SNIPPETS.layout, 'Layout' );
		const displayComponents = this.createMenuEntries( GROUPED_SNIPPETS.displayComponents, 'Display', this.createMenuEntries( GROUPED_SNIPPETS.language, 'Language' ) );
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

		/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
		const menuContent = (
			<Fragment>
				<span style={{ marginLeft: 6 }} >{t('select-component-to-insert')}</span>
				<div style={searchStyle} >
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
				</div>
				<div className="react-contextmenu-item react-contextmenu-item--divider"></div>
				<SearchBar
					value={this.state.searchValue}
					placeholder={t('search-for-components')}
					onChange={this.handleSearchValueChange}
					buttonSize="sm"
					style={{ margin: 0, fontSize: 10 }}
					onClear={this.clearSearchValue}
				/>
				<div className="react-contextmenu-item react-contextmenu-item--divider"></div>
				<SubMenu title={t('translate-selection')} disabled={!ISLE_SERVER_TOKEN} >
					{LANGUAGE_NAMES.map( ( name, idx ) => {
						return (
							<MenuItem
								key={idx} data={{
									language: LANGUAGES[ idx ].value
								}}
								onClick={this.handleTranslateSelectionClick}
							>
								{name}
							</MenuItem>
						);
					})}
				</SubMenu>
			</Fragment>
		);
		/* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
		this.setState({
			menuContent,
			visible: true
		});
	}

	render() {
		return (
			<Fragment>
				<ContextMenu
					className="components-contextmenu" id={this.props.id}
					onHide={this.handleHide} disableIfShiftIsPressed
					onShow={this.buildMenu}
				>
					{this.state.visible ? this.state.menuContent : []}
				</ContextMenu>
			</Fragment>
		);
	}
}


// PROPERTIES //

EditorContextMenu.propTypes = {
	onContextMenuClick: PropTypes.func.isRequired,
	onTranslateSelection: PropTypes.func.isRequired,
	onHide: PropTypes.func.isRequired
};


// EXPORTS //

export default withTranslation( 'Editor' )( EditorContextMenu );
