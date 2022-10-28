const {sum, subtract, multiply, divide} = require("./OperacoesAritimetrica");



describe('sum', () => {
    test('sum two positive numbers', () => {
        expect(sum(1,2)).toBe(3);
    });
    
    test('sum two negative numbers', () => {
        expect(sum(-1,-2)).toBe(-3);
    });
    
});

describe('subtract', () => {
    test('subtract two positive numbers', () => {
        expect(subtract(1,2)).toBe(-1);
    });
    
    test('subtract two negative numbers', () => {
        expect(subtract(-1,-2)).toBe(1);
    }); 
});

describe('multiply', () => {
    test('multiply two positive numbers', () => {
        expect(multiply(1,2)).toBe(2);
    });
    
    test('multiply two negative numbers', () => {
        expect(multiply(-1,-2)).toBe(2);
    }); 
});

describe('divide', () => {
    test('divide two positive numbers', () => {
        expect(divide(1,2)).toBe(0.5);
    });
    
    test('divide two negative numbers', () => {
        expect(divide(-1,-2)).toBe(0.5);
    }); 

    test('divide by zero', () => {
        expect(divide(-1,0)).toBe(undefined);
    }); 
});