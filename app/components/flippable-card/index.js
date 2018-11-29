import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';

// MAIN //

/**
* The **FlippableCard** allows to render two-sides
*
*/
class FlippableCard extends React.Component {
  state = { isFlipped: false }

  componentDidUpdate(nextProps) {
    if (nextProps.isFlipped !== this.props.isFlipped) {
      this.setState({ isFlipped: nextProps.isFlipped });
      this.setState({ rotation: this.state.rotation + 180 });
    }
  }


	handleToggle() {
		this.setState(({ isFlipped }) => ({
		isFlipped: !isFlipped
		}));
	}


	getButton() {
		if (this.props.button !== null) return (
			<Button onClick={() => this.handleToggle()} >{ this.props.button }</Button>
		);
		return null;
	}

	getComponent( key ) {
			return this.props.children.filter(component => {
			return component.key === key;
		});
		}

	interaction() {
		if (this.props.button === null) this.handleToggle();
	}


  render() {
    const styles = {
        container: {
            perspective: this.props.perspective,
			transformStyle: 'preserve-3d',
			width: 400,
			height: 400,
			float: 'left',
			marginRight: '20px',
			zIndex: 10,
			...this.props.cardStyles.container
          },
		flipper: {
            position: 'relative',
            transformStyle: 'preserve-3d'
			},
		front: {
			WebkitBackfaceVisibility: 'hidden',
			backfaceVisibility: 'hidden',
			left: '0',
			position: 'absolute',
			top: '0',
			transform: `rotateY(${
			  this.props.infinite ? this.state.rotation : this.state.isFlipped ? 180 : 0
			}deg)`,
			transformStyle: 'preserve-3d',
			width: '100%',
			zIndex: '2',
			height: '100%',
			transition: `${this.props.flipSpeedBackToFront}s`,
			...this.props.cardStyles.front
			},
		back: {
			WebkitBackfaceVisibility: 'hidden',
			backfaceVisibility: 'hidden',
			left: '0',
			position: 'absolute',
			transform: `rotateY(${
				this.props.infinite ? this.state.rotation + 180 : this.state.isFlipped ? 0 : -180
			}deg)`,
			transformStyle: 'preserve-3d',
			top: '0',
			width: '100%',
			height: '100%',
			background: 'pink',
			transition: `${this.props.flipSpeedFrontToBack}s`,
			...this.props.cardStyles.back
			}
		};


    return (

			<div onClick={() => this.interaction()} className="react-card-flip" style={styles.container}>
			<div className="react-card-flipper"
				style={styles.flipper}
            >
				<div className="react-card-front" style={styles.front}>
					{this.getComponent('front')}
					{ this.getButton() }
				</div>

				<div className="react-card-back" style={styles.back}>
					{this.getComponent('back')}
					{ this.getButton() }
				</div>

            </div>
        </div>
    );
  }
}

// PROPERTIES //

FlippableCard.propTypes = {
	button: PropTypes.string,
	cardStyles: PropTypes.shape({
		container: PropTypes.object,
		front: PropTypes.object,
		back: PropTypes.object
	}),
	children: (props, propName, componentName) => {
	if (React.Children.count(props[propName]) !== 2) {
		return new Error(`${componentName} requires two children.`);
		}
		return null;
	},
	flipSpeedBackToFront: PropTypes.number,
	flipSpeedFrontToBack: PropTypes.number,
	infinite: PropTypes.bool,
	isFlipped: PropTypes.bool,
	perspective: PropTypes.number
  };

  FlippableCard.defaultProps = {
	button: null,
	cardStyles: {
		container: {},
		front: {},
		back: {}
	},
	children: null,
	flipSpeedBackToFront: 1.6,
	flipSpeedFrontToBack: 1.6,
	infinite: false,
	isFlipped: false,
	perspective: 1000
  };

// EXPORTS //

export default FlippableCard;
