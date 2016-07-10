import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import markdown from './markdown';

const rootReducer = combineReducers({
	markdown,
	routing
});

export default rootReducer;
