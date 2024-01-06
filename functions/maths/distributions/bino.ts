import { factorial } from "simple-statistics";
import { DistributionType } from "../../../types/maths";


type BinoParamsType = { n: number, p: number; };



export const bino: DistributionType<BinoParamsType> = {

    label: '二項分布',

    isDiscrete: true,

    minX: 0,

    maxX: ({ n }) => n,

    defaultParams: { n: 18, p: 0.8 },

    defaultScale: {
        x: { min: 0, max: 20 },
        y: { min: 0, max: 0.3 }
    },

    inputPropsList: [
        { label: 'n:試行回数', name: 'n', step: 1, min: 0, max: 100 },
        { label: 'p:成功確率', name: 'p', step: 0.05, min: 0, max: 1 },
    ],

    calcDist: (x: number, { n, p }: BinoParamsType) => {

        const [greater, lesser] = x > n - x ? [x, n - x] : [n - x, x];

        return DividedFactorial(n, greater) / factorial(lesser) * p ** x * (1 - p) ** (n - x);
        // return factorial(n) / (factorial(x) * factorial(n - x)) * p ** x * (1 - p) ** (n - x);
    },


    calcStatData({ n, p }) {
        return [
            n * p,
            n * p * (1 - p)
        ];
    }
};


const DividedFactorial = (a: number, b: number) => {
    let c = 1;

    for (let i = a; i > b; i--) {
        c *= i;
    }
    return c;
};
