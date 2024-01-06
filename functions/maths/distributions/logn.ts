import { DistributionType } from "../../../types/maths";


type LognParamsType = { mean: number, vari: number; };


export const calcLogn = (x: number, { mean, vari }: LognParamsType) => {
    return Math.exp(- Math.pow(Math.log(x) - mean, 2) / (2 * vari)) / (Math.sqrt(2 * Math.PI * vari) * x);
};


export const logn: DistributionType<LognParamsType> = {

    label: '対数正規分布',

    minX: 0.0001,

    defaultParams: { mean: 0, vari: 1 },

    defaultScale: {
        x: { min: 0, max: 2 },
        y: { min: 0, max: 1 }
    },

    inputPropsList: [
        { label: 'μ:平均', name: 'mean', step: 0.1, min: -5, max: 5 },
        { label: 'σ2:分散', name: 'vari', step: 0.1, min: 0.1, max: 20 },
    ],

    calcDist: (x: number, { mean, vari }: LognParamsType) => {
        return Math.exp(- Math.pow(Math.log(x) - mean, 2) / (2 * vari)) / (Math.sqrt(2 * Math.PI * vari) * x);
    },

    calcStatData({ mean, vari }) {
        return [
            Math.exp(mean + vari / 2),
            Math.exp(2 * mean + vari) * (Math.exp(vari) - 1)
        ];
    }
};