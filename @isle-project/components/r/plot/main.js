// MODULES //

import React, { Fragment, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import jsyaml from 'js-yaml';
import omitBy from '@stdlib/utils/omit-by';
import isNull from '@stdlib/assert/is-null';
import createPrependCode from '@isle-project/components/r/utils/create-prepend-code';
import Spinner from '@isle-project/components/internal/spinner';
import Image from '@isle-project/components/image';
import SessionContext from '@isle-project/session/context.js';
import html2clipboard from '@isle-project/utils/html-to-clipboard';
import { withPropCheck } from '@isle-project/utils/prop-check';
import './plot.css';


// FUNCTIONS //

/**
 * Creates an image tag for a plot.
 *
 * @private
 * @param {Object} options - function options
 * @param {string} options.id - identifier
 * @param {Object} options.metadata - plot metadata
 * @param {string} options.plot - base64-encoded string of plot
 * @returns {string} image tag
 */
function createImgHTML({ id, meta, plot }) {
	let img;
	if ( !meta ) {
		img = `<img src="${plot}" alt="R Plot" style="display: block; margin: 0 auto;" />`;
	} else {
		meta = omitBy( meta, ( _, value ) => {
			return isNull( value );
		});
		meta = jsyaml.dump( meta );
		img = `<img src="${plot}" style="display: block; margin: 0 auto;" data-plot-id="${id}" data-plot-meta="${meta}"></img>`;
	}
	return img;
}

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
const RPlot = ({ code, className, draggable, id, libraries, prependCode, fileType, meta, onDone, ...rest }) => {
	const { t } = useTranslation( 'r' );
	const [ waiting, setWaiting ] = useState( false );
	const [ plot, setPlot ] = useState({ img: null, body: null });
	const session = useContext( SessionContext );
	useEffect( () => {
		setWaiting( true );
		const prepended = createPrependCode( libraries, prependCode, session );
		const fullCode = prepended + code;
		session.getRPlot( fullCode, fileType, ( error, img, body ) => {
			if ( error ) {
				onDone( error );
			} else {
				setPlot({ img, body });
				setWaiting( false );
				onDone( null, img, body );
			}
		});
	}, [ code, fileType, libraries, prependCode, session, onDone ] );

	let draggableBar = null;
	if ( draggable ) {
		draggableBar = <button
			className="rplot-draggable-bar"
			draggable={true}
			onDragStart={( ev ) => {
				const img = createImgHTML({ id, meta, plot: plot.body });
				ev.dataTransfer.setData( 'text/html', img );
			}}
			onClick={() => {
				const img = createImgHTML({ id, meta, plot: plot.body });
				html2clipboard( img );
			}}
		>{t('drag-plot')}</button>;
	}
	return (
		<div className={`rplot ${className}`} style={{ minHeight: 128, cursor: 'pointer' }}>
			<Spinner running={waiting} width={256} height={128} />
			{ waiting ?
				<span /> :
				<Fragment>
					{draggableBar}
					<Image
						src={plot.img}
						body={plot.body}
						title={t('r-plot')}
						{...rest}
					/>
				</Fragment>
			}
		</div>
	);
};


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


// EXPORTS //

export default withPropCheck( RPlot );
