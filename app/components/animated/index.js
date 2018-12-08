// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


// MAIN //

/**
* An ISLE component that allows to apply animation on components and child elements.
*
* @property {object} in - the style which is applied at the beginning
* @property {object} over - mouseOver style
* @property {object} out - mouseOut style
* @property {string} preset - name of the preset
*/
class Animated extends Component {
	constructor( props ) {
        super( props );
        this.mixin = false;

		this.state = {
            actualStyle: {},
            over: null,
            out: null
        };
    }

    componentDidMount() {
        if (this.props.preset !== '') this.readPreset();
        else {
            this.readStyles();
        }
    }

    componentDidUpdate() {
        if (this.mixin === false) {
            this.readStyles();
        }
    }

    saturation() {
        /* SATURATION PROCRESSES */
        const saturated = {
            filter: 'grayscale(0%)',
            transition: '2s'
        };

        const desaturated = {
            filter: 'grayscale(100%)',
            transition: '2s'
        };

        if (this.props.preset === 'saturation') {
            this.setState({
                over: saturated,
                out: desaturated
            });
        }

        if (this.props.preset === 'desaturation') {
            this.setState({
                over: desaturated,
                out: saturated
            });
        }
    }

    blurring() {
        /* BLURRING PROCRESSES */
        const blurred = {
            filter: 'blur(6px)',
            transition: '1.2s'
        };

        const clear = {
            filter: 'blur(0px)',
            transition: '1.2s'
        };

        if (this.props.preset === 'blurred') {
            this.setState({
                over: blurred,
                out: clear
            });
        }

        if (this.props.preset === 'deblurred') {
            this.setState({
                over: clear,
                out: blurred
            });
        }
    }

    sepia() {
        const sepia = {
            filter: 'sepia(100%)',
            transition: '1.2s'
        };
        const normal = {
            filter: 'sepia(0%)',
            transition: '1.2s'
        };

        if (this.props.preset === 'sepia') {
            this.setState({
                over: sepia,
                out: normal
            });
        }
    }

    shaking() {
        const shaking = {
           animation: 'shake-bottom .5s'
        };

        this.setState({
            over: shaking
        });
    }

    scaling() {
        const scaling = {
            transform: 'scale(1.03)',
            transition: '1.2s',
            transformOrigin: 'center center'
         };

         const normal = {
            transform: 'scale(1)',
            transition: '1.2s'
         };

        if (this.props.preset === 'scaling') {
            this.setState({
                over: scaling,
                out: normal
            });
        }
    }

    readPreset = (callback) => {
        if (this.props.preset !== '') {
            if (this.props.preset === 'saturation' || this.props.preset === 'desaturation') {
                this.saturation();
                }
            if (this.props.preset === 'blurred' || this.props.preset === 'deblurred') {
                this.blurring();
                }
            }
            if (this.props.preset === 'sepia') this.sepia();
            if (this.props.preset === 'shaking') this.shaking();
            if (this.props.preset === 'scaling') this.scaling();
    }

    readStyles = () => {
        const actual = this.state.actualStyle;
        const stateOver = this.state.over;
        const stateOut = this.state.out;

        const entry = this.props.in;
        const newIn = { ...actual, ...entry };

        const over = this.props.over;
        const newOver = { ...stateOver, ...over };

        const out = this.props.out;
        const newOut = { ...stateOut, ...out };
        this.mixin = true;

        this.setState({
            actualStyle: newIn,
            over: newOver,
            out: newOut
        });
    }

    mouseOver = () => {
        if (this.state.over) {
            this.setState({
                actualStyle: this.state.over
			});
        }
    }

    mouseOut = () => {
        if (this.state.out) {
            this.setState({
                actualStyle: this.state.out
			});
        }
    }


	render() {
		return (
            <div onMouseOut={this.mouseOut} onMouseOver={this.mouseOver} style={this.state.actualStyle}>
                <Fragment>{this.props.children}</Fragment>
            </div>
        );
	}
}


// PROPERTIES //

Animated.propTypes = {
    in: PropTypes.object,
    over: PropTypes.object,
    out: PropTypes.object,
    preset: PropTypes.string
};

Animated.defaultProps = {
    in: {},
    over: {},
    out: {},
    preset: ''
};

// EXPORTS //

export default Animated;
