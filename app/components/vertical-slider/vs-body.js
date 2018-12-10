// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './vertical-slider.css';

// MAIN //

/**
* An ISLE component that allows to slideDown and slideUp - JQUery style - the body section
*
*/
class VSBody extends Component {
	constructor( props ) {
        super( props );
        this.myRef = React.createRef();

		this.state = {
            height: 0,
            set: false
        };
    }

    componentDidMount( ) {
        setTimeout( this.getHeight, 500 );
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        setTimeout( this.getHeight, 500 );
    }

    getHeight = (elem ) => {
        global.elem = this.myRef;
        if (this.props.className === 'vs-body vs-display') {
            const values = this.myRef.current.getBoundingClientRect();
            if (this.state.set === false) {
                console.log('EINMALIG');
                this.setState({
                    height: values.height,
                    set: true
                });
            }
        }
    }

    check() {
        setTimeout( this.getHeight, 500 );
    }


	render() {
        let style = {};
        if (this.state.height !== 0 && this.props.className === 'vs-body vs-display') {
            style = {
                height: this.state.height
            };
        }

		return (
            <div style={style} ref={this.myRef} onMouseEnter={this.check.bind(this)} className={this.props.className}>
                <Fragment>{this.props.children}</Fragment>
            </div>
        );
	}
}


// PROPERTIES //

VSBody.propTypes = {
    className: PropTypes.string
};

VSBody.defaultProps = {
    className: 'vertical-slider-body'
};

// EXPORTS //

export default VSBody;
