// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import jsyaml from 'js-yaml';
import omitBy from '@stdlib/utils/omit-by';
import isNull from '@stdlib/assert/is-null';
import createPrependCode from '@isle-project/components/r/utils/create-prepend-code';
import Spinner from '@isle-project/components/internal/spinner';
import Image from '@isle-project/components/image';
import SessionContext from '@isle-project/session/context.js';
import './plot.css';


// MAIN //

/**
* Component for rendering an R plot inside an ISLE lesson.
*
* @property {string} code - R code to generate the plot
* @property {number} width - width of the plot (in px)
* @property {number} height - height of the plot (in px)
* @property {boolean} draggable - controls whether the plot should be draggable
* @property {string} fileType - file type of the plot (`png` or `svg`)
* @property {Array} libraries - R libraries that should be loaded automatically when the input `code` is executed
* @property {(string|Array<string>)} prependCode - `string` or an `array` of R code snippets to be prepended to the code stored in `code` when evaluating
* @property {Object} meta - plot meta-information
* @property {string} className - class name
* @property {Function} onDone - callback invoked with `err`, `img` and `body` arguments once a plot is created
*/
class RPlot extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			plotURL: null,
			plot: null,
			last: '',
			waiting: false
		};
	}

	componentDidMount() {
		this.getPlot();
	}

	componentDidUpdate() {
		this.getPlot();
	}

	savePlot = ( error, img, body ) => {
		if ( error ) {
			this.props.onDone( error );
		} else {
			this.setState({
				plotURL: img,
				plot: body,
				waiting: false
			}, () => {
				this.props.onDone( null, img, body );
			});
		}
	}

	getPlot() {
		if ( this.props.code !== this.state.last ) {
			this.setState({
				waiting: true,
				last: this.props.code
			});
			const session = this.context;
			const prependCode = createPrependCode( this.props.libraries, this.props.prependCode, session );
			const fullCode = prependCode + this.props.code;
			session.getRPlot( fullCode, this.props.fileType, this.savePlot );
		}
	}

	render() {
		let draggableBar = null;
		if ( this.props.draggable ) {
			draggableBar = <div
				className="rplot-draggable-bar"
				draggable={true}
				onDragStart={( ev ) => {
					let img;
					if ( !this.props.meta ) {
						img = `<img src="${this.state.plot}" alt="R Plot" style="display: block; margin: 0 auto;" />`;
					} else {
						let meta = this.props.meta;
						meta = omitBy( meta, ( _, value ) => {
							return isNull( value );
						});
						meta = jsyaml.safeDump( meta );
						img = `<img src="${this.state.plot}" style="display: block; margin: 0 auto;" data-plot-id="${this.props.id}" data-plot-meta="${meta}"></img>`;
					}
					ev.dataTransfer.setData( 'text/html', img );
				}}
			>{this.props.t('drag-plot')}</div>;
		}
		const { className, ...rest } = this.props;
		return (
			<div className={`rplot ${className}`} style={{ minHeight: 128, cursor: 'pointer' }}>
				<Spinner running={this.state.waiting} width={256} height={128} />
				{ this.state.waiting ?
					<span /> :
					<Fragment>
						{draggableBar}
						<Image
							src={this.state.plotURL}
							body={this.state.plot}
							title={this.props.t('r-plot')}
							{...rest}
						/>
					</Fragment>
				}
			</div>
		);
	}
}


// PROPERTIES //

RPlot.propTypes = {
	code: PropTypes.string,
	width: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	draggable: PropTypes.bool,
	fileType: PropTypes.string,
	libraries: PropTypes.array,
	prependCode: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]),
	meta: PropTypes.object,
	className: PropTypes.string,
	onDone: PropTypes.func
};

RPlot.defaultProps = {
	code: '',
	width: 600,
	height: 'auto',
	draggable: false,
	fileType: 'svg',
	libraries: [],
	prependCode: '',
	meta: null,
	className: '',
	onDone() {}
};

RPlot.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'R' )( RPlot );
