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
			return ( <Button
				variant="outline-danger"
				size="sm"
				disabled
				ref={( button ) => { this.button = button; }}
				style={this.props.style}
			>
				No Filters
			</Button> );
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
						style={this.props.style}
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
						Filters
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
									minWidth: 300,
									zIndex: 1002,
									...props.style
								}}
							>
								{formatFilters( this.props.filters )}
								<Tooltip tooltip="Restore dataset with the given filters in the data table" placement="right" >
									<Button
										size="sm"
										variant="danger"
										onClick={() => {
											this.props.onActivateFilters( this.props.filters );
										}}
										style={{ marginTop: 12 }}
									>Restore dataset</Button>
								</Tooltip>
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
	onActivateFilters: PropTypes.func,
	style: PropTypes.object
};

DatasetButton.defaultProps = {
	header: 'Show applied filters for used data',
	filters: null,
	onActivateFilters() {},
	style: {}
};


// EXPORTS //

export default DatasetButton;
