// MODULES //

import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select, { components } from 'react-select';
import omit from '@stdlib/utils/omit';


// VARIABLES //

const CURSOR_TYPES = [
	{
		label: 'General',
		options: [
			{ label: 'auto', value: 'auto' },
			{ label: 'default', value: 'default' },
			{ label: 'none', value: 'none' }
		]
	},
	{
		label: 'Links',
		options: [
			{ label: 'pointer', value: 'pointer' }
		]
	},
	{
		label: 'Status',
		options: [
			{ label: 'context-menu', value: 'context-menu' },
			{ label: 'help', value: 'help' },
			{ label: 'wait', value: 'wait' },
			{ label: 'progress', value: 'progress' }
		]
	},
	{
		label: 'Selection',
		options: [
			{ label: 'cell', value: 'cell' },
			{ label: 'crosshair', value: 'crosshair' },
			{ label: 'text', value: 'text' },
			{ label: 'vertical-text', value: 'vertical-text' }
		]
	},
	{
		label: 'Drag & Drop Cursors',
		options: [
			{ label: 'alias', value: 'alias' },
			{ label: 'copy', value: 'copy' },
			{ label: 'move', value: 'move' },
			{ label: 'no-drop', value: 'no-drop' },
			{ label: 'not-allowed', value: 'not-allowed' }
		]
	},
	{
		label: 'Grab Cursors',
		options: [
			{ label: 'grab', value: 'grab' },
			{ label: 'grabbing', value: 'grabbing' }
		]
	},
	{
		label: 'Zooming',
		options: [
			{ label: 'zoom-in', value: 'zoom-in' },
			{ label: 'zoom-out', value: 'zoom-out' }
		]
	},
	{
		label: 'Resizing',
		options: [
			{ label: 'col-resize', value: 'col-resize' },
			{ label: 'row-resize', value: 'row-resize'},
			{ label: 'e-resize', value: 'e-resize' },
			{ label: 'n-resize', value: 'n-resize' },
			{ label: 'ne-resize', value: 'ne-resize' },
			{ label: 'nw-resize', value: 'nw-resize' },
			{ label: 's-resize', value: 's-resize' },
			{ label: 'se-resize', value: 'se-resize' },
			{ label: 'sw-resize', value: 'sw-resize' },
			{ label: 'w-resize', value: 'w-resize' },
			{ label: 'ew-resize', value: 'ew-resize' },
			{ label: 'ns-resize', value: 'ns-resize' },
			{ label: 'nesw-resize', value: 'nesw-resize' },
			{ label: 'nwse-resize', value: 'nwse-resize' }
		]
	}
];
const Option = props => {
	return ( <components.Option key={props.data.label} {...props} >
		<div style={{
			cursor: props.data.value
		}}>{props.data.label}</div>
	</components.Option> );
};
const SELECT_STYLES = {
	option: base => ({ ...base, paddingLeft: 24, paddingTop: 4, paddingBottom: 4, fontSize: '0.85em' }),
	menuPortal: base => ({ ...base, zIndex: 1060 })
};


// MAIN //

const Cursor = ( props ) => {
	if ( !props.active ) {
		return null;
	}
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm={2} >
					Cursor
				</Form.Label>
				<Col sm={4} >
					<Select
						isClearable
						options={CURSOR_TYPES}
						onChange={( elem ) => {
							const newStyle = omit( props.style, 'cursor' );
							if ( elem ) {
								newStyle.cursor = elem.value;
							}
							props.onChange( newStyle );
						}}
						menuPortalTarget={document.body}
						styles={SELECT_STYLES}
						components={{ Option }}
					/>
				</Col>
			</Form.Group>
		</Fragment>
	);
};


// EXPORTS //

export default Cursor;
