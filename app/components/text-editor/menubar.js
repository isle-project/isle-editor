// MODULES //

import React, { Fragment } from 'react';
import logger from 'debug';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
import Tooltip from 'components/tooltip';
import icons from './config/icons';
import './menubar.css';


// VARIABLES //

const debug = logger( 'isle:text-editor' );


// MAIN //

const Button = ( props ) => {
	return (
		<Tooltip key={`${props.key}-tooltip`} tooltip={props.title} placement="bottom" >
			<button onMouseDown={props.onMouseDown} style={{
					active: props.active,
					color: props.active ? 'black' : '#777'
				}}
				className="menu-item">{props.children}</button>
		</Tooltip>
	);
};

const MenuBar = ({ menu, children, state, dispatch, view, fullscreen }) => {
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
	return (
		<div className="prose-menu-bar">
			{children}
			{menu.marks.map( createGroupButtons )}
			{fullscreen ? menu.extraMarks.map( createGroupButtons ) : null}
			<i className="prose-separator">|</i>
			{menu.blocks.map( createGroupButtons )}
			<DropdownButton
				title="H2"
				variant="outline-secondary"
				size="sm" style={{ display: 'inline-block' }}
			>
			{menu.headers.map( createDropdownButtons )}
			</DropdownButton>
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
