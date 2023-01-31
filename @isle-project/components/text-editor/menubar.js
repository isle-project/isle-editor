// MODULES //

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import CirclePicker from 'react-color/lib/components/circle/Circle';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import DropdownItem from 'react-bootstrap/DropdownItem';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import Tooltip from '@isle-project/components/tooltip';
import icons from './config/icons';
import findActiveFontSize from './config/find_active_font_size.js';
import isTextStyleMarkCommandEnabled from './config/is_text_style_mark_command_enabled.js';
import FONT_COLORS from './font_colors.json';
import './menubar.css';


// VARIABLES //

const debug = logger( 'isle:text-editor' );
const BUTTON_INACTIVE_COLOR = '#6e6e6e';


// MAIN //

const Button = ( props ) => {
	if ( props.disabled ) {
		return (
			<button
				onClick={props.onClick}
				style={{
					active: props.active,
					color: props.active ? 'black' : BUTTON_INACTIVE_COLOR,
					opacity: 0.2
				}}
				disabled={true}
				className="menu-item"
				aria-label={props.t( props.title )}
			>{props.children}</button>
		);
	}
	let tooltip = props.t( props.title );
	if ( props.hotkey ) {
		tooltip += ` (${props.hotkey})`;
	}
	return (
		<Tooltip key={`${props.itemKey}-tooltip`} tooltip={tooltip} placement="bottom" >
			<button
				onClick={props.onClick}
				style={{
					active: props.active,
					color: props.active ? 'black' : BUTTON_INACTIVE_COLOR
				}}
				className="menu-item"
				aria-label={props.t( props.title )}
			>{props.children}</button>
		</Tooltip>
	);
};

const MenuBar = ({ menu, children, state, dispatch, view, fullscreen, showColorPicker, onColorChoice, t }) => {
	const onClick = ( item ) => e => {
		e.preventDefault();
		if ( item.run ) {
			debug( 'Run command', item, e );
			item.run( state, dispatch, view, e.nativeEvent );
		}
	};
	const createGroupButtons = ( item, itemKey ) => (
		<Button
			key={itemKey}
			itemKey={itemKey}
			type="button"
			active={item.active && state ? item.active( state ) : false}
			disabled={( !view && item.title !== 'save-html' ) || ( item.enable && state ? !item.enable( state ) : false )}
			title={typeof item.title === 'string' ? t( item.title ) : ''}
			hotkey={item.hotkey}
			onClick={onClick(item)}
			t={t}
		>
			{isString( item.content ) ? t( item.content ) : item.content}
		</Button>
	);
	const createDropdownButtons = ( item, itemKey ) => {
		if ( !view || ( item.enable && state ? !item.enable( state ) : false ) ) {
			return (
				<DropdownItem
					key={`dropdown-item-${itemKey}`}
					disabled
				>{isString( item.content ) ? t( item.content ) : item.content}</DropdownItem>
			);
		}
		return (
			<DropdownItem
				key={`dropdown-item-${itemKey}`}
				onClick={onClick(item)}
			>{isString( item.content ) ? t( item.content ) : item.content}</DropdownItem>
		);
	};
	const createFontButtons = ( item, itemKey ) => (
		<DropdownItem
			key={`font-buttons-${itemKey}`}
			style={{
				paddingLeft: 6,
				paddingRight: 6,
				paddingTop: 3,
				paddingBottom: 3
			}}
			onClick={onClick(item)}
		>{item.content}</DropdownItem>
	);
	const renderMenuGroupButtons = ( items ) => {
		if ( items ) {
			return items.map( createGroupButtons );
		}
		return null;
	};
	return (
		<div className="prose-menu-bar cancel" >
			{children}
			{renderMenuGroupButtons( menu.blocks )}
			{menu.headers ? <Fragment>
				<DropdownButton
					title={<span className="screenreader">{t('headers')}</span>}
					variant="outline-secondary"
					size="sm"
					style={{ display: 'inline-block', marginRight: 4 }}
				>
					{menu.headers.map( createDropdownButtons )}
				</DropdownButton>
				<i className="prose-separator">|</i>
			</Fragment>: null }
			{renderMenuGroupButtons( menu.marks )}
			{fullscreen ? renderMenuGroupButtons( menu.extraMarks ) : null}
			<div style={{ display: showColorPicker ? 'initial' : 'none', position: 'absolute', top: '50px', left: '100px', zIndex: 2 }}>
				<CirclePicker width="600px" colors={FONT_COLORS} circleSize={16} onChangeComplete={onColorChoice} />
			</div>
			<i className="prose-separator">|</i>
			{ menu.fontSizes ? <Dropdown
				style={{ display: 'inline-block', marginLeft: 4 }}
			>
				<DropdownToggle
					size="sm" variant="outline-secondary"
					disabled={!state || !isTextStyleMarkCommandEnabled( state, 'fontSize' )}
				>
					{state ? findActiveFontSize( state ) : '12'}
				</DropdownToggle>
				<DropdownMenu style={{ minWidth: '24px' }}>
					{menu.fontSizes.map( createFontButtons )}
				</DropdownMenu>
			</Dropdown> : null}
			{renderMenuGroupButtons( menu.wraps )}
			{ fullscreen && menu.alignment ?
				<Fragment>
					<i className="prose-separator">|</i>
					{renderMenuGroupButtons( menu.alignment )}
				</Fragment> : null
			}
			{ menu.insert ?
				<Fragment>
					<i className="prose-separator">|</i>
					<DropdownButton
						title={<Fragment>
							{icons.insert}
							<span className="screenreader">{t('insert')}</span>
						</Fragment>}
						variant="outline-secondary"
						size="sm" style={{ display: 'inline-block' }}
						name="Insert"
						disabled={!view}
					>
						{menu.insert.map( createDropdownButtons )}
					</DropdownButton>
				</Fragment> : null }
			{ menu.tableEdits ?
				<Fragment>
					<i className="prose-separator">|</i>
					<DropdownButton
						title={<Fragment>
							{icons.table}
							<span className="screenreader">{t('table')}</span>
						</Fragment>}
						variant="outline-secondary"
						size="sm" style={{ display: 'inline-block' }}
						name="Table"
						disabled={!view}
					>
						{menu.tableEdits.map( createDropdownButtons )}
					</DropdownButton>
				</Fragment>: null }
			{ fullscreen && menu.history ?
				<Fragment>
					<i className="prose-separator">|</i>
					{menu.history.map( createGroupButtons )}
				</Fragment> : null
			}
			{ menu.addons ? <i className="prose-separator">|</i> : null }
			{renderMenuGroupButtons( menu.addons )}
		</div>
	);
};


// PROPERTIES //

MenuBar.propTypes = {
	dispatch: PropTypes.func,
	view: PropTypes.object,
	menu: PropTypes.object.isRequired,
	state: PropTypes.object,
	onColorChoice: PropTypes.func.isRequired,
	showColorPicker: PropTypes.bool.isRequired,
	fullscreen: PropTypes.bool.isRequired,
	t: PropTypes.func.isRequired
};

MenuBar.defaultProps = {
	dispatch: null,
	view: null,
	state: null
};


// EXPORTS //

export default withTranslation( 'text-editor' )( MenuBar );
