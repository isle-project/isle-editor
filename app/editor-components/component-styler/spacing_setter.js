// MODULES //

import React from 'react';
import './spacing_setter.css';


// MAIN //

const SpacingSetter = ( props ) => {
	if ( !props.active ) {
		return null;
	}
	return (
		<div className="component-styler-spacing-outer" >
			<div className="component-styler-spacing-container" >
				<div className="component-styler-margin-legend" >MARGIN</div>
				<input
					type="number"
					className="component-styler-margin-number-top"
					defaultValue={0}
					min={-999}
					max={999}
					onChange={( event ) => {
						const newStyle = { ...props.style };
						newStyle.marginTop = Number( event.target.value );
						props.onChange( newStyle );
					}}
				/>
				<input
					type="number"
					className="component-styler-margin-number-bottom"
					defaultValue={0}
					min={-999}
					max={999}
					onChange={( event ) => {
						const newStyle = { ...props.style };
						newStyle.marginBottom = Number( event.target.value );
						props.onChange( newStyle );
					}}
				/>
				<input
					type="number"
					className="component-styler-margin-number-left"
					defaultValue={0}
					min={-999}
					max={999}
					onChange={( event ) => {
						const newStyle = { ...props.style };
						newStyle.marginLeft = Number( event.target.value );
						props.onChange( newStyle );
					}}
				/>
				<input
					type="number"
					className="component-styler-margin-number-right"
					defaultValue={0}
					min={-999}
					max={999}
					onChange={( event ) => {
						const newStyle = { ...props.style };
						newStyle.marginRight = Number( event.target.value );
						props.onChange( newStyle );
					}}
				/>
				<input
					type="number"
					className="component-styler-padding-number-left"
					defaultValue={0}
					min={-999}
					max={999}
					onChange={( event ) => {
						const newStyle = { ...props.style };
						newStyle.paddingLeft = Number( event.target.value );
						props.onChange( newStyle );
					}}
				/>
				<input
					type="number"
					className="component-styler-padding-number-right"
					defaultValue={0}
					min={-999}
					max={999}
					onChange={( event ) => {
						const newStyle = { ...props.style };
						newStyle.paddingRight = Number( event.target.value );
						props.onChange( newStyle );
					}}
				/>
				<input
					type="number"
					className="component-styler-padding-number-top"
					defaultValue={0}
					min={-999}
					max={999}
					onChange={( event ) => {
						const newStyle = { ...props.style };
						newStyle.paddingTop = Number( event.target.value );
						props.onChange( newStyle );
					}}
				/>
				<input
					type="number"
					className="component-styler-padding-number-bottom"
					defaultValue={0}
					min={-999}
					max={999}
					onChange={( event ) => {
						const newStyle = { ...props.style };
						newStyle.paddingBottom = Number( event.target.value );
						props.onChange( newStyle );
					}}
				/>
				<div className="component-styler-padding-legend">PADDING</div>
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
