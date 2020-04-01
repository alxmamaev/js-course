class Variable {
    constructor(name) {
      this.name = name;
    }

    evaluate(x, y, z){
        if(this.name == "x")
            return x;
        if(this.name == "y")
            return y;
        if(this.name == "z")
            return z;
    }

    toString(){
        return this.name;
    }
}

class Const{
    constructor(value) {
        this.value = value;
    }

    evaluate(x, y, z){
        return this.value;
    }

    toString(){
        return String(this.value);
    }
}


class BaseOperation{
    constructor(symbol, ...args) {
        this.funcs = args
        this.symbol = symbol;
    }

    toString(){
        let outputString = '';
        for(var i = 0; i< this.funcs.length; i++){
            outputString += this.funcs[i].toString();
            outputString += ' ';
        }
        outputString += this.symbol;

        return outputString;
    }

}


class Add extends BaseOperation{

    constructor(func1, func2){
        super("+", func1, func2);
    }

    evaluate(x, y, z){
        return this.funcs[0].evaluate(x, y, z) + this.funcs[1].evaluate(x, y, z);
    }
}


class Subtract extends BaseOperation{
    constructor(func1, func2){
        super("-", func1, func2);
    }

    evaluate(x, y, z){
        return this.funcs[0].evaluate(x, y, z) - this.funcs[1].evaluate(x, y, z);
    }
}


class Divide extends BaseOperation{
    constructor(func1, func2){
        super("/", func1, func2);
    }

    evaluate(x, y, z){
        return this.funcs[0].evaluate(x, y, z) / this.funcs[1].evaluate(x, y, z);
    }
}


class Multiply extends BaseOperation{
    constructor(func1, func2){
        super("*", func1, func2);
    }

    evaluate(x, y, z){
        return this.funcs[0].evaluate(x, y, z) * this.funcs[1].evaluate(x, y, z);
    }
}

class Negate extends BaseOperation{
    constructor(func){
        super("negate", func);
    }

    evaluate(x, y, z){
        return this.funcs[0].evaluate(x, y, z) * (-1);
    }
}



class Min3 extends BaseOperation{
    constructor(func1, func2, func3) {
        super("min3", func1, func2, func3);
    }

    evaluate(x, y, z){
        var func_results = []

        for(var i = 0; i< this.funcs.length; i++){
            var v = this.funcs[i].evaluate(x, y, z);
            func_results.push(v)
        }

        return Math.min.apply(Math, func_results) 
    }

}  

class Max5 extends BaseOperation{
    constructor(func1, func2, func3, func4, func5) {
        super("max5", func1, func2, func3, func4, func5);
    }

    evaluate(x, y, z){
        var func_results = []

        for(var i = 0; i< this.funcs.length; i++){
            var v = this.funcs[i].evaluate(x, y, z);
            func_results.push(v)
        }

        return Math.max.apply(Math, func_results) 
    }

}