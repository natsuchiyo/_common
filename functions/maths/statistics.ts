import { calcGamma } from "./calculator";




export const calcTValue = (mean: number, vari: number, mu: number, size: number) => {
    return (mean - mu) / Math.sqrt(vari / size);
};



export const calcPValue = (tValue: number, size: number) => {
    const df = size - 1;
    const halfN = (df + 1) * 0.5;
    let coeff = 0;
    if (df === 1) {
        coeff = 0.31831;
    } else if (1 < df && df <= 300) {
        const numerv = calcGamma(halfN);
        const denomv = calcGamma((df * 0.5));
        coeff = numerv / (Math.sqrt(Math.PI * df) * denomv);
    } else if (300 < df && df <= 400) {
        coeff = 0.39863 + 0.00005 * (df - 300) / 100;
    } else if (400 < df && df <= 500) {
        coeff = 0.39868 + 0.00005 * (df - 400) / 100;
    } else if (500 < df && df < 1000000) {
        coeff = 0.39873 + 0.000212 * (df - 500) / 1000000;
    } else {
        coeff = 0.398942;
    }

    let delta = 1.0 / 500;
    let t = -tValue;
    let area = 0;
    let oldArea = -1;
    if (df === 1) {
        delta = 0.01;
        while (Math.abs(area - oldArea) > Number.EPSILON) {
            oldArea = area;
            area += coeff * delta / (1 + t * t);
            t += delta;
        }
    }
    else {
        while (Math.abs(area - oldArea) > Number.EPSILON) {
            oldArea = area;
            area += coeff * Math.pow(1 + t * t / df, -halfN) * delta;
            t += delta;
        }
    }
    return tValue < 0 ? area : 1 - area;
};
