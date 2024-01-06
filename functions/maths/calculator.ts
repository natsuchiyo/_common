
const gammaValues = [
    0.99999999999980993,
    676.5203681218851,
    -1259.1392167224028,
    771.32342877765313,
    -176.61502916214059,
    12.507343278686905,
    -0.13857109526572012,
    //  9.9843695780195716e-6, 
    //  1.5056327351493116e-7
];


export const calcGamma = (x: number) => {
    x -= 1;
    let a = gammaValues[0];
    for (let i = 1; i < gammaValues.length; i++) {
        a += gammaValues[i] / (x + i);
    }
    const t = x + 7.5;
    return Math.sqrt(2 * Math.PI) * Math.pow(t, x + 0.5) * Math.exp(-t) * a;
};


export const calcBeta = (a: number, b: number) => {
    return calcGamma(a) * calcGamma(b) / calcGamma(a + b);
};