import { DistributionType, } from "../../../types/maths";


type ExpoParamsType = { lamb: number; };



export const expo: DistributionType<ExpoParamsType> = {

    label: '指数分布',

    minX: 0,

    defaultParams: { lamb: 1 },

    defaultScale: {
        x: { min: 0, max: 5 },
        y: { min: 0, max: 1 }
    },

    inputPropsList: [
        { label: 'λ', name: 'lamb', step: 0.05, min: 0.05, max: 20 },
    ],

    calcDist: (x: number, { lamb }: ExpoParamsType) => {
        return Math.exp(-x * lamb) * lamb;
    },

    calcStatData({ lamb }) {
        return [
            1 / lamb,
            1 / (lamb * lamb)
        ];
    }
};