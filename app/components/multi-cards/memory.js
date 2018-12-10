var MemoryGame = {

	pairs: [],
	drawCt: 0,
	counter: 0,
	solved: [],

	resetGame() {
		this.solved = [];
		this.drawCt = 0;
		this.counter = 0;
		this.storedCard = null;
	},

	establishPairs( type ) {
		var found = false;
		for (var i = 0; i< this.pairs.length; i++) {
			var pair = this.pairs[i];
			if (pair.first === type) {
				found = true;
				pair.second = type;
			}
		}

		if (found === false) {
			var obj = { first: type };
			this.pairs.push( obj );
		}
	},

	init(values, parent) {
		this.parent = parent;
		this.values = values;
		for (var i = 0; i < values.length; i++) {
			var item = values[i];
			if (item.type !== void 0) this.establishPairs(item.type);
		}
	return this;
	},


	checkPair( type, ndx ) {
		if (this.drawCt === 0){
			this.drawCt += 1;
			this.storedCard = { type: type, ndx: ndx };
		} else {
			this.drawCt = 0;
			if (this.storedCard.type === type) {
				this.solved.push(ndx);
				this.solved.push( this.storedCard.ndx);
				console.log('SOLVED ' + this.solved);
				this.checkSuccess();
				return true;
			}
			return false;
		}
	},


	checkSuccess(){
		this.counter += 1;
		if (this.counter === this.pairs.length) {
			var list = [];
			for (var i = 0; i< this.pairs.length; i++) {
				list.push(i*2);
				list.push( (i*2) +1);
			}
		this.callback( list );
		global.memory = this;
		this.resetGame();
		}
	},

	checkDouble( ndx ) {
		if ( this.drawCt === 1 ) {
			if ( ndx === this.storedCard.ndx ) {
				return true;
			}
		}
		return false;
	},

	checkSolved(ndx) {
		var present = false;
		for (var i = 0; i< this.solved.length; i++) {
			if (ndx === this.solved[i]) present = true;
		}
		return present;
	},

	reset(ndx) {
		let matrix = this.parent.state.cardMatrix.slice( 0 );
		matrix[ndx] = !matrix[ndx];
		this.parent.setState({
			cardMatrix: matrix
		});
	},

	draw(item, ndx, callback) {
		this.callback = callback;
		if (item.type) {
			if (this.checkDouble(ndx) === true) {
				var list = [ndx];
				let matrix = this.parent.state.cardMatrix.slice( 0 );
				matrix[ndx] = !matrix[ndx];
				this.parent.setState({
					cardMatrix: matrix
				});

				return null;
			}

			if (this.checkSolved(ndx) === true) {
				this.reset(ndx);
				return null;
			}

			var ret = this.checkPair(item.type, ndx);
			if (ret === false) {
				var list = [this.storedCard.ndx, ndx];
				callback(list);
			}
		}
	}

};

export default MemoryGame;
