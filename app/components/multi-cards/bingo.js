var Bingo = {

    top: false,
    left: false,
    right: false,
    bottom: false,
    diagRight: false,
    diagLeft: false,
    line2: false,
    line3: false,
    lin4: false,


    init(values, parent) {
        this.parent = parent;
        this.values = values;
        
        console.log('BINGO-INITIALISIERUNG');
        if (values.length < 25) {
            console.log('zu wenig Karten');
        }
        return this;
    },

    draw(item, ndx, callback) {
        this.callback = callback;
        let m = this.parent.state.cardMatrix.slice( 0 );
        let top = this.checkLine([m[0], m[1], m[2], m[3], m[4] ]);
        let left = this.checkLine([m[0], m[5], m[10], m[15], m[20] ]);
        let right = this.checkLine([m[4], m[9], m[14], m[19], m[24] ]);
        let bottom = this.checkLine([m[20], m[21], m[22], m[23], m[24] ]);
        let diagLeft = this.checkLine([m[0], m[6], m[12], m[18], m[24] ]);
        let diagRight = this.checkLine([m[4], m[8], m[12], m[16], m[20] ]);
        let line2 = this.checkLine([m[5], m[6], m[7], m[8], m[9] ]);
        let line3 = this.checkLine([m[10], m[11], m[12], m[13], m[14] ]);
        let line4 = this.checkLine([m[15], m[16], m[17], m[18], m[19] ]);

        if (top === true && this.top === false) {
            this.top = true;
            callback([0, 1, 2, 3, 4]);
        }
        if (left === true && this.left === false) {
            this.left = true;
            callback([0, 5, 10, 15, 20]);
        }

        if (right === true && this.right === false) {
            this.right = true;
            callback([4, 9, 14, 19, 24]);
        }

        if (bottom === true && this.bottom === false) {
            this.bottom = true;
            callback([20, 21, 22, 23, 24]);
        }

        if (line2 === true && this.line2 === false) {
            this.line2 = true;
            callback([5, 6, 7, 8, 9]);
        }

        if (line3 === true && this.line3 === false) {
            this.line3 = true;
            callback([10, 11, 12, 13, 14]);
        }

        if (line4 === true && this.line4 === false) {
            this.line4 = true;
            callback([15, 16, 17, 18, 19]);
        }

        if (diagLeft === true && this.diagLeft === false) {
            this.diagLeft = true;
            callback([0, 6, 12, 18, 24]);
        }

        if (diagRight === true && this.diagRight === false) {
            this.diagRight = true;
            callback([4, 8, 12, 16, 20]);
        }
    },

    checkLine(line) {
        var valid = true;
        for (var i = 0; i < line.length; i++) {
            if (line[i] === false) valid = false;
        }
        return valid;
    }

};

export default Bingo;
