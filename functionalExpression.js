function variable(name){
    if(name == "x")
        return function(x, y, z){ return x;}

    if(name == "y")
        return function(x, y, z){ return y;}
    
    if(name == "z")
        return function(x, y, z){ return z;}
}

function cnst(value){
    return function(x, y, z){ return value;}
}

function multiply(func1, func2){
    return function(x, y, z){ return func1(x, y, z) * func2(x, y, z)}
}

function divide(func1, func2){
    return function(x, y, z){ return func1(x, y, z) / func2(x, y, z)}
}

function add(func1, func2){
    return function(x, y, z){ return func1(x, y, z) + func2(x, y, z)}
}

function subtract(func1, func2){
    return function(x, y, z){ return func1(x, y, z) - func2(x, y, z)}
}

function negate(func1){
    return function(x, y, z){ return func1(x, y, z) * (-1)}
}

function negate(func1){
    return function(x, y, z){ return func1(x, y, z) * (-1)}
}

let pi = function(x, y, z){ return Math.PI}
let e = function(x, y, z){ return Math.E}

function sin(func){
    return function(x, y, z){ return Math.sin(func(x, y, z))}
}

function cos(func){
    return function(x, y, z){ return Math.cos(func(x, y, z))}
}