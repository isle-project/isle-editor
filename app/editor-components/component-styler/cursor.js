// MODULES //

import React, { Fragment, useCallback, useRef, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select, { components } from 'react-select';
import omit from '@stdlib/utils/omit';


// VARIABLES //

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

const Cursor = ({ active, style, onChange, t }) => {
	const cursorTypesRef = useRef();
	useEffect(() => {
		cursorTypesRef.current = [
			{
				label: t( 'general' ),
				options: [
					{ label: 'auto', value: 'auto' },
					{ label: 'default', value: 'default' },
					{ label: 'none', value: 'none' }
				]
			},
			{
				label: t( 'links' ),
				options: [
					{ label: 'pointer', value: 'pointer' }
				]
			},
			{
				label: t( 'status' ),
				options: [
					{ label: 'context-menu', value: 'context-menu' },
					{ label: 'help', value: 'help' },
					{ label: 'wait', value: 'wait' },
					{ label: 'progress', value: 'progress' }
				]
			},
			{
				label: t('selection' ),
				options: [
					{ label: 'cell', value: 'cell' },
					{ label: 'crosshair', value: 'crosshair' },
					{ label: 'text', value: 'text' },
					{ label: 'vertical-text', value: 'vertical-text' }
				]
			},
			{
				label: t('drag-drop-cursors'),
				options: [
					{ label: 'alias', value: 'alias' },
					{ label: 'copy', value: 'copy' },
					{ label: 'move', value: 'move' },
					{ label: 'no-drop', value: 'no-drop' },
					{ label: 'not-allowed', value: 'not-allowed' }
				]
			},
			{
				label: t('grab-cursors'),
				options: [
					{ label: 'grab', value: 'grab' },
					{ label: 'grabbing', value: 'grabbing' }
				]
			},
			{
				label: t('zooming'),
				options: [
					{ label: 'zoom-in', value: 'zoom-in' },
					{ label: 'zoom-out', value: 'zoom-out' }
				]
			},
			{
				label: t('resizing'),
				options: [
					{ label: 'col-resize', value: 'col-resize' },
					{ label: 'row-resize', value: 'row-resize' },
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
	}, [ t ]);
	const handleCursorChange = useCallback( ( elem ) => {
		const newStyle = omit( style, 'cursor' );
		if ( elem ) {
			newStyle.cursor = elem.value;
		}
		onChange( newStyle );
	}, [ onChange, style ] );
	if ( !active ) {
		return null;
	}
	let defaultValue;
	if ( style.cursor ) {
		defaultValue = {
			label: style.cursor,
			value: style.cursor
		};
	}
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm={2} >
					{t('cursor')}
				</Form.Label>
				<Col sm={4} >
					<Select
						isClearable
						defaultValue={defaultValue}
						placeholder={t('select-cursor')}
						options={cursorTypesRef.current}
						onChange={handleCursorChange}
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
