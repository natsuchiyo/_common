import { DistributionType } from "../../../types/maths";
import { calcGamma } from "../calculator";


type TdisParamsType = { df: number; };



export const tdis: DistributionType<TdisParamsType> = {

    label: 'ｔ分布',

    defaultParams: { df: 3 },

    defaultScale: {
        x: { min: -4, max: 4 },
        y: { min: 0, max: 0.5 }
    },

    inputPropsList: [
        { label: 'k:自由度', name: 'df', step: 1, min: 1, max: 100 }
    ],

    calcCommonValue: ({ df }) => calcGamma((df + 1) / 2) / (Math.sqrt(df * Math.PI) * calcGamma(df / 2)),

    calcDist: (x: number, { df }: TdisParamsType, commonValue) => {
        return Math.pow(1 + x * x / df, -(df + 1) / 2) * commonValue;
    },

    calcStatData({ df }) {
        return [
            df > 1 ? 0 : NaN,
            df > 2 ? df / (df - 2) : NaN
        ];
    }
};