var PosObj = function (givenMoney) {
	var money = givenMoney;
	this.add = function (inputMoney) {
		money = money + inputMoney;
		return money;
	};
	this.minus = function (inputMoney) {
		money = money - inputMoney;
		return money;
	};
	this.multi = function (inputMoney) {
		money = money * inputMoney;
		return money;
	};
	this.div = function (inputMoney) {
		money = money / inputMoney;
		return money;
	};
	this.getMoney = function () {
		return money;
	}
};

var firstPos = new PosObj(3000);
console.log("firstPos");
console.log(firstPos.getMoney());
console.log(firstPos.add(4000));
console.log(firstPos.multi(10));
console.log(firstPos.div(200));
console.log(firstPos.minus(2000));

var secondPos = {
	money:0,
	add: function(input){
		this.money += input;
		return this.money;
	},
	minus: function (input) {
		this.money -= input;
		return this.money;
	},
	multi: function (input) {
		this.money = this.money * input;
		return this.money;
	},
	div: function (input) {
		this.money = this.money / input;
		return this.money;
	}
};
console.log("secondPos");
console.log(secondPos.money);
console.log(secondPos.add(1000));
console.log(secondPos.multi(10));
console.log(secondPos.div(10));
console.log(secondPos.minus(100));