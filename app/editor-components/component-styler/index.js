// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import debounce from 'lodash.debounce';
import Accordion from 'components/accordion';
import SpacingSetter from './spacing_setter.js';
import FontVariants from './font_variants.js';
import Typography from './typography.js';
import BoxShadows from './box_shadows.js';
import Borders from './borders.js';
import Position from './position.js';
import Layout from './layout.js';
import Effects from './effects.js';
import Cursor from './cursor.js';
import Size from './size.js';
import './styler.css';


// VARIABLES //

const ACCORDION_ITEM_STYLE = {
	marginTop: 12,
	position: 'relative',
	padding: 15
};


// MAIN //

const ComponentStyler = ( props ) => {
	const [ active, setActive ] = useState( null );
	if ( !props.show ) {
		return null;
	}
	const handleChange = debounce( props.onChange, 25 );
	return (
		<div className="component-styler" style={props.style} >
			<span className="component-styler-heading" >Customize style <Button size="sm" variant="light" className="component-styler-close-button" onClick={props.onHide}>X</Button></span>
			<Accordion
				className="component-styler-accordion"
				canCloseAll
				headers={[ 'Layout & Background', 'Spacing', 'Size', 'Position', 'Typography', 'Font Variants', 'Borders', 'Cursor', 'Effects', 'Box Shadows' ]}
				headerStyle={{ fontSize: '1em', fontFamily: 'Open Sans', fontWeight: 400, textAlign: 'left' }}
				onChange={setActive}
			>
				<div style={ACCORDION_ITEM_STYLE} >
					<Layout active={active === 0} style={props.componentStyle} onChange={handleChange} />
				</div>
				<div style={{ ...ACCORDION_ITEM_STYLE, height: 260 }} >
					<SpacingSetter active={active === 1} style={props.componentStyle} onChange={handleChange} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<Size active={active === 2} style={props.componentStyle} onChange={handleChange} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<Position active={active === 3} style={props.componentStyle} onChange={handleChange} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<Typography active={active === 4} style={props.componentStyle} onChange={handleChange} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<FontVariants active={active === 5} style={props.componentStyle} onChange={handleChange} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<Borders active={active === 6} style={props.componentStyle} onChange={handleChange} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<Cursor active={active === 7} style={props.componentStyle} onChange={handleChange} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<Effects active={active === 8} style={props.componentStyle} onChange={handleChange} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<BoxShadows active={active === 9} style={props.componentStyle} onChange={handleChange} />
				</div>
			</Accordion>
		</div>
	);
};


// PROPERTIES //

ComponentStyler.defaultProps = {
	show: false,
	componentStyle: {},
	style: {}
};

ComponentStyler.propTypes = {
	show: PropTypes.bool,
	componentStyle: PropTypes.object,
	style: PropTypes.object,
	onChange: PropTypes.func.isRequired
};


// EXPORTS //

export default ComponentStyler;
