// MODULES //

import React, { Component } from 'react';
import onElementResize  from 'element-resize-event';


// FUNCTIONS //

function getDimensions( element ) {
	return [ element.clientWidth, element.clientHeight ];
} // end FUNCTION getDimensions()


// MAIN //

function Dimensions( ComposedComponent ) {

	return class DimensionsHOC extends Component {

		constructor( props ) {
			super( props );
			this.state = {};

			this.updateDimensions = () => {
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
			};
		}

		getWindow () {
			return this.refs.container ? ( this.refs.container.ownerDocument.defaultView || window ) : window;
		}

		componentDidMount () {
			if ( !this.refs.wrapper ) {
				throw new Error( 'Cannot find wrapper div' );
			}
			this._parent = this.refs.wrapper.parentNode;
			this.updateDimensions();

			onElementResize( this._parent, this.updateDimensions );
		}

		getWrappedInstance () {
			return this.refs.wrappedInstance;
		}

		render () {
			const { containerWidth, containerHeight } = this.state;
			return (
				<div ref="wrapper">
					{( containerWidth || containerHeight ) &&
						<ComposedComponent
							{...this.state}
							{...this.props}
							updateDimensions={this.updateDimensions}
							ref="wrappedInstance"
						/>
					}
				</div>
			);
		}
	};
};


// EXPORTS //

export default Dimensions;
