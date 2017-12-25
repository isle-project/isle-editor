// MODULES //

import React, { Component } from 'react';
import onElementResize from 'element-resize-event';


// FUNCTIONS //

function getDimensions( element ) {
	return [ element.clientWidth, element.clientHeight ];
}


// MAIN //

function Dimensions( ComposedComponent ) {
	return class DimensionsHOC extends Component {
		constructor( props ) {
			super( props );
			this.state = {};
		}

		componentDidMount() {
			if ( !this.wrapper ) {
				throw new Error( 'Cannot find wrapper div' );
			}
			this._parent = this.wrapper.parentNode;
			this.updateDimensions();
			onElementResize( this._parent, this.updateDimensions );
		}

		updateDimensions = () => {
			const dimensions = getDimensions( this._parent );
			if (
				dimensions[ 0 ] !== this.state.containerWidth ||
				dimensions[ 1 ] !== this.state.containerHeight
			) {
				this.setState({
					containerWidth: dimensions[ 0 ],
					containerHeight: dimensions[ 1 ]
				});
			}
		}

		getWrappedInstance() {
			return this.wrappedInstance;
		}

		render() {
			const { containerWidth, containerHeight } = this.state;
			return (
				<div ref={( div ) => { this.wrapper = div; }}>
					{( containerWidth || containerHeight ) &&
						<ComposedComponent
							{...this.state}
							{...this.props}
							updateDimensions={this.updateDimensions}
							ref={( div ) => { this.wrappedInstance = div; }}
						/>
					}
				</div>
			);
		}
	};
}


// EXPORTS //

export default Dimensions;
