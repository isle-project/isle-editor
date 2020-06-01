// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import FlippableCard from 'components/flippable-card';
import LinearRegression from '-!svg-react-loader!./../../../img/linear_regression.svg';
import Lasso from '-!svg-react-loader!./../../../img/lasso.svg';
import Ridge from '-!svg-react-loader!./../../../img/ridge.svg';
import Boost from '-!svg-react-loader!./../../../img/boost.svg';
import ElasticNet from '-!svg-react-loader!./../../../img/elastic_net.svg';
import Dimension from '-!svg-react-loader!./../../../img/dimension.svg';
import KMeans from '-!svg-react-loader!./../../../img/kmeans.svg';
import KNNs from '-!svg-react-loader!./../../../img/knn.svg';
import Bag from '-!svg-react-loader!./../../../img/bag.svg';
import SVMs from '-!svg-react-loader!./../../../img/svm.svg';
import NaiveBayes from '-!svg-react-loader!./../../../img/naive_bayes.svg';
import CARTs from '-!svg-react-loader!./../../../img/cart.svg';
import RandomForest from '-!svg-react-loader!./../../../img/random_forest.svg';
import LogisticRegression from '-!svg-react-loader!./../../../img/logistic_regression.svg';
import NeuralNetwork from '-!svg-react-loader!./../../../img/neural_network.svg';


// FUNCTIONS //

const ModelCard = ( props ) => {
	let img;
	let text;
	switch ( props.name ) {
		case 'kmeans':
			img = <KMeans />;
			text = 'Group observations into a fixed number (k) of clusters such that cluster members are more similar to each other than to observations in other clusters.';
		break;
		case 'SVM':
			img = <SVMs />;
			text = 'Support Vector Machines are discriminative classifiers. Given labeled training data, the algorithm finds an optimal hyperplane to categorize new examples. In two dimensions this hyperplane is a line dividing it into two parts.';
		break;
		case 'KNN':
			img = <KNNs />;
			text = 'Used for both regression and classification. Uses majority vote among k-nearest points for kNN classification. For regression, the output is the average of the k-nearest values.';
		break;
		case 'Naive Bayes':
			img = <NaiveBayes />;
			text = 'Naive Bayes methods are a set of classification algorithms based on applying Bayes’ theorem with the “naive” assumption of conditional independence between every pair of features given the value of the class variable.';
		break;
		case 'Logistic Regression':
			img = <LogisticRegression />;
			text = 'Logistic regression is a classification method used to assign observations to either of two classes. Logistic regression uses the logistic sigmoid function to return a probability value for each class';
		break;
		case 'Linear Regression':
			img = <LinearRegression />;
			text = 'Models the relationship between a scalar response and one or more explanatory variables. Simple linear regression refers to the case where one predictor is present, multiple linear regression is used with multiple explanatory variables. It is called linear because the estimated function is linear in its coefficients.';
		break;
		case 'CART':
			img = <CARTs />;
			text = 'Classification And Regression Tree (CART) analysis builds a tree that goes from the features of an observation (represented in the branches) to a predicted value (represented in the leaves).';
		break;
		case 'Random Forest':
			img = <RandomForest />;
			text = 'Random Forests construct a multitude of decision trees at training time and return the class that is the mode of the classes (classification) or mean prediction (regression) of the individual trees.';
		break;
		case 'Neural Networks':
			img = <NeuralNetwork />;
			text = 'Artificial neural networks are  used to model complex relationships between inputs and outputs by learning a non-linear function without manual feature engineering.';
		break;
		case 'Elastic Net':
			img = <ElasticNet />;
			text = 'Elastic net is a regularized regression method that linearly combines the L1 and L2 penalties of the lasso and ridge methods.';
		break;
		case 'LASSO':
			img = <Lasso />;
			text = 'Regularized regression method that penalizes regression coefficients using the L1 norm. Trades lower variance for a bit of bias. Leads to a sparse model.';
		break;
		case 'Ridge':
			img = <Ridge />;
			text = 'Regularized regression method that penalizes regression coefficients using the L2 norm. Trades lower variance for a bit of bias. Does not yield a sparse model, i.e. coefficients are not driven to zero.';
		break;
		case 'PCA':
			img = <Dimension />;
			text = 'Principal Component Analysis (PCA) uses an orthogonal transformation to convert possibly correlated variables into a set of values of linearly uncorrelated variables called principal components.';
		break;
		case 'Bagging':
			img = <Bag />;
			text = 'Bootstrap aggregating is often used with decision tree methods. Drawing bootstrap samples from the original training data estimating a model for each drawn sample, the predictions of said models are then averaged to yield lower-variance predictions not as prone to overfitting.';
		break;
		case 'Boosting':
			img = <Boost />;
			text = 'Boosting algorithms such as AdaBoost iteratively learn weak classifiers and add them to a final strong classifier by weighting them. As classifiers are added, misclassified input data gain a higher weight and examples that are classified correctly lose weight. Thus, future weak learners focus more on the examples that previous weak learners misclassified.';
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

function makeCards( list ) {
	const out = list.map( ( x, i ) => <ModelCard key={i} name={x} /> );
	return out;
}


// MAIN //

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
	}

	render() {
		let main;
		switch ( this.state.activePage ) {
			case 'Clustering':
				main = makeCards([ 'kmeans', 'Neural Networks' ]);
			break;
			case 'Regression':
				main = makeCards([ 'KNN', 'CART', 'Neural Networks', 'Linear Regression', 'LASSO', 'Ridge', 'Elastic Net' ]);
			break;
			case 'Classification':
				main = makeCards([ 'KNN', 'SVM', 'Naive Bayes', 'CART', 'Logistic Regression', 'Neural Networks' ]);
			break;
			case 'Ensemble':
				main = makeCards([ 'Random Forest', 'Bagging', 'Boosting' ]);
			break;
			case 'Dimensionality Reduction':
				main = makeCards([ 'PCA' ]);
			break;
		}
		return (
			<Card style={this.props.style} >
				<Card.Header>
				<Nav variant="tabs" defaultActiveKey={this.state.activePage} onSelect={this.handleSelect} >
					<Nav.Item>
						<Nav.Link eventKey="Clustering">Clustering</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="Regression">Regression</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="Classification">Classification</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="Ensemble">Ensemble</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="Dimensionality Reduction">Dimensionality Reduction</Nav.Link>
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

export default LearnStatisticalModels;
