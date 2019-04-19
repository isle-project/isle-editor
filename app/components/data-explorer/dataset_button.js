// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import noop from '@stdlib/utils/noop';
import Tooltip from 'components/tooltip';
import formatFilters from './format_filters.js';


// MAIN //

class DatasetButton extends Component {
	constructor() {
		super();

		this.state = {
			show: false
		};
	}

	toggleOverlay = ( clbk = noop ) => {
		this.setState({
			show: !this.state.show
		}, clbk );
	}

	render() {
		if ( !this.props.filters ) {
			return null;
		}
		return (
			<Fragment>
				<Tooltip
					id="fullscreen_tooltip"
					placement="bottom"
					tooltip="Dataset Info"
				>
					<Button
						variant="outline-danger"
						size="sm"
						ref={( button ) => { this.button = button; }}
						onClick={() => {
							this.toggleOverlay(() => {
								if ( this.state.show ) {
									this.timeout = setTimeout( this.toggleOverlay, 5000 );
								} else if ( this.timeout ) {
									clearTimeout( this.timeout );
								}
							});
						}}
					>
						<div className="fa fa-table" />
					</Button>
				</Tooltip>
				<Overlay target={this.button} show={this.state.show} placement="left">
					{({ placement, scheduleUpdate, arrowProps, ...props }) => {
						return (
							<pre
								{...props}
								style={{
									backgroundColor: 'lightcoral',
									padding: '10px 10px',
									color: 'white',
									marginRight: '5px',
									borderRadius: 3,
									zIndex: 1002,
									...props.style
								}}
							>
								{formatFilters( this.props.filters )}
								<Button
									size="sm"
									variant="danger"
									onClick={() => {
										this.props.onActivateFilters( this.props.filters );
									}}
								>Apply filters</Button>
							</pre>
						);
					}}
				</Overlay>
			</Fragment>
		);
	}
}


// PROPERTIES //

DatasetButton.propTypes = {
	header: PropTypes.string,
	filters: PropTypes.array,
	onActivateFilters: PropTypes.func
};

DatasetButton.defaultProps = {
	header: 'Dataset Info',
	filters: null,
	onActivateFilters() {}
};


// EXPORTS //

export default DatasetButton;
