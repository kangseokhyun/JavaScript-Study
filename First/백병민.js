var calc = function(init) {
	this.value = init;
}
calc.prototype.add = function(val) {
	this.value += val;
	return this.value;
}

var calc1 = new calc(10);
var calc2 = new calc(10);

calc1.min = function(val) {
	this.value -= val;
	return this.value;
}
calc1.mul = function(val) {
	var that = this;
	var halper = function() {
		that.value = that.value * val;
	}
	halper();
	return that.value;
}
calc1.div = function(val) {
	var that = this;
	var helper = {
		divHelper: function() {
			that.value = that.value / val
		}
	}
	helper.divHelper();
	return this.value;
}

alert(calc1.add(2));
alert(calc1.min(2));
alert(calc1.div(2));
alert(calc1.mul(2));

alert(calc2.add(2));
// Error from here!!!!
alert(calc2.min(2));
alert(calc2.div(2));
alert(calc2.mul(2));
