// MODULES //

import Loadable from '@isle-project/components/internal/loadable';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'LearnCLT' );


// MAIN //

const LearnDiscreteCLT = Loadable( () => import( /* webpackChunkName: "LearnDiscreteCLT" */ './main.js' ) );


// EXPORTS //

export default LearnDiscreteCLT;
