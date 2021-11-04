/*
* The MIT License (MIT)
*
* Copyright (c) 2013-2018 Formidable Labs, Inc.
*
* Copyright (c) 2016-2018 Zachary Maybury, Kylie Stewart, and potentially other
* DefinitelyTyped contributors
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in
* the Software without restriction, including without limitation the rights to
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
* the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// MODULES //

import React, { Component } from 'react';
import { createHashHistory } from 'history';
import PropTypes from 'prop-types';
import { countSlides } from './slides';
import theme from './../theme.json';
import Context from './context';


// VARIABLES //

const history = createHashHistory();


// MAIN //

class Controller extends Component {
	constructor( props ) {
		super(...arguments);
		this.history = props.history || history;
	}

	componentDidMount() {
		this.unlisten = this.history.listen( this._updateRoute );
		const location = this.history.location;
		const slideCount = countSlides( this.props.children.props.children );
		this.props.updateRoute({
			location,
			slideCount
		});
	}

	shouldComponentUpdate( nextProps, nextState ) {
		return this.props !== nextProps || this.state !== nextState;
	}

	componentWillUnmount() {
		this.unlisten();
	}

	_updateRoute = ( location ) => {
		const slideCount = countSlides( this.props.children.props.children );
		this.props.updateRoute({
			location,
			slideCount
		});
	};

	render() {
		const styles = theme;
		return (
			<Context
				history={this.history}
				onStateChange={this.props.onStateChange}
				route={this.props.route}
				fragments={this.props.fragments}
				styles={styles.screen}
				notes={this.props.notes}
				contentWidth={this.props.contentWidth}
				contentHeight={this.props.contentHeight}
				updateNotes={this.props.updateNotes}
				addFragment={this.props.addFragment}
				updateFragment={this.props.updateFragment}
			>
				{this.props.children}
			</Context>
		);
	}
}


// PROPERTIES //

Controller.propTypes = {
	history: PropTypes.object,
	onStateChange: PropTypes.func.isRequired,
	route: PropTypes.object.isRequired,
	fragments: PropTypes.object.isRequired
};

Controller.defaultProps = {
	history: null
};


// EXPORTS //

export default Controller;
