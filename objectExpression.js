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
        let outputString = '';
        outputString += this.name;

        return outputString;
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
        let outputString = '';
        outputString += String(this.value);

        return outputString;
    }
}


class DoubleOperation{
    constructor(func1, func2) {
        this.func1 = func1;
        this.func2 = func2;
        this.symbol = "";
    }

    toString(){
        let outputString = '';
        outputString += this.func1.toString();
        outputString += " ";
        outputString += this.func2.toString();
        outputString += " ";
        outputString += this.symbol;

        return outputString;
    }
}


class Add extends DoubleOperation{

    constructor(func1, func2){
        super(func1, func2);
        this.symbol = "+";
    }

    evaluate(x, y, z){
        return this.func1.evaluate(x, y, z) + this.func2.evaluate(x, y, z);
    }
}


class Subtract extends DoubleOperation{
    constructor(func1, func2){
        super(func1, func2);
        this.symbol = "-";
    }

    evaluate(x, y, z){
        return this.func1.evaluate(x, y, z) - this.func2.evaluate(x, y, z);
    }
}


class Divide extends DoubleOperation{
    constructor(func1, func2){
        super(func1, func2);
        this.symbol = "/";
    }

    evaluate(x, y, z){
        return this.func1.evaluate(x, y, z) / this.func2.evaluate(x, y, z);
    }
}


class Multiply extends DoubleOperation{
    constructor(func1, func2){
        super(func1, func2);
        this.symbol = "*";
    }

    evaluate(x, y, z){
        return this.func1.evaluate(x, y, z) * this.func2.evaluate(x, y, z);
    }
}


class UnoOperation{
    constructor(func) {
        this.func = func;
        this.symbol = "";
    }

    toString(){
        let outputString = '';
        outputString += this.func.toString();
        outputString += " ";
        outputString += this.symbol;

        return outputString;
    }
}


class Negate extends UnoOperation{
    constructor(func){
        super(func);
        this.symbol = "negate";
    }

    evaluate(x, y, z){
        return this.func.evaluate(x, y, z) * (-1);
    }
}