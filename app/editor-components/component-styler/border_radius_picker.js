// MODULES //

import React, { Fragment, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UnitInputBase from './unit_input_base.js';


// VARIABLES //

const RE_BORDER_RADIUS = /^(\d+(?:px|%|em|vh|vw))?\s?(\d+(?:px|%|em|vh|vw))?\s?(\d+(?:px|%|em|vh|vw))?\s?(\d+(?:px|%|em|vh|vw))?/;
const DEFAULT_RADII = {
	tl: 0, tr: 0, bl: 0, br: 0
};


// FUNCTIONS //

function extractRadii( borderRadius ) {
	if ( !borderRadius ) {
		return {
			radii: DEFAULT_RADII,
			overall: 0
		};
	}
	const match = RE_BORDER_RADIUS.exec( borderRadius );
	console.log( match );
	if ( !match ) {
		return {
			radii: DEFAULT_RADII,
			overall: 0
		};
	}
	if ( match[ 1 ] && !match[ 2 ] ) {
		// Case: Only one radius is set
		const radius = match[ 1 ];
		return {
			radii: { tl: radius, tr: radius, bl: radius, br: radius },
			overall: radius
		};
	}
	if ( match[ 1 ] && match[ 2 ] && !match[ 3 ] ) {
		// Case: top-left-and-bottom-right | top-right-and-bottom-left
		const radius1 = match[ 1 ];
		const radius2 = match[ 2 ];
		return {
			radii: { tl: radius1, tr: radius2, bl: radius2, br: radius1 },
			overall: radius1
		};
	}
	else if ( match[ 1 ] && match[ 2 ] && match[ 3 ] && !match[ 4 ] ) {
		// Case: top-left | top-right-and-bottom-left | bottom-right
		const radius1 = match[ 1 ];
		const radius2 = match[ 2 ];
		const radius3 = match[ 3 ];
		return {
			radii: { tl: radius1, tr: radius2, bl: radius2, br: radius3 },
			overall: radius1
		};
	}
	// Case: top-left | top-right | bottom-right | bottom-left
	const radius1 = match[ 1 ];
	const radius2 = match[ 2 ];
	const radius3 = match[ 3 ];
	const radius4 = match[ 4 ];
	return {
		radii: { tl: radius1, tr: radius2, bl: radius4, br: radius3 },
		overall: radius1
	};
}


// MAIN //

const BorderRadiusPicker = ( props ) => {
	const initial = extractRadii( props.style.borderRadius );
	console.log( initial );
	const [ overallRadius, setOverallRadius ] = useState( initial.overall );
	const [ radii, setRadii ] = useState( initial.radii );
	return (
		<Fragment>
			<p className="title" style={{ fontVariant: 'small-caps', fontSize: '1.2em' }}>Border Radius</p>
			<Row>
				<UnitInputBase
					label="All"
					labelWidth={1}
					colWidth={2}
					defaultValue={overallRadius}
					onChange={( radius ) => {
						setOverallRadius( radius );
						props.onChange( radius );
						setRadii({ tl: radius, tr: radius, bl: radius, br: radius });
					}}
				/>
				<Col sm={9} >
					<Form.Group as={Row} >
						<UnitInputBase
							label="Top-Left"
							labelWidth={3}
							colWidth={3}
							style={props.style}
							defaultValue={radii.tl}
							onChange={( value ) => {
								const newRadii = {
									...radii,
									tl: value
								};
								setRadii( newRadii );
								props.onChange( `${newRadii.tl} ${newRadii.tr} ${newRadii.br} ${newRadii.bl}` );
							}}
						/>
						<UnitInputBase
							label="Top-Right"
							labelWidth={3}
							colWidth={3}
							style={props.style}
							defaultValue={radii.tr}
							onChange={( value ) => {
								const newRadii = {
									...radii,
									tr: value
								};
								setRadii( newRadii );
								props.onChange( `${newRadii.tl} ${newRadii.tr} ${newRadii.br} ${newRadii.bl}` );
							}}
						/>
					</Form.Group>
					<Form.Group as={Row} >
						<UnitInputBase
							label="Bottom-Left"
							labelWidth={3}
							colWidth={3}
							style={props.style}
							defaultValue={radii.bl}
							onChange={( value ) => {
								const newRadii = {
									...radii,
									bl: value
								};
								setRadii( newRadii );
								props.onChange( `${newRadii.tl} ${newRadii.tr} ${newRadii.br} ${newRadii.bl}` );
							}}
						/>
						<UnitInputBase
							label="Bottom-Right"
							labelWidth={3}
							colWidth={3}
							style={props.style}
							defaultValue={radii.br}
							onChange={( value ) => {
								const newRadii = {
									...radii,
									br: value
								};
								setRadii( newRadii );
								props.onChange( `${newRadii.tl} ${newRadii.tr} ${newRadii.br} ${newRadii.bl}` );
							}}
						/>
					</Form.Group>
				</Col>
			</Row>
		</Fragment>
	);
};


// EXPORTS //

export default BorderRadiusPicker;
