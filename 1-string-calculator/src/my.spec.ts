import {Calculator} from './my';

describe('my', () => {

    it('Calc add "" ', () => {
        const res = new Calculator().add('');
        expect(res).toBe(0);
    });

    it('Calc add "1" ', () => {
        const res = new Calculator().add('1');
        expect(res).toBe(1);
    });

    it('Calc add "4" ', () => {
        const res = new Calculator().add('1');
        expect(res).toBe(1);
    });

    it('Calc add "1, 2" ', () => {
        const res = new Calculator().add('1, 2');
        expect(res).toBe(3);
    });

    it('Calc add "1, 2, 3, 4" ', () => {
        const res = new Calculator().add('1, 2, 3, 4');
        expect(res).toBe(10);
    });

    it('Calc add “1\n2,3” ', () => {
        const res = new Calculator().add('1\n2,3');
        expect(res).toBe(6);
    });

    // “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return three
    // where the default delimiter is ‘;’ .
    it('Calc add //;\\n1;2” ', () => {
        const res = new Calculator().add('//;\n1;2');
        expect(res).toBe(3);
    });

    it('Calc add -1,2” ', () => {
        const res = new Calculator().add('-1,2');
        expect(res).toBe('negatives not allowed: -1');
    });


    it('Calc add 1,-2,2,-3” ', () => {
        const res = new Calculator().add('1,-2,2,-3');
        expect(res).toBe('negatives not allowed: -2, -3');
    });

    // ignore numbers bigger than 1000
    it('Calc add 2, 1001” ', () => {
        const res = new Calculator().add('2, 1001');
        expect(res).toBe(2);
    });

});
