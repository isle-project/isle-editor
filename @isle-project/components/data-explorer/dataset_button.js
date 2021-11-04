// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import noop from '@stdlib/utils/noop';
import Tooltip from '@isle-project/components/tooltip';
import FilterList from './filter_list.js';


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
	};

	render() {
		return (
			<Fragment>
				<Tooltip
					id="filter_info_tooltip"
					placement="bottom"
					tooltip={this.props.t('show-dataset-info')}
				>
					<Button
						aria-label={this.props.t('show-dataset-info')}
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
						<i className="fas fa-info" />
					</Button>
				</Tooltip>
				<Overlay target={this.button} show={this.state.show} placement="left">
					{({ placement, scheduleUpdate, arrowProps, ...props }) => {
						const style = {
							backgroundColor: 'lightcoral',
							padding: '10px 10px',
							marginRight: '5px',
							borderRadius: 3,
							zIndex: 1002,
							...props.style
						};
						if ( !this.props.filters ) {
							return (
								<pre
									{...props}
									style={style}
								>
									{this.props.t('entire-dataset-used')}
								</pre>
							);
						}
						return (
							<pre
								{...props}
								style={style}
							>
								<FilterList filters={this.props.filters} />
								{ this.props.restoreButton ? <Tooltip tooltip={this.props.t('restore-dataset-tooltip')} placement="right" >
									<Button
										size="sm"
										variant="danger"
										onClick={() => {
											this.props.onActivateFilters( this.props.filters );
										}}
										style={{ marginTop: 12 }}
									>{this.props.t('restore-dataset')}</Button>
								</Tooltip> : null }
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
	filters: PropTypes.array,
	onActivateFilters: PropTypes.func,
	restoreButton: PropTypes.bool,
	style: PropTypes.object
};

DatasetButton.defaultProps = {
	filters: null,
	onActivateFilters() {},
	restoreButton: false,
	style: {}
};


// EXPORTS //

export default DatasetButton;
