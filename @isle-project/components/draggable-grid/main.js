// MODULES //

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import { Responsive, WidthProvider } from 'react-grid-layout';
import isArray from '@stdlib/assert/is-array';
import pluck from '@stdlib/utils/pluck';
import floor from '@stdlib/math/base/special/floor';
import { withPropCheck } from '@isle-project/utils/prop-check';


// VARIABLES //

const ResponsiveReactGridLayout = WidthProvider( Responsive );


// FUNCTIONS //

const createLayout = ( children ) => {
	if ( !isArray( children ) ) {
		return null;
	}
	/* eslint-disable i18next/no-literal-string */
	let layouts = children.map( ( e, i ) => {
		return {
			lg: { i: `cell-${i}`, x: i*6 % 18, y: floor( i / 3 ) * 4, w: 6, h: 4 },
			md: { i: `cell-${i}`, x: i*6 % 12, y: floor( i / 2 ) * 4, w: 6, h: 4 },
			sm: { i: `cell-${i}`, x: i*6 % 12, y: floor( i / 2 ) * 4, w: 6, h: 4 },
			xs: { i: `cell-${i}`, x: i*6 % 12, y: floor( i / 2 ) * 4, w: 6, h: 4 },
			xxs: { i: `cell-${i}`, x: i*4 % 6, y: floor( i / 1 ) * 4, w: 6, h: 4 }
		};
	});
	/* eslint-enable i18next/no-literal-string */
	layouts = {
		lg: pluck( layouts, 'lg' ),
		md: pluck( layouts, 'md' ),
		sm: pluck( layouts, 'sm' ),
		xs: pluck( layouts, 'xs' ),
		xxs: pluck( layouts, 'xxs' )
	};
	return layouts;
};


// MAIN //

/**
* A responsive draggable grid layout.
*
* @property {boolean} isDraggable - controls whether grid elements are draggable
* @property {boolean} isResizable - controls whether grid elements are resizable
* @property {number} rowHeight - height of a single row (in px)
*/
const DraggableGrid = ({ children, isDraggable, isResizable, rowHeight }) => {
	const [ layouts, setLayouts ] = useState( createLayout( children ) );
	const { t } = useTranslation( 'General' );
	useEffect( () => {
		const newLayouts = createLayout( children );
		setLayouts( newLayouts );
	}, [ children ] );
	if ( !isArray( children ) ) {
		return ( <Alert variant="danger" >
			{t('grid-requires-two-children')}
		</Alert> );
	}
	return ( <ResponsiveReactGridLayout
		layouts={layouts}
		breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
		cols={{ lg: 18, md: 12, sm: 12, xs: 12, xxs: 6 }}
		isResizable={isResizable}
		isDraggable={isDraggable}
		rowHeight={rowHeight}
	>
		{children.map( ( element, idx ) => {
			return ( <div key={`cell-${idx}`}>
				{element}
			</div> );
		})}
	</ResponsiveReactGridLayout> );
};


// PROPERTIES //

DraggableGrid.defaultProps = {
	isDraggable: false,
	isResizable: false,
	rowHeight: 60
};

DraggableGrid.propTypes = {
	isDraggable: PropTypes.bool,
	isResizable: PropTypes.bool,
	rowHeight: PropTypes.number
};


// EXPORTS //

export default withPropCheck( DraggableGrid );
