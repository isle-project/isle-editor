// MODULES //

import React from 'react';


// SWITCH //

class Switch extends React.Component {
	constructor() {
		super();
		this.state = {
			pos: 0
		};

		this.handleClick = () => {
			const newState = this.state;
			if ( newState.pos + 1 >= this.props.children.length ) {
				newState.pos = 0;
			} else {
				newState.pos += 1;
			}

			this.setState({
				pos: newState.pos
			});

			this.props.onChange( this.state.pos );
		};
	}

	makeVisible( element, index ) {
		const o = ( index !== this.state.pos ) ?
			{ style: { display: 'none' } } :
			{ style: { display: 'inline' } };
		return React.cloneElement( element, o );
	}

	render() {
		let children = React.Children.map( this.props.children, this.makeVisible.bind( this ) );
		return (
			<div
				className="switch"
				onClick={this.handleClick}
				style={{ cursor: 'pointer', display: 'inline' }}
			>
				{children}
			</div>
		);
	}
}


// PROPERTY TYPES //

Switch.propTypes = {
	onChange: React.PropTypes.func
};


// DEFAULT PROPERTIES //

Switch.defaultProps = {
	onChange(){}
};


// EXPORTS //

export default Switch;
