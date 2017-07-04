// VARIABLES //

const OPEN_CPU_DEFAULT = 'http://phd-serv5.heinz.cmu.edu';


// MAIN //

/**
* Get the OpenCPU server address.
*
* @returns {string} OpenCPU address
*/
function getOpenCPU() {
	const config = global.session.config;
	return config.rshell && config.rshell.server ?
		config.rshell.server :
		OPEN_CPU_DEFAULT;
} // end FUNCTION getOpenCPU()


// EXPORTS //

export default getOpenCPU;
