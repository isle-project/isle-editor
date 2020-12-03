// MODULES //

import React, { Component } from 'react';


// EXPORTS //

export default function D3blackbox(D3render) {
	return class Blackbox extends Component {
		componentDidMount() {
			D3render(this.anchor, this.props, this.state);
		}
		componentDidUpdate() {
			D3render(this.anchor, this.props, this.state);
		}

		anchor = React.createRef();

		render() {
			const { x, y } = this.props;
			const Component = this.props.component || 'g';

			return (
				<Component
					transform={`translate(${x}, ${y})`}
					ref={this.anchor}
				/>
			);
		}
	};
}
