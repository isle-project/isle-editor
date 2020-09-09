
// MAIN //

const dataExplorer = `---
<preamble>
---

# Title

<DataExplorer
    data={dataFile}
    dataInfo={dataInfoFile}
    categorical={[
        'X',
        'Y',
        factor( 'month', [ 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec' ] ),
        factor( 'day', [ 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun' ] )
    ]}
    quantitative={['area','X','Y','FFMC','DMC','DC','ISI','temp','RH','wind','rain']}
/>`;


// EXPORTS //

export default dataExplorer;
