import { DistributionType } from "../../../types/maths";
import { calcBeta } from "../calculator";


type FdisParamsType = { df1: number, df2: number; };



export const fdis: DistributionType<FdisParamsType> = {

    label: 'Ｆ分布',

    minX: 0.0001,

    defaultParams: { df1: 12, df2: 24 },

    defaultScale: {
        x: { min: 0, max: 3 },
        y: { min: 0, max: 1 }
    },

    inputPropsList: [
        { label: 'k1:自由度1', name: 'df1', step: 1, min: 1, max: 100 },
        { label: 'k2:自由度2', name: 'df2', step: 1, min: 1, max: 100 }
    ],

    calcCommonValue: ({ df1, df2 }) => {
        return 1 / calcBeta(df1 / 2, df2 / 2);
    },

    calcDist: (x: number, { df1, df2 }: FdisParamsType, commonValue) => {
        const tmp = df1 * x / (df1 * x + df2);
        const r = tmp ** (df1 / 2) * (1 - tmp) ** (df2 / 2) / x * commonValue;
        return r;
    },
    // calcDist: (x: number, { df1, df2 }: FdisParamsType, commonValue) => {
    //     const df1h = df1 / 2;
    //     const df2h = df2 / 2;
    //     const df12 = df1 / df2;
    //     const r = x ** (df1h - 1) * df12 ** df1h / (1 + df12 * x) ** (df1h + df2h) * commonValue;

    //     return r;
    // },

    calcStatData({ df1, df2 }) {
        const mean = df2 > 2 ? df2 / (df2 - 2) : NaN;
        return [
            mean,
            df2 > 4 ? mean ** 2 * (df1 + df2 - 2) / (df1 * (df2 - 4)) : NaN
        ];
    }
};