// MODULES //

import logger from 'debug';
import uniq from 'uniq';
import contains from '@stdlib/assert/contains';
import incrspace from '@stdlib/math/utils/incrspace';


// VARIABLES //

const debug = logger( 'isle:multi-cards:bingo' );


// MAIN //

function Bingo( onError, onComplete ) {
    this.rows = [ false, false, false, false, false ];
    this.cols = [ false, false, false, false, false ];
    this.clicked = [];
    this.diagRight = false;
    this.diagLeft = false;

    this.draw = ( item, idx, m ) => {
        if ( contains( this.clicked, idx ) ) {
            onError( idx );
            return null;
        }
        this.clicked.push( idx );
        const nCols = this.cols.length;
        const nRows = this.rows.length;
        let completed = [];
        for ( let i = 0; i < nRows; i++ ) {
            const start = 0 + i*nCols;
            const end = nCols*(i+1);
            const val = this.checkLine( m.slice( start, end ) );
            if ( val === true && this.rows[ i ] === false ) {
                this.rows[ i ] = true;
                debug( 'Checked all elements in row '+i );
                completed = completed.concat( incrspace( start, end, 1 ) );
            }
        }
        for ( let j = 0; j < nCols; j++ ) {
            const indices = [];
            const elems = m.filter( ( e, idx ) => {
                const adjusted = ( idx - j );
                if ( adjusted >= 0 && adjusted % nRows === 0 ) {
                    indices.push( idx );
                    return true;
                }
                return false;
            });
            const val = this.checkLine( elems );
            if ( val === true && this.cols[ j ] === false ) {
                this.cols[ j ] = true;
                debug( 'Checked all elements in column '+j );
                completed = completed.concat( indices );
            }
        }

        // Check left diagonal:
        let elems = [];
        let indices = [];
        for ( let i = 0; i < nRows; i++ ) {
            const idx = 0 + i*(nCols+1);
            indices.push( idx );
            elems.push( m[ idx ] );
        }
        let diagLeft = this.checkLine( elems );
        if ( diagLeft === true && this.diagLeft === false ) {
            this.diagLeft = true;
            completed = completed.concat( indices );
        }

        // Check right diagonal:
        elems = [];
        indices = [];
        for ( let i = 0; i < nRows; i++ ) {
            const idx = (nCols-1) + i*(nCols-1);
            indices.push( idx );
            elems.push( m[ idx ] );
        }
        let diagRight = this.checkLine( elems );
        if ( diagRight === true && this.diagRight === false ) {
            this.diagRight = true;
            completed = completed.concat( indices );
        }

        uniq( completed );
        if ( completed.length > 0 ) {
            console.log( 'Completed: '+completed );
            onComplete( completed );
        }
    };

    this.checkLine = ( line ) => {
        let valid = true;
        for ( let i = 0; i < line.length; i++ ) {
            if ( line[i] === false ) {
                valid = false;
            }
        }
        return valid;
    };

    return this;
}


// EXPORTS //

export default Bingo;
