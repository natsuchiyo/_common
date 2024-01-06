import { extent } from "simple-statistics";



/**
 * digitの桁数で四捨五入をする
 */
export const round = (value: number, digit: number) => {
    return Math.round(value * 10 ** digit) / 10 ** digit;
};


export const calcCountRate = (tryCount: number, resultCount: number, digit = 0) => {
    return tryCount ? ((resultCount / tryCount) * 100).toFixed(digit) : 0;
};


export const histogram = (data: number[], binRange: number) => {

    if (!data || data.length === 0) return [];

    const [min, max] = extent(data);

    const binsLength = Math.ceil((max - min + 1) / binRange);

    const bins = Array(binsLength).fill(0);

    data.forEach(d => bins[Math.floor((d - min) / binRange)]++);

    return bins;
};


