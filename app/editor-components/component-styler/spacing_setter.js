// MODULES //

import React, { useCallback } from 'react';
import './spacing_setter.css';


// MAIN //

const SpacingSetter = ({ active, style, onChange, t }) => {
	const handleMarginTopChange = useCallback( ( event ) => {
		const newStyle = { ...style };
		newStyle.marginTop = Number( event.target.value );
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleMarginBottomChange = useCallback( ( event ) => {
		const newStyle = { ...style };
		newStyle.marginBottom = Number( event.target.value );
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleMarginLeftChange = useCallback( ( event ) => {
		const newStyle = { ...style };
		newStyle.marginLeft = Number( event.target.value );
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleMarginRightChange = useCallback( ( event ) => {
		const newStyle = { ...style };
		newStyle.marginRight = Number( event.target.value );
		onChange( newStyle );
	}, [ onChange, style ] );
	const handlePaddingLeftChange = useCallback( ( event ) => {
		const newStyle = { ...style };
		newStyle.paddingLeft = Number( event.target.value );
		onChange( newStyle );
	}, [ onChange, style ] );
	const handlePaddingRightChange = useCallback( ( event ) => {
		const newStyle = { ...style };
		newStyle.paddingRight = Number( event.target.value );
		onChange( newStyle );
	}, [ onChange, style ] );
	const handlePaddingTopChange = useCallback( ( event ) => {
		const newStyle = { ...style };
		newStyle.paddingTop = Number( event.target.value );
		onChange( newStyle );
	}, [ onChange, style ] );
	const handlePaddingBottomChange = useCallback( ( event ) => {
		const newStyle = { ...style };
		newStyle.paddingBottom = Number( event.target.value );
		onChange( newStyle );
	}, [ onChange, style ] );
	if ( !active ) {
		return null;
	}
	return (
		<div className="component-styler-spacing-outer" >
			<div className="component-styler-spacing-container" >
				<div className="component-styler-margin-legend" >
					{t('margin')}
				</div>
				<input
					type="number"
					className="component-styler-margin-number-top"
					defaultValue={0}
					min={-999}
					max={999}
					onChange={handleMarginTopChange}
				/>
				<input
					type="number"
					className="component-styler-margin-number-bottom"
					defaultValue={0}
					min={-999}
					max={999}
					onChange={handleMarginBottomChange}
				/>
				<input
					type="number"
					className="component-styler-margin-number-left"
					defaultValue={0}
					min={-999}
					max={999}
					onChange={handleMarginLeftChange}
				/>
				<input
					type="number"
					className="component-styler-margin-number-right"
					defaultValue={0}
					min={-999}
					max={999}
					onChange={handleMarginRightChange}
				/>
				<input
					type="number"
					className="component-styler-padding-number-left"
					defaultValue={0}
					min={-999}
					max={999}
					onChange={handlePaddingLeftChange}
				/>
				<input
					type="number"
					className="component-styler-padding-number-right"
					defaultValue={0}
					min={-999}
					max={999}
					onChange={handlePaddingRightChange}
				/>
				<input
					type="number"
					className="component-styler-padding-number-top"
					defaultValue={0}
					min={-999}
					max={999}
					onChange={handlePaddingTopChange}
				/>
				<input
					type="number"
					className="component-styler-padding-number-bottom"
					defaultValue={0}
					min={-999}
					max={999}
					onChange={handlePaddingBottomChange}
				/>
				<div className="component-styler-padding-legend">
					{t('padding')}
				</div>
				<div className="component-styler-spacing-inner-border"></div>
				<div className="component-styler-spacing-center"></div>
				<div className="component-styler-top-trapezoid"></div>
				<div className="component-styler-bottom-trapezoid"></div>
			</div>
		</div>
	);
};


// EXPORTS //

export default SpacingSetter;
