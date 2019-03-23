// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import Plotly from 'components/plotly';
import SelectInput from 'components/input/select';
import TextArea from 'components/input/text-area';
import TextInput from 'components/input/text';
import mean from 'utils/statistic/mean.js';
import min from 'utils/statistic/min.js';
import max from 'utils/statistic/max.js';
import Modal from 'react-bootstrap/Modal';
import contains from '@stdlib/assert/contains';
import replace from '@stdlib/string/replace';
import isObject from '@stdlib/assert/is-object';
import hasOwnProp from '@stdlib/assert/has-own-property';
import round from '@stdlib/math/base/special/round';
import pow from '@stdlib/math/base/special/pow';
import incrspace from '@stdlib/math/utils/incrspace';
import { DATA_EXPLORER_VARIABLE_TRANSFORMER } from 'constants/actions.js';
import { generateHistogramConfig } from './histogram.js';


class BinTransformer extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            breakPoints: [],
            activeVar: props.continuous[ 0 ]
        };
    }

    render() {
        const histConfigSettings = {
			'data': this.props.data,
			'variable': this.state.activeVar,
			'group': null,
			'overlayDensity': true,
			'densityType': 'Data-driven',
			'chooseBins': false,
			'nBins': null
		};
		const vals = this.props.data[ this.state.activeVar ];
		const avg = mean( vals );
		const configHist = generateHistogramConfig( histConfigSettings );
		configHist.layout.shapes = [{
			type: 'line',
			x0: avg,
			y0: -100,
			x1: avg,
			y1: 100,
			line: {
				color: 'red',
				width: 3
			}
		}];
		configHist.layout.yaxis = {
			range: [
				min( configHist.data[ 1 ].y ),
				max( configHist.data[ 1 ].y )
			]
		};
		return (
			<Modal
                dialogClassName='modal-50w'
				onHide={this.props.onHide}
				show={this.props.show}
			>
				<Modal.Header closeButton>
					<Modal.Title>Categorical Binning</Modal.Title>
				</Modal.Header>
				<Modal.Body>
                    <SelectInput
						legend="Variable:"
						defaultValue={this.state.activeVar}
						options={this.props.continuous}
						onChange={( value )=>{
							this.setState({
								activeVar: value
							});
						}}
					/>
					<div>
						<h5>Categorical Transformation</h5>
						<Plotly
							data={configHist.data}
							layout={configHist.layout}
							editable
							fit
							removeButtons
							legendButtons={false}
							onRelayout={( data ) => {
								console.log( data );
							}}
						/>
					</div>
				</Modal.Body>
			</Modal>
        );

    }
}

BinTransformer.defaultProps = {
    onHide() {}
}

BinTransformer.propTypes = {
    show: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    continuous: PropTypes.array.isRequired,
    onHide: PropTypes.func
}

export default BinTransformer;