// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import FlippableCard from '@isle-project/components/flippable-card';
import LinearRegression from '-!svg-react-loader!./img/linear_regression.svg';
import Lasso from '-!svg-react-loader!./img/lasso.svg';
import Ridge from '-!svg-react-loader!./img/ridge.svg';
import Boost from '-!svg-react-loader!./img/boost.svg';
import ElasticNet from '-!svg-react-loader!./img/elastic_net.svg';
import Dimension from '-!svg-react-loader!./img/dimension.svg';
import KMeans from '-!svg-react-loader!./img/kmeans.svg';
import KNNs from '-!svg-react-loader!./img/knn.svg';
import Bag from '-!svg-react-loader!./img/bag.svg';
import SVMs from '-!svg-react-loader!./img/svm.svg';
import NaiveBayes from '-!svg-react-loader!./img/naive_bayes.svg';
import CARTs from '-!svg-react-loader!./img/cart.svg';
import RandomForest from '-!svg-react-loader!./img/random_forest.svg';
import LogisticRegression from '-!svg-react-loader!./img/logistic_regression.svg';
import NeuralNetwork from '-!svg-react-loader!./img/neural_network.svg';


// FUNCTIONS //

const ModelCard = ( props ) => {
	let img;
	let text;
	switch ( props.name ) {
		case 'kmeans':
			img = <KMeans />;
			text = props.t('kmeans-description' );
		break;
		case 'SVM':
			img = <SVMs />;
			text = props.t('svm-description');
		break;
		case 'KNN':
			img = <KNNs />;
			text = props.t('knn-description');
		break;
		case 'Naive Bayes':
			img = <NaiveBayes />;
			text = props.t('naive-bayes-description');
		break;
		case 'Logistic Regression':
			img = <LogisticRegression />;
			text = props.t('logistic-regression-description');
		break;
		case 'Linear Regression':
			img = <LinearRegression />;
			text = props.t('linear-regression-description');
		break;
		case 'CART':
			img = <CARTs />;
			text = props.t('cart-description');
		break;
		case 'Random Forest':
			img = <RandomForest />;
			text = props.t('random-forest-description');
		break;
		case 'Neural Networks':
			img = <NeuralNetwork />;
			text = props.t('neural-networks-description');
		break;
		case 'Elastic Net':
			img = <ElasticNet />;
			text = props.t('elastic-net-description');
		break;
		case 'LASSO':
			img = <Lasso />;
			text = props.t('lasso-description');
		break;
		case 'Ridge':
			img = <Ridge />;
			text = props.t('ridge-description');
		break;
		case 'PCA':
			img = <Dimension />;
			text = props.t('pca-description');
		break;
		case 'Bagging':
			img = <Bag />;
			text = props.t('bagging-description');
		break;
		case 'Boosting':
			img = <Boost />;
			text = props.t('boosting-description');
		break;
	}
	return (
		<FlippableCard draggable button={props.name} cardStyles={{
			container: { width: '200px', height: '250px', float: 'left' },
			flipper: { width: '200px', height: '250px' },
			front: { width: '200px', height: '250px' },
			back: { width: '200px', height: '250px' }
		}} >
			<Card style={{ width: '200px' }}>
				{img}
			</Card>
			<Card style={{ width: '200px' }}>
				<Card.Body>
					<Card.Text>{text}</Card.Text>
				</Card.Body>
			</Card>
		</FlippableCard>
	);
};

function makeCards( list, t ) {
	const out = list.map( ( x, i ) => <ModelCard key={i} name={x} t={t} /> );
	return out;
}


// MAIN //

/**
* Component to browse descriptions of various statistical models.
*
* @property {Object} style - CSS inline styles
*/
class LearnStatisticalModels extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			activePage: 'Clustering'
		};
	}

	handleSelect = ( selectedKey ) => {
		this.setState({
			activePage: selectedKey
		});
	};

	render() {
		const { t } = this.props;
		let main;
		switch ( this.state.activePage ) {
			case 'Clustering':
				main = makeCards([ 'kmeans', 'Neural Networks' ], t );
			break;
			case 'Regression':
				main = makeCards([ 'KNN', 'CART', 'Neural Networks', 'Linear Regression', 'LASSO', 'Ridge', 'Elastic Net' ], t);
			break;
			case 'Classification':
				main = makeCards([ 'KNN', 'SVM', 'Naive Bayes', 'CART', 'Logistic Regression', 'Neural Networks' ], t );
			break;
			case 'Ensemble':
				main = makeCards([ 'Random Forest', 'Bagging', 'Boosting' ], t );
			break;
			case 'Dimensionality Reduction':
				main = makeCards([ 'PCA' ], t );
			break;
		}
		return (
			<Card style={this.props.style} >
				<Card.Header>
				<Nav variant="tabs" defaultActiveKey={this.state.activePage} onSelect={this.handleSelect} >
					<Nav.Item>
						<Nav.Link eventKey="Clustering">{t('clustering')}</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="Regression">{t('regression')}</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="Classification">{t('classification')}</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="Ensemble">{t('ensemble')}</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="Dimensionality Reduction">{t('dimensionality-reduction')}</Nav.Link>
					</Nav.Item>
				</Nav>
				</Card.Header>
				<Card.Body>
					<Card.Title>{this.state.activePage}</Card.Title>
					{main}
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

LearnStatisticalModels.propTypes = {
	style: PropTypes.object
};

LearnStatisticalModels.defaultProps = {
	style: {}
};


// EXPORTS //

export default withTranslation( 'learn/statistical-models' )( LearnStatisticalModels );
