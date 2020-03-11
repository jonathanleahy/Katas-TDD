export class Calculator {

    public add(intext: string) {

        let delimiter = ',';
        if (intext.substr(0, 2) === '//') {
            delimiter = intext.substr(2, 1);
            intext = intext.substr(3, 9999);
        }

        const re = new RegExp(`${delimiter}|\\n`);
        let nint1 = intext.split(re);

        nint1 = nint1.filter(number => Number(number) <= 1000);

        const negatives = nint1.filter(number => Number(number) < 0);

        if (negatives.length > 0) {
            return 'negatives not allowed: ' + negatives.join(', ');
        } else {
            const numbers: number = nint1.reduce((total: number, anelement) => (total + Number(anelement)), 0);
            return numbers;
        }
    }

}
