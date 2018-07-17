// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import noop from '@stdlib/utils/noop';
import NumberInput from 'components/input/number';

// MAIN //

class FontSizeSelect extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			fontSize: this.props.current
		};
	}

	changeFontSize = () => {
		// Pass up to parent
		this.props.onClick(this.state.fontSize);
		// close the modal
		this.props.onHide();
	}

	render() {
		return (
			<Modal
				onHide={this.props.onHide}
				show={this.props.show}
			>
				<Modal.Header closeButton>
					<Modal.Title className="fontSelect">Select Font Size</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<NumberInput
						legend="Select Font Size"
						defaultValue={this.props.current}
						min={6}
						step={1}
						onChange={( value ) => {
							this.setState({
								fontSize: value
							});
						}}
					/>
					<div>
						<Button
							block={true}
							className="insert_font_size"
							bsStyle="primary"
							align="center"
							onClick={this.changeFontSize}
							>
						Change Font Size!
						</Button>
					</div>
				</Modal.Body>
			</Modal> );
	}
}

// PROPERTY TYPES //

FontSizeSelect.propTypes = {
	onClick: PropTypes.func,
	onHide: PropTypes.func,
	show: PropTypes.bool.isRequired,
	current: PropTypes.number.isRequired
};

FontSizeSelect.defaultProps = {
	onClick: noop,
	onHide: noop
};

// EXPORTS //

export default FontSizeSelect;

