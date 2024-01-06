import { DistributionType } from "../../../types/maths";
import { calcGamma } from "../calculator";


type Chi2ParamsType = { df: number; };



export const chi2: DistributionType<Chi2ParamsType> = {

    label: 'カイ二乗分布',

    minX: 0.001,

    defaultParams: { df: 3 },

    defaultScale: {
        x: { min: 0, max: 10 },
        y: { min: 0, max: 0.3 }
    },

    inputPropsList: [
        { label: 'k:自由度', name: 'df', step: 1, min: 1, max: 100 }
    ],

    calcCommonValue: ({ df }) => calcGamma(df / 2) * (Math.pow(2, df / 2)),

    calcDist: (x: number, { df }: Chi2ParamsType, commonValue) => {
        return Math.pow(x, df / 2 - 1) * Math.exp(- x / 2) / commonValue;
    },

    calcStatData({ df }) {
        return [df, df * 2];
    },
};