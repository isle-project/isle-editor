// MODULES //

import React, { Fragment } from 'react';
import logger from 'debug';
import CirclePicker from 'react-color/lib/Circle.js';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';
import Tooltip from 'components/tooltip';
import icons from './config/icons';
import findActiveFontSize from './config/find_active_font_size.js';
import isTextStyleMarkCommandEnabled from './config/is_text_style_mark_command_enabled.js';
import './menubar.css';


// VARIABLES //

const debug = logger( 'isle:text-editor' );


// MAIN //

const Button = ( props ) => {
	if ( props.disabled ) {
		return (
			<button onMouseDown={props.onMouseDown}
				style={{
					active: props.active,
					color: props.active ? 'black' : '#777',
					opacity: 0.2
				}}
				disabled={true}
				className="menu-item"
			>{props.children}</button>
		);
	}
	return (
		<Tooltip key={`${props.key}-tooltip`} tooltip={props.title} placement="bottom" >
			<button onMouseDown={props.onMouseDown}
				style={{
					active: props.active,
					color: props.active ? 'black' : '#777'
				}}
				className="menu-item"
			>{props.children}</button>
		</Tooltip>
	);
};

const MenuBar = ({ menu, children, state, dispatch, view, fullscreen, showColorPicker, onColorChoice }) => {
	const onMenuMouseDown = ( item ) => e => {
		e.preventDefault();
		if ( item.run ) {
			debug( 'Run command', item, e );
			item.run( state, dispatch, view, e.nativeEvent );
		}
	};
	const createGroupButtons = ( item, itemKey ) => (
		<Button
			key={itemKey}
			type="button"
			active={item.active && state ? item.active( state ) : false}
			disabled={item.enable && state ? !item.enable( state ) : false}
			title={typeof item.title === 'string' ? item.title : ''}
			onMouseDown={onMenuMouseDown(item)}
		>
			{item.content}
		</Button>
	);
	const createDropdownButtons = ( item, itemKey ) => (
		<DropdownItem
			onMouseDown={onMenuMouseDown(item)}
		>{item.content}</DropdownItem>
	);
	const createFontButtons = ( item, itemKey ) => (
		<DropdownItem
			style={{
				paddingLeft: 6,
				paddingRight: 6,
				paddingTop: 3,
				paddingBottom: 3
			}}
			onMouseDown={onMenuMouseDown(item)}
		>{item.content}</DropdownItem>
	);
	return (
		<div className="prose-menu-bar">
			{children}
			{menu.blocks.map( createGroupButtons )}
			<DropdownButton
				title=""
				variant="outline-secondary"
				size="sm" style={{ display: 'inline-block', marginRight: 4 }}
			>
				{menu.headers.map( createDropdownButtons )}
			</DropdownButton>
			<i className="prose-separator">|</i>
			{menu.marks.map( createGroupButtons )}
			{fullscreen ? menu.extraMarks.map( createGroupButtons ) : null}
			<div style={{ display: showColorPicker ? 'initial' : 'none', position: 'absolute', top: '50px', left: '100px', zIndex: 2 }}>
				<CirclePicker width="600px" circleSize={16} onChangeComplete={onColorChoice} />
			</div>
			<i className="prose-separator">|</i>
			<Dropdown
				style={{ display: 'inline-block', marginLeft: 4 }}
			>
				<Dropdown.Toggle
					size="sm" variant="outline-secondary"
					disabled={!isTextStyleMarkCommandEnabled( state, 'fontSize' )}
				>
					{findActiveFontSize( state )}
				</Dropdown.Toggle>
				<Dropdown.Menu style={{ minWidth: '24px' }}>
					{menu.fontSizes.map( createFontButtons )}
				</Dropdown.Menu>
			</Dropdown>
			{menu.wraps.map( createGroupButtons )}
			{ fullscreen ?
				<Fragment>
					<i className="prose-separator">|</i>
					{menu.alignment.map( createGroupButtons )}
				</Fragment> : null
			}
			<i className="prose-separator">|</i>
			<DropdownButton
				title={icons.insert}
				variant="outline-secondary"
				size="sm" style={{ display: 'inline-block' }}
			>
				{menu.insert.map( createDropdownButtons )}
			</DropdownButton>
			<i className="prose-separator">|</i>
			<DropdownButton
				title={icons.table}
				variant="outline-secondary"
				size="sm" style={{ display: 'inline-block' }}
			>
				{menu.tableEdits.map( createDropdownButtons )}
			</DropdownButton>
			{ fullscreen ?
				<Fragment>
					<i className="prose-separator">|</i>
					{menu.history.map( createGroupButtons )}
				</Fragment> : null
			}
			<i className="prose-separator">|</i>
			{menu.addons.map( createGroupButtons )}
		</div>
	);
};


// EXPORTS //

export default MenuBar;
