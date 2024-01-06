import { DistributionType } from "../../../types/maths";
import { calcBeta } from "../calculator";


type BetaParamsType = { alfa: number; beta: number; };



export const beta: DistributionType<BetaParamsType> = {

    label: 'ベータ分布',

    minX: 0.0001,

    maxX: 0.9999,

    defaultParams: { alfa: 0.5, beta: 0.5 },

    defaultScale: {
        x: { min: 0, max: 1 },
        y: { min: 0, max: 2.5 }
    },

    inputPropsList: [
        { label: 'α', name: 'alfa', step: 0.1, min: 0.1, max: 10 },
        { label: 'β', name: 'beta', step: 0.1, min: 0.1, max: 10 },
    ],

    calcCommonValue: ({ alfa, beta }) => calcBeta(alfa, beta),

    calcDist: (x: number, { alfa, beta }: BetaParamsType, commonValue) => {
        return Math.pow(x, alfa - 1) * Math.pow(1 - x, beta - 1) / commonValue;
    },

    calcStatData({ alfa, beta }) {
        const tmp = alfa + beta;
        return [
            alfa / tmp,
            alfa * beta / (Math.pow(tmp, 2) * (tmp + 1))
        ];
    },
};