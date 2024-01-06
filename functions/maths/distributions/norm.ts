import { DistributionType, } from "../../../types/maths";


type NormParamsType = { mean: number, vari: number; };




export const norm: DistributionType<NormParamsType> = {

    label: '正規分布',

    defaultParams: { mean: 0, vari: 1 },

    defaultScale: {
        x: { min: - 3, max: 3 },
        y: { min: 0, max: 0.5 }
    },

    inputPropsList: [
        { label: 'μ:平均', name: 'mean', step: 0.1, min: -5, max: 5 },
        { label: 'σ2:分散', name: 'vari', step: 0.1, min: 0.1, max: 20 },
    ],

    calcDist: (x: number, { mean, vari }: NormParamsType) => {
        return Math.exp(- (x - mean) * (x - mean) / (2 * vari)) / Math.sqrt(2 * Math.PI * vari);
    },

    calcStatData({ mean, vari }: { mean: number, vari: number; }): [number, number] {
        return [mean, vari];
    }
};

