
var assert = require("assert");

function converter (value, unit, targetunit){

    const validvalues= ['g', 'Kg']

    if (!validvalues.includes(unit) || !validvalues.includes(targetunit)){
        throw new Error ("Il convertitore accetta g o Kg");
    }

    if (typeof value !== "number") {
        throw new Error("Il convertitore accetta solo numeri");
    }

    let x = 0

    if (unit === "g" && targetunit === "Kg"){
        x = value / 1000;

    }else if (unit === "Kg" && targetunit === "g"){
        x = value * 1000;
    }

    return x;
}



describe('converterTests', function(){
    it('convert 1000g in 1 Kg', function(){
        const result = converter(1000, 'g', 'Kg');
        assert.equal(result,1);
    });

    it('convert 100g in 0.1 Kg', function(){
        const result = converter(100, 'g', 'Kg');
        assert.equal(result,0.1);
    });

    it('convert 1g in 0.001 Kg', function(){
        const result = converter(1, 'g', 'Kg');
        assert.equal(result,0.001);
    });

    it('convert 0g in 0 Kg', function(){
        const result = converter(0, 'g', 'Kg');
        assert.equal(result,0);
    });

    it('convert -1000g in 0 Kg', function(){
        const result = converter(-1000, 'g', 'Kg');
        assert.equal(result,-1);
    });

    it('convert not a number throws', function(){
        assert.throws(() => converter ('not a number', 'g', 'Kg'), Error, "Il convertitore accetta solo numeri");
    });

    it('convert Kg in g', function(){
        assert.equal(converter(1, 'Kg', 'g'), 1000);
    });

    it('convert something in blablabla', function(){
        assert.throws(() => converter (1, 'something', 'blabla'), Error, "Il convertitore accetta g o Kg");
    });
});

