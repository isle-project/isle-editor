// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Accordion from 'components/accordion';
import SpacingSetter from './spacing_setter.js';
import FontVariants from './font_variants.js';
import Typography from './typography.js';
import Borders from './borders.js';
import Layout from './layout.js';
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
	return (
		<div className="component-styler" >
			<span className="component-styler-heading" >Customize style <Button size="sm" variant="light" className="component-styler-close-button" onClick={props.onHide}>X</Button></span>
			<Accordion
				className="component-styler-accordion"
				canCloseAll
				headers={[ 'Layout & Background', 'Spacing & Size', 'Position', 'Typography', 'Font Variants', 'Borders', 'Display' ]}
				headerStyle={{ fontSize: '1em', fontFamily: 'Open Sans', fontWeight: 400, textAlign: 'left' }}
				onChange={setActive}
			>
				<div style={ACCORDION_ITEM_STYLE} >
					<Layout active={active === 0} style={props.style} onChange={props.onChange} />
				</div>
				<div style={{ ...ACCORDION_ITEM_STYLE, height: 260 }} >
					<SpacingSetter active={active === 1} style={props.style} onChange={props.onChange} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<Typography active={active === 3} style={props.style} onChange={props.onChange} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<FontVariants active={active === 4} style={props.style} onChange={props.onChange} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<Borders active={active === 5} style={props.style} onChange={props.onChange} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >

				</div>
			</Accordion>
		</div>
	);
};


// PROPERTIES //

ComponentStyler.defaultProps = {
	style: {}
};

ComponentStyler.propTypes = {
	style: PropTypes.object
};


// EXPORTS //

export default ComponentStyler;
