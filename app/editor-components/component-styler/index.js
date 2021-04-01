// MODULES //

import React, { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import vex from 'vex-js';
import { useTranslation } from 'react-i18next';
import debounce from 'lodash.debounce';
import Button from 'react-bootstrap/Button';
import Accordion from '@isle-project/components/accordion';
import jsxToCSS from '@isle-project/utils/jsx-to-css';
import HTML_TAGS from './html_tags.json';
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
const HEADERS = [ 'layout-and-background', 'spacing', 'size', 'position', 'typography', 'font-variants', 'borders', 'cursor', 'effects', 'box-shadows' ];
const HEADER_STYLE = { fontSize: '1em', fontFamily: 'Open Sans', fontWeight: 400, textAlign: 'left' };


// MAIN //

const ComponentStyler = ({ tagName, show, componentStyle, style, appendCSSToPreamble, onChange, onHide, onClassTransform }) => {
	const [ active, setActive ] = useState( null );
	const { t } = useTranslation( 'Editor' );
	const handleChange = debounce( onChange, 25 );
	const handleTagTransform = useCallback( () => {
		const css = jsxToCSS( tagName, componentStyle, '  ' );
		appendCSSToPreamble({ css });
		onChange({});
	}, [ appendCSSToPreamble, componentStyle, tagName, onChange ] );
	const handleClassTransform = useCallback( () => {
		vex.dialog.prompt({
			unsafeMessage: t('enter-class-name-prompt'),
			placeholder: t('enter-class-name'),
			callback( className ) {
				if ( className ) {
					const css = jsxToCSS( '.'+className, componentStyle, '  ' );
					onClassTransform( className );
					appendCSSToPreamble({ css });
				}
			}
		});
	}, [ appendCSSToPreamble, componentStyle, onClassTransform, t ] );
	if ( !show ) {
		return null;
	}
	const isStandardTag = HTML_TAGS.includes( tagName );
	return (
		<div className="component-styler" style={style} >
			<span className="component-styler-heading" >
				{t('customize-style')}
				<Button
					variant="secondary" size="sm"
					className="component-styler-class-button"
					onClick={handleClassTransform}
				>
					{t('move-class-to-preamble')}
				</Button>
				{ isStandardTag ? <Button
					variant="secondary" size="sm"
					className="component-styler-tag-button"
					onClick={handleTagTransform}
				>
					{t('apply-to-all-elements', { tagName })}
				</Button> : null }
				<Button
					size="sm" variant="warning"
					className="component-styler-close-button" onClick={onHide}
				>
					<div className="fa fa-times" />
				</Button>
			</span>
			<Accordion
				className="component-styler-accordion"
				canCloseAll
				headers={HEADERS.map( x => t( x ))}
				headerStyle={HEADER_STYLE}
				onChange={setActive}
			>
				<div style={ACCORDION_ITEM_STYLE} >
					<Layout active={active === 0} style={componentStyle} onChange={handleChange} t={t} />
				</div>
				<div style={{ ...ACCORDION_ITEM_STYLE, height: 260 }} >
					<SpacingSetter active={active === 1} style={componentStyle} onChange={handleChange} t={t} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<Size active={active === 2} style={componentStyle} onChange={handleChange}t={t} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<Position active={active === 3} style={componentStyle} onChange={handleChange} t={t} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<Typography active={active === 4} style={componentStyle} onChange={handleChange} t={t} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<FontVariants active={active === 5} style={componentStyle} onChange={handleChange} t={t} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<Borders active={active === 6} style={componentStyle} onChange={handleChange} t={t} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<Cursor active={active === 7} style={componentStyle} onChange={handleChange} t={t} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<Effects active={active === 8} style={componentStyle} onChange={handleChange} t={t} />
				</div>
				<div style={ACCORDION_ITEM_STYLE} >
					<BoxShadows active={active === 9} style={componentStyle} onChange={handleChange} t={t} />
				</div>
			</Accordion>
		</div>
	);
};


// PROPERTIES //

ComponentStyler.defaultProps = {
	tagName: null,
	show: false,
	componentStyle: {},
	style: {}
};

ComponentStyler.propTypes = {
	tagName: PropTypes.string,
	show: PropTypes.bool,
	componentStyle: PropTypes.object,
	style: PropTypes.object,
	appendCSSToPreamble: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	onClassTransform: PropTypes.func.isRequired
};


// EXPORTS //

export default memo( ComponentStyler );
